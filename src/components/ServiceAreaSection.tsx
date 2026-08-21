import { MapPin, Phone } from 'lucide-react';

const PHONE      = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const areas = [
  { name: 'Toronto, ON',         primary: true  },
  { name: 'Mississauga, ON',     primary: true  },
  { name: 'Brampton, ON',        primary: true  },
  { name: 'Vaughan, ON',         primary: true  },
  { name: 'Oakville, ON',        primary: false },
  { name: 'Burlington, ON',      primary: false },
  { name: 'Hamilton, ON',        primary: false },
  { name: 'Markham, ON',         primary: false },
  { name: 'Richmond Hill, ON',   primary: false },
  { name: 'Newmarket, ON',       primary: false },
  { name: 'Ajax, ON',            primary: false },
  { name: 'Pickering, ON',       primary: false },
];

function goTo(id: string) {
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

export default function ServiceAreaSection() {
  return (
    <section id="service-area" style={{ background: '#F6F8FC', padding: '96px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="area-grid">

          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 24, height: 2.5, background: '#2563EB', borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#2563EB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Where We Work
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800,
              color: '#0C1829', lineHeight: 1.08, letterSpacing: '-0.6px', marginBottom: 16,
            }}>
              Serving Communities<br />Across Ontario
            </h2>

            <p style={{ fontSize: 14.5, color: '#5A6A85', lineHeight: 1.78, marginBottom: 28, maxWidth: 420 }}>
              We provide residential and commercial plumbing services across the Greater Toronto Area and surrounding Ontario cities. Not sure if we cover you? Just call.
            </p>

            {/* Area chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {areas.map(a => (
                <span
                  key={a.name}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    fontSize: 12.5, fontWeight: a.primary ? 600 : 400,
                    padding: '7px 13px', borderRadius: 6,
                    background: a.primary ? '#EBF3FF' : '#fff',
                    border: `1px solid ${a.primary ? '#BFDBFE' : '#E2E8F0'}`,
                    color: a.primary ? '#1D4ED8' : '#5A6A85',
                    transition: 'all 0.15s',
                  }}
                >
                  <MapPin size={10} />
                  {a.name}
                </span>
              ))}
            </div>

            <p style={{ fontSize: 12, color: '#94A3B8', marginBottom: 24 }}>
              Service coverage and response times may vary by distance from our base location.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={PHONE_HREF}
                className="btn btn-navy"
                style={{ padding: '12px 24px', fontSize: 13.5, borderRadius: 8, textDecoration: 'none' }}
              >
                <Phone size={14} /> Call {PHONE}
              </a>
              <button
                onClick={() => goTo('#contact')}
                className="btn btn-outline"
                style={{ padding: '12px 24px', fontSize: 13.5, borderRadius: 8 }}
              >
                Check My Area
              </button>
            </div>
          </div>

          {/* Right: map placeholder */}
          <div style={{
            background: '#EBF1FA',
            border: '1px solid #C7D7F0',
            borderRadius: 16,
            minHeight: 380,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 16, padding: 40, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.04,
              backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
              backgroundSize: '26px 26px',
            }} aria-hidden="true" />
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(37,99,235,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <MapPin size={26} color="#2563EB" />
            </div>
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#0C1829', marginBottom: 8 }}>
                Greater Toronto Area
              </p>
              <p style={{ fontSize: 13, color: '#64748B', maxWidth: 260, lineHeight: 1.65 }}>
                Replace with a Google Maps embed showing your Ontario coverage area.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .area-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
