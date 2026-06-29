import { Link } from 'react-router-dom';
import { Zap, BrainCircuit, Target, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: 'var(--canvas-soft)' }}>
      {/* 1. Hero Section */}
      <section style={{ padding: '80px var(--spacing-xl)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <h1 className="display-xl" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Make every session <br/> <span style={{ color: 'var(--positive-deep)' }}>hyper-personalized.</span>
          </h1>
          <p className="body-lg" style={{ marginBottom: 'var(--spacing-2xl)', maxWidth: '600px', margin: '0 auto var(--spacing-2xl)' }}>
            Our Rules Engine evaluates live event streams to classify shoppers instantly. Trigger the right nudge, at the exact right moment.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
            <Link to="/simulator" className="btn-primary" style={{ textDecoration: 'none', padding: '16px 32px', fontSize: '18px' }}>
              Launch Simulator
            </Link>
            <a href="#how-it-works" className="btn-secondary" style={{ textDecoration: 'none', padding: '16px 32px', fontSize: '18px' }}>
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section style={{ backgroundColor: 'var(--canvas)', padding: '80px var(--spacing-xl)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="display-md" style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>Built for modern commerce</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
            <div className="card-feature-sage">
              <Zap size={32} color="var(--positive-deep)" style={{ marginBottom: 'var(--spacing-md)' }} />
              <h3 className="body-md-strong" style={{ marginBottom: 'var(--spacing-sm)' }}>Sub-millisecond Decisions</h3>
              <p className="body-sm" style={{ color: 'var(--body)' }}>Evaluate complex behavioral sequences without slowing down your frontend. Built on Express and MongoDB.</p>
            </div>
            
            <div className="card-feature-green">
              <BrainCircuit size={32} color="var(--positive-deep)" style={{ marginBottom: 'var(--spacing-md)' }} />
              <h3 className="body-md-strong" style={{ marginBottom: 'var(--spacing-sm)' }}>Context-Aware Intelligence</h3>
              <p className="body-sm" style={{ color: 'var(--ink)' }}>We don't just count clicks. We analyze sequential behavior like checkout abandonment and intent shifts.</p>
            </div>
            
            <div className="card-feature-sage">
              <Target size={32} color="var(--positive-deep)" style={{ marginBottom: 'var(--spacing-md)' }} />
              <h3 className="body-md-strong" style={{ marginBottom: 'var(--spacing-sm)' }}>Dynamic Nudging</h3>
              <p className="body-sm" style={{ color: 'var(--body)' }}>Automatically recommend the best UX interventions—from exit-intent modals to loyalty multipliers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section id="how-it-works" style={{ backgroundColor: 'var(--ink)', padding: '80px var(--spacing-xl)', color: 'var(--primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 className="display-md" style={{ marginBottom: 'var(--spacing-lg)' }}>How the Engine thinks</h2>
            <p className="body-lg" style={{ color: 'var(--canvas-soft)', marginBottom: 'var(--spacing-xl)' }}>
              Events are ingested via a secure REST API. The engine aggregates the session facts and matches them against MongoDB threshold configurations.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--canvas)' }}><ShieldCheck color="var(--primary)"/> Strict Zod Payload Validation</li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--canvas)' }}><ShieldCheck color="var(--primary)"/> MongoDB Rules Configurations</li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--canvas)' }}><ShieldCheck color="var(--primary)"/> Conflict Resolution via Confidence Scoring</li>
            </ul>
          </div>
          <div style={{ flex: '1 1 400px', backgroundColor: 'rgba(255,255,255,0.05)', padding: 'var(--spacing-2xl)', borderRadius: 'var(--rounded-xl)' }}>
            <pre style={{ color: 'var(--primary-pale)', fontSize: '14px', overflowX: 'auto' }}>
{`{
  "state": "Active Checkout",
  "confidence": 95,
  "evidence": "User is actively engaged in the checkout flow.",
  "nudge": "Disable exit intent popups."
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section style={{ padding: '100px var(--spacing-xl)', textAlign: 'center', backgroundColor: 'var(--canvas-soft)' }}>
        <h2 className="display-md" style={{ marginBottom: 'var(--spacing-md)' }}>Ready to test the logic?</h2>
        <p className="body-lg" style={{ marginBottom: 'var(--spacing-2xl)', color: 'var(--body)' }}>
          Jump into our interactive simulator to inject mock events and watch the engine react.
        </p>
        <Link to="/simulator" className="btn-primary" style={{ textDecoration: 'none', padding: '16px 48px', fontSize: '18px' }}>
          Open Simulator
        </Link>
      </section>
    </div>
  );
}
