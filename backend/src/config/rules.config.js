/**
 * This configuration acts as our "Database" of rules.
 * In a production environment, this would typically live in a database (like MongoDB/PostgreSQL) 
 * or a configuration management system (like LaunchDarkly or AWS AppConfig)
 * so non-technical users (PMs, Marketers) can adjust thresholds and nudges without deploying new code.
 */

const rulesConfig = [
  {
    id: "rule_discount_seeker",
    state: "Discount Seeker",
    // Condition evaluated against the current session metrics
    condition: (metrics) => metrics.counts.apply_promo_code > 0,
    confidence: 95,
    evidence: (metrics) => "User actively applied a promo code.",
    nudge: "Show limited-time upsell with a bundled discount."
  },
  {
    id: "rule_loyal_customer",
    state: "Loyal Customer",
    condition: (metrics) => metrics.counts.checkout_started > 0 && metrics.counts.view_item <= 2 && metrics.itemsInCart > 0,
    confidence: 90,
    evidence: (metrics) => "Direct path to checkout indicating high purchase intent and familiarity.",
    nudge: "Offer loyalty point multiplier for this purchase."
  },
  {
    id: "rule_cart_abandoner",
    state: "Cart Abandoner",
    condition: (metrics) => metrics.itemsInCart > 0 && metrics.lastEvent.type !== 'checkout_started' && metrics.counts.checkout_started === 0,
    confidence: 85, // Adjusting back to 85 for realism, though dynamic calculation could be used
    evidence: (metrics) => `User has ${metrics.itemsInCart} item(s) in cart but hasn't proceeded to checkout.`,
    nudge: "Trigger exit-intent 10% coupon."
  },
  {
    id: "rule_comparer",
    state: "Comparer",
    condition: (metrics) => metrics.counts.view_item >= 3 && metrics.itemsInCart === 0,
    confidence: 80,
    evidence: (metrics) => `Viewed ${metrics.counts.view_item} products without adding any to the cart.`,
    nudge: "Show product comparison modal."
  }
];

// Fallback state if no rules match
const defaultState = {
  state: "Browser",
  confidence: (metrics) => Math.min(80, 60 + (metrics.counts.view_item * 5)), // Dynamic confidence based on engagement
  evidence: (metrics) => "Minimal engagement or casual browsing behavior.",
  nudge: "Show trending products carousel."
};

module.exports = {
  rulesConfig,
  defaultState
};
