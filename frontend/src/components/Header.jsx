import { Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isSimulator = location.pathname === '/simulator';

  return (
    <header className="nav-bar" style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: 'var(--spacing-md) var(--spacing-xl)', 
      backgroundColor: 'var(--canvas)',
      borderBottom: '1px solid var(--canvas-soft)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'var(--ink)' }}>
        <div style={{ backgroundColor: 'var(--primary)', padding: '6px', borderRadius: '50%', color: 'var(--ink)' }}>
          <Activity size={20} />
        </div>
        <span className="body-md-strong" style={{ letterSpacing: '-0.5px', fontSize: '18px' }}>Rules Engine</span>
      </Link>
      
      <nav style={{ display: 'flex', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
        {!isSimulator && (
          <Link to="/simulator" className="btn-primary" style={{ textDecoration: 'none', padding: '8px 16px' }}>Try Simulator</Link>
        )}
      </nav>
    </header>
  );
}
