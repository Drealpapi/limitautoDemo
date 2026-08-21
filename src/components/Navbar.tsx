import { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, Droplets, ChevronDown,
  Zap, Waves, Droplets as Drop, Flame, Bath,
  Pipette, GitMerge, ArrowDownUp, ShowerHead,
  UtensilsCrossed, Search, MapPin, Users, Info,
  MessageSquare, Star } from 'lucide-react';

const PHONE      = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

/* Services mega-hover items */
const SERVICE_ITEMS = [
  { icon: Zap,             label: 'Emergency Plumbing',    sub: '24/7 rapid response',                anchor: '#services' },
  { icon: Drop,            label: 'Leak & Pipe Repair',    sub: 'Detect & fix any leak',              anchor: '#services' },
  { icon: Waves,           label: 'Drain Cleaning',        sub: 'Clear any blockage fast',            anchor: '#services' },
  { icon: Flame,           label: 'Water Heaters',         sub: 'Install, repair, replace',           anchor: '#services' },
  { icon: Bath,            label: 'Toilets',               sub: 'Repair & replacement',               anchor: '#services' },
  { icon: Pipette,         label: 'Faucets & Sinks',       sub: 'All fixture work',                   anchor: '#services' },
  { icon: GitMerge,        label: 'Sewer Services',        sub: 'Camera & trenchless repair',         anchor: '#services' },
  { icon: ArrowDownUp,     label: 'Water Lines',           sub: 'Main & supply lines',                anchor: '#services' },
  { icon: ShowerHead,      label: 'Bathroom Plumbing',     sub: 'Full bathroom fit-outs',             anchor: '#services' },
  { icon: UtensilsCrossed, label: 'Kitchen Plumbing',      sub: 'Sinks, disposals & more',            anchor: '#services' },
  { icon: Search,          label: 'Plumbing Inspection',   sub: 'Preventative maintenance',           anchor: '#services' },
];

/* Simple single-item hover popups for other nav links */
const NAV_META: Record<string, { icon: React.ElementType; desc: string }> = {
  'About Us': { icon: Info,         desc: 'Learn about FlowRight Plumbing and our team' },
  'Our Work': { icon: Star,         desc: 'Browse our completed plumbing projects'       },
  'Reviews':  { icon: MessageSquare,desc: 'See what our customers say about us'          },
  'Contact':  { icon: MapPin,       desc: 'Get in touch or book a service today'         },
  'Our Team': { icon: Users,        desc: 'Meet our licensed plumbing professionals'     },
};

const NAV = [
  { label: 'Home',     anchor: null         },
  { label: 'Services', anchor: '#services', hasDropdown: true },
  { label: 'About Us', anchor: '#about'    },
  { label: 'Our Work', anchor: '#gallery'  },
  { label: 'Reviews',  anchor: '#reviews'  },
  { label: 'Contact',  anchor: '#contact'  },
];

