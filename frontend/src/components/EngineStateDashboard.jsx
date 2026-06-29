export default function EngineStateDashboard({ engineState }) {
  if (!engineState) {
    return (
      <div className="card-feature-dark">
        <div className="display-xs" style={{color: 'var(--canvas)'}}>Engine State</div>
        <div className="body-md" style={{flex: 1, display: 'flex', alignItems: 'center', color: 'var(--canvas-soft)'}}>
          Connecting to Rules Engine...
        </div>
      </div>
    );
  }

  const { state, evidence, confidence, nudge } = engineState;

  return (
    <div className="card-feature-dark">
      <div className="display-xs" style={{color: 'var(--canvas)', paddingBottom: 'var(--spacing-md)', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
        Engine Classification
      </div>

      <div style={{marginBottom: 'var(--spacing-sm)'}}>
        <div className="body-sm-strong" style={{color: 'var(--canvas-soft)', marginBottom: 'var(--spacing-xs)', textTransform: 'uppercase', letterSpacing: '1px'}}>State</div>
        <div className="display-md" style={{color: 'var(--primary)'}}>{state}</div>
      </div>

      <div style={{marginBottom: 'var(--spacing-md)'}}>
        <div className="body-sm-strong" style={{color: 'var(--canvas-soft)', marginBottom: 'var(--spacing-xs)', textTransform: 'uppercase', letterSpacing: '1px'}}>Confidence</div>
        <div className="display-sm" style={{color: 'var(--canvas)'}}>{confidence}%</div>
      </div>

      <div style={{marginBottom: 'var(--spacing-lg)'}}>
        <div className="body-sm-strong" style={{color: 'var(--canvas-soft)', marginBottom: 'var(--spacing-xs)', textTransform: 'uppercase', letterSpacing: '1px'}}>Evidence</div>
        <div className="body-lg" style={{color: 'var(--canvas)'}}>{evidence}</div>
      </div>

      <div style={{marginTop: 'auto'}}>
        <div className="body-sm-strong" style={{color: 'var(--canvas-soft)', marginBottom: 'var(--spacing-sm)', textTransform: 'uppercase', letterSpacing: '1px'}}>Action Nudge</div>
        <div className="badge-positive" style={{display: 'inline-flex', padding: 'var(--spacing-sm) var(--spacing-lg)', fontSize: '16px'}}>
          {nudge}
        </div>
      </div>
    </div>
  );
}
