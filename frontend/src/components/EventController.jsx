import { Eye, ShoppingCart, Trash2, Tag, CreditCard, RotateCcw } from 'lucide-react';

export default function EventController({ onInject, onReset }) {
  return (
    <div className="card-content">
      <div className="display-xs">Event Simulator</div>
      <p className="body-sm">
        Simulate user behavior by injecting real-time events into the session stream.
      </p>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', flex: 1, marginTop: 'var(--spacing-md)'}}>
        <button className="btn-tertiary" onClick={() => onInject('view_item')}>
          <Eye size={20} /> View Product
        </button>
        <button className="btn-tertiary" onClick={() => onInject('add_to_cart')}>
          <ShoppingCart size={20} /> Add to Cart
        </button>
        <button className="btn-tertiary" onClick={() => onInject('remove_item')}>
          <Trash2 size={20} /> Remove Item
        </button>
        <button className="btn-tertiary" onClick={() => onInject('apply_promo_code')}>
          <Tag size={20} /> Apply Promo
        </button>
        <button className="btn-tertiary" onClick={() => onInject('checkout_started')}>
          <CreditCard size={20} /> Start Checkout
        </button>
      </div>

      <button className="btn-primary" onClick={onReset} style={{marginTop: 'var(--spacing-xl)', width: '100%'}}>
        Reset Session <RotateCcw size={18} style={{marginLeft: '4px'}} />
      </button>
    </div>
  );
}
