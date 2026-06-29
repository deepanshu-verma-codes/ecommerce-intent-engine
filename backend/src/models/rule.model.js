const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
  state: { type: String, required: true },
  confidence: { type: Number, required: true },
  evidenceTemplate: { type: String, required: true },
  nudge: { type: String, required: true },
  conditions: {
    min_apply_promo_code: { type: Number, default: 0 },
    min_checkout_started: { type: Number, default: 0 },
    max_checkout_started: { type: Number, default: 999 },
    min_view_item: { type: Number, default: 0 },
    max_view_item: { type: Number, default: 999 },
    min_itemsInCart: { type: Number, default: 0 },
    max_itemsInCart: { type: Number, default: 999 },
    exclude_last_event_type: { type: String, default: null },
    require_last_event_type: { type: String, default: null }
  }
}, { timestamps: true });

module.exports = mongoose.model('Rule', ruleSchema);
