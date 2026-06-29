import { ShieldCheck, Activity, BrainCircuit } from 'lucide-react';

export default function ApiDocsPage() {
  return (
    <div style={{ padding: '80px var(--spacing-xl)', maxWidth: '900px', margin: '0 auto' }}>
      <h1 className="display-xl" style={{ marginBottom: 'var(--spacing-lg)', letterSpacing: '-1px' }}>API Reference</h1>
      <p className="body-lg" style={{ marginBottom: 'var(--spacing-2xl)', color: 'var(--body)' }}>
        Integrate our real-time Rules Engine directly into your application. Our REST API is designed to be highly performant, processing complex session arrays in sub-milliseconds.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
        {/* Endpoint 1 */}
        <div className="card-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
            <span className="badge-positive" style={{ padding: '4px 12px', fontSize: '12px', borderRadius: '4px' }}>POST</span>
            <h2 className="body-lg" style={{ color: 'var(--ink)', fontWeight: 900, margin: 0 }}>/api/evaluate</h2>
          </div>
          
          <p className="body-md" style={{ marginBottom: 'var(--spacing-lg)' }}>
            Evaluates an array of session events and returns the current user classification state. The engine sequentially calculates aggregates (views, adds, removes) and matches them against MongoDB threshold configurations.
          </p>

          <h3 className="body-sm-strong" style={{ color: 'var(--mute)', textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)' }}>Request Payload (JSON)</h3>
          <pre style={{ backgroundColor: 'var(--canvas-soft)', padding: 'var(--spacing-lg)', borderRadius: 'var(--rounded-md)', marginBottom: 'var(--spacing-lg)', overflowX: 'auto', fontSize: '14px', border: '1px solid rgba(0,0,0,0.05)' }}>
{`{
  "events": [
    { 
      "type": "view_item", 
      "timestamp": 1718302000, 
      "payload": { "source": "simulator" } 
    },
    { 
      "type": "add_to_cart", 
      "timestamp": 1718302045, 
      "payload": {} 
    }
  ]
}`}
          </pre>

          <h3 className="body-sm-strong" style={{ color: 'var(--mute)', textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)' }}>Response (200 OK)</h3>
          <pre style={{ backgroundColor: 'var(--ink)', color: 'var(--primary)', padding: 'var(--spacing-lg)', borderRadius: 'var(--rounded-md)', overflowX: 'auto', fontSize: '14px' }}>
{`{
  "state": "Cart Abandoner",
  "confidence": 85,
  "evidence": "User has items in cart but hasn't proceeded to checkout.",
  "nudge": "Trigger exit-intent 10% coupon."
}`}
          </pre>
        </div>

        {/* Info Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
          <div className="card-feature-sage" style={{ padding: 'var(--spacing-lg)' }}>
            <ShieldCheck size={24} color="var(--positive-deep)" style={{ marginBottom: 'var(--spacing-sm)' }} />
            <h3 className="body-md-strong">Rate Limiting</h3>
            <p className="body-sm" style={{ color: 'var(--body)', marginTop: '8px' }}>
              The API is strictly limited to <strong>50 requests per 15 minutes</strong> per IP address. Exceeding this limit will return a <code>429 Too Many Requests</code> status code.
            </p>
          </div>
          <div className="card-feature-sage" style={{ padding: 'var(--spacing-lg)' }}>
            <BrainCircuit size={24} color="var(--positive-deep)" style={{ marginBottom: 'var(--spacing-sm)' }} />
            <h3 className="body-md-strong">Dynamic Conditions</h3>
            <p className="body-sm" style={{ color: 'var(--body)', marginTop: '8px' }}>
              Rule thresholds (e.g., <code>min_checkout_started</code>, <code>exclude_last_event_type</code>) are managed dynamically in MongoDB and applied instantly without downtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
