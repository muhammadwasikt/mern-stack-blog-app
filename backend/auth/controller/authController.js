import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"
import { sendEmailVerification, sendResetEmail } from "../../gmail/email.js"




const secret = process.env.JWT_SECRET_KEY

const getUser = async (req, res) => {
    try {
        const data = await User.find()
        return res.status(200).send({ status: 200, message: "Users fetched successfully", data: data })
    } catch (error) {

    }
}

const register = async (req, res) => {
    try {
        const data = req.body;
        const { name, email, password } = data

        // check unique user name
        const existingUser = await User.findOne({ name });

        if (existingUser) {
            return res.status(404).send({ status: 404, message: "User name already exists" });
        }

        // check unique email
        const existingUserEmail = await User.findOne({ email });

        if (existingUserEmail) {
            return res.status(404).send({ status: 404, message: "Email already exists" });
        }

        if (password.length < 8) {
            return res.status(400).send({ status: 400, message: "Password must be at least 8 characters long" });
        }

        // generate OTP
        const otpId = Date.now().toString();
        const otp = otpId.slice(3, 9)
        const otpExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

        if (otp < 6) {
            return otp + 1
        }
        data.emailOtp = otp
        data.emailOtpExpiresAt = otpExpiresAt;


        // hash password
        const encryptPSW = await bcrypt.hash(password, 10);
        data.password = encryptPSW;


        const token = crypto.randomBytes(20).toString("hex");


        data.verificationToken = token

        sendEmailVerification(email, otp, token)

        // create new user
        const response = await User.create(data)
        res.status(201).send({ status: 201, message: "User registered successfully", data: response })
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message })
    }
}

const resendOtp = async (req, res) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ status: 404, message: "User not found" });
        }
        if (user.emailVerified) {
            return res.status(404).send({ status: 404, message: "Email is already verified" });
        }

        // generate OTP
        const otpId = Date.now().toString();
        const otp = otpId.slice(3, 9)
        const otpExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

        if (otp < 6) {
            return otp + 1
        }
        user.emailOtp = otp
        user.emailOtpExpiresAt = otpExpiresAt;
        await user.save()

        sendEmailVerification(email, otp, user.verificationToken)

        res.status(201).send({ status: 201, message: "Email verified successfully", data: user })
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });


        if (!existingUser) {
            return res.status(404).send({ status: 404, message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);

        if (!isMatch) {
            return res.status(401).send({ status: 401, message: "Invalid credentials" })
        };

        if (existingUser.emailVerified === false) {
            return res.status(404).send({ status: 404, message: "Email not verified" });
        }
        const token = jwt.sign({ id: existingUser._id , name: existingUser.name , role: existingUser.role}, secret);

        res.status(200).send({ status: 200, message: "Login Successfully", data: token });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}

const emailVerification = async (req, res) => {

    const data = req.body;
    const { token } = req.params;
    try {
        const user = await User.findOne({ verificationToken: token })

        if (!user) {
            return res.status(404).send({ status: 404, message: "Invalid token or expired" })
        }

        if (!user.emailOtp === data) {
            return res.status(404).send({ status: 404, message: "Invalid otp or expired" })
        }
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        user.emailVerified = true;
        user.emailOtp = undefined;
        user.emailOtpExpiresAt = undefined;
        await user.save();
        res.status(200).send({ status: 200, message: "Email verified successfully", data: user.emailVerified })
    }
    catch (error) {
        res.status(400).send({ message: error })
    }

}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).send({ status: 404, message: "User not found" })
        }

        const token = crypto.randomBytes(20).toString("hex");
        const tokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

        existingUser.resetPasswordToken = token
        existingUser.resetPasswordTokenExpiresAt = tokenExpiresAt;

        await existingUser.save();

        sendResetEmail(email, `http://localhost:5173/reset-password/${token}`)

        res.status(200).send({ status: 200, message: "Email sent successfully", data: existingUser })

    }
    catch (error) {
        res.status(500).send({ status: 500, message: error });
    }
}

const resetPassword = async (req, res) => {

    const { password } = req.body;
    const { token } = req.params;
    try {
        const user = await User.findOne({ resetPasswordToken: token })

        if (!user) {
            return res.status(404).send({ status: 404, message: "Invalid token or expired" })
        }

        const hasPassword = await bcrypt.hash(password, 10);
        user.password = hasPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpiresAt = undefined;
        await user.save();
        res.status(200).send({ message: "Password updated successfully" })
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }

}


const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({ status: 404, message: "User not found" })
        };
        res.status(200).send({ status: 200, message: "User deleted successfully", data: user })
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message })
    }
}

const deleteAllUser = async (req, res) => {
    try {
        await User.deleteMany({});
        res.status(200).send({ status: 200, message: "All users deleted successfully" })
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message })
    }
}
const protect = (req, res) => {
    try {
        res.status(200).send({ message: 'Access granted', data: req.user });
    } catch (error) {
        res.status(400).send();
    }
}



















export { getUser,resendOtp , deleteAllUser, register, login, forgotPassword, deleteUser, resetPassword, protect, emailVerification }