import { useState, useEffect, useRef } from 'react';
import { Fa, Icons } from '../lib/icons';

const PHONE      = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const SERVICES_DD = [
  { icon: Icons.emergency,     label: 'Emergency Plumbing',  sub: '24/7 rapid response'        },
  { icon: Icons.eyeDropper,    label: 'Leak & Pipe Repair',  sub: 'Detect & fix any leak'      },
  { icon: Icons.water,         label: 'Drain Cleaning',      sub: 'Clear any blockage fast'    },
  { icon: Icons.fire,          label: 'Water Heaters',       sub: 'Install, repair, replace'   },
  { icon: Icons.bath,          label: 'Toilets',             sub: 'Repair & replacement'        },
  { icon: Icons.shower,        label: 'Faucets & Sinks',     sub: 'All fixture work'           },
  { icon: Icons.merge,         label: 'Sewer Services',      sub: 'Camera & trenchless repair' },
  { icon: Icons.arrowsUpDown,  label: 'Water Lines',         sub: 'Main & supply lines'        },
  { icon: Icons.shower,        label: 'Bathroom Plumbing',   sub: 'Full bathroom fit-outs'     },
  { icon: Icons.utensils,      label: 'Kitchen Plumbing',    sub: 'Sinks, disposals & more'    },
  { icon: Icons.search,        label: 'Plumbing Inspection', sub: 'Preventative maintenance'   },
];

