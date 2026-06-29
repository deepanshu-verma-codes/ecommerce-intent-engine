import { Clock } from 'lucide-react';

export default function LiveSessionFeed({ events }) {
  return (
    <div className="card-content">
      <div className="display-xs">Live Session</div>
      
      {events.length === 0 ? (
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 'var(--spacing-md)'}}>
          <Clock size={32} color="var(--mute)" />
          <p className="body-md">Awaiting event stream...</p>
        </div>
      ) : (
        <div className="feed-list">
          {events.map((evt, idx) => {
            return (
              <div key={idx} className="feed-item">
                <div>
                  <div className="body-md-strong">
                    {evt.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                  <div className="caption">Event #{idx + 1}</div>
                </div>
                <div className="body-sm" style={{color: 'var(--mute)'}}>
                  {new Date(evt.timestamp).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
}
