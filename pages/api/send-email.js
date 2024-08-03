// pages/api/send-unique-email.js

import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    // Generate a unique identifier for the email
    const uniqueId = uuidv4();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject: `${subject} - ${uniqueId}`, // Append the unique ID to the subject
      text: `${text}\n\nUnique ID: ${uniqueId}`, // Append the unique ID to the body
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully', uniqueId });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