const NAV = [
  { label: 'Home',     anchor: null,         hasDD: false },
  { label: 'Services', anchor: '#services',  hasDD: true  },
  { label: 'About Us', anchor: '#about',     hasDD: false },
  { label: 'Contact',  anchor: '#contact',   hasDD: false },
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
  const [svcOpen,  setSvcOpen]  = useState(false);
  const svcTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); setSvcOpen(false); }
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  const onHero = !scrolled;
  const BLUE   = '#3B82F6';

  const showSvc = () => { if (svcTimer.current) clearTimeout(svcTimer.current); setSvcOpen(true); };
  const hideSvc = () => { svcTimer.current = setTimeout(() => setSvcOpen(false), 150); };
  const keepSvc = () => { if (svcTimer.current) clearTimeout(svcTimer.current); };

  const navLinkColor = (label: string) =>
    onHero
      ? active === label ? '#fff' : 'rgba(255,255,255,0.65)'
      : active === label ? '#0C1829' : '#64748B';

  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        /* Transparent over hero, white after scroll */
        background: onHero ? 'transparent' : '#fff',
        backdropFilter: onHero ? 'none' : 'blur(20px)',
        WebkitBackdropFilter: onHero ? 'none' : 'blur(20px)',
        borderBottom: onHero ? 'none' : '1px solid rgba(30,58,95,0.09)',
        boxShadow: onHero ? 'none' : '0 1px 20px rgba(30,58,95,0.07)',
        transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 28px',
          height: 68,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16,
        }}>

          {/* ── Logo ── */}
          <button onClick={() => goTo(null)} aria-label="FlowRight Plumbing — home"
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0,
            }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9, flexShrink: 0,
              background: onHero ? 'rgba(37,99,235,0.85)' : '#2563EB',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(37,99,235,0.35)',
              transition: 'background 0.3s',
            }}>
              <Fa icon={Icons.droplet} style={{ color: '#fff', fontSize: 15 }} />
            </div>
            <div style={{ lineHeight: 1.15 }}>
              <span style={{
                display: 'block', fontSize: 15, fontWeight: 800, letterSpacing: '-0.3px',
                color: onHero ? '#fff' : '#0C1829', transition: 'color 0.3s',
              }}>FlowRight</span>
              <span style={{
                display: 'block', fontSize: 10.5, fontWeight: 500,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: onHero ? 'rgba(255,255,255,0.5)' : '#64748B', transition: 'color 0.3s',
              }}>Plumbing</span>
            </div>
          </button>

          {/* ── Desktop nav — center ── */}
          <nav
            aria-label="Primary navigation"
            className="desk-nav"
            style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center', gap: 2 }}
          >
            {NAV.map(n => {
              const isActive = active === n.label;
              const isSvc    = n.hasDD;

              return (
                <div
                  key={n.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={isSvc ? showSvc : undefined}
                  onMouseLeave={isSvc ? hideSvc : undefined}
                >
                  {/* Nav button — self-contained, no separately positioned background */}
                  <button
                    onClick={() => { setActive(n.label); goTo(n.anchor); if (isSvc) setSvcOpen(false); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      whiteSpace: 'nowrap',
                      background: isActive && !onHero ? '#F0F9FF' : 'transparent',
                      border: 'none', cursor: 'pointer',
                      fontSize: 13.5, fontWeight: isActive ? 600 : 400,
                      color: navLinkColor(n.label),
                      padding: '7px 12px', borderRadius: 7,
                      transition: 'color 0.15s, background 0.15s',
                      position: 'relative',
                    }}
                    onMouseEnter={e => {
                      if (!isSvc) {
                        e.currentTarget.style.color = onHero ? '#fff' : '#0C1829';
                        e.currentTarget.style.background = onHero ? 'rgba(255,255,255,0.08)' : '#F0F9FF';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isSvc) {
                        e.currentTarget.style.color = navLinkColor(n.label);
                        e.currentTarget.style.background = isActive && !onHero ? '#F0F9FF' : 'transparent';
                      }
                    }}
                  >
                    {n.label}
                    {isSvc && (
                      <Fa icon={Icons.chevronDown} style={{
                        fontSize: 10, color: 'inherit',
                        transition: 'transform 0.2s',
                        transform: svcOpen ? 'rotate(180deg)' : 'rotate(0)',
                      }} />
                    )}
                    {/* Active underline — part of the button, not separate */}
                    {isActive && (
                      <span style={{
                        position: 'absolute', bottom: 3, left: 12, right: 12,
                        height: 2, borderRadius: 1, background: BLUE,
                        pointerEvents: 'none',
                      }} />
                    )}
                  </button>

                  {/* ── Services dropdown — only on Services ── */}
                  {isSvc && svcOpen && (
                    <div
                      onMouseEnter={keepSvc}
                      onMouseLeave={hideSvc}
                      style={{
                        position: 'absolute', top: 'calc(100% + 6px)',
                        left: '50%', transform: 'translateX(-50%)',
                        width: 580,
                        background: onHero ? 'rgba(8,16,34,0.97)' : '#fff',
                        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                        border: onHero ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0',
                        borderRadius: 14,
                        padding: '16px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
                        zIndex: 300,
                        animation: 'fadeInUp 0.15s ease both',
                      }}
                    >
                      {/* Dropdown header */}
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        paddingBottom: 10, marginBottom: 8,
                        borderBottom: onHero ? '1px solid rgba(255,255,255,0.07)' : '1px solid #F1F5F9',
                      }}>
                        <span style={{
                          fontSize: 10.5, fontWeight: 700,
                          color: onHero ? 'rgba(148,175,210,0.55)' : '#94A3B8',
                          letterSpacing: '0.16em', textTransform: 'uppercase',
                        }}>Our Plumbing Services</span>
                        <button
                          onClick={() => { setActive('Services'); goTo('#services'); setSvcOpen(false); }}
                          style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            fontSize: 11.5, fontWeight: 600, color: BLUE,
                            display: 'flex', alignItems: 'center', gap: 5,
                          }}
                        >
                          View all <Fa icon={Icons.arrowRight} style={{ fontSize: 10 }} />
                        </button>
                      </div>

                      {/* 3-col grid */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
                        {SERVICES_DD.map(item => (
                          <button
                            key={item.label}
                            onClick={() => { setActive('Services'); goTo('#services'); setSvcOpen(false); }}
                            style={{
                              background: 'none', border: 'none', cursor: 'pointer',
                              display: 'flex', alignItems: 'flex-start', gap: 9,
                              padding: '8px 10px', borderRadius: 8, textAlign: 'left',
                              transition: 'background 0.12s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = onHero ? 'rgba(59,130,246,0.1)' : '#EFF6FF')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                          >
                            <div style={{
                              width: 28, height: 28, borderRadius: 7, flexShrink: 0, marginTop: 1,
                              background: onHero ? 'rgba(59,130,246,0.15)' : '#DBEAFE',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              <Fa icon={item.icon} style={{ fontSize: 12, color: BLUE }} />
                            </div>
                            <div>
                              <p style={{
                                fontSize: 12.5, fontWeight: 600, marginBottom: 1, lineHeight: 1.2,
                                color: onHero ? '#E2EAF6' : '#0C1829',
                              }}>{item.label}</p>
                              <p style={{ fontSize: 11, lineHeight: 1.3, color: onHero ? 'rgba(148,175,210,0.55)' : '#94A3B8' }}>
                                {item.sub}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Footer CTAs */}
                      <div style={{
                        display: 'flex', gap: 8, marginTop: 12, paddingTop: 12,
                        borderTop: onHero ? '1px solid rgba(255,255,255,0.07)' : '1px solid #F1F5F9',
                      }}>
                        <button
                          onClick={() => { goTo('#contact'); setSvcOpen(false); }}
                          style={{
                            flex: 1, background: '#2563EB', color: '#fff',
                            border: 'none', borderRadius: 8, padding: '10px',
                            fontSize: 12.5, fontWeight: 700, cursor: 'pointer',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = '#1D4ED8')}
                          onMouseLeave={e => (e.currentTarget.style.background = '#2563EB')}
                        >
                          Book a Service
                        </button>
                        <a href={PHONE_HREF}
                          style={{
                            flex: 1, background: onHero ? 'rgba(255,255,255,0.08)' : '#F1F5F9',
                            color: onHero ? '#E2EAF6' : '#0C1829',
                            borderRadius: 8, padding: '10px',
                            fontSize: 12.5, fontWeight: 600,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                            textDecoration: 'none', transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = onHero ? 'rgba(255,255,255,0.14)' : '#E2E8F0')}
                          onMouseLeave={e => (e.currentTarget.style.background = onHero ? 'rgba(255,255,255,0.08)' : '#F1F5F9')}
                        >
                          <Fa icon={Icons.phone} style={{ fontSize: 12 }} /> Call Now
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── Desktop right ── */}
          <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <a href={PHONE_HREF}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap',
                color: onHero ? 'rgba(255,255,255,0.65)' : '#64748B',
                textDecoration: 'none', transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = onHero ? '#fff' : '#0C1829')}
              onMouseLeave={e => (e.currentTarget.style.color = onHero ? 'rgba(255,255,255,0.65)' : '#64748B')}
            >
              <Fa icon={Icons.phone} style={{ fontSize: 13 }} />
              {PHONE}
            </a>
            <button onClick={() => goTo('#contact')} className="btn btn-slate"
              style={{ padding: '9px 20px', fontSize: 13, borderRadius: 7, flexShrink: 0 }}>
              Book a Service
            </button>
          </div>

          {/* ── Mobile right ── */}
          <div className="mob-nav" style={{ display: 'none', alignItems: 'center', gap: 4 }}>
            <button onClick={() => goTo('#contact')} className="btn btn-slate"
              style={{ padding: '8px 14px', fontSize: 13, borderRadius: 7 }}>
              Book Now
            </button>
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px', display: 'flex',
                color: onHero ? '#fff' : '#0C1829', borderRadius: 6,
              }}
            >
              <Fa icon={open ? Icons.xmark : Icons.bars} style={{ fontSize: 20 }} />
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════ MOBILE DRAWER ═══════════════════ */}
      <div
        role="dialog" aria-modal="true" aria-label="Navigation"
        style={{
          position: 'fixed', inset: 0, zIndex: 90,
          background: '#0C1829',
          paddingTop: 68, display: 'flex', flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '12px 28px 20px' }}>
          {NAV.map(n => (
            <button key={n.label}
              onClick={() => { setOpen(false); setActive(n.label); goTo(n.anchor); }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', fontSize: 19, fontWeight: 500,
                color: '#F1F5F9', padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
              onMouseLeave={e => (e.currentTarget.style.color = '#F1F5F9')}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: '8px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button onClick={() => { setOpen(false); goTo('#contact'); }} className="btn btn-slate"
            style={{ padding: '16px', fontSize: 16, borderRadius: 10, width: '100%' }}>
            Book a Service
          </button>
          <a href={PHONE_HREF} className="btn btn-ghost"
            style={{ padding: '15px', fontSize: 15, borderRadius: 10, textDecoration: 'none',
                     display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Fa icon={Icons.phone} style={{ fontSize: 15 }} /> Call {PHONE}
          </a>
        </div>
        <p style={{
          textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 12,
          marginTop: 'auto', padding: '24px 28px calc(28px + env(safe-area-inset-bottom))',
        }}>
          Available 24/7 for emergencies
        </p>
      </div>

      {/* ═══════════════════ MOBILE STICKY BOTTOM BAR ═══════════════════ */}
      <div className="mob-bar" aria-hidden={!scrolled}
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
        }}>
        <a href={PHONE_HREF} tabIndex={scrolled ? 0 : -1}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 14, fontWeight: 600, color: '#2563EB',
            padding: '15px', textDecoration: 'none',
            borderRight: '1px solid rgba(30,58,95,0.08)',
          }}>
          <Fa icon={Icons.phone} style={{ fontSize: 14 }} /> Call Now
        </a>
        <button onClick={() => goTo('#contact')} tabIndex={scrolled ? 0 : -1}
          style={{
            background: '#2563EB', color: '#fff', fontSize: 14, fontWeight: 700,
            border: 'none', cursor: 'pointer',
          }}>
          Book a Service
        </button>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .desk-nav { display: none !important; }
          .mob-nav  { display: flex !important; }
          .mob-bar  { display: grid !important; }
        }
      `}</style>
    </>
  );
}
