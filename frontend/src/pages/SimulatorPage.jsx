import { useState, useEffect } from 'react';
import EventController from '../components/EventController';
import LiveSessionFeed from '../components/LiveSessionFeed';
import EngineStateDashboard from '../components/EngineStateDashboard';

export default function SimulatorPage() {
  const [events, setEvents] = useState([]);
  const [engineState, setEngineState] = useState(null);

  useEffect(() => {
    const evaluate = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
        const response = await fetch(`${apiUrl}/evaluate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ events })
        });
        if (response.ok) {
          const data = await response.json();
          setEngineState(data);
        } else if (response.status === 429) {
          console.error("Rate limit exceeded!");
        }
      } catch (error) {
        console.error("Failed to evaluate session:", error);
      }
    };
    
    evaluate();
  }, [events]);

  const handleInjectEvent = (type) => {
    const newEvent = {
      type,
      timestamp: Date.now(),
      payload: { source: 'simulator' }
    };
    setEvents(prev => [...prev, newEvent]);
  };

  const handleResetSession = () => {
    setEvents([]);
  };

  return (
    <div className="simulator-container">
      <EventController onInject={handleInjectEvent} onReset={handleResetSession} />
      <LiveSessionFeed events={events} />
      <EngineStateDashboard engineState={engineState} />
    </div>
  );
}
