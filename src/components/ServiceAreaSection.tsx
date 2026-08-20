import { MapPin, Phone } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const areas = [
  { name: 'Downtown',          primary: true  },
  { name: 'Riverside District', primary: true  },
  { name: 'Greenfield Heights', primary: true  },
  { name: 'Oakwood',            primary: true  },
  { name: 'Elmwood Estates',    primary: false },
  { name: 'Northside',          primary: false },
  { name: 'Westfield',          primary: false },
  { name: 'Parkview',           primary: false },
  { name: 'Lakewood',           primary: false },
  { name: 'Cedar Hills',        primary: false },
  { name: 'Maplewood',          primary: false },
  { name: 'Harborview',         primary: false },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function ServiceAreaSection() {
  return (
    <section id="service-area" style={{ background: '#F7F9FC', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="area-grid">

          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div style={{ width: 32, height: 2, background: '#111' }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#999', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Where We Work
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, color: '#111', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 16 }}>
              Serving Your Community
            </h2>
            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, marginBottom: 28, maxWidth: 440 }}>
              We provide plumbing services across the following areas. Not sure if we cover your location? Give us a call — we'll let you know.
            </p>

            {/* Area chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {areas.map(a => (
                <span
                  key={a.name}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    fontSize: 12, fontWeight: a.primary ? 600 : 400,
                    padding: '7px 13px',
                    background: a.primary ? '#EBF3FF' : '#fff',
                    border: `1px solid ${a.primary ? '#C4DAFB' : '#E0E0E0'}`,
                    color: a.primary ? '#1B6FDB' : '#555',
                  }}
                >
                  <MapPin size={10} />
                  {a.name}
                </span>
              ))}
            </div>

            <p style={{ fontSize: 12, color: '#aaa', marginBottom: 24 }}>
              * Replace with your actual service area.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={PHONE_HREF}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: '#111', color: '#fff',
                  fontSize: 13, fontWeight: 600,
                  padding: '12px 24px', textDecoration: 'none',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1B6FDB')}
                onMouseLeave={e => (e.currentTarget.style.background = '#111')}
              >
                <Phone size={13} />
                Call {PHONE}
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                style={{
                  background: 'none', border: '1.5px solid #E0E0E0', color: '#111',
                  fontSize: 13, fontWeight: 600, padding: '12px 24px',
                  borderRadius: 0, cursor: 'pointer', transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#111')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#E0E0E0')}
              >
                Check My Area
              </button>
            </div>
          </div>

          {/* Right: map placeholder */}
          <div style={{
            background: '#E8F0FA',
            border: '1px solid #D4E4F7',
            minHeight: 380,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 16, padding: 32, position: 'relative', overflow: 'hidden',
          }}>
            {/* Grid dot pattern */}
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.04,
              backgroundImage: 'radial-gradient(circle, #1B6FDB 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }} aria-hidden="true" />
            <MapPin size={36} color="#1B6FDB" opacity={0.6} />
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 8 }}>Service Area Map</p>
              <p style={{ fontSize: 13, color: '#666', maxWidth: 260, lineHeight: 1.6 }}>
                Replace this placeholder with a Google Maps embed of your coverage area.
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
