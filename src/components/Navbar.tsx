import { useState, useEffect } from 'react';
import { Phone, Menu, X, Droplets } from 'lucide-react';

const PHONE      = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const NAV = [
  { label: 'Home',     anchor: null         },
  { label: 'Services', anchor: '#services'  },
  { label: 'About Us', anchor: '#about'     },
  { label: 'Our Work', anchor: '#gallery'   },
  { label: 'Reviews',  anchor: '#reviews'   },
  { label: 'Contact',  anchor: '#contact'   },
];

function goTo(anchor: string | null) {
  if (!anchor) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState('Home');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const onHero = !scrolled;

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: onHero ? 'rgba(12,24,41,0.6)' : '#fff',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: onHero
          ? '1px solid rgba(255,255,255,0.07)'
          : '1px solid rgba(30,58,95,0.09)',
        boxShadow: onHero ? 'none' : '0 1px 20px rgba(30,58,95,0.07)',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 28px',
          height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 20,
        }}>

          {/* ── Logo ── */}
          <button
            onClick={() => goTo(null)}
            aria-label="FlowRight Plumbing — home"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 0, display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0,
            }}
          >
            <div style={{
              width: 34, height: 34, borderRadius: 9, flexShrink: 0,
              background: onHero ? 'rgba(37,99,235,0.85)' : '#2563EB',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(37,99,235,0.35)',
              transition: 'background 0.3s',
            }}>
              <Droplets size={16} color="#fff" />
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <span style={{
                display: 'block',
                fontSize: 15, fontWeight: 800, letterSpacing: '-0.3px',
                color: onHero ? '#fff' : '#0C1829',
                transition: 'color 0.3s',
              }}>FlowRight</span>
              <span style={{
                display: 'block',
                fontSize: 10.5, fontWeight: 500, letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: onHero ? 'rgba(255,255,255,0.5)' : '#64748B',
                transition: 'color 0.3s',
              }}>Plumbing</span>
            </div>
          </button>

          {/* ── Desktop nav (center) ── */}
          <nav
            aria-label="Primary navigation"
            className="desk-nav"
            style={{ display: 'flex', alignItems: 'center', gap: 0, flex: 1, justifyContent: 'center' }}
          >
            {NAV.map(n => {
              const isActive = active === n.label;
              return (
                <button
                  key={n.label}
                  onClick={() => { setActive(n.label); goTo(n.anchor); }}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: 13.5, fontWeight: isActive ? 600 : 400,
                    color: onHero
                      ? (isActive ? '#fff' : 'rgba(255,255,255,0.6)')
                      : (isActive ? '#0C1829' : '#64748B'),
                    padding: '6px 14px',
                    position: 'relative',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = onHero ? '#fff' : '#0C1829')}
                  onMouseLeave={e => (e.currentTarget.style.color = onHero
                    ? (isActive ? '#fff' : 'rgba(255,255,255,0.6)')
                    : (isActive ? '#0C1829' : '#64748B'))}
                >
                  {n.label}
                  {/* Active indicator — thin underline */}
                  {isActive && (
                    <span style={{
                      position: 'absolute', bottom: 0, left: 14, right: 14,
                      height: 2, borderRadius: 1,
                      background: onHero ? '#2563EB' : '#2563EB',
                    }} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ── Desktop right ── */}
          <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 18, flexShrink: 0 }}>
            <a
              href={PHONE_HREF}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 13, fontWeight: 500,
                color: onHero ? 'rgba(255,255,255,0.65)' : '#64748B',
                textDecoration: 'none', transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = onHero ? '#fff' : '#0C1829')}
              onMouseLeave={e => (e.currentTarget.style.color = onHero ? 'rgba(255,255,255,0.65)' : '#64748B')}
            >
              <Phone size={13} />
              {PHONE}
            </a>
            <button
              onClick={() => goTo('#contact')}
              className="btn btn-cta-red"
              style={{ padding: '9px 20px', fontSize: 13, borderRadius: 7 }}
            >
              Book a Service
            </button>
          </div>

          {/* ── Mobile right ── */}
          <div className="mob-nav" style={{ display: 'none', alignItems: 'center', gap: 4 }}>
            <button
              onClick={() => { goTo('#contact'); }}
              className="btn btn-cta-red"
              style={{ padding: '8px 16px', fontSize: 13, borderRadius: 7 }}
            >
              Book Now
            </button>
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mob-drawer"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px', display: 'flex',
                color: onHero ? '#fff' : '#0C1829',
                borderRadius: 6, transition: 'color 0.15s',
              }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen drawer ── */}
      <div
        id="mob-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed', inset: 0, zIndex: 90,
          background: '#0C1829',
          paddingTop: 68,
          display: 'flex', flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '16px 28px 24px' }}>
          {NAV.map(n => (
            <button
              key={n.label}
              onClick={() => { setOpen(false); setActive(n.label); goTo(n.anchor); }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', fontSize: 19, fontWeight: 500,
                color: '#F1F5F9', padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2563EB')}
              onMouseLeave={e => (e.currentTarget.style.color = '#F1F5F9')}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: '8px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            onClick={() => { setOpen(false); goTo('#contact'); }}
            className="btn btn-cta-red"
            style={{ padding: '16px', fontSize: 16, borderRadius: 10, width: '100%' }}
          >
            Book a Service
          </button>
          <a
            href={PHONE_HREF}
            className="btn btn-ghost"
            style={{ padding: '15px', fontSize: 15, borderRadius: 10, textDecoration: 'none' }}
          >
            <Phone size={16} /> Call {PHONE}
          </a>
        </div>
        <p style={{
          textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 12,
          marginTop: 'auto', padding: '24px 28px calc(28px + env(safe-area-inset-bottom))',
        }}>
          Available 24/7 for emergencies
        </p>
      </div>

      {/* ── Mobile sticky bottom bar ── */}
      <div
        className="mob-bar"
        aria-hidden={!scrolled}
        style={{
          display: 'none',
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 80,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(30,58,95,0.09)',
          gridTemplateColumns: '1fr 1fr',
          boxShadow: '0 -2px 20px rgba(30,58,95,0.1)',
          transform: scrolled ? 'translateY(0)' : 'translateY(110%)',
          transition: 'transform 0.28s ease',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <a
          href={PHONE_HREF}
          tabIndex={scrolled ? 0 : -1}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 14, fontWeight: 600, color: '#2563EB',
            padding: '15px', textDecoration: 'none',
            borderRight: '1px solid rgba(30,58,95,0.08)',
          }}
        >
          <Phone size={15} /> Call Now
        </a>
        <button
          onClick={() => goTo('#contact')}
          tabIndex={scrolled ? 0 : -1}
          style={{
            background: '#C0392B', color: '#fff',
            fontSize: 14, fontWeight: 700,
            border: 'none', cursor: 'pointer',
          }}
        >
          Book a Service
        </button>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desk-nav { display: none !important; }
          .mob-nav  { display: flex !important; }
          .mob-bar  { display: grid !important; }
        }
      `}</style>
    </>
  );
}
