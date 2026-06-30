# Ecommerce Personalization Rules Engine

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

## Description
The Ecommerce Personalization Rules Engine is a full-stack (MERN) application that dynamically evaluates a user's session stream to classify their purchasing intent in real-time. By ingesting mock user event streams (e.g., viewing items, adding to cart), the engine can accurately categorize shoppers into states such as Browser, Comparer, Discount Seeker, Cart Abandoner, or Loyal Customer. It explains the classification evidence, confidence score, and provides a recommended site action or nudge for each session.

### Key Features
- **Real-Time Event Simulator**: A responsive React (Vite) interface to inject and simulate mock events (`view_item`, `add_to_cart`, etc.).
- **Dynamic Rules Engine**: A robust Node.js/Express backend that applies configurable thresholds to classify users based on behavioral metrics.
- **Real-time Feedback**: Get instant evidence, confidence percentages, and actionable nudges as the session evolves.

## Visuals
*(Add a screenshot or GIF of the simulator dashboard here to show the project in action)*

## Installation

Follow these steps to set up the project locally on your machine.

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repository-url>
   cd ecommerce-intent-engine
   ```

2. **Install Dependencies**
   Install the node modules for both the frontend and backend:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   cd ..
   ```

3. **Database Setup**
   Ensure MongoDB is running locally on your default port `27017`.
   Seed the database with the initial set of classification rules:
   ```bash
   cd backend && node src/scripts/seedRules.js
   cd ..
   ```

## Usage

1. **Run the Application**
   From the root directory, start both the frontend and backend servers concurrently:
   ```bash
   npm start
   ```

2. **Access the Simulator UI**
   Open your browser and navigate to: [http://localhost:5173](http://localhost:5173).

3. **Simulating Events**
   - Use the **Simulator Page** to inject mock user events into the stream.
   - Watch the **Live Session Feed** to track the event timeline.
   - Observe the **Engine State Dashboard** update the user's intent classification, confidence score, and recommended nudge in real-time.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Maintainer: Deepanshu Verma
Project Link: [https://github.com/deepanshu-verma-codes/ecommerce-intent-engine](https://github.com/deepanshu-verma-codes/ecommerce-intent-engine)
