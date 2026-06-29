const Rule = require('../models/rule.model');

// Helper to evaluate DB conditions against session metrics
const matchesConditions = (metrics, conditions) => {
  if (conditions.min_apply_promo_code > 0 && metrics.counts.apply_promo_code < conditions.min_apply_promo_code) return false;
  if (conditions.min_checkout_started > 0 && metrics.counts.checkout_started < conditions.min_checkout_started) return false;
  if (conditions.max_checkout_started !== 999 && metrics.counts.checkout_started > conditions.max_checkout_started) return false;
  if (conditions.min_view_item > 0 && metrics.counts.view_item < conditions.min_view_item) return false;
  if (conditions.max_view_item !== 999 && metrics.counts.view_item > conditions.max_view_item) return false;
  if (conditions.min_itemsInCart > 0 && metrics.itemsInCart < conditions.min_itemsInCart) return false;
  if (conditions.max_itemsInCart !== 999 && metrics.itemsInCart > conditions.max_itemsInCart) return false;
  if (conditions.exclude_last_event_type && metrics.lastEvent?.type === conditions.exclude_last_event_type) return false;
  if (conditions.require_last_event_type && metrics.lastEvent?.type !== conditions.require_last_event_type) return false;
  
  return true;
};

const evaluateSession = async (events) => {
  if (!events || events.length === 0) {
    return {
      state: "Browser",
      evidence: "No events recorded.",
      confidence: 100,
      nudge: "Show trending products carousel."
    };
  }

  // 1. Calculate Session Metrics
  const counts = {
    view_item: 0,
    add_to_cart: 0,
    remove_item: 0,
    apply_promo_code: 0,
    checkout_started: 0
  };

  events.forEach(e => {
    if (counts[e.type] !== undefined) {
      counts[e.type]++;
    }
  });

  const metrics = {
    counts,
    lastEvent: events[events.length - 1],
    itemsInCart: counts.add_to_cart - counts.remove_item,
    totalEvents: events.length
  };

  // 2. Fetch Rules from MongoDB
  const rulesFromDB = await Rule.find({});

  const triggeredRules = [];

  for (const rule of rulesFromDB) {
    if (matchesConditions(metrics, rule.conditions)) {
      triggeredRules.push({
        state: rule.state,
        evidence: rule.evidenceTemplate,
        confidence: rule.confidence,
        nudge: rule.nudge
      });
    }
  }

  // 3. Apply fallback if nothing triggered
  if (triggeredRules.length === 0) {
    return {
      state: "Browser",
      evidence: "Minimal engagement or casual browsing behavior.",
      confidence: Math.min(80, 60 + (metrics.counts.view_item * 5)),
      nudge: "Show trending products carousel."
    };
  }

  // 4. Conflict Resolution (Highest confidence wins)
  triggeredRules.sort((a, b) => b.confidence - a.confidence);
  
  return triggeredRules[0];
};

module.exports = { evaluateSession };
