import { useState } from 'react';
import { MapPin, Wrench, Clock, Search, Phone, ShieldCheck, Star, Zap } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

function goTo(a: string) {
  const el = document.querySelector(a);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

const STATS = [
  { num: '500+', label: 'Jobs Completed' },
  { num: '4.9',  label: 'Average Rating' },
  { num: '24/7', label: 'Emergency Line' },
];

const TRUST = [
  { icon: ShieldCheck, text: 'Licensed & Insured'  },
  { icon: Zap,         text: 'Same-Day Response'   },
  { icon: Star,        text: 'Highly Rated'         },
];

const SERVICE_TYPES = [
  'Any Service','Emergency Plumbing','Drain Cleaning',
  'Leak Detection','Water Heater','Pipe Repair',
  'Bathroom & Kitchen','Sewer Line','Commercial',
];
const URGENCY = ['Any Time','Emergency — Now','Today','Scheduled'];

/* shared input style */
const inp: React.CSSProperties = {
  width: '100%',
  padding: '11px 12px 11px 36px',
  border: '1.5px solid #E2E8F0',
  borderRadius: 6,
  fontSize: 13,
  color: '#1E2D45',
  outline: 'none',
  fontFamily: 'inherit',
  background: '#F8FAFF',
  transition: 'border-color 0.15s, box-shadow 0.15s',
};

export default function Hero() {
  const [location, setLocation] = useState('');
  const [service,  setService]  = useState('Any Service');
  const [urgency,  setUrgency]  = useState('Any Time');

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#4A6FA5';
    e.target.style.boxShadow   = '0 0 0 3px rgba(74,111,165,0.12)';
    e.target.style.background  = '#fff';
  };
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#E2E8F0';
    e.target.style.boxShadow   = 'none';
    e.target.style.background  = '#F8FAFF';
  };

  return (
    <section style={{ background: '#EBF1FA', position: 'relative', overflow: 'hidden', paddingTop: 68 }} aria-label="Hero">

      {/* ── Two-column grid ── */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        display: 'grid', gridTemplateColumns: '1fr 480px',
        minHeight: 480, alignItems: 'stretch',
      }} className="hero-grid">

        {/* LEFT */}
        <div style={{ paddingTop: 52, paddingBottom: 116, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* Live badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(30,45,69,0.08)', border: '1px solid rgba(30,45,69,0.15)',
            borderRadius: 100, padding: '5px 13px 5px 9px',
            marginBottom: 26, width: 'fit-content',
            animation: 'fadeInUp 0.4s ease both',
          }}>
            <span style={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
              <span style={{
                position: 'absolute', inset: -3, borderRadius: '50%',
                background: '#4A6FA5', opacity: 0,
                animation: 'pulse-ring 1.8s ease-out infinite',
              }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4A6FA5', display: 'block' }} />
            </span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#1E2D45', letterSpacing: '0.02em' }}>
              24/7 Emergency Service Available
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 800, color: '#1E2D45',
            lineHeight: 1.06, letterSpacing: '-1.5px', marginBottom: 18,
            animation: 'fadeInUp 0.5s ease 0.1s both',
          }}>
            Reliable Plumbing.<br />
            <span style={{ color: '#4A6FA5' }}>Done Right.</span>
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 16, color: '#5A6A85', lineHeight: 1.75,
            maxWidth: 400, marginBottom: 34,
            animation: 'fadeInUp 0.5s ease 0.2s both',
          }}>
            From emergency repairs to full installations — dependable plumbing solutions for homes and businesses.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36, animation: 'fadeInUp 0.5s ease 0.3s both' }}>
            <button onClick={() => goTo('#contact')} className="btn btn-navy" style={{ padding: '13px 30px', fontSize: 14 }}>
              Get Started
            </button>
            <a href={PHONE_HREF} className="btn btn-outline" style={{ padding: '12px 22px', fontSize: 14, textDecoration: 'none' }}>
              <Phone size={14} /> Call Now
            </a>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 40, animation: 'fadeInUp 0.5s ease 0.38s both' }}>
            {TRUST.map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: '#3D4F66', fontWeight: 500 }}>
                <Icon size={14} color="#4A6FA5" />
                {text}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: 0, borderTop: '1px solid rgba(30,45,69,0.1)', paddingTop: 28,
            animation: 'fadeInUp 0.5s ease 0.46s both',
          }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                paddingRight: 28, marginRight: 28,
                borderRight: i < STATS.length - 1 ? '1px solid #C8D4E8' : 'none',
              }}>
                <p style={{ fontSize: 26, fontWeight: 800, color: '#1E2D45', lineHeight: 1, marginBottom: 4 }}>
                  {s.num}
                  {s.num === '4.9' && <span style={{ color: '#4A6FA5', fontSize: 16 }}> ★</span>}
                </p>
                <p style={{ fontSize: 11.5, color: '#7A8FA6', fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — full-bleed photo */}
        <div className="hero-photo" style={{ position: 'relative', overflow: 'hidden' }} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=960&q=88&auto=format&fit=crop"
            alt=""
            fetchPriority="high"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          {/* Left blend */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #EBF1FA 0%, rgba(235,241,250,0.45) 28%, transparent 60%)' }} />
          {/* Bottom blend */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to top, #EBF1FA, transparent)' }} />

          {/* Glass card — emergency */}
          <div style={{
            position: 'absolute', top: 36, left: 24,
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.7)',
            borderRadius: 12, padding: '14px 18px',
            boxShadow: '0 8px 28px rgba(30,45,69,0.12)', minWidth: 180,
          }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#7A8FA6', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7 }}>
              Emergency Line
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <div style={{
                width: 30, height: 30, borderRadius: 7, background: '#1E2D45',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 3px 10px rgba(30,45,69,0.3)',
              }}>
                <Phone size={13} color="#fff" />
              </div>
              <p style={{ fontSize: 13, fontWeight: 800, color: '#1E2D45', lineHeight: 1.2 }}>{PHONE}</p>
            </div>
          </div>

          {/* Glass card — rating */}
          <div style={{
            position: 'absolute', bottom: 56, right: 20,
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.7)',
            borderRadius: 12, padding: '14px 18px',
            boxShadow: '0 8px 28px rgba(30,45,69,0.12)',
          }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#7A8FA6', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>
              Customer Rating
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 24, fontWeight: 800, color: '#1E2D45', lineHeight: 1 }}>4.9</span>
              <div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} color="#4A6FA5" fill="#4A6FA5" />)}
                </div>
                <p style={{ fontSize: 10, color: '#9CAABA' }}>500+ verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search bar (floats on bottom of hero) ── */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '12px 12px 0 0',
          border: '1px solid #E2E8F0', borderBottom: 'none',
          boxShadow: '0 -6px 32px rgba(30,45,69,0.09)',
          padding: '26px 28px 30px',
        }}>
          <p style={{ fontSize: 13.5, fontWeight: 700, color: '#1E2D45', marginBottom: 18 }}>
            Search for available services
          </p>
          <form
            onSubmit={e => { e.preventDefault(); goTo('#contact'); }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 12, alignItems: 'end' }}
            className="search-form"
            role="search"
          >
            {/* Location */}
            <div>
              <label htmlFor="s-loc" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#7A8FA6', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Location</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#4A6FA5', pointerEvents: 'none' }} />
                <input id="s-loc" type="text" placeholder="City or zip code"
                  value={location} onChange={e => setLocation(e.target.value)}
                  style={inp} onFocus={focus} onBlur={blur} />
              </div>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="s-type" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#7A8FA6', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Service Type</label>
              <div style={{ position: 'relative' }}>
                <Wrench size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#4A6FA5', pointerEvents: 'none', zIndex: 1 }} />
                <select id="s-type" value={service} onChange={e => setService(e.target.value)}
                  style={{ ...inp, appearance: 'none', cursor: 'pointer' }}
                  onFocus={focus} onBlur={blur}>
                  {SERVICE_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label htmlFor="s-urg" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#7A8FA6', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>When</label>
              <div style={{ position: 'relative' }}>
                <Clock size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#4A6FA5', pointerEvents: 'none', zIndex: 1 }} />
                <select id="s-urg" value={urgency} onChange={e => setUrgency(e.target.value)}
                  style={{ ...inp, appearance: 'none', cursor: 'pointer' }}
                  onFocus={focus} onBlur={blur}>
                  {URGENCY.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-navy" style={{ padding: '11px 24px', fontSize: 13.5 }}>
              <Search size={14} /> Search Now
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid   { grid-template-columns: 1fr !important; }
          .hero-photo  { display: none !important; }
          .search-form { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
