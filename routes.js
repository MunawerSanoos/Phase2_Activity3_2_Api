// routes.js
const express = require('express');
const router = express.Router();

router.post('/forgot-password', (req, res) => {
  // Generate a dummy reset link
  const resetLink = 'http://yourwebsite.com/reset-password/token123';

  // Send an email to the user with the reset link
  // Dummy email sending logic

  res.json({ message: 'Reset link sent successfully' });
});

module.exports = router;
