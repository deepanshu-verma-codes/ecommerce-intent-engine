export default function AboutPage() {
  return (
    <div style={{ padding: '80px var(--spacing-xl)', maxWidth: '900px', margin: '0 auto' }}>
      <h1 className="display-xl" style={{ marginBottom: 'var(--spacing-lg)', letterSpacing: '-1px' }}>About Us</h1>
      <p className="body-lg" style={{ marginBottom: 'var(--spacing-3xl)', color: 'var(--body)' }}>
        Rules Engine Inc. was founded to solve the complexity of real-time behavioral personalization. We build tools that help brands understand intent exactly when it happens.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
        <div className="card-content">
          <h2 className="display-sm" style={{ marginBottom: 'var(--spacing-md)' }}>Our Mission</h2>
          <p className="body-md" style={{ marginBottom: 'var(--spacing-md)', lineHeight: 1.6 }}>
            We believe that every user session is entirely unique. In modern e-commerce, statically classifying a user based on their historical lifetime value is no longer enough. Shoppers change their minds, hunt for discounts, and abandon carts in a matter of seconds.
          </p>
          <p className="body-md" style={{ lineHeight: 1.6 }}>
            Our mission is to empower developers with an engine that calculates session intent <strong>in real-time</strong>. By leveraging high-speed rule evaluation, we enable frontends to trigger the exact right nudge—whether it's an exit-intent coupon or a distraction-free checkout flow—at the precise moment it matters most.
          </p>
        </div>

        <div className="card-feature-dark">
          <h2 className="display-sm" style={{ marginBottom: 'var(--spacing-md)', color: 'var(--canvas)' }}>Our Architecture</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-lg)' }}>
            <div>
              <h3 className="body-md-strong" style={{ color: 'var(--primary)', marginBottom: '4px' }}>The Rules Engine</h3>
              <p className="body-sm" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                Built on a highly optimized Node.js + Express backend, capable of processing massive event arrays instantaneously.
              </p>
            </div>
            <div>
              <h3 className="body-md-strong" style={{ color: 'var(--primary)', marginBottom: '4px' }}>Dynamic Storage</h3>
              <p className="body-sm" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                Backed by MongoDB and Mongoose, allowing product managers to update classification thresholds without deploying code.
              </p>
            </div>
            <div>
              <h3 className="body-md-strong" style={{ color: 'var(--primary)', marginBottom: '4px' }}>Modern Interfaces</h3>
              <p className="body-sm" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                Designed with a strict, premium UX language featuring glassmorphism, responsive feeds, and lightning-fast Vite + React interactions.
              </p>
            </div>
          </div>
        </div>

        <div className="card-content">
          <h2 className="display-sm" style={{ marginBottom: 'var(--spacing-md)' }}>Open Source Philosophy</h2>
          <p className="body-md" style={{ lineHeight: 1.6 }}>
            We build in the open. Our core engine logic, including the temporal condition checking (e.g., <code>exclude_last_event_type</code>), is designed to be transparent, extensible, and developer-friendly. We focus on clean MVC architecture so you can scale your custom rules indefinitely.
          </p>
        </div>
      </div>
    </div>
  );
}
