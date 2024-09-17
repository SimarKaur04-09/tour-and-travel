// testEmail.js

import sendEmail from './utils/emailService.js'; // Adjust the path as necessary

sendEmail('recipient-email@example.com', 'Test Subject', 'Test Email Body')
  .then(() => console.log('Email sent successfully'))
  .catch((error) => console.error('Error sending email:', error));
