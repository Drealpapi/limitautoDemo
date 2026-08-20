import { useState } from 'react';
import { MapPin, Wrench, Clock, Search, Phone, ShieldCheck, Star, Zap } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

function goTo(anchor: string) {
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
}

const STATS = [
  { num: '500+', label: 'Jobs Completed' },
  { num: '4.9★', label: 'Avg Rating'     },
  { num: '24/7', label: 'Available'      },
];

const TRUST = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Zap,         label: 'Same-Day Response'  },
  { icon: Star,        label: 'Highly Rated'        },
];

const SERVICE_TYPES = [
  'Any Service', 'Emergency Plumbing', 'Drain Cleaning',
  'Leak Detection', 'Water Heater', 'Pipe Repair',
  'Bathroom & Kitchen', 'Sewer Line', 'Commercial',
];
const URGENCY = ['Any Time', 'Emergency – Now', 'Today', 'Scheduled'];

export default function Hero() {
  const [location, setLocation] = useState('');
  const [service,  setService]  = useState('Any Service');
  const [urgency,  setUrgency]  = useState('Any Time');

  return (
    <section style={{ background: '#D5E9F6', position: 'relative', overflow: 'hidden', paddingTop: 68 }} aria-label="Hero">

      <div style={{
        maxWidth: 1160, margin: '0 auto', padding: '0 32px',
        display: 'grid', gridTemplateColumns: '1fr 460px',
        minHeight: 500, alignItems: 'stretch',
      }} className="hero-grid">

        {/* ── LEFT ── */}
        <div style={{
          paddingTop: 56, paddingBottom: 120,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          {/* Live pulse badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(245,124,43,0.12)',
            border: '1px solid rgba(245,124,43,0.3)',
            borderRadius: 100, padding: '6px 14px 6px 10px',
            marginBottom: 28, width: 'fit-content',
            animation: 'fadeInUp 0.4s ease both',
          }}>
            <span style={{ position: 'relative', display: 'flex', width: 10, height: 10 }}>
              <span style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                background: '#F57C2B', opacity: 0.5,
                animation: 'pulse-dot 1.4s ease-in-out infinite',
              }} />
              <span style={{ position: 'relative', width: 10, height: 10, borderRadius: '50%', background: '#F57C2B', display: 'block' }} />
            </span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#E06820', letterSpacing: '0.02em' }}>
              24/7 Emergency Service Available
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.6rem, 5.2vw, 3.8rem)',
            fontWeight: 800, color: '#0A0A0A',
            lineHeight: 1.06, letterSpacing: '-1.5px',
            marginBottom: 20,
            animation: 'fadeInUp 0.5s ease 0.1s both',
          }}>
            Reliable Plumbing.<br />Done Right.
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 16, color: '#4A5568', lineHeight: 1.75,
            maxWidth: 400, marginBottom: 36,
            animation: 'fadeInUp 0.5s ease 0.2s both',
          }}>
            From emergency repairs to full installations — dependable plumbing solutions for homes and businesses.
          </p>

          {/* CTA row */}
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap',
            marginBottom: 40,
            animation: 'fadeInUp 0.5s ease 0.3s both',
          }}>
            <button
              onClick={() => goTo('#contact')}
              className="btn-glass btn-primary"
              style={{ padding: '14px 32px', fontSize: 14, borderRadius: 9 }}
            >
              Get Started
            </button>
            <a
              href={PHONE_HREF}
              className="btn-glass btn-ghost-light"
              style={{ padding: '13px 24px', fontSize: 14, borderRadius: 9, textDecoration: 'none' }}
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>

          {/* Trust pills */}
          <div style={{
            display: 'flex', gap: 20, flexWrap: 'wrap',
            marginBottom: 44,
            animation: 'fadeInUp 0.5s ease 0.38s both',
          }}>
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: '#3A4A5E', fontWeight: 500 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 6,
                  background: 'rgba(27,111,219,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={12} color="#1B6FDB" />
                </div>
                {label}
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: 0,
            borderTop: '1px solid rgba(0,0,0,0.1)',
            paddingTop: 28,
            animation: 'fadeInUp 0.5s ease 0.46s both',
          }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                paddingRight: 32, marginRight: 32,
                borderRight: i < STATS.length - 1 ? '1px solid rgba(0,0,0,0.12)' : 'none',
              }}>
                <p style={{ fontSize: 26, fontWeight: 800, color: '#0A0A0A', lineHeight: 1, marginBottom: 4 }}>
                  {s.num.replace('+','').replace('★','')}
                  {s.num.includes('+') && <span style={{ color: '#1B6FDB' }}>+</span>}
                  {s.num.includes('★') && <span style={{ color: '#F59E0B', fontSize: 20 }}>★</span>}
                </p>
                <p style={{ fontSize: 11.5, color: '#6B7280', fontWeight: 500, letterSpacing: '0.02em' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: photo ── */}
        <div className="hero-photo" style={{ position: 'relative', overflow: 'hidden' }} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=960&q=88&auto=format&fit=crop"
            alt=""
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
            }}
            fetchPriority="high"
          />
          {/* Left edge blend */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #D5E9F6 0%, rgba(213,233,246,0.4) 25%, transparent 55%)',
          }} />
          {/* Bottom blend */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 180,
            background: 'linear-gradient(to top, #D5E9F6 0%, transparent 100%)',
          }} />

          {/* Floating glass card — top left */}
          <div style={{
            position: 'absolute', top: 40, left: 28,
            background: 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: 14, padding: '14px 18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            minWidth: 170,
          }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#F57C2B', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>Emergency Line</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 30, height: 30, borderRadius: 8,
                background: 'linear-gradient(135deg,#F57C2B,#FF9A4A)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(245,124,43,0.35)',
              }}>
                <Phone size={13} color="#fff" />
              </div>
              <p style={{ fontSize: 13, fontWeight: 800, color: '#111', lineHeight: 1.2 }}>{PHONE}</p>
            </div>
          </div>

          {/* Floating glass card — bottom right */}
          <div style={{
            position: 'absolute', bottom: 60, right: 24,
            background: 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: 14, padding: '14px 18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Rating</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22, fontWeight: 800, color: '#111', lineHeight: 1 }}>4.9</span>
              <div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="11" height="11" viewBox="0 0 12 12">
                      <path d="M6 1l1.2 3.6H11L8.1 6.8l1.2 3.7L6 8.5l-3.3 2 1.2-3.7L1 4.6h3.8z" fill="#F59E0B"/>
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: 10, color: '#9CA3AF' }}>500+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search card ── */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '16px 16px 0 0',
          border: '1px solid rgba(255,255,255,0.8)',
          borderBottom: 'none',
          boxShadow: '0 -4px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)',
          padding: '28px 32px 32px',
        }}>
          <p style={{ fontSize: 13.5, fontWeight: 700, color: '#111', marginBottom: 20, letterSpacing: '-0.1px' }}>
            Search for available services
          </p>
          <form
            onSubmit={e => { e.preventDefault(); goTo('#contact'); }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 14, alignItems: 'stretch' }}
            className="search-form"
            role="search"
            aria-label="Find a plumbing service"
          >
            {/* Location */}
            <div style={{ position: 'relative' }}>
              <label htmlFor="s-loc" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 7 }}>Location</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={14} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#1B6FDB', pointerEvents: 'none' }} />
                <input
                  id="s-loc" type="text" placeholder="Your city or zip code"
                  value={location} onChange={e => setLocation(e.target.value)}
                  style={{
                    width: '100%', padding: '11px 12px 11px 36px',
                    border: '1.5px solid #E5E7EB', borderRadius: 9,
                    fontSize: 13, color: '#111', outline: 'none',
                    fontFamily: 'inherit', background: '#FAFAFA',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#1B6FDB'; e.target.style.boxShadow = '0 0 0 3px rgba(27,111,219,0.1)'; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; e.target.style.background = '#FAFAFA'; }}
                />
              </div>
            </div>

            {/* Service type */}
            <div>
              <label htmlFor="s-type" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 7 }}>Service Type</label>
              <div style={{ position: 'relative' }}>
                <Wrench size={14} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#1B6FDB', pointerEvents: 'none', zIndex: 1 }} />
                <select
                  id="s-type" value={service} onChange={e => setService(e.target.value)}
                  style={{
                    width: '100%', padding: '11px 12px 11px 36px',
                    border: '1.5px solid #E5E7EB', borderRadius: 9,
                    fontSize: 13, color: '#111', outline: 'none',
                    appearance: 'none', background: '#FAFAFA',
                    cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#1B6FDB'; e.target.style.boxShadow = '0 0 0 3px rgba(27,111,219,0.1)'; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; e.target.style.background = '#FAFAFA'; }}
                >
                  {SERVICE_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label htmlFor="s-urg" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 7 }}>When</label>
              <div style={{ position: 'relative' }}>
                <Clock size={14} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#1B6FDB', pointerEvents: 'none', zIndex: 1 }} />
                <select
                  id="s-urg" value={urgency} onChange={e => setUrgency(e.target.value)}
                  style={{
                    width: '100%', padding: '11px 12px 11px 36px',
                    border: '1.5px solid #E5E7EB', borderRadius: 9,
                    fontSize: 13, color: '#111', outline: 'none',
                    appearance: 'none', background: '#FAFAFA',
                    cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#1B6FDB'; e.target.style.boxShadow = '0 0 0 3px rgba(27,111,219,0.1)'; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; e.target.style.background = '#FAFAFA'; }}
                >
                  {URGENCY.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Button — aligned to bottom with label height offset */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ display: 'block', fontSize: 11, marginBottom: 7, opacity: 0 }}>Go</span>
              <button
                type="submit"
                className="btn-glass btn-primary"
                style={{ padding: '11px 26px', fontSize: 13.5, borderRadius: 9, flex: 1 }}
              >
                <Search size={14} />
                Search Now
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid   { grid-template-columns: 1fr !important; }
          .hero-photo  { display: none !important; }
          .search-form { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
}
