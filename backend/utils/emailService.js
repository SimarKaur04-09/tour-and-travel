import nodemailer from 'nodemailer';

// Configure the email transporter using your Gmail account and app-specific password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-specific-password', // Use the app-specific password generated from Google
  },
});

// Function to send an email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: to,
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
    console.error('Detailed error: ', error.response);
  }
};

export default sendEmail;
