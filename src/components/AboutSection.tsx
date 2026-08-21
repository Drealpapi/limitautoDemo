import { Fa, Icons } from '../lib/icons';

const PHONE      = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const COMMITMENTS = [
  'Show up on time, every time',
  'Explain the problem clearly before starting',
  'Upfront pricing — no surprises',
  'Clean up completely after every job',
  'Stand behind every repair we do',
  'Treat your home with respect',
];

function goTo(a: string) {
  const el = document.querySelector(a);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#F6F8FC', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="about-grid">

          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 12px 40px rgba(30,45,69,0.14)' }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop"
                alt="FlowRight plumber fixing a water leak"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
            <div style={{ position: 'absolute', top: 18, right: 18, background: '#1E2D45', borderRadius: 10, padding: '16px 20px', boxShadow: '0 8px 24px rgba(30,45,69,0.35)', textAlign: 'center' }}>
              <p style={{ fontSize: 28, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 4 }}>500+</p>
              <p style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.6)', lineHeight: 1.3 }}>Jobs<br />Completed</p>
            </div>
            <div style={{ position: 'absolute', bottom: -20, left: -20, width: 140, height: 100, borderRadius: 10, border: '4px solid #fff', boxShadow: '0 6px 24px rgba(30,45,69,0.15)', overflow: 'hidden' }} className="inset-img">
              <img
                src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=400&q=80&auto=format&fit=crop"
                alt="Plumber inspecting pipe connections"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div style={{ paddingLeft: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 24, height: 2.5, background: '#4A6FA5', borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#4A6FA5', letterSpacing: '0.2em', textTransform: 'uppercase' }}>About FlowRight</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', fontWeight: 800, color: '#1E2D45', lineHeight: 1.1, letterSpacing: '-0.6px', marginBottom: 18 }}>
              Your Local Plumber.<br />Built on Trust.
            </h2>
            <p style={{ fontSize: 14.5, color: '#5A6A85', lineHeight: 1.78, marginBottom: 10 }}>
              FlowRight Plumbing was built on a simple idea: do excellent work, treat customers well, and be the company your neighbors call when something goes wrong.
            </p>
            <p style={{ fontSize: 14.5, color: '#5A6A85', lineHeight: 1.78, marginBottom: 28 }}>
              Our licensed team handles everything from a dripping faucet to a full commercial fit-out — with the same care and attention every time.
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px', marginBottom: 34 }}>
              {COMMITMENTS.map(c => (
                <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, color: '#3D4F66' }}>
                  <Fa icon={Icons.check} style={{ color: '#4A6FA5', flexShrink: 0, marginTop: 3, fontSize: 13 }} />
                  {c}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button onClick={() => goTo('#contact')} className="btn btn-navy" style={{ padding: '13px 28px', fontSize: 14 }}>
                Get a Free Quote
              </button>
              <a href={PHONE_HREF} className="btn btn-outline"
                style={{ padding: '12px 22px', fontSize: 14, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 7 }}>
                <Fa icon={Icons.phone} style={{ fontSize: 13 }} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .inset-img  { display: none !important; }
          .about-grid > div:last-child { padding-left: 0 !important; }
        }
        @media (max-width: 520px) {
          .about-grid > div:last-child ul { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
