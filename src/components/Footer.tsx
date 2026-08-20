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
  { label: 'About Us',         id: '#about'       },
  { label: 'Our Services',     id: '#services'    },
  { label: 'Project Gallery',  id: '#gallery'     },
  { label: 'Service Area',     id: '#service-area'},
  { label: 'Reviews',          id: '#reviews'     },
  { label: 'Contact Us',       id: '#contact'     },
];

function goTo(id: string) {
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
}

const linkStyle: React.CSSProperties = {
  background: 'none', border: 'none', cursor: 'pointer',
  textAlign: 'left', fontSize: 13, color: '#555', padding: 0,
  lineHeight: 1.5, transition: 'color 0.15s', fontFamily: 'inherit',
};

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', color: '#fff' }}>

      {/* ── Pre-footer CTA strip ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0D1F3C 0%, #1A3260 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(27,111,219,0.2) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} aria-hidden="true" />
        <div style={{
          maxWidth: 1160, margin: '0 auto', padding: '44px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap', position: 'relative',
        }}>
          <div>
            <p style={{ fontSize: 21, fontWeight: 800, color: '#fff', marginBottom: 5, letterSpacing: '-0.4px' }}>
              Need a plumber today?
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              We're ready to help. Call now or send us a message.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href={PHONE_HREF}
              className="btn-glass btn-orange"
              style={{ padding: '13px 26px', fontSize: 13.5, borderRadius: 10, textDecoration: 'none' }}
            >
              <Phone size={15} />
              Call {PHONE}
            </a>
            <button
              onClick={() => goTo('#contact')}
              className="btn-glass btn-ghost-dark"
              style={{ padding: '13px 26px', fontSize: 13.5, borderRadius: 10 }}
            >
              Book a Service
            </button>
          </div>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '64px 32px 52px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1.5fr', gap: 52 }} className="footer-cols">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                background: 'linear-gradient(135deg,#1B6FDB,#2480F0)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(27,111,219,0.4)',
              }}>
                <svg width="17" height="15" viewBox="0 0 22 18" fill="none" aria-hidden="true">
                  <path d="M1 16 L6 4 L11 10 L15 6 L21 16" stroke="white" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: 15, color: '#fff', letterSpacing: '-0.3px' }}>
                FlowRight<span style={{ fontWeight: 300, color: '#5BA8FF', marginLeft: 2 }}>Plumbing</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75, maxWidth: 230, marginBottom: 22 }}>
              Reliable plumbing and drain services for homes and businesses. Available 24/7 for emergencies.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              <a href={PHONE_HREF}
                style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: '#555', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#555')}
              >
                <Phone size={12} color="#5BA8FF" /> {PHONE}
              </a>
              <a href="mailto:service@flowrightplumbing.com"
                style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: '#555', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#555')}
              >
                <Mail size={12} color="#5BA8FF" /> service@flowrightplumbing.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13, color: '#555' }}>
                <MapPin size={12} color="#5BA8FF" style={{ flexShrink: 0, marginTop: 2 }} />
                Your City, State [Replace]
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#444', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>Services</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {SERVICE_LINKS.map(s => (
                <li key={s}>
                  <button onClick={() => goTo('#services')} style={linkStyle}
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
            <p style={{ fontSize: 11, fontWeight: 700, color: '#444', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>Company</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {COMPANY_LINKS.map(l => (
                <li key={l.label}>
                  <button onClick={() => goTo(l.id)} style={linkStyle}
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
            <p style={{ fontSize: 11, fontWeight: 700, color: '#444', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>Hours</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['Mon – Fri', '7:00 AM – 7:00 PM'],
                ['Saturday',  '8:00 AM – 5:00 PM'],
                ['Sunday',    'Emergency Only'   ],
              ].map(([d, h]) => (
                <div key={d}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#777', marginBottom: 1 }}>{d}</p>
                  <p style={{ fontSize: 12.5, color: '#4A5568' }}>{h}</p>
                </div>
              ))}
            </div>

            {/* Emergency glass card */}
            <div style={{
              marginTop: 24,
              background: 'rgba(245,124,43,0.07)',
              border: '1px solid rgba(245,124,43,0.2)',
              borderRadius: 12, padding: '16px 18px',
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#F57C2B', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 7 }}>
                Emergency?
              </p>
              <a href={PHONE_HREF}
                style={{ fontSize: 14, fontWeight: 700, color: '#fff', textDecoration: 'none', display: 'block', marginBottom: 3, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F57C2B')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
              >
                {PHONE}
              </a>
              <p style={{ fontSize: 11, color: '#555' }}>Available right now</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{
          maxWidth: 1160, margin: '0 auto', padding: '20px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: '#444' }}>
            © {YEAR} FlowRight Plumbing. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Licensing'].map(l => (
              <button key={l}
                style={{ ...linkStyle, fontSize: 12, color: '#444' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#444')}
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
