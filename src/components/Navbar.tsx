import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const NAV = [
  { label: 'Home',        anchor: null       },
  { label: 'About Us',    anchor: '#about'   },
  { label: 'Services',    anchor: '#services' },
  { label: 'Gallery',     anchor: '#gallery'  },
  { label: 'Contact',     anchor: '#contact'  },
];

function goTo(anchor: string | null) {
  if (!anchor) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

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
      {/* ─── HEADER ─── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: '#fff',
        borderBottom: `1px solid ${scrolled ? '#E8E8E8' : 'transparent'}`,
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
        transition: 'border-color .25s, box-shadow .25s',
      }}>
        <div style={{
          maxWidth: 1160, margin: '0 auto', padding: '0 28px',
          height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 32,
        }}>

          {/* Logo — matches reference mountain/wave icon + bold name */}
          <button
            onClick={() => goTo(null)}
            aria-label="FlowRight Plumbing — home"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}
          >
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true">
              <path d="M2 19 L8 5 L14 13 L18 7 L26 19 Z" stroke="#1B6FDB" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
            </svg>
            <span style={{ fontSize: 15, fontWeight: 800, color: '#111', letterSpacing: '-0.3px', lineHeight: 1 }}>
              FlowRight
            </span>
          </button>

          {/* Desktop nav — reference: plain text links, active = underlined */}
          <nav aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center' }} className="desk-nav">
            {NAV.map((n, i) => (
              <button
                key={n.label}
                onClick={() => goTo(n.anchor)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 14, fontWeight: i === 0 ? 600 : 400,
                  color: '#333',
                  padding: '6px 14px',
                  textDecoration: i === 0 ? 'underline' : 'none',
                  textDecorationThickness: 2,
                  textUnderlineOffset: 3,
                  transition: 'color .15s',
                  lineHeight: 1,
                  letterSpacing: '0',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#000')}
                onMouseLeave={e => (e.currentTarget.style.color = '#333')}
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Right: phone (subtle) + outlined CTA — reference exact */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }} className="desk-nav">
            <a
              href={PHONE_HREF}
              style={{ fontSize: 13, color: '#666', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', transition: 'color .15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#111')}
              onMouseLeave={e => (e.currentTarget.style.color = '#666')}
            >
              <Phone size={12} /> {PHONE}
            </a>

            {/* Reference button — sharp corners, black outline, white fill */}
            <button
              onClick={() => goTo('#contact')}
              style={{
                background: 'transparent',
                border: '1.5px solid #111',
                color: '#111',
                fontSize: 13, fontWeight: 600,
                padding: '9px 20px',
                borderRadius: 0, cursor: 'pointer',
                letterSpacing: '0',
                transition: 'background .15s, color .15s',
                lineHeight: 1,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111'; }}
            >
              Book a Service
            </button>
          </div>

          {/* Mobile: phone + burger */}
          <div style={{ display: 'none', alignItems: 'center', gap: 4 }} className="mob-nav">
            <a href={PHONE_HREF} style={{ color: '#1B6FDB', padding: '8px', display: 'flex' }} aria-label="Call now">
              <Phone size={20} />
            </a>
            <button
              onClick={() => setOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', color: '#111' }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mob-menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── MOBILE DRAWER ─── */}
      {open && (
        <div
          id="mob-menu"
          role="dialog" aria-modal="true" aria-label="Navigation"
          style={{ position: 'fixed', inset: 0, zIndex: 90, background: '#fff', paddingTop: 64, display: 'flex', flexDirection: 'column' }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px 28px' }}>
            {NAV.map(n => (
              <button
                key={n.label}
                onClick={() => { setOpen(false); goTo(n.anchor); }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', fontSize: 18, fontWeight: 500, color: '#111',
                  padding: '15px 0', borderBottom: '1px solid #F2F2F2',
                }}
              >{n.label}</button>
            ))}
          </nav>
          <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href={PHONE_HREF} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              background: '#1B6FDB', color: '#fff', fontWeight: 700, fontSize: 15,
              padding: '15px', textDecoration: 'none',
            }}>
              <Phone size={16} /> Call {PHONE}
            </a>
            <button onClick={() => { setOpen(false); goTo('#contact'); }} style={{
              background: '#111', color: '#fff', fontWeight: 700, fontSize: 15,
              padding: '15px', border: 'none', cursor: 'pointer',
            }}>Book a Service</button>
          </div>
        </div>
      )}

      {/* ─── MOBILE STICKY BOTTOM BAR ─── */}
      <div
        aria-hidden={!scrolled}
        style={{
          display: 'none', /* shown via CSS below */
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
          background: '#fff', borderTop: '1px solid #E8E8E8',
          boxShadow: '0 -2px 12px rgba(0,0,0,.08)',
          gridTemplateColumns: '1fr 1fr',
          transform: scrolled ? 'translateY(0)' : 'translateY(110%)',
          transition: 'transform .3s',
        }}
        className="mob-bar"
      >
        <a href={PHONE_HREF} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          fontSize: 14, fontWeight: 600, color: '#1B6FDB',
          padding: '15px', textDecoration: 'none', borderRight: '1px solid #E8E8E8',
        }}>
          <Phone size={14} /> Call Now
        </a>
        <button onClick={() => goTo('#contact')} style={{
          background: '#111', color: '#fff', fontSize: 14, fontWeight: 700,
          border: 'none', cursor: 'pointer',
        }}>Book a Service</button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-nav  { display: flex !important; }
          .mob-bar  { display: grid !important; }
        }
      `}</style>
    </>
  );
}
