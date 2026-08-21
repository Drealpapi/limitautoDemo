import { useState, useRef, useEffect } from 'react';
import { MapPin, Wrench, Clock, Search, Phone, ShieldCheck, Star, Zap, Volume2, VolumeX } from 'lucide-react';

const PHONE      = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';
const VIDEO_SRC  = '/hero.mp4';
const VIDEO_POSTER =
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=85&auto=format&fit=crop';

function goTo(a: string) {
  const el = document.querySelector(a);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

const STATS = [
  { num: '500+', label: 'Jobs Completed' },
  { num: '4.9',  label: 'Avg. Rating'    },
  { num: '24/7', label: 'Emergency Line' },
];
const TRUST = [
  { icon: ShieldCheck, text: 'Licensed & Insured' },
  { icon: Zap,         text: 'Same-Day Response'  },
  { icon: Star,        text: 'Highly Rated'        },
];
const SERVICE_TYPES = [
  'Any Service','Emergency Plumbing','Drain Cleaning',
  'Leak Detection','Water Heater','Pipe Repair',
  'Bathroom & Kitchen','Sewer Line','Commercial',
];
const URGENCY = ['Any Time','Emergency — Now','Today','Scheduled'];

/* Glass input shared style */
const glassInp: React.CSSProperties = {
  width: '100%',
  padding: '11px 12px 11px 36px',
  border: '1.5px solid rgba(30,45,69,0.14)',
  borderRadius: 9,
  fontSize: 13,
  color: '#1E2D45',
  outline: 'none',
  fontFamily: 'inherit',
  background: 'rgba(255,255,255,0.75)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  transition: 'border-color 0.15s, box-shadow 0.15s, background 0.15s',
};

export default function Hero() {
  const [location, setLocation] = useState('');
  const [service,  setService]  = useState('Any Service');
  const [urgency,  setUrgency]  = useState('Any Time');
  const [muted,    setMuted]    = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => { /* autoplay blocked — poster stays visible */ });
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(m => !m);
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#4A6FA5';
    e.target.style.boxShadow   = '0 0 0 3px rgba(74,111,165,0.15)';
    e.target.style.background  = '#fff';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(30,45,69,0.14)';
    e.target.style.boxShadow   = 'none';
    e.target.style.background  = 'rgba(255,255,255,0.75)';
  };

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO SECTION
          Dark deep-navy background. Video dominates
          the right ~58% of the viewport.
      ═══════════════════════════════════════════ */}
      <section
        aria-label="Hero"
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#0a1628',
          overflow: 'hidden',
          paddingTop: 68,
        }}
      >
        {/* ── Ambient radial glow behind content ── */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: '-10%', left: '-5%',
          width: '55%', height: '80%',
          background: 'radial-gradient(ellipse at center, rgba(74,111,165,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />

        {/* ══════════════════════════════════════
            DESKTOP TWO-COLUMN LAYOUT
        ══════════════════════════════════════ */}
        <div
          className="hero-desktop"
          style={{
            flex: 1,
            display: 'grid',
            /* 42% text | 58% video — video runs to right edge */
            gridTemplateColumns: '42% 58%',
            alignItems: 'stretch',
            position: 'relative',
            zIndex: 2,
          }}
        >

          {/* ────────── LEFT COLUMN ────────── */}
          <div style={{
            padding: 'clamp(40px,5vh,72px) clamp(28px,3vw,56px) 40px clamp(28px,4vw,72px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>

            {/* Live badge */}
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(74,111,165,0.12)',
                border: '1px solid rgba(74,111,165,0.25)',
                borderRadius: 100,
                padding: '6px 14px 6px 10px',
                marginBottom: 28, width: 'fit-content',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                animation: 'fadeInUp 0.45s ease both',
              }}
            >
              <span style={{ position: 'relative', display: 'flex', width: 8, height: 8, flexShrink: 0 }}>
                <span style={{
                  position: 'absolute', inset: -3, borderRadius: '50%',
                  background: '#6B9FD4', opacity: 0,
                  animation: 'pulse-ring 2s ease-out infinite',
                }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6B9FD4', display: 'block' }} />
              </span>
              <span style={{ fontSize: 11.5, fontWeight: 700, color: '#A8C6E8', letterSpacing: '0.04em' }}>
                24/7 Emergency Service Available
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.6rem, 4.2vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-2px',
                marginBottom: 20,
                animation: 'fadeInUp 0.5s ease 0.1s both',
                maxWidth: 520,
              }}
            >
              <span style={{ color: '#F0F4FA', display: 'block' }}>Reliable Plumbing.</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(90deg, #6B9FD4 0%, #4A6FA5 60%, #8ab4d8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Done Right.
              </span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: 'clamp(14px, 1.4vw, 16.5px)',
                color: 'rgba(160,180,210,0.85)',
                lineHeight: 1.75,
                maxWidth: 430,
                marginBottom: 36,
                animation: 'fadeInUp 0.5s ease 0.2s both',
              }}
            >
              From emergency repairs to full installations — dependable plumbing
              solutions for homes and businesses.
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: 'flex', gap: 12, flexWrap: 'wrap',
                marginBottom: 36,
                animation: 'fadeInUp 0.5s ease 0.3s both',
              }}
            >
              <button
                onClick={() => goTo('#contact')}
                className="btn btn-hero-primary"
                style={{ padding: '14px 32px', fontSize: 14, borderRadius: 12 }}
              >
                Get Started
              </button>
              <a
                href={PHONE_HREF}
                className="btn btn-hero-green"
                style={{ padding: '13px 24px', fontSize: 14, borderRadius: 12, textDecoration: 'none' }}
              >
                <Phone size={15} /> Call Now
              </a>
            </div>

            {/* Trust indicators */}
            <div
              style={{
                display: 'flex', gap: 20, flexWrap: 'wrap',
                marginBottom: 40,
                animation: 'fadeInUp 0.5s ease 0.38s both',
              }}
            >
              {TRUST.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 7,
                    fontSize: 12.5, color: 'rgba(140,168,205,0.9)', fontWeight: 500,
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#A8C6E8')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(140,168,205,0.9)')}
                >
                  <div style={{
                    width: 24, height: 24, borderRadius: 7,
                    background: 'rgba(74,111,165,0.18)',
                    border: '1px solid rgba(74,111,165,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={13} color="#6B9FD4" />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'flex', gap: 0,
                borderTop: '1px solid rgba(74,111,165,0.18)',
                paddingTop: 28,
                animation: 'fadeInUp 0.5s ease 0.46s both',
              }}
            >
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    paddingRight: 28, marginRight: 28,
                    borderRight: i < STATS.length - 1 ? '1px solid rgba(74,111,165,0.18)' : 'none',
                  }}
                >
                  <p style={{
                    fontSize: 'clamp(22px, 2.2vw, 28px)',
                    fontWeight: 800, color: '#F0F4FA',
                    lineHeight: 1, marginBottom: 5,
                    letterSpacing: '-0.5px',
                  }}>
                    {s.num}
                    {s.num === '4.9' && (
                      <span style={{ color: '#6B9FD4', fontSize: '60%', marginLeft: 2 }}>★</span>
                    )}
                  </p>
                  <p style={{ fontSize: 11.5, color: 'rgba(120,150,190,0.8)', fontWeight: 500, letterSpacing: '0.01em' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ────────── RIGHT COLUMN — VIDEO ────────── */}
          <div
            className="hero-video-col"
            style={{
              position: 'relative',
              overflow: 'hidden',
              /* Slightly overshoot right so video truly fills edge */
              marginRight: -2,
            }}
            aria-hidden="true"
          >
            {/* Poster fallback */}
            <img
              src={VIDEO_POSTER}
              alt=""
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center center',
                display: 'block',
                opacity: videoReady ? 0 : 1,
                transition: 'opacity 0.8s ease',
                zIndex: 1,
                filter: 'brightness(0.7) saturate(0.9)',
              }}
            />

            {/* Video */}
            <video
              ref={videoRef}
              autoPlay muted loop playsInline
              poster={VIDEO_POSTER}
              onCanPlay={() => setVideoReady(true)}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center center',
                display: 'block',
                opacity: videoReady ? 1 : 0,
                transition: 'opacity 0.8s ease',
                zIndex: 1,
                /* Subtle contrast / saturation tweak to make plumbing footage pop */
                filter: 'brightness(0.75) saturate(1.05) contrast(1.05)',
              }}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
              {/* <source src="/hero.webm" type="video/webm" /> */}
            </video>

            {/* Dark navy overlay — blends video with dark hero bg */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
              background: 'linear-gradient(to right, #0f1e35 0%, rgba(15,30,53,0.25) 30%, rgba(10,22,40,0.15) 100%)',
            }} />

            {/* Bottom vignette */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
              zIndex: 2, pointerEvents: 'none',
              background: 'linear-gradient(to top, rgba(9,18,32,0.65) 0%, transparent 100%)',
            }} />

            {/* Top vignette */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '20%',
              zIndex: 2, pointerEvents: 'none',
              background: 'linear-gradient(to bottom, rgba(9,18,32,0.4) 0%, transparent 100%)',
            }} />

            {/* ── Mute button — glass pill ── */}
            <button
              onClick={toggleMute}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              style={{
                position: 'absolute', bottom: 24, right: 20, zIndex: 10,
                width: 38, height: 38, borderRadius: 10,
                background: 'rgba(15,30,53,0.55)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s ease',
                color: 'rgba(255,255,255,0.8)',
              }}
              onMouseEnter={e => {
                const b = e.currentTarget as HTMLElement;
                b.style.background = 'rgba(74,111,165,0.4)';
                b.style.borderColor = 'rgba(255,255,255,0.28)';
                b.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                const b = e.currentTarget as HTMLElement;
                b.style.background = 'rgba(15,30,53,0.55)';
                b.style.borderColor = 'rgba(255,255,255,0.15)';
                b.style.transform = 'translateY(0)';
              }}
            >
              {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            {/* ── Emergency glass card ── */}
            <div
              className="glass-card-emergency"
              style={{
                position: 'absolute', top: 36, left: 28, zIndex: 10,
                background: 'rgba(10,20,38,0.55)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 16,
                padding: '14px 18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)',
                minWidth: 192,
                animation: 'fadeIn 0.6s ease 0.5s both',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 14px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)';
              }}
            >
              <p style={{
                fontSize: 9.5, fontWeight: 700, color: 'rgba(140,175,215,0.7)',
                letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8,
              }}>
                Emergency Line
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(74,111,165,0.6), rgba(30,45,69,0.8))',
                  border: '1px solid rgba(74,111,165,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 3px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
                }}>
                  <Phone size={13} color="#A8C6E8" />
                </div>
                <p style={{ fontSize: 13.5, fontWeight: 800, color: '#E8F0FA', lineHeight: 1.2 }}>
                  {PHONE}
                </p>
              </div>
            </div>

            {/* ── Rating glass card ── */}
            <div
              className="glass-card-rating"
              style={{
                position: 'absolute', bottom: 72, right: 28, zIndex: 10,
                background: 'rgba(10,20,38,0.55)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 16,
                padding: '14px 18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)',
                animation: 'fadeIn 0.6s ease 0.65s both',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 14px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)';
              }}
            >
              <p style={{
                fontSize: 9.5, fontWeight: 700, color: 'rgba(140,175,215,0.7)',
                letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8,
              }}>
                Customer Rating
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: '#E8F0FA', lineHeight: 1, letterSpacing: '-0.5px' }}>
                  4.9
                </span>
                <div>
                  <div style={{ display: 'flex', gap: 2.5, marginBottom: 4 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} color="#F59E0B" fill="#F59E0B" />
                    ))}
                  </div>
                  <p style={{ fontSize: 10.5, color: 'rgba(140,175,215,0.7)', fontWeight: 500 }}>
                    500+ verified reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            MOBILE LAYOUT (hidden on desktop)
        ══════════════════════════════════════ */}
        <div className="hero-mobile" style={{ display: 'none', flexDirection: 'column', zIndex: 2 }}>
          {/* Mobile text content */}
          <div style={{ padding: '36px 22px 28px' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'rgba(74,111,165,0.15)',
              border: '1px solid rgba(74,111,165,0.3)',
              borderRadius: 100, padding: '5px 12px 5px 8px',
              marginBottom: 22,
              animation: 'fadeInUp 0.4s ease both',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6B9FD4', display: 'block', flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#A8C6E8', letterSpacing: '0.03em' }}>
                24/7 Emergency Available
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.1rem, 8vw, 2.8rem)',
              fontWeight: 800, lineHeight: 1.05,
              letterSpacing: '-1.5px', marginBottom: 16,
              animation: 'fadeInUp 0.5s ease 0.1s both',
            }}>
              <span style={{ color: '#F0F4FA', display: 'block' }}>Reliable Plumbing.</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(90deg, #6B9FD4 0%, #4A6FA5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Done Right.</span>
            </h1>

            <p style={{
              fontSize: 15, color: 'rgba(155,178,210,0.9)', lineHeight: 1.7,
              marginBottom: 28, animation: 'fadeInUp 0.5s ease 0.2s both',
            }}>
              Dependable plumbing solutions for homes and businesses — available when you need us.
            </p>

            {/* Mobile CTAs */}
            <div style={{
              display: 'flex', gap: 10, marginBottom: 28,
              animation: 'fadeInUp 0.5s ease 0.3s both',
            }}>
              <button
                onClick={() => goTo('#contact')}
                className="btn btn-hero-primary"
                style={{ flex: 1, padding: '15px 16px', fontSize: 14, borderRadius: 12, minHeight: 50 }}
              >
                Get Started
              </button>
              <a
                href={PHONE_HREF}
                className="btn btn-hero-green"
                style={{ flex: 1, padding: '14px 16px', fontSize: 14, borderRadius: 12, minHeight: 50, textDecoration: 'none' }}
              >
                <Phone size={15} /> Call Now
              </a>
            </div>

            {/* Mobile trust indicators */}
            <div style={{
              display: 'flex', gap: 14, flexWrap: 'wrap',
              animation: 'fadeInUp 0.5s ease 0.38s both',
            }}>
              {TRUST.map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(130,162,200,0.85)', fontWeight: 500 }}>
                  <Icon size={13} color="#6B9FD4" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile video block */}
          <div style={{
            position: 'relative', margin: '0 16px',
            borderRadius: 20, overflow: 'hidden',
            aspectRatio: '16/10',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            animation: 'fadeIn 0.6s ease 0.4s both',
          }}>
            <img
              src={VIDEO_POSTER} alt=""
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                opacity: videoReady ? 0 : 1,
                transition: 'opacity 0.8s ease',
                filter: 'brightness(0.7)',
              }}
            />
            <video
              autoPlay muted loop playsInline
              poster={VIDEO_POSTER}
              onCanPlay={() => setVideoReady(true)}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                opacity: videoReady ? 1 : 0,
                transition: 'opacity 0.8s ease',
                filter: 'brightness(0.7) saturate(1.05)',
              }}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
            {/* Overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(9,18,32,0.3) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />

            {/* Mobile rating chip on video */}
            <div style={{
              position: 'absolute', bottom: 14, right: 14,
              background: 'rgba(8,16,30,0.6)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 12, padding: '10px 14px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: '#E8F0FA', lineHeight: 1 }}>4.9</span>
                <div>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={9} color="#F59E0B" fill="#F59E0B" />)}
                  </div>
                  <p style={{ fontSize: 9.5, color: 'rgba(140,175,215,0.7)' }}>500+ reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile stats */}
          <div style={{
            display: 'flex', padding: '24px 22px 16px',
            borderTop: '1px solid rgba(74,111,165,0.15)',
            marginTop: 24,
          }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                flex: 1, textAlign: 'center',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(74,111,165,0.18)' : 'none',
              }}>
                <p style={{ fontSize: 22, fontWeight: 800, color: '#F0F4FA', lineHeight: 1, marginBottom: 4 }}>
                  {s.num}
                  {s.num === '4.9' && <span style={{ color: '#6B9FD4', fontSize: '55%', marginLeft: 2 }}>★</span>}
                </p>
                <p style={{ fontSize: 10.5, color: 'rgba(120,150,190,0.75)', fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            SEARCH BAR — sits at bottom of hero
        ══════════════════════════════════════ */}
        <div
          style={{
            position: 'relative', zIndex: 10,
            maxWidth: 1280, margin: '0 auto',
            padding: '0 clamp(16px, 3vw, 32px)',
            width: '100%',
          }}
          className="hero-search-wrap"
        >
          <div style={{
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '14px 14px 0 0',
            border: '1px solid rgba(30,45,69,0.1)',
            borderBottom: 'none',
            boxShadow: '0 -8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8)',
            padding: 'clamp(20px,3vh,28px) clamp(16px,2.5vw,32px) clamp(22px,3vh,30px)',
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#1E2D45', marginBottom: 16, letterSpacing: '-0.1px' }}>
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
                <label htmlFor="s-loc" style={{ display: 'block', fontSize: 10.5, fontWeight: 600, color: '#7A8FA6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                  Location
                </label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#4A6FA5', pointerEvents: 'none', zIndex: 1 }} />
                  <input
                    id="s-loc" type="text" placeholder="City or zip code"
                    value={location} onChange={e => setLocation(e.target.value)}
                    style={glassInp} onFocus={onFocus} onBlur={onBlur}
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="s-type" style={{ display: 'block', fontSize: 10.5, fontWeight: 600, color: '#7A8FA6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                  Service Type
                </label>
                <div style={{ position: 'relative' }}>
                  <Wrench size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#4A6FA5', pointerEvents: 'none', zIndex: 1 }} />
                  <select
                    id="s-type" value={service} onChange={e => setService(e.target.value)}
                    style={{ ...glassInp, appearance: 'none', cursor: 'pointer' }}
                    onFocus={onFocus} onBlur={onBlur}
                  >
                    {SERVICE_TYPES.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label htmlFor="s-urg" style={{ display: 'block', fontSize: 10.5, fontWeight: 600, color: '#7A8FA6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                  When
                </label>
                <div style={{ position: 'relative' }}>
                  <Clock size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#4A6FA5', pointerEvents: 'none', zIndex: 1 }} />
                  <select
                    id="s-urg" value={urgency} onChange={e => setUrgency(e.target.value)}
                    style={{ ...glassInp, appearance: 'none', cursor: 'pointer' }}
                    onFocus={onFocus} onBlur={onBlur}
                  >
                    {URGENCY.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 10.5, marginBottom: 6, opacity: 0, userSelect: 'none' }}>Go</span>
                <button
                  type="submit"
                  className="btn btn-navy"
                  style={{ padding: '11px 22px', fontSize: 13.5, borderRadius: 9, flex: 1, minHeight: 43 }}
                >
                  <Search size={14} /> Search Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ Responsive CSS ═══ */}
      <style>{`
        /* Desktop: two-column, hide mobile stack */
        .hero-desktop { display: grid; }
        .hero-mobile  { display: none !important; }

        /* Ensure dark background bleeds through fully */
        section[aria-label="Hero"] {
          background: #0a1628 !important;
        }

        @media (max-width: 860px) {
          .hero-desktop { display: none !important; }
          .hero-mobile  { display: flex !important; }

          .hero-search-wrap { padding: 0 12px !important; }
          .search-form { grid-template-columns: 1fr !important; gap: 10px !important; }

          section[aria-label="Hero"] {
            min-height: auto !important;
          }
        }

        @media (max-width: 480px) {
          .hero-mobile > div:first-child {
            padding: 28px 18px 20px !important;
          }
        }

        @media (min-width: 861px) and (max-width: 1100px) {
          .hero-desktop { grid-template-columns: 46% 54% !important; }
        }

        @media (min-width: 1101px) and (max-width: 1400px) {
          .hero-desktop { grid-template-columns: 43% 57% !important; }
        }

        @media (min-width: 1401px) {
          .hero-desktop { grid-template-columns: 40% 60% !important; }
        }
      `}</style>
    </>
  );
}
