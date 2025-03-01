import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: {
        rejectUnauthorized: false, 
    },
});
