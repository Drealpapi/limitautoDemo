import { Phone, Zap } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

export default function EmergencyBanner() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0D1F3C 0%, #1A3260 100%)',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="24/7 Emergency Plumbing"
    >
      {/* Subtle texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(27,111,219,0.15) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} aria-hidden="true" />

      <div style={{
        maxWidth: 1160, margin: '0 auto', padding: '22px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 20, flexWrap: 'wrap', position: 'relative',
      }}>
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, flexShrink: 0,
            background: 'rgba(245,124,43,0.18)',
            border: '1px solid rgba(245,124,43,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Zap size={20} color="#F57C2B" />
          </div>
          <div>
            <p style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 3 }}>
              Emergency Plumbing
            </p>
            <p style={{ fontSize: 15.5, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
              Plumbing problems don't wait.{' '}
              <span style={{ color: '#93C5FD', fontWeight: 400 }}>Neither do we.</span>
            </p>
          </div>
        </div>

        {/* Right */}
        <a
          href={PHONE_HREF}
          className="btn-glass btn-orange"
          style={{ padding: '13px 28px', fontSize: 14, borderRadius: 10, textDecoration: 'none' }}
          aria-label={`Emergency line: ${PHONE}`}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <span style={{
              position: 'absolute', inset: -4, borderRadius: '50%',
              background: 'rgba(255,255,255,0.3)',
              animation: 'pulse-dot 1.6s ease-in-out infinite',
            }} />
            <Phone size={15} style={{ position: 'relative' }} />
          </div>
          {PHONE}
        </a>
      </div>
    </section>
  );
}
