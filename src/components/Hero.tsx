import { useRef, useEffect, useState } from 'react';
import { Phone, Star, Volume2, VolumeX, ArrowRight, Wrench, Zap, CheckCircle } from 'lucide-react';

const PHONE      = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';
const VIDEO_SRC  = '/hero.mp4';
const VIDEO_POSTER =
  'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=1200&q=85&auto=format&fit=crop';

function goTo(a: string) {
  const el = document.querySelector(a);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

const STATS = [
  { num: '500+', label: 'Jobs Completed' },
  { num: '4.9',  label: 'Avg. Rating'    },
  { num: '24/7', label: 'Emergency Line' },
];

const SERVICES_QUICK = [
  { icon: Zap,    label: 'Emergency' },
  { icon: Wrench, label: 'Pipe Repair' },
  { icon: CheckCircle, label: 'Drain Cleaning' },
];

export default function Hero() {
  const [muted,      setMuted]      = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef  = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [desktopVideoRef, mobileVideoRef].forEach(r => {
      r.current?.play().catch(() => {});
    });
  }, []);

  const toggleMute = () => {
    const next = !muted;
    if (desktopVideoRef.current) desktopVideoRef.current.muted = next;
    if (mobileVideoRef.current)  mobileVideoRef.current.muted  = next;
    setMuted(next);
  };

  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        background: '#0a1628',
        overflow: 'hidden',
        paddingTop: 68,
      }}
    >
      {/* ── ambient glow ── */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, width: '50%', height: '100%',
        background: 'radial-gradient(ellipse at 0% 50%, rgba(74,111,165,0.1) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* ════════════════════════════════════════
          DESKTOP LAYOUT  ≥ 861px
      ════════════════════════════════════════ */}
      <div
        className="hero-desktop"
        style={{
          display: 'grid',
          gridTemplateColumns: '42% 58%',
          minHeight: 'calc(92vh - 68px)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* ── LEFT: content ── */}
        <div style={{
          padding: 'clamp(48px,7vh,88px) clamp(32px,4vw,72px) 56px clamp(32px,4vw,72px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>

          {/* Live badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(74,111,165,0.12)',
            border: '1px solid rgba(74,111,165,0.28)',
            borderRadius: 100, padding: '6px 16px 6px 10px',
            marginBottom: 32, width: 'fit-content',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            animation: 'fadeInUp 0.4s ease both',
          }}>
            <span style={{ position: 'relative', display: 'flex', width: 8, height: 8, flexShrink: 0 }}>
              <span style={{
                position: 'absolute', inset: -3, borderRadius: '50%',
                background: '#6B9FD4', opacity: 0,
                animation: 'pulse-ring 2s ease-out infinite',
              }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6B9FD4', display: 'block' }} />
            </span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#A8C6E8', letterSpacing: '0.04em' }}>
              24/7 Emergency Service Available
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.8rem, 4.4vw, 4.4rem)',
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: '-2px', marginBottom: 20,
            maxWidth: 540,
            animation: 'fadeInUp 0.5s ease 0.1s both',
          }}>
            <span style={{ color: '#F0F4FA', display: 'block' }}>Reliable Plumbing.</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(90deg, #7EB8E8 0%, #4A6FA5 60%, #8ab4d8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Done Right.</span>
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            color: 'rgba(160,185,215,0.85)', lineHeight: 1.75,
            maxWidth: 420, marginBottom: 40,
            animation: 'fadeInUp 0.5s ease 0.2s both',
          }}>
            From emergency repairs to full installations — dependable plumbing solutions for homes and businesses.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap',
            marginBottom: 48,
            animation: 'fadeInUp 0.5s ease 0.3s both',
          }}>
            <button
              onClick={() => goTo('#contact')}
              className="btn btn-cta-red"
              style={{ padding: '15px 36px', fontSize: 15, borderRadius: 12 }}
            >
              Book a Service <ArrowRight size={15} />
            </button>
            <a
              href={PHONE_HREF}
              className="btn btn-cta-green"
              style={{ padding: '14px 28px', fontSize: 15, borderRadius: 12, textDecoration: 'none' }}
            >
              <Phone size={15} /> Call Now
            </a>
          </div>

          {/* Quick service pills */}
          <div style={{
            display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40,
            animation: 'fadeInUp 0.5s ease 0.38s both',
          }}>
            {SERVICES_QUICK.map(({ icon: Icon, label }) => (
              <button
                key={label}
                onClick={() => goTo('#services')}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  fontSize: 12.5, fontWeight: 600,
                  color: 'rgba(168,198,232,0.9)',
                  background: 'rgba(74,111,165,0.1)',
                  border: '1px solid rgba(74,111,165,0.22)',
                  borderRadius: 8, padding: '8px 14px',
                  cursor: 'pointer', transition: 'all 0.15s',
                  backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(74,111,165,0.22)';
                  el.style.borderColor = 'rgba(74,111,165,0.45)';
                  el.style.color = '#C8E0F5';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(74,111,165,0.1)';
                  el.style.borderColor = 'rgba(74,111,165,0.22)';
                  el.style.color = 'rgba(168,198,232,0.9)';
                }}
              >
                <Icon size={13} /> {label}
              </button>
            ))}
            <button
              onClick={() => goTo('#services')}
              style={{
                fontSize: 12.5, fontWeight: 600, color: 'rgba(120,160,200,0.7)',
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 4, padding: '8px 4px',
              }}
            >
              All services <ArrowRight size={12} />
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: 0,
            borderTop: '1px solid rgba(74,111,165,0.16)', paddingTop: 28,
            animation: 'fadeInUp 0.5s ease 0.44s both',
          }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                paddingRight: 28, marginRight: 28,
                borderRight: i < STATS.length - 1 ? '1px solid rgba(74,111,165,0.16)' : 'none',
              }}>
                <p style={{
                  fontSize: 'clamp(22px, 2.2vw, 30px)',
                  fontWeight: 800, color: '#F0F4FA',
                  lineHeight: 1, marginBottom: 5, letterSpacing: '-0.5px',
                }}>
                  {s.num}
                  {s.num === '4.9' && <span style={{ color: '#F59E0B', fontSize: '55%', marginLeft: 2 }}>★</span>}
                </p>
                <p style={{ fontSize: 11.5, color: 'rgba(120,155,195,0.75)', fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: video ── */}
        <div style={{ position: 'relative', overflow: 'hidden', marginRight: -1 }} aria-hidden="true">
          {/* Poster */}
          <img src={VIDEO_POSTER} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            opacity: videoReady ? 0 : 1, transition: 'opacity 0.8s ease', zIndex: 1,
            filter: 'brightness(0.7) saturate(0.9)',
          }} />
          {/* Video */}
          <video
            ref={desktopVideoRef}
            autoPlay muted loop playsInline
            poster={VIDEO_POSTER}
            onCanPlay={() => setVideoReady(true)}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center', display: 'block',
              opacity: videoReady ? 1 : 0, transition: 'opacity 0.8s ease', zIndex: 1,
              filter: 'brightness(0.72) saturate(1.05) contrast(1.05)',
            }}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {/* Overlays */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            background: 'linear-gradient(to right, #0a1628 0%, rgba(10,22,40,0.2) 28%, transparent 55%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', zIndex: 2, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(8,16,32,0.7) 0%, transparent 100%)' }} />

          {/* Mute btn */}
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            style={{
              position: 'absolute', bottom: 20, right: 20, zIndex: 10,
              width: 38, height: 38, borderRadius: 10,
              background: 'rgba(10,22,40,0.6)',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s',
              color: 'rgba(255,255,255,0.75)',
            }}
            onMouseEnter={e => { const b = e.currentTarget as HTMLElement; b.style.background = 'rgba(74,111,165,0.45)'; b.style.color = '#fff'; }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLElement; b.style.background = 'rgba(10,22,40,0.6)'; b.style.color = 'rgba(255,255,255,0.75)'; }}
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          {/* Emergency card */}
          <div style={{
            position: 'absolute', top: 32, left: 28, zIndex: 10,
            background: 'rgba(8,18,36,0.6)',
            backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.13)',
            borderRadius: 16, padding: '14px 18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)',
            minWidth: 195, animation: 'fadeIn 0.6s ease 0.5s both',
            transition: 'transform 0.22s ease, box-shadow 0.22s ease',
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 14px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)'; }}
          >
            <p style={{ fontSize: 9.5, fontWeight: 700, color: 'rgba(140,175,215,0.65)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>
              Emergency Line
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                background: 'linear-gradient(135deg, rgba(74,111,165,0.65), rgba(30,45,69,0.85))',
                border: '1px solid rgba(74,111,165,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 3px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
              }}>
                <Phone size={13} color="#A8C6E8" />
              </div>
              <p style={{ fontSize: 13.5, fontWeight: 800, color: '#E8F0FA', lineHeight: 1.2 }}>{PHONE}</p>
            </div>
          </div>

          {/* Rating card */}
          <div style={{
            position: 'absolute', bottom: 68, right: 28, zIndex: 10,
            background: 'rgba(8,18,36,0.6)',
            backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.13)',
            borderRadius: 16, padding: '14px 18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)',
            animation: 'fadeIn 0.6s ease 0.65s both',
            transition: 'transform 0.22s ease, box-shadow 0.22s ease',
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 14px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)'; }}
          >
            <p style={{ fontSize: 9.5, fontWeight: 700, color: 'rgba(140,175,215,0.65)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>
              Customer Rating
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: '#E8F0FA', lineHeight: 1, letterSpacing: '-0.5px' }}>4.9</span>
              <div>
                <div style={{ display: 'flex', gap: 2.5, marginBottom: 4 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} color="#F59E0B" fill="#F59E0B" />)}
                </div>
                <p style={{ fontSize: 10.5, color: 'rgba(140,175,215,0.65)', fontWeight: 500 }}>500+ verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          MOBILE LAYOUT  ≤ 860px
          Full-screen cinematic layout:
          video fills most of screen, content
          overlays from bottom with glass card
      ════════════════════════════════════════ */}
      <div
        className="hero-mobile"
        style={{
          display: 'none',
          flexDirection: 'column',
          minHeight: 'calc(100svh - 68px)',
          position: 'relative',
        }}
      >
        {/* ── Full-screen video ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={VIDEO_POSTER} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%',
            opacity: videoReady ? 0 : 1, transition: 'opacity 0.8s ease',
            filter: 'brightness(0.55) saturate(0.85)',
          }} />
          <video
            ref={mobileVideoRef}
            autoPlay muted loop playsInline
            poster={VIDEO_POSTER}
            onCanPlay={() => setVideoReady(true)}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 30%',
              opacity: videoReady ? 1 : 0, transition: 'opacity 0.8s ease',
              filter: 'brightness(0.5) saturate(1.05)',
            }}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
          {/* Gradient overlay — strong at bottom for text readability */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, #0a1628 0%, rgba(10,22,40,0.92) 30%, rgba(10,22,40,0.55) 60%, rgba(10,22,40,0.25) 100%)',
          }} />
        </div>

        {/* ── Top: badge + mute ── */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 20px 0',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(74,111,165,0.18)',
            border: '1px solid rgba(74,111,165,0.35)',
            borderRadius: 100, padding: '5px 13px 5px 9px',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          }}>
            <span style={{ position: 'relative', display: 'flex', width: 7, height: 7, flexShrink: 0 }}>
              <span style={{
                position: 'absolute', inset: -2, borderRadius: '50%',
                background: '#6B9FD4', opacity: 0,
                animation: 'pulse-ring 2s ease-out infinite',
              }} />
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6B9FD4', display: 'block' }} />
            </span>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#A8C6E8', letterSpacing: '0.04em' }}>
              24/7 Emergency
            </span>
          </div>

          <button
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            style={{
              width: 36, height: 36, borderRadius: 9,
              background: 'rgba(10,22,40,0.55)',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.14)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'rgba(255,255,255,0.75)',
            }}
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>

        {/* ── Spacer pushes content down ── */}
        <div style={{ flex: 1 }} />

        {/* ── Bottom content glass card ── */}
        <div style={{
          position: 'relative', zIndex: 2,
          margin: '0 12px 0',
          background: 'rgba(8,18,36,0.72)',
          backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '24px 24px 0 0',
          borderBottom: 'none',
          boxShadow: '0 -8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
          padding: '28px 24px 8px',
        }}>
          {/* Drag indicator */}
          <div style={{ width: 36, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2, margin: '0 auto 22px' }} />

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2rem, 9vw, 2.8rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-1.5px', marginBottom: 12,
            animation: 'fadeInUp 0.5s ease 0.1s both',
          }}>
            <span style={{ color: '#F0F4FA', display: 'block' }}>Reliable Plumbing.</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(90deg, #7EB8E8 0%, #4A6FA5 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Done Right.</span>
          </h1>

          <p style={{
            fontSize: 14.5, color: 'rgba(160,185,215,0.85)',
            lineHeight: 1.65, marginBottom: 24,
            animation: 'fadeInUp 0.5s ease 0.2s both',
          }}>
            Dependable plumbing for homes and businesses — available when you need us.
          </p>

          {/* CTAs — full width stacked for easy tap */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20,
            animation: 'fadeInUp 0.5s ease 0.28s both',
          }}>
            <button
              onClick={() => goTo('#contact')}
              className="btn btn-cta-red"
              style={{ width: '100%', padding: '16px', fontSize: 15.5, borderRadius: 14, minHeight: 54, justifyContent: 'center' }}
            >
              Book a Service <ArrowRight size={16} />
            </button>
            <a
              href={PHONE_HREF}
              className="btn btn-cta-green"
              style={{ width: '100%', padding: '15px', fontSize: 15.5, borderRadius: 14, minHeight: 54, textDecoration: 'none', justifyContent: 'center' }}
            >
              <Phone size={16} /> Call Now — {PHONE}
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            borderTop: '1px solid rgba(74,111,165,0.15)',
            paddingTop: 18, paddingBottom: 4,
            animation: 'fadeInUp 0.5s ease 0.36s both',
          }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                flex: 1, textAlign: 'center',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(74,111,165,0.15)' : 'none',
                paddingBottom: 4,
              }}>
                <p style={{
                  fontSize: 20, fontWeight: 800, color: '#F0F4FA',
                  lineHeight: 1, marginBottom: 4, letterSpacing: '-0.3px',
                }}>
                  {s.num}
                  {s.num === '4.9' && <span style={{ color: '#F59E0B', fontSize: '50%', marginLeft: 2 }}>★</span>}
                </p>
                <p style={{ fontSize: 10, color: 'rgba(120,155,195,0.7)', fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Rating chip floating over video ── */}
        <div style={{
          position: 'absolute', top: 72, right: 16, zIndex: 3,
          background: 'rgba(8,18,36,0.62)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.13)',
          borderRadius: 14, padding: '11px 15px',
          boxShadow: '0 6px 24px rgba(0,0,0,0.45)',
          animation: 'fadeIn 0.5s ease 0.5s both',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{ fontSize: 20, fontWeight: 800, color: '#E8F0FA', lineHeight: 1 }}>4.9</span>
            <div>
              <div style={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={10} color="#F59E0B" fill="#F59E0B" />)}
              </div>
              <p style={{ fontSize: 9.5, color: 'rgba(140,175,215,0.65)', fontWeight: 500 }}>500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
