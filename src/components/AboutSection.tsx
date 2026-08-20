import { CheckCircle, Phone } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const commitments = [
  'Show up on time, every time',
  'Explain the problem before starting work',
  'Provide upfront pricing — no surprises',
  'Clean up completely after the job',
  'Stand behind every repair we do',
  'Treat your home with respect',
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#F7F9FC', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="about-grid">

          {/* Left: images stacked */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop"
              alt="FlowRight plumber installing water heater"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
            {/* Stat badge */}
            <div style={{
              position: 'absolute', top: 20, right: 20,
              background: '#1B6FDB', color: '#fff',
              padding: '16px 20px',
              boxShadow: '0 4px 20px rgba(27,111,219,0.4)',
            }}>
              <p style={{ fontSize: 28, fontWeight: 800, lineHeight: 1, marginBottom: 4 }}>500+</p>
              <p style={{ fontSize: 11, fontWeight: 500, opacity: 0.8 }}>Jobs Completed</p>
            </div>
            {/* Small inset photo */}
            <div style={{
              position: 'absolute', bottom: -20, left: -20,
              width: 140, height: 100,
              border: '4px solid #fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              overflow: 'hidden',
            }} className="inset-photo">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80&auto=format&fit=crop"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: text */}
          <div style={{ paddingLeft: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div style={{ width: 32, height: 2, background: '#111' }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#999', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                About FlowRight
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
              fontWeight: 800, color: '#111',
              lineHeight: 1.1, letterSpacing: '-0.5px',
              marginBottom: 20,
            }}>
              Your Local Plumber.<br />Built on Trust.
            </h2>

            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, marginBottom: 12 }}>
              FlowRight Plumbing was built on a simple idea: do excellent work, treat customers well, and be the company your neighbors call when something goes wrong.
            </p>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, marginBottom: 28 }}>
              Our licensed team brings the skills and experience needed to handle virtually any plumbing challenge — from a dripping faucet to a full commercial fit-out.
            </p>

            {/* Commitments list */}
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px', marginBottom: 36 }}>
              {commitments.map(c => (
                <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#333' }}>
                  <CheckCircle size={14} style={{ color: '#1B6FDB', flexShrink: 0, marginTop: 2 }} />
                  {c}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => scrollTo('#contact')}
                style={{
                  background: '#111', color: '#fff',
                  fontSize: 13, fontWeight: 700,
                  padding: '13px 28px',
                  border: 'none', borderRadius: 0, cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1B6FDB')}
                onMouseLeave={e => (e.currentTarget.style.background = '#111')}
              >
                Get a Free Quote
              </button>
              <a
                href={PHONE_HREF}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  border: '1.5px solid #E0E0E0', color: '#111',
                  fontSize: 13, fontWeight: 600,
                  padding: '12px 24px',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#111')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#E0E0E0')}
              >
                <Phone size={13} />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        @media (max-width: 768px) { .inset-photo { display: none; } }
      `}</style>
    </section>
  );
}
