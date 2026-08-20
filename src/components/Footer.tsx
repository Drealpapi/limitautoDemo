import { Phone, Mail, MapPin } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';
const YEAR = new Date().getFullYear();

const SERVICE_LINKS = [
  'Emergency Plumbing', 'Drain Cleaning', 'Leak Detection & Repair',
  'Water Heater Services', 'Pipe Repair & Replacement',
  'Bathroom & Kitchen Plumbing', 'Sewer Line Services', 'Commercial Plumbing',
];

const COMPANY_LINKS = [
  { label: 'About Us',        id: '#about'        },
  { label: 'Our Services',    id: '#services'      },
  { label: 'Project Gallery', id: '#gallery'       },
  { label: 'Service Area',    id: '#service-area'  },
  { label: 'Customer Reviews',id: '#reviews'       },
  { label: 'Contact Us',      id: '#contact'       },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', color: '#fff' }}>

      {/* ── Pre-footer CTA strip ── */}
      <div style={{ borderBottom: '1px solid #1e1e1e' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '40px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap',
        }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 4 }}>Need a plumber today?</p>
            <p style={{ fontSize: 14, color: '#666' }}>We're ready to help. Call now or send us a message.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href={PHONE_HREF}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#F57C2B', color: '#fff',
                fontSize: 14, fontWeight: 700,
                padding: '13px 24px', textDecoration: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#E06820')}
              onMouseLeave={e => (e.currentTarget.style.background = '#F57C2B')}
            >
              <Phone size={15} />
              Call {PHONE}
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              style={{
                background: 'transparent', border: '1.5px solid #333',
                color: '#fff', fontSize: 14, fontWeight: 600,
                padding: '12px 24px', cursor: 'pointer',
                transition: 'border-color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = 'transparent'; }}
            >
              Book a Service
            </button>
          </div>
        </div>
      </div>

      {/* ── Main footer columns ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1.5fr', gap: 48 }} className="footer-grid">

          {/* Brand */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <svg width="24" height="20" viewBox="0 0 26 22" fill="none" aria-hidden="true">
                <path d="M3 18 L9 6 L13 12 L17 8 L23 18 Z" fill="none" stroke="#1B6FDB" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
              <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>FlowRight <span style={{ fontWeight: 300, color: '#5BA8FF' }}>Plumbing</span></span>
            </div>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75, maxWidth: 220, marginBottom: 20 }}>
              Reliable plumbing and drain services for homes and businesses. Available 24/7 for emergencies.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#555', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                <Phone size={12} color="#5BA8FF" /> {PHONE}
              </a>
              <a href="mailto:service@flowrightplumbing.com" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#555', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                <Mail size={12} color="#5BA8FF" /> service@flowrightplumbing.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#555' }}>
                <MapPin size={12} color="#5BA8FF" style={{ flexShrink: 0, marginTop: 2 }} />
                Your City, State [Replace]
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#444', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 18 }}>Services</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICE_LINKS.map(s => (
                <li key={s}>
                  <button onClick={() => scrollTo('#services')} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', fontSize: 13, color: '#555', padding: 0,
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#444', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 18 }}>Company</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {COMPANY_LINKS.map(l => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.id)} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', fontSize: 13, color: '#555', padding: 0,
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#444', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 18 }}>Hours</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Monday – Friday', '7:00 AM – 7:00 PM'],
                ['Saturday',         '8:00 AM – 5:00 PM'],
                ['Sunday',           'Emergency Only'   ],
                ['Emergency Line',   '24/7 Available'   ],
              ].map(([d, h]) => (
                <div key={d}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#888', marginBottom: 1 }}>{d}</p>
                  <p style={{ fontSize: 12, color: '#555' }}>{h}</p>
                </div>
              ))}
            </div>

            {/* Emergency callout */}
            <div style={{
              marginTop: 24,
              border: '1px solid #F57C2B33',
              background: 'rgba(245,124,43,0.06)',
              padding: '16px',
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#F57C2B', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>Emergency?</p>
              <a href={PHONE_HREF} style={{ fontSize: 14, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>{PHONE}</a>
              <p style={{ fontSize: 11, color: '#555', marginTop: 2 }}>Available right now</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid #1a1a1a' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '20px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: '#444' }}>
            © {YEAR} FlowRight Plumbing. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Licensing'].map(l => (
              <button key={l} style={{ background: 'none', border: 'none', fontSize: 12, color: '#444', cursor: 'pointer', padding: 0, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#444')}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
