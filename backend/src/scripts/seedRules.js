require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Rule = require('../models/rule.model');
const connectDB = require('../config/db');

const rulesToSeed = [
  {
    state: "Active Checkout",
    confidence: 95,
    evidenceTemplate: "User is actively engaged in the checkout flow.",
    nudge: "Disable exit intent popups to ensure a distraction-free checkout.",
    conditions: {
      min_checkout_started: 1,
      require_last_event_type: 'checkout_started'
    }
  },
  {
    state: "Checkout Abandoner",
    confidence: 92,
    evidenceTemplate: "User started checkout but navigated away before completing.",
    nudge: "Queue a 'Complete your purchase' email for 15 minutes from now.",
    conditions: {
      min_checkout_started: 1,
      min_itemsInCart: 1,
      exclude_last_event_type: 'checkout_started'
    }
  },
  {
    state: "Discount Seeker",
    confidence: 90,
    evidenceTemplate: "User actively applied a promo code.",
    nudge: "Show limited-time upsell with a bundled discount.",
    conditions: {
      min_apply_promo_code: 1,
      max_checkout_started: 0 // Only applies BEFORE they hit checkout
    }
  },
  {
    state: "Cart Abandoner",
    confidence: 85,
    evidenceTemplate: "User has items in cart but hasn't proceeded to checkout.",
    nudge: "Trigger exit-intent 10% coupon.",
    conditions: {
      min_itemsInCart: 1,
      max_checkout_started: 0,
      exclude_last_event_type: 'checkout_started'
    }
  },
  {
    state: "Comparer",
    confidence: 80,
    evidenceTemplate: "Viewed multiple products without adding any to the cart.",
    nudge: "Show product comparison modal.",
    conditions: {
      min_view_item: 3,
      max_itemsInCart: 0
    }
  }
];

const seedDB = async () => {
  await connectDB();
  try {
    await Rule.deleteMany({});
    console.log('Cleared existing rules.');
    
    await Rule.insertMany(rulesToSeed);
    console.log('Successfully seeded sophisticated rules to database!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
