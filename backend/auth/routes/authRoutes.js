import express from "express";
import { deleteAllUser, deleteUser, emailVerification, forgotPassword, getUser, login, protect, register, resendOtp, resetPassword } from "../controller/authController.js";
import verifyToken from "../helper/verifyToken.js";



export const authRoutes = express.Router()


// Implement authentication routes here
authRoutes.get('/',getUser)
authRoutes.post('/register',register)
authRoutes.post('/resend-otp',resendOtp)
authRoutes.post('/login',login)
authRoutes.post('/email-verification/:token',emailVerification)
authRoutes.post('/forgot-password',forgotPassword)
authRoutes.post('/reset-password/:token',resetPassword)
authRoutes.get('/protected-route',verifyToken , protect)
authRoutes.delete('/delete/:id',deleteUser)
authRoutes.delete('/delete-all',deleteAllUser)

