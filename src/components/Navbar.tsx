import { useState, useEffect } from 'react';
import { Phone, Menu, X, Droplets } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const NAV = [
  { label: 'Home',      anchor: null        },
  { label: 'Services',  anchor: '#services' },
  { label: 'About Us',  anchor: '#about'    },
  { label: 'Gallery',   anchor: '#gallery'  },
  { label: 'Contact',   anchor: '#contact'  },
];

function goTo(anchor: string | null) {
  if (!anchor) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* Over the dark hero: transparent glass. After scroll: white. */
  const onHero = !scrolled;

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: onHero
          ? 'rgba(14, 22, 36, 0.55)'
          : 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: onHero
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid rgba(30,45,69,0.08)',
        boxShadow: onHero
          ? '0 1px 0 rgba(255,255,255,0.04)'
          : '0 1px 24px rgba(30,45,69,0.08)',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 32px',
          height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24,
        }}>

          {/* ── Logo ── */}
          <button
            onClick={() => goTo(null)}
            aria-label="FlowRight Plumbing home"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 0, display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
            }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: onHero
                ? 'rgba(255,255,255,0.12)'
                : '#1E2D45',
              border: onHero ? '1px solid rgba(255,255,255,0.2)' : 'none',
              backdropFilter: onHero ? 'blur(12px)' : 'none',
              WebkitBackdropFilter: onHero ? 'blur(12px)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              transition: 'background 0.3s ease',
              boxShadow: onHero ? 'inset 0 1px 0 rgba(255,255,255,0.15)' : '0 2px 8px rgba(30,45,69,0.2)',
            }}>
              <Droplets size={17} color={onHero ? '#fff' : '#fff'} />
            </div>
            <div style={{ lineHeight: 1.15 }}>
              <span style={{
                fontSize: 15, fontWeight: 800,
                color: onHero ? '#fff' : '#1E2D45',
                letterSpacing: '-0.3px',
                transition: 'color 0.3s ease',
              }}>
                FlowRight
              </span>
              <span style={{
                fontSize: 15, fontWeight: 300, marginLeft: 3,
                color: onHero ? 'rgba(255,255,255,0.65)' : '#4A6FA5',
                letterSpacing: '-0.2px',
                transition: 'color 0.3s ease',
              }}>
                Plumbing
              </span>
            </div>
          </button>

          {/* ── Desktop nav ── */}
          <nav aria-label="Primary" className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV.map((n, i) => (
              <button
                key={n.label}
                onClick={() => goTo(n.anchor)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 13.5, fontWeight: i === 0 ? 600 : 400,
                  color: onHero
                    ? (i === 0 ? '#fff' : 'rgba(255,255,255,0.65)')
                    : (i === 0 ? '#1E2D45' : '#5A6A85'),
                  padding: '7px 14px', borderRadius: 8,
                  transition: 'color 0.2s, background 0.15s',
                  textDecoration: i === 0 ? 'underline' : 'none',
                  textDecorationColor: onHero ? 'rgba(255,255,255,0.4)' : '#4A6FA5',
                  textUnderlineOffset: 4,
                  textDecorationThickness: 1.5,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = onHero ? '#fff' : '#1E2D45';
                  e.currentTarget.style.background = onHero ? 'rgba(255,255,255,0.08)' : '#EBF1FA';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = onHero
                    ? (i === 0 ? '#fff' : 'rgba(255,255,255,0.65)')
                    : (i === 0 ? '#1E2D45' : '#5A6A85');
                  e.currentTarget.style.background = 'none';
                }}
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* ── Desktop right: phone + CTA ── */}
          <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <a
              href={PHONE_HREF}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                fontSize: 13, fontWeight: 500,
                color: onHero ? 'rgba(255,255,255,0.65)' : '#5A6A85',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = onHero ? '#fff' : '#1E2D45')}
              onMouseLeave={e => (e.currentTarget.style.color = onHero ? 'rgba(255,255,255,0.65)' : '#5A6A85')}
            >
              <Phone size={13} />
            </a>
            <button
              onClick={() => goTo('#contact')}
              className="btn btn-cta-red"
              style={{ padding: '9px 20px', fontSize: 13, borderRadius: 10 }}
            >
              Book a Service
            </button>
          </div>

          {/* ── Mobile ── */}
          <div className="mob-nav" style={{ display: 'none', alignItems: 'center', gap: 4 }}>
            <a
              href={PHONE_HREF}
              style={{
                color: onHero ? 'rgba(255,255,255,0.8)' : '#4A6FA5',
                padding: 8, display: 'flex', borderRadius: 8,
                transition: 'color 0.2s',
              }}
              aria-label={`Call ${PHONE}`}
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setOpen(v => !v)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 8, display: 'flex',
                color: onHero ? '#fff' : '#1E2D45',
                borderRadius: 8, transition: 'color 0.2s',
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
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            paddingTop: 68, display: 'flex', flexDirection: 'column',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px 28px 24px' }}>
            {NAV.map(n => (
              <button
                key={n.label}
                onClick={() => { setOpen(false); goTo(n.anchor); }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', fontSize: 18, fontWeight: 500,
                  color: '#1E2D45', padding: '15px 0',
                  borderBottom: '1px solid rgba(30,45,69,0.07)',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4A6FA5')}
                onMouseLeave={e => (e.currentTarget.style.color = '#1E2D45')}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div style={{ padding: '0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a
              href={PHONE_HREF}
              className="btn btn-slate"
              style={{ padding: '15px', fontSize: 15, textDecoration: 'none', borderRadius: 12 }}
            >
              <Phone size={16} /> Call {PHONE}
            </a>
            <button
              onClick={() => { setOpen(false); goTo('#contact'); }}
              className="btn btn-cta-red"
              style={{ padding: '15px', fontSize: 15, borderRadius: 12 }}
            >
              Book a Service
            </button>
          </div>
          <p style={{
            textAlign: 'center', color: '#9CAABA', fontSize: 12,
            marginTop: 'auto', padding: '24px 28px 32px',
          }}>
            Available 24/7 for emergencies
          </p>
        </div>
      )}

      {/* ── Mobile sticky bottom bar ── */}
      <div
        className="mob-bar"
        aria-hidden={!scrolled}
        style={{
          display: 'none',
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(30,45,69,0.08)',
          gridTemplateColumns: '1fr 1fr',
          boxShadow: '0 -4px 24px rgba(30,45,69,0.1)',
          transform: scrolled ? 'translateY(0)' : 'translateY(110%)',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <a
          href={PHONE_HREF}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 14, fontWeight: 600, color: '#4A6FA5',
            padding: '15px', textDecoration: 'none',
            borderRight: '1px solid rgba(30,45,69,0.08)',
          }}
          tabIndex={scrolled ? 0 : -1}
        >
          <Phone size={15} /> Call Now
        </a>
        <button
          onClick={() => goTo('#contact')}
          style={{
            background: 'linear-gradient(160deg, #c0392b 0%, #a93226 100%)',
            color: '#fff', fontSize: 14, fontWeight: 700,
            border: 'none', cursor: 'pointer',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
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