function goTo(anchor: string | null) {
  if (!anchor) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open,     setOpen]       = useState(false);
  const [active,   setActive]     = useState('Home');
  const [hovered,  setHovered]    = useState<string | null>(null);
  const hideTimer                 = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  /* delayed hide so moving into the dropdown doesn't flicker */
  const showPopup  = (label: string) => { if (hideTimer.current) clearTimeout(hideTimer.current); setHovered(label); };
  const queueHide  = () => { hideTimer.current = setTimeout(() => setHovered(null), 120); };
  const cancelHide = () => { if (hideTimer.current) clearTimeout(hideTimer.current); };

  /* Accent colour for hover highlights — stands out on both dark and light nav */
  const ACCENT = '#3B82F6';          /* bright blue */
  const ACCENT_BG_DARK  = 'rgba(59,130,246,0.15)';
  const ACCENT_BG_LIGHT = '#EFF6FF';

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: onHero ? 'rgba(12,24,41,0.65)' : '#fff',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: onHero ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(30,58,95,0.09)',
        boxShadow: onHero ? 'none' : '0 1px 20px rgba(30,58,95,0.07)',
        transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 28px',
          height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 20,
        }}>

          {/* ── Logo ── */}
          <button onClick={() => goTo(null)} aria-label="FlowRight Plumbing — home"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                     display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0 }}>
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
              <span style={{ display: 'block', fontSize: 15, fontWeight: 800, letterSpacing: '-0.3px',
                             color: onHero ? '#fff' : '#0C1829', transition: 'color 0.3s' }}>
                FlowRight
              </span>
              <span style={{ display: 'block', fontSize: 10.5, fontWeight: 500, letterSpacing: '0.08em',
                             textTransform: 'uppercase',
                             color: onHero ? 'rgba(255,255,255,0.5)' : '#64748B',
                             transition: 'color 0.3s' }}>
                Plumbing
              </span>
            </div>
          </button>

          {/* ── Desktop nav ── */}
          <nav aria-label="Primary navigation" className="desk-nav"
            style={{ display: 'flex', alignItems: 'center', gap: 0, flex: 1, justifyContent: 'center',
                     position: 'relative' }}>
            {NAV.map(n => {
              const isActive  = active === n.label;
              const isHov     = hovered === n.label;
              const hasDD     = !!n.hasDropdown;
              const hasMeta   = !!NAV_META[n.label];

              return (
                <div
                  key={n.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => (hasDD || hasMeta) ? showPopup(n.label) : undefined}
                  onMouseLeave={() => (hasDD || hasMeta) ? queueHide() : undefined}
                >
                  <button
                    onClick={() => { setActive(n.label); goTo(n.anchor); setHovered(null); }}
                    style={{
                      background: isHov
                        ? (onHero ? ACCENT_BG_DARK : ACCENT_BG_LIGHT)
                        : 'none',
                      border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 3,
                      fontSize: 13.5, fontWeight: isActive ? 600 : 400,
                      color: isHov
                        ? ACCENT
                        : onHero
                          ? (isActive ? '#fff' : 'rgba(255,255,255,0.65)')
                          : (isActive ? '#0C1829' : '#64748B'),
                      padding: '6px 13px',
                      borderRadius: 7,
                      position: 'relative',
                      transition: 'color 0.15s, background 0.15s',
                    }}
                  >
                    {n.label}
                    {hasDD && (
                      <ChevronDown size={12}
                        style={{ transition: 'transform 0.2s', transform: isHov ? 'rotate(180deg)' : 'rotate(0)' }} />
                    )}
                    {/* Active underline */}
                    {isActive && !isHov && (
                      <span style={{
                        position: 'absolute', bottom: 2, left: 13, right: 13,
                        height: 2, borderRadius: 1, background: ACCENT,
                      }} />
                    )}
                  </button>

                  {/* ── SERVICES MEGA DROPDOWN ── */}
                  {hasDD && isHov && (
                    <div
                      onMouseEnter={cancelHide}
                      onMouseLeave={queueHide}
                      style={{
                        position: 'absolute', top: 'calc(100% + 8px)',
                        left: '50%', transform: 'translateX(-50%)',
                        width: 620,
                        background: onHero
                          ? 'rgba(10,20,42,0.96)'
                          : '#fff',
                        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                        border: onHero
                          ? '1px solid rgba(255,255,255,0.1)'
                          : '1px solid rgba(30,58,95,0.12)',
                        borderRadius: 14,
                        padding: '16px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                        animation: 'fadeInUp 0.18s ease both',
                        zIndex: 200,
                      }}
                    >
                      {/* Header */}
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        paddingBottom: 12, marginBottom: 10,
                        borderBottom: onHero ? '1px solid rgba(255,255,255,0.08)' : '1px solid #EEF2F8',
                      }}>
                        <p style={{ fontSize: 11, fontWeight: 700,
                          color: onHero ? 'rgba(148,175,210,0.6)' : '#94A3B8',
                          letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                          Our Plumbing Services
                        </p>
                        <button
                          onClick={() => { setActive('Services'); goTo('#services'); setHovered(null); }}
                          style={{ background: 'none', border: 'none', cursor: 'pointer',
                            fontSize: 11.5, fontWeight: 600, color: ACCENT,
                            display: 'flex', alignItems: 'center', gap: 4 }}
                        >
                          View all →
                        </button>
                      </div>

                      {/* Grid of service items */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}>
                        {SERVICE_ITEMS.map(item => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.label}
                              onClick={() => { setActive('Services'); goTo(item.anchor); setHovered(null); }}
                              style={{
                                background: 'none', border: 'none', cursor: 'pointer',
                                display: 'flex', alignItems: 'flex-start', gap: 10,
                                padding: '9px 10px', borderRadius: 9, textAlign: 'left',
                                transition: 'background 0.12s',
                              }}
                              onMouseEnter={e => (e.currentTarget.style.background = onHero ? 'rgba(59,130,246,0.12)' : '#EFF6FF')}
                              onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                            >
                              <div style={{
                                width: 30, height: 30, borderRadius: 7, flexShrink: 0, marginTop: 1,
                                background: onHero ? 'rgba(59,130,246,0.15)' : '#DBEAFE',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                              }}>
                                <Icon size={14} color={ACCENT} />
                              </div>
                              <div>
                                <p style={{ fontSize: 12.5, fontWeight: 600,
                                  color: onHero ? '#E2EAF6' : '#0C1829', marginBottom: 1, lineHeight: 1.2 }}>
                                  {item.label}
                                </p>
                                <p style={{ fontSize: 11, color: onHero ? 'rgba(148,175,210,0.6)' : '#94A3B8', lineHeight: 1.3 }}>
                                  {item.sub}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Footer CTA */}
                      <div style={{
                        marginTop: 12, paddingTop: 12,
                        borderTop: onHero ? '1px solid rgba(255,255,255,0.08)' : '1px solid #EEF2F8',
                        display: 'flex', gap: 8,
                      }}>
                        <button
                          onClick={() => { goTo('#contact'); setHovered(null); }}
                          style={{
                            flex: 1, background: ACCENT, color: '#fff',
                            border: 'none', borderRadius: 8, padding: '10px',
                            fontSize: 12.5, fontWeight: 700, cursor: 'pointer',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = '#2563EB')}
                          onMouseLeave={e => (e.currentTarget.style.background = ACCENT)}
                        >
                          Book a Service
                        </button>
                        <a href={PHONE_HREF}
                          style={{
                            flex: 1, background: onHero ? 'rgba(255,255,255,0.08)' : '#F1F5F9',
                            color: onHero ? '#E2EAF6' : '#0C1829',
                            border: 'none', borderRadius: 8, padding: '10px',
                            fontSize: 12.5, fontWeight: 600, cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                            textDecoration: 'none', transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = onHero ? 'rgba(255,255,255,0.14)' : '#E2E8F0')}
                          onMouseLeave={e => (e.currentTarget.style.background = onHero ? 'rgba(255,255,255,0.08)' : '#F1F5F9')}
                        >
                          <Phone size={13} /> Call Now
                        </a>
                      </div>
                    </div>
                  )}

                  {/* ── SIMPLE HOVER TOOLTIP for other links ── */}
                  {hasMeta && isHov && (
                    <div
                      onMouseEnter={cancelHide}
                      onMouseLeave={queueHide}
                      style={{
                        position: 'absolute', top: 'calc(100% + 8px)',
                        left: '50%', transform: 'translateX(-50%)',
                        width: 220,
                        background: onHero ? 'rgba(10,20,42,0.96)' : '#fff',
                        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                        border: onHero ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(30,58,95,0.12)',
                        borderRadius: 10, padding: '12px 14px',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                        animation: 'fadeInUp 0.15s ease both',
                        zIndex: 200,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {/* Arrow pointer */}
                      <div style={{
                        position: 'absolute', top: -5, left: '50%',
                        width: 10, height: 10, borderRadius: 2,
                        background: onHero ? 'rgba(10,20,42,0.96)' : '#fff',
                        border: onHero ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(30,58,95,0.12)',
                        borderRight: 'none', borderBottom: 'none',
                        transform: 'translateX(-50%) rotate(45deg)',
                      }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                          background: onHero ? 'rgba(59,130,246,0.15)' : '#DBEAFE',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          {(() => { const Icon = NAV_META[n.label].icon; return <Icon size={14} color={ACCENT} />; })()}
                        </div>
                        <p style={{ fontSize: 12, color: onHero ? 'rgba(200,220,245,0.8)' : '#374151', lineHeight: 1.4 }}>
                          {NAV_META[n.label].desc}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── Desktop right ── */}
          <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 18, flexShrink: 0 }}>
            <a href={PHONE_HREF}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 13, fontWeight: 500,
                color: onHero ? 'rgba(255,255,255,0.65)' : '#64748B',
                textDecoration: 'none', transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = onHero ? '#fff' : '#0C1829')}
              onMouseLeave={e => (e.currentTarget.style.color = onHero ? 'rgba(255,255,255,0.65)' : '#64748B')}
            >
              <Phone size={13} /> {PHONE}
            </a>
            <button onClick={() => goTo('#contact')} className="btn btn-slate"
              style={{ padding: '9px 20px', fontSize: 13, borderRadius: 7 }}>
              Book a Service
            </button>
          </div>

          {/* ── Mobile right ── */}
          <div className="mob-nav" style={{ display: 'none', alignItems: 'center', gap: 4 }}>
            <button onClick={() => goTo('#contact')} className="btn btn-slate"
              style={{ padding: '8px 16px', fontSize: 13, borderRadius: 7 }}>
              Book Now
            </button>
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mob-drawer"
              style={{ background: 'none', border: 'none', cursor: 'pointer',
                       padding: '8px', display: 'flex',
                       color: onHero ? '#fff' : '#0C1829', borderRadius: 6 }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div id="mob-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu"
        style={{
          position: 'fixed', inset: 0, zIndex: 90, background: '#0C1829',
          paddingTop: 68, display: 'flex', flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}>
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '16px 28px 24px' }}>
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
              onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
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
            style={{ padding: '15px', fontSize: 15, borderRadius: 10, textDecoration: 'none' }}>
            <Phone size={16} /> Call {PHONE}
          </a>
        </div>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 12,
                    marginTop: 'auto', padding: '24px 28px calc(28px + env(safe-area-inset-bottom))' }}>
          Available 24/7 for emergencies
        </p>
      </div>

      {/* ── Mobile sticky bottom bar ── */}
      <div className="mob-bar" aria-hidden={!scrolled}
        style={{
          display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 80,
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
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                   fontSize: 14, fontWeight: 600, color: '#2563EB', padding: '15px',
                   textDecoration: 'none', borderRight: '1px solid rgba(30,58,95,0.08)' }}>
          <Phone size={15} /> Call Now
        </a>
        <button onClick={() => goTo('#contact')} tabIndex={scrolled ? 0 : -1}
          style={{ background: '#2563EB', color: '#fff', fontSize: 14, fontWeight: 700,
                   border: 'none', cursor: 'pointer' }}>
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
