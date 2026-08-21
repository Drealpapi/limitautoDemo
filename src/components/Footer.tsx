import { Phone, Mail, MapPin, Droplets } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';
const YEAR = new Date().getFullYear();

const SERVICE_LINKS = [
  'Emergency Plumbing','Drain Cleaning','Leak Detection & Repair',
  'Water Heater Services','Pipe Repair & Replacement',
  'Bathroom & Kitchen Plumbing','Sewer Line Services','Commercial Plumbing',
];

const COMPANY_LINKS = [
  { label: 'About Us',        id: '#about'        },
  { label: 'Our Services',    id: '#services'     },
  { label: 'Project Gallery', id: '#gallery'      },
  { label: 'Service Area',    id: '#service-area' },
  { label: 'Reviews',         id: '#reviews'      },
  { label: 'Contact Us',      id: '#contact'      },
];

function goTo(id: string) {
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

const lnk: React.CSSProperties = {
  background: 'none', border: 'none', cursor: 'pointer',
  textAlign: 'left', fontSize: 13, color: '#5A6A7E', padding: 0,
  lineHeight: 1.5, transition: 'color 0.15s', fontFamily: 'inherit',
};

export default function Footer() {
  return (
    <footer style={{ background: '#0F1923', color: '#fff' }}>

      {/* ── CTA strip ── */}
      <div style={{
        background: '#1E2D45',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '44px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap',
        }}>
          <div>
            <p style={{ fontSize: 21, fontWeight: 800, color: '#fff', marginBottom: 5, letterSpacing: '-0.4px' }}>
              Need a plumber today?
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
              We're ready to help. Call now or send us a message.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} className="btn btn-slate"
              style={{ padding: '12px 24px', fontSize: 13.5, textDecoration: 'none', borderRadius: 7 }}>
              <Phone size={14} /> Call {PHONE}
            </a>
            <button onClick={() => goTo('#contact')} className="btn btn-ghost"
              style={{ padding: '12px 24px', fontSize: 13.5, borderRadius: 7 }}>
              Book a Service
            </button>
          </div>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 32px 50px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1.5fr', gap: 48 }} className="footer-cols">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 8, background: '#1E2D45',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, border: '1px solid rgba(74,111,165,0.4)',
              }}>
                <Droplets size={16} color="#93B4D8" />
              </div>
              <span style={{ fontWeight: 800, fontSize: 15, color: '#fff', letterSpacing: '-0.3px' }}>
                FlowRight<span style={{ fontWeight: 300, color: '#6B8CAE', marginLeft: 3 }}>Plumbing</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: '#4A5A6E', lineHeight: 1.75, maxWidth: 230, marginBottom: 20 }}>
              Reliable plumbing and drain services for homes and businesses. Available 24/7.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { Icon: Phone, href: PHONE_HREF, text: PHONE },
                { Icon: Mail,  href: 'mailto:service@flowrightplumbing.com', text: 'service@flowrightplumbing.com' },
              ].map(({ Icon, href, text }) => (
                <a key={text} href={href} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontSize: 13, color: '#4A5A6E', textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#93B4D8')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#4A5A6E')}
                >
                  <Icon size={12} color="#6B8CAE" /> {text}
                </a>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#4A5A6E' }}>
                <MapPin size={12} color="#6B8CAE" style={{ flexShrink: 0, marginTop: 2 }} />
                Your City, State [Replace]
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#3A4A5E', letterSpacing: '0.17em', textTransform: 'uppercase', marginBottom: 18 }}>Services</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICE_LINKS.map(s => (
                <li key={s}>
                  <button onClick={() => goTo('#services')} style={lnk}
                    onMouseEnter={e => (e.currentTarget.style.color = '#93B4D8')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#5A6A7E')}>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#3A4A5E', letterSpacing: '0.17em', textTransform: 'uppercase', marginBottom: 18 }}>Company</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {COMPANY_LINKS.map(l => (
                <li key={l.label}>
                  <button onClick={() => goTo(l.id)} style={lnk}
                    onMouseEnter={e => (e.currentTarget.style.color = '#93B4D8')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#5A6A7E')}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#3A4A5E', letterSpacing: '0.17em', textTransform: 'uppercase', marginBottom: 18 }}>Hours</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                ['Mon – Fri', '7:00 AM – 7:00 PM'],
                ['Saturday',  '8:00 AM – 5:00 PM'],
                ['Sunday',    'Emergency Only'   ],
              ].map(([d, h]) => (
                <div key={d}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#3A4A5E', marginBottom: 1 }}>{d}</p>
                  <p style={{ fontSize: 12.5, color: '#4A5A6E' }}>{h}</p>
                </div>
              ))}
            </div>

            {/* Emergency card */}
            <div style={{
              marginTop: 22,
              background: 'rgba(74,111,165,0.08)',
              border: '1px solid rgba(74,111,165,0.18)',
              borderRadius: 10, padding: '15px 16px',
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#6B8CAE', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 6 }}>
                Emergency?
              </p>
              <a href={PHONE_HREF} style={{
                fontSize: 14, fontWeight: 700, color: '#fff',
                textDecoration: 'none', display: 'block', marginBottom: 3, transition: 'color 0.15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#93B4D8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
              >
                {PHONE}
              </a>
              <p style={{ fontSize: 11, color: '#4A5A6E' }}>Available right now</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '18px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: '#3A4A5E' }}>
            © {YEAR} FlowRight Plumbing. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 22 }}>
            {['Privacy Policy','Terms of Service','Licensing'].map(l => (
              <button key={l} style={{ ...lnk, fontSize: 12, color: '#3A4A5E' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#93B4D8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#3A4A5E')}
              >{l}</button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px)  { .footer-cols { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } }
        @media (max-width: 480px)  { .footer-cols { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
