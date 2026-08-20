import { CheckCircle, Phone } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const COMMITMENTS = [
  'Show up on time, every time',
  'Explain the problem clearly before starting',
  'Upfront pricing — no surprises ever',
  'Clean up completely after every job',
  'Stand behind every repair we do',
  'Treat your home with total respect',
];

function goTo(anchor: string) {
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
}

export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#F4F7FB', padding: '96px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="about-grid">

          {/* ── Image side ── */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.14)' }}>
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop"
                alt="FlowRight plumber at work"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>

            {/* Glass stat badge */}
            <div style={{
              position: 'absolute', top: 20, right: 20,
              background: 'linear-gradient(135deg,#1B6FDB,#2480F0)',
              borderRadius: 14, padding: '18px 22px',
              boxShadow: '0 8px 28px rgba(27,111,219,0.45), inset 0 1px 0 rgba(255,255,255,0.2)',
              textAlign: 'center', minWidth: 110,
            }}>
              <p style={{ fontSize: 30, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 5 }}>500+</p>
              <p style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.75)', lineHeight: 1.3 }}>Jobs<br/>Completed</p>
            </div>

            {/* Small inset photo */}
            <div style={{
              position: 'absolute', bottom: -22, left: -22,
              width: 148, height: 108, borderRadius: 12,
              border: '4px solid #fff',
              boxShadow: '0 8px 28px rgba(0,0,0,0.16)',
              overflow: 'hidden',
            }} className="inset-img">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80&auto=format&fit=crop"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* ── Text side ── */}
          <div style={{ paddingLeft: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 28, height: 2.5, background: '#1B6FDB', borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#1B6FDB', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                About FlowRight
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)',
              fontWeight: 800, color: '#111',
              lineHeight: 1.1, letterSpacing: '-0.6px', marginBottom: 20,
            }}>
              Your Local Plumber.<br />Built on Trust.
            </h2>

            <p style={{ fontSize: 14.5, color: '#4A5568', lineHeight: 1.78, marginBottom: 10 }}>
              FlowRight Plumbing was built on a simple idea: do excellent work, treat customers well, and be the company your neighbors call when something goes wrong.
            </p>
            <p style={{ fontSize: 14.5, color: '#4A5568', lineHeight: 1.78, marginBottom: 30 }}>
              Our licensed team handles everything from a dripping faucet to a full commercial fit-out — with the same care and attention every time.
            </p>

            {/* Commitment list */}
            <ul style={{
              listStyle: 'none', display: 'grid',
              gridTemplateColumns: '1fr 1fr', gap: '11px 28px', marginBottom: 36,
            }}>
              {COMMITMENTS.map(c => (
                <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13.5, color: '#374151' }}>
                  <CheckCircle size={14} style={{ color: '#1B6FDB', flexShrink: 0, marginTop: 3 }} />
                  {c}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => goTo('#contact')}
                className="btn-glass btn-primary"
                style={{ padding: '13px 30px', fontSize: 14, borderRadius: 9 }}
              >
                Get a Free Quote
              </button>
              <a
                href={PHONE_HREF}
                className="btn-glass btn-outline-dark"
                style={{ padding: '12px 24px', fontSize: 14, borderRadius: 9, textDecoration: 'none' }}
              >
                <Phone size={14} />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .inset-img  { display: none !important; }
        }
        @media (max-width: 540px) {
          .about-grid > div:last-child { padding-left: 0 !important; }
          .about-grid > div:last-child ul { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
