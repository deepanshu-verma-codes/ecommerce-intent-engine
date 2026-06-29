const express = require('express');
const router = express.Router();
const engineController = require('../controllers/engine.controller');
const validateRequest = require('../middlewares/validate.middleware');
const { evaluateRequestSchema } = require('../models/event.schema');

router.post('/evaluate', validateRequest(evaluateRequestSchema), engineController.evaluate);

module.exports = router;
