import { useState, useEffect } from 'react';
import { Phone, Menu, X, Droplets } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const NAV = [
  { label: 'Home',      anchor: null          },
  { label: 'Services',  anchor: '#services'   },
  { label: 'About Us',  anchor: '#about'      },
  { label: 'Gallery',   anchor: '#gallery'    },
  { label: 'Contact',   anchor: '#contact'    },
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
    const fn = () => setScrolled(window.scrollY > 20);
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
        background: '#fff',
        borderBottom: `1px solid ${scrolled ? '#E8EDF6' : 'transparent'}`,
        boxShadow: scrolled ? '0 1px 16px rgba(30,45,69,0.07)' : 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 32px',
          height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24,
        }}>
          {/* Logo */}
          <button
            onClick={() => goTo(null)}
            aria-label="FlowRight Plumbing home"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 8, background: '#1E2D45',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Droplets size={18} color="#fff" />
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <span style={{ fontSize: 15, fontWeight: 800, color: '#1E2D45', letterSpacing: '-0.3px' }}>FlowRight</span>
              <span style={{ fontSize: 15, fontWeight: 300, color: '#4A6FA5', marginLeft: 3, letterSpacing: '-0.2px' }}>Plumbing</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV.map((n, i) => (
              <button key={n.label} onClick={() => goTo(n.anchor)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 13.5, fontWeight: i === 0 ? 600 : 400,
                color: i === 0 ? '#1E2D45' : '#5A6A85',
                padding: '7px 14px', borderRadius: 6,
                transition: 'color 0.15s, background 0.15s',
                textDecoration: i === 0 ? 'underline' : 'none',
                textDecorationColor: '#4A6FA5',
                textUnderlineOffset: 4,
              }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1E2D45'; e.currentTarget.style.background = '#EBF1FA'; }}
                onMouseLeave={e => { e.currentTarget.style.color = i === 0 ? '#1E2D45' : '#5A6A85'; e.currentTarget.style.background = 'none'; }}
              >{n.label}</button>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <a href={PHONE_HREF} style={{
              display: 'flex', alignItems: 'center', gap: 7,
              fontSize: 13, fontWeight: 500, color: '#5A6A85',
              textDecoration: 'none', transition: 'color 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1E2D45')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5A6A85')}
            >
              <Phone size={13} /> {PHONE}
            </a>
            <button onClick={() => goTo('#contact')} className="btn btn-navy" style={{ padding: '9px 20px', fontSize: 13 }}>
              Book a Service
            </button>
          </div>

          {/* Mobile icons */}
          <div className="mob-nav" style={{ display: 'none', alignItems: 'center', gap: 4 }}>
            <a href={PHONE_HREF} style={{ color: '#4A6FA5', padding: 8, display: 'flex', borderRadius: 6 }} aria-label={`Call ${PHONE}`}>
              <Phone size={20} />
            </a>
            <button onClick={() => setOpen(v => !v)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 8, display: 'flex', color: '#1E2D45', borderRadius: 6,
            }} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Navigation" style={{
          position: 'fixed', inset: 0, zIndex: 90, background: '#fff',
          paddingTop: 68, display: 'flex', flexDirection: 'column',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px 28px 24px' }}>
            {NAV.map(n => (
              <button key={n.label} onClick={() => { setOpen(false); goTo(n.anchor); }} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', fontSize: 17, fontWeight: 500,
                color: '#1E2D45', padding: '15px 0',
                borderBottom: '1px solid #F0F3FA',
                transition: 'color 0.15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4A6FA5')}
                onMouseLeave={e => (e.currentTarget.style.color = '#1E2D45')}
              >{n.label}</button>
            ))}
          </nav>
          <div style={{ padding: '0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href={PHONE_HREF} className="btn btn-slate" style={{ padding: '14px', fontSize: 15, textDecoration: 'none' }}>
              <Phone size={16} /> Call {PHONE}
            </a>
            <button onClick={() => { setOpen(false); goTo('#contact'); }} className="btn btn-navy" style={{ padding: '14px', fontSize: 15 }}>
              Book a Service
            </button>
          </div>
          <p style={{ textAlign: 'center', color: '#9CAABA', fontSize: 12, marginTop: 'auto', padding: '24px 28px 32px' }}>
            Available 24/7 for emergencies
          </p>
        </div>
      )}

      {/* Mobile sticky bottom */}
      <div className="mob-bar" aria-hidden={!scrolled} style={{
        display: 'none',
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
        background: '#fff', borderTop: '1px solid #E8EDF6',
        gridTemplateColumns: '1fr 1fr',
        boxShadow: '0 -2px 12px rgba(30,45,69,0.07)',
        transform: scrolled ? 'translateY(0)' : 'translateY(110%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={PHONE_HREF} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          fontSize: 13.5, fontWeight: 600, color: '#4A6FA5',
          padding: '14px', textDecoration: 'none',
          borderRight: '1px solid #E8EDF6',
        }} tabIndex={scrolled ? 0 : -1}>
          <Phone size={14} /> Call Now
        </a>
        <button onClick={() => goTo('#contact')} style={{
          background: '#1E2D45', color: '#fff', fontSize: 13.5, fontWeight: 700,
          border: 'none', cursor: 'pointer',
        }} tabIndex={scrolled ? 0 : -1}>
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
