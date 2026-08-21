import { Phone, AlertCircle } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

export default function EmergencyBanner() {
  return (
    <section style={{ background: '#1E2D45', padding: '0' }} aria-label="24/7 Emergency Plumbing">
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '20px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 20, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 8, flexShrink: 0,
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <AlertCircle size={19} color="#93B4D8" />
          </div>
          <div>
            <p style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 2 }}>
              24/7 Emergency
            </p>
            <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
              Plumbing problems don't wait.{' '}
              <span style={{ color: '#93B4D8', fontWeight: 400 }}>Neither do we.</span>
            </p>
          </div>
        </div>

        <a
          href={PHONE_HREF}
          className="btn btn-ghost"
          style={{ padding: '11px 24px', fontSize: 14, textDecoration: 'none', borderRadius: 6 }}
          aria-label={`Call emergency line: ${PHONE}`}
        >
          <Phone size={15} />
          {PHONE}
        </a>
      </div>
    </section>
  );
}
