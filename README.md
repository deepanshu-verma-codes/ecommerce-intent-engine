# Ecommerce Personalization Rules Engine

A full-stack (MERN) application that dynamically evaluates a user's session stream to classify their purchasing intent in real-time.

## Features
- **Real-Time Event Simulator (Vite + React)**: Inject mock events like `view_item` or `add_to_cart`.
- **Dynamic Rules Engine (Node + Express + MongoDB)**: Configurable thresholds that classify users based on behavioral metrics.
- **Unified Configuration**: A single root `.env` controls both frontend and backend environments.

## Setup Instructions

1. **Install Dependencies**
   Run the following from the root directory to install dependencies for both apps:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

2. **Database Setup**
   Ensure MongoDB is running locally on port `27017`.
   Seed the database with default rules:
   ```bash
   cd backend && node src/scripts/seedRules.js
   ```

3. **Run Application**
   Run both frontend and backend concurrently from the root directory:
   ```bash
   npm start
   ```

4. **Access UI**
   Open [http://localhost:5173](http://localhost:5173) in your browser.
