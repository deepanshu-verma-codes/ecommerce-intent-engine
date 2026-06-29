const engineService = require('../services/engine.service');

const evaluate = async (req, res, next) => {
  try {
    const { events } = req.body;
    const result = await engineService.evaluateSession(events);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  evaluate
};
