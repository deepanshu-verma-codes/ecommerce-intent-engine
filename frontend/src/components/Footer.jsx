import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--ink)',
      color: 'var(--canvas-soft)',
      padding: 'var(--spacing-3xl) var(--spacing-xl)',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--spacing-xl)' }}>
        <div>
          <div className="display-xs" style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-sm)' }}>Rules Engine</div>
          <p className="body-sm" style={{ maxWidth: '300px', opacity: 0.8 }}>
            Real-time ecommerce personalization based on dynamic event streams and behavioral analytics.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-3xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <span className="body-sm-strong" style={{ color: 'var(--canvas)' }}>Product</span>
            <Link to="/simulator" className="body-sm" style={{ color: 'var(--canvas-soft)', textDecoration: 'none', opacity: 0.8 }}>Simulator</Link>
            <Link to="/api-docs" className="body-sm" style={{ color: 'var(--canvas-soft)', textDecoration: 'none', opacity: 0.8 }}>API Docs</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <span className="body-sm-strong" style={{ color: 'var(--canvas)' }}>Company</span>
            <Link to="/about" className="body-sm" style={{ color: 'var(--canvas-soft)', textDecoration: 'none', opacity: 0.8 }}>About</Link>
            <Link to="/privacy" className="body-sm" style={{ color: 'var(--canvas-soft)', textDecoration: 'none', opacity: 0.8 }}>Privacy</Link>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: 'var(--spacing-3xl) auto 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--spacing-xl)', fontSize: '12px', opacity: 0.6 }}>
        © {new Date().getFullYear()} Rules Engine Inc. Built with React & Express.
      </div>
    </footer>
  );
}
