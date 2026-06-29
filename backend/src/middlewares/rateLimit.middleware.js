const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Strict API limit: 50 requests per 15m to prevent abuse
  message: { error: 'API Rate limit exceeded. Please wait a few minutes before simulating more events.' }
});

module.exports = { apiLimiter };
