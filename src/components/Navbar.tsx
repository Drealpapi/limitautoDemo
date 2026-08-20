import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const NAV = [
  { label: 'Home',        anchor: null         },
  { label: 'Services',    anchor: '#services'  },
  { label: 'About Us',    anchor: '#about'     },
  { label: 'Gallery',     anchor: '#gallery'   },
  { label: 'Contact',     anchor: '#contact'   },
];

function goTo(anchor: string | null) {
  if (!anchor) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.04)'}`,
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.25s ease',
      }}>
        <div style={{
          maxWidth: 1160, margin: '0 auto', padding: '0 32px',
          height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* ── Logo ── */}
          <button
            onClick={() => goTo(null)}
            aria-label="FlowRight Plumbing — home"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 0, display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
            }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, #1B6FDB 0%, #2480F0 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(27,111,219,0.35)',
              flexShrink: 0,
            }}>
              <svg width="18" height="16" viewBox="0 0 22 18" fill="none" aria-hidden="true">
                <path d="M1 16 L6 4 L11 10 L15 6 L21 16" stroke="white" strokeWidth="2.2"
                  strokeLinejoin="round" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <span style={{
              fontSize: 15, fontWeight: 800, color: '#111',
              letterSpacing: '-0.4px', lineHeight: 1,
            }}>
              FlowRight<span style={{ color: '#1B6FDB', fontWeight: 400, marginLeft: 2 }}>Plumbing</span>
            </span>
          </button>

          {/* ── Desktop nav ── */}
          <nav aria-label="Primary" className="desk-nav" style={{
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            {NAV.map((n, i) => (
              <button
                key={n.label}
                onClick={() => goTo(n.anchor)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 13.5, fontWeight: i === 0 ? 600 : 400,
                  color: i === 0 ? '#111' : '#555',
                  padding: '7px 15px', borderRadius: 7,
                  transition: 'color 0.15s, background 0.15s',
                  textDecoration: i === 0 ? 'underline' : 'none',
                  textDecorationColor: '#1B6FDB',
                  textUnderlineOffset: 4,
                  textDecorationThickness: 2,
                  lineHeight: 1,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#111';
                  e.currentTarget.style.background = 'rgba(27,111,219,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = i === 0 ? '#111' : '#555';
                  e.currentTarget.style.background = 'none';
                }}
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* ── Desktop right ── */}
          <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <a
              href={PHONE_HREF}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                fontSize: 13, fontWeight: 500, color: '#444',
                textDecoration: 'none', transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1B6FDB')}
              onMouseLeave={e => (e.currentTarget.style.color = '#444')}
            >
              <Phone size={13} />
              {PHONE}
            </a>
            <button
              onClick={() => goTo('#contact')}
              className="btn-glass btn-primary"
              style={{ padding: '10px 22px', fontSize: 13, fontWeight: 600, borderRadius: 8 }}
            >
              Book a Service
            </button>
          </div>

          {/* ── Mobile right ── */}
          <div className="mob-nav" style={{ display: 'none', alignItems: 'center', gap: 4 }}>
            <a
              href={PHONE_HREF}
              style={{
                padding: 8, display: 'flex', borderRadius: 8,
                color: '#1B6FDB', transition: 'background 0.15s',
              }}
              aria-label={`Call ${PHONE}`}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(27,111,219,0.08)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setOpen(v => !v)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 8, display: 'flex', color: '#111', borderRadius: 8,
                transition: 'background 0.15s',
              }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {open && (
        <div
          role="dialog" aria-modal="true" aria-label="Navigation"
          style={{
            position: 'fixed', inset: 0, zIndex: 90,
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            paddingTop: 68, display: 'flex', flexDirection: 'column',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px 28px 20px' }}>
            {NAV.map(n => (
              <button
                key={n.label}
                onClick={() => { setOpen(false); goTo(n.anchor); }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', fontSize: 17, fontWeight: 500,
                  color: '#111', padding: '16px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1B6FDB')}
                onMouseLeave={e => (e.currentTarget.style.color = '#111')}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div style={{ padding: '0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a
              href={PHONE_HREF}
              className="btn-glass btn-primary"
              style={{ textDecoration: 'none', padding: '15px', fontSize: 15, borderRadius: 10, justifyContent: 'center' }}
            >
              <Phone size={17} />
              Call {PHONE}
            </a>
            <button
              onClick={() => { setOpen(false); goTo('#contact'); }}
              className="btn-glass btn-orange"
              style={{ padding: '15px', fontSize: 15, borderRadius: 10, width: '100%' }}
            >
              Book a Service
            </button>
          </div>
          <p style={{
            textAlign: 'center', color: '#aaa', fontSize: 12,
            marginTop: 'auto', padding: '24px 28px 32px',
          }}>
            Available 24/7 for emergencies
          </p>
        </div>
      )}

      {/* ── Mobile sticky bottom bar ── */}
      <div
        aria-hidden={!scrolled}
        className="mob-bar"
        style={{
          display: 'none',
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          gridTemplateColumns: '1fr 1fr',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
          transform: scrolled ? 'translateY(0)' : 'translateY(110%)',
          transition: 'transform 0.3s ease',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <a
          href={PHONE_HREF}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 14, fontWeight: 600, color: '#1B6FDB',
            padding: '15px 0', textDecoration: 'none',
            borderRight: '1px solid rgba(0,0,0,0.07)',
          }}
          tabIndex={scrolled ? 0 : -1}
        >
          <Phone size={15} /> Call Now
        </a>
        <button
          onClick={() => goTo('#contact')}
          style={{
            background: 'linear-gradient(135deg, #F57C2B, #FF8C3A)',
            color: '#fff', fontSize: 14, fontWeight: 700,
            border: 'none', cursor: 'pointer',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
          }}
          tabIndex={scrolled ? 0 : -1}
        >
          Book a Service
        </button>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .desk-nav { display: none !important; }
          .mob-nav  { display: flex !important; }
          .mob-bar  { display: grid !important; }
        }
      `}</style>
    </>
  );
}
