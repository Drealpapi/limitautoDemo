import { useState } from 'react';
import { MapPin, Wrench, Clock, Search } from 'lucide-react';

function goTo(anchor: string) {
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
}

const SERVICE_TYPES = ['Any Service', 'Emergency Plumbing', 'Drain Cleaning', 'Leak Detection', 'Water Heater', 'Pipe Repair', 'Bathroom & Kitchen', 'Sewer Line', 'Commercial'];
const URGENCY = ['Any Time', 'Emergency – Now', 'Today', 'Scheduled'];

const STATS = [
  { num: '500', plus: true,  label: 'Jobs Completed'   },
  { num: '4.9', star: true,  label: 'Customer Rating'   },
  { num: '24/7', plus: false, label: 'Emergency Line'   },
];

export default function Hero() {
  const [location, setLocation] = useState('');
  const [service,  setService]  = useState('Any Service');
  const [urgency,  setUrgency]  = useState('Any Time');

  return (
    /* ── Hero wrapper — sky-blue bg exactly like reference ── */
    <section
      style={{ background: '#D5E9F6', position: 'relative', paddingTop: 64, overflow: 'hidden', minHeight: 520 }}
      aria-label="Hero"
    >
      <div style={{
        maxWidth: 1160, margin: '0 auto', padding: '0 28px',
        display: 'grid', gridTemplateColumns: '1fr 480px',
        minHeight: 456, alignItems: 'stretch', position: 'relative',
      }} className="hero-layout">

        {/* ── LEFT: text content ── */}
        <div style={{ paddingTop: 52, paddingBottom: 112, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* Headline — weight 800, tight tracking, exactly like reference */}
          <h1 style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 4rem)',
            fontWeight: 800,
            color: '#0A0A0A',
            lineHeight: 1.06,
            letterSpacing: '-1.5px',
            marginBottom: 18,
            animation: 'fadeInUp .5s ease .05s both',
          }}>
            Reliable Plumbing.<br />Done Right.
          </h1>

          {/* Sub — small grey, 2 lines max */}
          <p style={{
            fontSize: 15, color: '#555', lineHeight: 1.7,
            maxWidth: 380, marginBottom: 36,
            animation: 'fadeInUp .5s ease .18s both',
          }}>
            From emergency repairs to full installations, we provide dependable plumbing solutions for homes and businesses.
          </p>

          {/* CTA — solid black, ZERO border-radius (reference exact) */}
          <div style={{ animation: 'fadeInUp .5s ease .3s both' }}>
            <button
              onClick={() => goTo('#contact')}
              style={{
                background: '#0A0A0A', color: '#fff',
                fontSize: 14, fontWeight: 700,
                padding: '14px 32px',
                border: 'none', borderRadius: 0,
                cursor: 'pointer', letterSpacing: '.01em',
                transition: 'background .15s',
                display: 'inline-block',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1B6FDB')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0A0A0A')}
            >
              Get Started
            </button>
          </div>

          {/* Stats row — "1200 +" style from reference */}
          <div style={{
            display: 'flex', gap: 48, marginTop: 44,
            animation: 'fadeInUp .5s ease .42s both',
          }}>
            {STATS.map(s => (
              <div key={s.label}>
                <p style={{ fontSize: 28, fontWeight: 800, color: '#0A0A0A', lineHeight: 1, marginBottom: 5 }}>
                  {s.num}
                  {s.plus && <span style={{ color: '#1B6FDB', fontWeight: 800 }}> +</span>}
                  {s.star && <span style={{ color: '#1B6FDB', fontWeight: 800 }}>★</span>}
                </p>
                <p style={{ fontSize: 12, color: '#666', fontWeight: 400, letterSpacing: '.01em' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: photo — bleeds to right edge, no container ── */}
        <div
          style={{ position: 'relative', overflow: 'hidden' }}
          className="hero-photo"
          aria-hidden="true"
        >
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=960&q=88&auto=format&fit=crop"
            alt=""
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
              display: 'block',
            }}
            fetchPriority="high"
          />
          {/* Soft left blend */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #D5E9F6 0%, #D5E9F6 2%, transparent 28%)',
          }} />
        </div>
      </div>

      {/* ── Search card — white, overlaps hero bottom, full-width ── */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
          <div style={{
            background: '#fff',
            boxShadow: '0 8px 48px rgba(0,0,0,.14)',
            padding: '26px 28px 30px',
          }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 18, letterSpacing: '-.1px' }}>
              Search for available services
            </p>

            <form
              onSubmit={e => { e.preventDefault(); goTo('#contact'); }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 12, alignItems: 'stretch' }}
              className="search-form"
            >
              {/* Location */}
              <div style={{ position: 'relative' }}>
                <label htmlFor="s-loc" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Location</label>
                <MapPin size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
                <input
                  id="s-loc" type="text" placeholder="Location"
                  value={location} onChange={e => setLocation(e.target.value)}
                  style={{
                    width: '100%', padding: '11px 12px 11px 34px',
                    border: '1px solid #DEDEDE', borderRadius: 0,
                    fontSize: 13, color: '#111', outline: 'none', fontFamily: 'inherit',
                    transition: 'border-color .15s',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#1B6FDB')}
                  onBlur={e  => (e.target.style.borderColor = '#DEDEDE')}
                />
              </div>

              {/* Service type */}
              <div style={{ position: 'relative' }}>
                <label htmlFor="s-type" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Service type</label>
                <Wrench size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
                <select
                  id="s-type" value={service} onChange={e => setService(e.target.value)}
                  style={{
                    width: '100%', padding: '11px 12px 11px 34px',
                    border: '1px solid #DEDEDE', borderRadius: 0,
                    fontSize: 13, color: '#111', outline: 'none',
                    appearance: 'none', background: '#fff', cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'border-color .15s',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#1B6FDB')}
                  onBlur={e  => (e.target.style.borderColor = '#DEDEDE')}
                >
                  {SERVICE_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>

              {/* Urgency */}
              <div style={{ position: 'relative' }}>
                <label htmlFor="s-urg" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Urgency</label>
                <Clock size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
                <select
                  id="s-urg" value={urgency} onChange={e => setUrgency(e.target.value)}
                  style={{
                    width: '100%', padding: '11px 12px 11px 34px',
                    border: '1px solid #DEDEDE', borderRadius: 0,
                    fontSize: 13, color: '#111', outline: 'none',
                    appearance: 'none', background: '#fff', cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'border-color .15s',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#1B6FDB')}
                  onBlur={e  => (e.target.style.borderColor = '#DEDEDE')}
                >
                  {URGENCY.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>

              {/* Search Now — solid black, sharp corners */}
              <button
                type="submit"
                style={{
                  background: '#0A0A0A', color: '#fff',
                  border: 'none', borderRadius: 0,
                  fontSize: 14, fontWeight: 700,
                  padding: '11px 28px',
                  cursor: 'pointer', whiteSpace: 'nowrap',
                  display: 'flex', alignItems: 'center', gap: 8,
                  transition: 'background .15s',
                  letterSpacing: '.01em',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1B6FDB')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0A0A0A')}
              >
                <Search size={14} />
                Search Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-layout { grid-template-columns: 1fr !important; }
          .hero-photo  { display: none !important; }
          .search-form { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
