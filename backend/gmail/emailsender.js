import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
<<<<<<< HEAD
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD
=======
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
>>>>>>> 938d8ba (update)
    },
    tls: {
        rejectUnauthorized: false, 
    },
});
