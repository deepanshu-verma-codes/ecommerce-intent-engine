const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { apiLimiter } = require('./middlewares/rateLimit.middleware');
const engineRoutes = require('./routes/engine.routes');

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:5173', 'https://ecommerce-intent-engine-1uj9szyhw.vercel.app', process.env.FRONTEND_URL],
  methods: ['POST', 'OPTIONS', 'GET'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json({ limit: '10kb' }));

// Apply rate limiting to all /api routes
app.use('/api', apiLimiter);

// API Routes
app.use('/api', engineRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
