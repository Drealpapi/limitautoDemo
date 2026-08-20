import { Phone } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

export default function EmergencyBanner() {
  return (
    <section
      style={{
        background: '#1B6FDB',
        padding: '20px 0',
      }}
      aria-label="24/7 Emergency Plumbing"
    >
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Phone size={16} color="#fff" />
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 2 }}>
              24/7 Emergency Plumbing
            </p>
            <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1 }}>
              Plumbing problems don't wait. <span style={{ fontWeight: 400, opacity: 0.85 }}>Neither do we.</span>
            </p>
          </div>
        </div>

        <a
          href={PHONE_HREF}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: '#fff', color: '#111',
            fontSize: 15, fontWeight: 700,
            padding: '12px 28px',
            borderRadius: 0, textDecoration: 'none',
            letterSpacing: '-0.2px',
            transition: 'background 0.15s',
            flexShrink: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#f0f0f0')}
          onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
        >
          <Phone size={15} />
          {PHONE}
        </a>
      </div>
    </section>
  );
}
