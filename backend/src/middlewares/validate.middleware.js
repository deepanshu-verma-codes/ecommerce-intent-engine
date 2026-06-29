const { z } = require('zod');

const validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Invalid input parameters',
          details: error.errors
        });
      }
      next(error);
    }
  };
};

module.exports = validateRequest;
