const { z } = require('zod');

const eventSchema = z.object({
  type: z.enum(['view_item', 'add_to_cart', 'remove_item', 'apply_promo_code', 'checkout_started']),
  timestamp: z.number().int().positive(),
  payload: z.record(z.any()).optional()
});

const evaluateRequestSchema = z.object({
  events: z.array(eventSchema)
});

module.exports = {
  evaluateRequestSchema,
  eventSchema
};
