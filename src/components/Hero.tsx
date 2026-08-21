import { useRef, useEffect, useState } from 'react';
import { Fa, Icons } from '../lib/icons';

const PHONE      = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';
const VIDEO_SRC  = '/hero.mp4';

function goTo(a: string) {
  const el = document.querySelector(a);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

const TRUST = [
  { icon: Icons.shield, label: 'Licensed & Insured',  sub: 'Your property is in safe hands.'  },
  { icon: Icons.clock,  label: 'Fast Response',        sub: 'We arrive on time, every time.'  },
  { icon: Icons.check,  label: 'Quality Work',          sub: 'Built to last. Done right.'      },
];

const AVATARS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80&auto=format&fit=crop',
];

/* Shared video style */
const vidStyle = (ready: boolean): React.CSSProperties => ({
  position: 'absolute', inset: 0,
  width: '100%', height: '100%',
  objectFit: 'cover', objectPosition: '65% center',
  display: 'block', zIndex: 1,
  opacity: ready ? 1 : 0,
  transition: 'opacity 0.6s ease',
  filter: 'brightness(0.68) saturate(1.05) contrast(1.03)',
});

export default function Hero() {
  const [muted,      setMuted]      = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const deskRef = useRef<HTMLVideoElement>(null);
  const mobRef  = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [deskRef, mobRef].forEach(r => r.current?.play().catch(() => {}));
  }, []);

  const toggleMute = () => {
    const v = !muted;
    if (deskRef.current) deskRef.current.muted = v;
    if (mobRef.current)  mobRef.current.muted  = v;
    setMuted(v);
  };

  return (
    <section
      aria-label="Hero — FlowRight Plumbing"
      style={{ position: 'relative', overflow: 'hidden', background: '#0C1829', paddingTop: 68 }}
    >
      {/* ══════════════════════════════════════════
          SHARED FULL-BLEED VIDEO (desktop only)
          — no poster, dark bg shows while loading
      ══════════════════════════════════════════ */}
      <video
        ref={deskRef}
        autoPlay muted loop playsInline
        onCanPlay={() => setVideoReady(true)}
        aria-hidden="true"
        className="hero-vid-desk"
        style={vidStyle(videoReady)}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 180, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(12,24,41,0.7) 0%, transparent 100%)',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '32%', zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(8,14,28,0.72) 0%, transparent 100%)',
      }} />

      {/* Mute button */}
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className="hero-mute"
        style={{
          position: 'absolute', top: 80, right: 20, zIndex: 20,
          width: 34, height: 34, borderRadius: 8,
          background: 'rgba(8,14,28,0.55)',
          backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.14)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'background 0.18s', color: 'rgba(255,255,255,0.65)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,99,235,0.5)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(8,14,28,0.55)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
      >
        <Fa icon={muted ? Icons.volumeOff : Icons.volumeOn} style={{ fontSize: 13 }} />
      </button>

      {/* ══════════════════════════════════════════
          DESKTOP ≥ 861px
      ══════════════════════════════════════════ */}
      <div
        className="hero-desktop"
        style={{
          display: 'grid',
          gridTemplateColumns: '52% 48%',
          minHeight: 'calc(92vh - 68px)',
          maxHeight: 900,
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* LEFT — content with gradient bg for readability */}
        <div
          className="hero-content"
          style={{
            position: 'relative',
            background: 'linear-gradient(to right, rgba(8,14,28,0.85) 0%, rgba(8,14,28,0.72) 60%, rgba(8,14,28,0.12) 90%, transparent 100%)',
            clipPath: 'none', WebkitClipPath: 'none',
            padding: 'clamp(52px,7vh,88px) clamp(28px,4vw,72px) 52px clamp(32px,4.5vw,80px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}
        >
          {/* 24/7 label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, width: 'fit-content', animation: 'fadeInUp 0.4s ease both' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', flexShrink: 0, boxShadow: '0 0 0 3px rgba(34,197,94,0.25)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(190,215,245,0.75)' }}>
              24/7 Emergency Plumbing
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: 'clamp(2.8rem, 4.6vw, 5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-2px', marginBottom: 20, animation: 'fadeInUp 0.5s ease 0.08s both' }}>
            <span style={{ color: '#F1F5F9', display: 'block' }}>Reliable Plumbing.</span>
            <span style={{ color: '#3B82F6', display: 'block' }}>Done Right.</span>
          </h1>

          {/* Description */}
          <p style={{ fontSize: 'clamp(15px, 1.25vw, 16.5px)', color: 'rgba(148,175,210,0.85)', lineHeight: 1.75, maxWidth: 380, marginBottom: 36, animation: 'fadeInUp 0.5s ease 0.16s both' }}>
            Fast, professional plumbing services for homes and businesses — from urgent repairs to complete installations.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40, animation: 'fadeInUp 0.5s ease 0.24s both' }}>
            <button onClick={() => goTo('#contact')} className="btn btn-slate" style={{ padding: '14px 30px', fontSize: 15, borderRadius: 8 }}>
              Book a Service <Fa icon={Icons.arrowRight} style={{ fontSize: 13 }} />
            </button>
            <a href={PHONE_HREF} className="btn btn-call" style={{ padding: '13px 24px', fontSize: 15, borderRadius: 8, textDecoration: 'none' }}>
              <Fa icon={Icons.phone} style={{ fontSize: 14 }} /> Call Now
            </a>
          </div>

          {/* Trust — 3-column compact */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 440, animation: 'fadeInUp 0.5s ease 0.32s both' }}>
            {TRUST.map(({ icon, label, sub }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <Fa icon={icon} style={{ fontSize: 18, color: '#3B82F6' }} />
                <span style={{ fontSize: 11.5, fontWeight: 700, color: 'rgba(241,245,249,0.85)', lineHeight: 1.25 }}>{label}</span>
                <span style={{ fontSize: 10.5, color: 'rgba(148,175,210,0.55)', lineHeight: 1.4 }}>{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — review panel over video */}
        <div style={{ position: 'relative', zIndex: 5 }}>
          <div
            className="backdrop-blur-xl bg-white/10 border border-white/15"
            style={{
              position: 'absolute', bottom: 32, left: 20, right: 20,
              zIndex: 15, borderRadius: 14,
              padding: '13px 18px',
              boxShadow: '0 6px 32px rgba(0,0,0,0.5)',
              display: 'flex', alignItems: 'center',
              animation: 'fadeIn 0.6s ease 0.5s both',
            }}
          >
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, paddingRight: 16 }}>
              <div style={{ display: 'flex', flexShrink: 0 }}>
                {AVATARS.map((src, i) => (
                  <img key={src} src={src} alt="" loading="lazy" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.25)', marginLeft: i === 0 ? 0 : -8, position: 'relative', zIndex: AVATARS.length - i, flexShrink: 0 }} />
                ))}
              </div>
              <div>
                <p style={{ fontSize: 12.5, fontWeight: 700, color: '#F1F5F9', lineHeight: 1.2, marginBottom: 2 }}>Trusted by 2,000+</p>
                <p style={{ fontSize: 11, color: 'rgba(200,220,245,0.62)', lineHeight: 1.35 }}>homeowners &amp; businesses across the city.</p>
              </div>
            </div>
            <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,0.18)', flexShrink: 0 }} />
            <div style={{ flexShrink: 0, paddingLeft: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: '#F1F5F9', lineHeight: 1, letterSpacing: '-0.5px' }}>4.9</span>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => <Fa key={i} icon={Icons.star} style={{ fontSize: 11, color: '#F59E0B' }} />)}
                </div>
              </div>
              <p style={{ fontSize: 11, color: 'rgba(200,220,245,0.62)', fontWeight: 500 }}>700+ Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE ≤ 860px
          Full-screen cinematic — video fills the
          entire viewport, text overlaid on top with
          a strong bottom-up gradient for readability.
          CTAs are full-width, large tap targets.
      ══════════════════════════════════════════ */}
      <div
        className="hero-mobile"
        style={{
          display: 'none',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 5,
          minHeight: '88vh',
        } as React.CSSProperties}
      >
        {/* Mobile video — full height */}
        <video
          ref={mobRef}
          autoPlay muted loop playsInline
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: '70% center',
            zIndex: 0,
            filter: 'brightness(0.55) saturate(1.05)',
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        {/* Strong gradient — bottom heavy for text clarity */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(6,12,26,0.96) 0%, rgba(6,12,26,0.82) 35%, rgba(6,12,26,0.48) 65%, rgba(6,12,26,0.22) 100%)',
        }} />

        {/* Top gradient for nav readability */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 120, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(6,12,26,0.55) 0%, transparent 100%)',
        }} />

        {/* ── CONTENT — sits at bottom of screen ── */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginTop: 'auto',
          padding: '0 20px clamp(24px,5vw,40px)',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            marginBottom: 16,
            background: 'rgba(255,255,255,0.07)',
            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 100, padding: '5px 13px 5px 9px',
            animation: 'fadeInUp 0.4s ease both',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', flexShrink: 0, boxShadow: '0 0 0 3px rgba(34,197,94,0.25)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(200,220,245,0.85)' }}>
              24/7 Emergency Plumbing
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 10vw, 3.2rem)',
            fontWeight: 800, lineHeight: 1.02,
            letterSpacing: '-2px', marginBottom: 14,
            animation: 'fadeInUp 0.45s ease 0.08s both',
          }}>
            <span style={{ color: '#F1F5F9', display: 'block' }}>Reliable Plumbing.</span>
            <span style={{ color: '#3B82F6', display: 'block' }}>Done Right.</span>
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 15.5, color: 'rgba(180,200,230,0.82)',
            lineHeight: 1.65, marginBottom: 28,
            animation: 'fadeInUp 0.45s ease 0.16s both',
            maxWidth: 360,
          }}>
            Fast, professional plumbing for homes and businesses — available when you need us.
          </p>

          {/* CTAs — full width, large touch targets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28, animation: 'fadeInUp 0.45s ease 0.24s both' }}>
            <button onClick={() => goTo('#contact')} className="btn btn-slate"
              style={{ width: '100%', padding: '17px', fontSize: 16.5, borderRadius: 12, minHeight: 56, justifyContent: 'center', letterSpacing: '-0.2px' }}>
              Book a Service <Fa icon={Icons.arrowRight} style={{ fontSize: 15 }} />
            </button>
            <a href={PHONE_HREF} className="btn btn-call"
              style={{ width: '100%', padding: '16px', fontSize: 16, borderRadius: 12, minHeight: 54, textDecoration: 'none', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 9 }}>
              <Fa icon={Icons.phone} style={{ fontSize: 15 }} /> Call Now — {PHONE}
            </a>
          </div>

          {/* Trust row */}
          <div style={{ display: 'flex', gap: 0, animation: 'fadeInUp 0.45s ease 0.32s both', marginBottom: 24 }}>
            {TRUST.map(({ icon, label }, i) => (
              <div key={label} style={{
                flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                paddingRight: i < TRUST.length - 1 ? 8 : 0,
                borderRight: i < TRUST.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                marginRight: i < TRUST.length - 1 ? 8 : 0,
                textAlign: 'center',
              }}>
                <Fa icon={icon} style={{ fontSize: 18, color: '#3B82F6' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(220,232,250,0.8)', lineHeight: 1.3 }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Review panel — inline below trust */}
          <div
            className="backdrop-blur-xl bg-white/10 border border-white/15"
            style={{
              borderRadius: 14, padding: '12px 16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.45)',
              display: 'flex', alignItems: 'center',
              animation: 'fadeIn 0.5s ease 0.4s both',
            }}
          >
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, paddingRight: 14 }}>
              <div style={{ display: 'flex', flexShrink: 0 }}>
                {AVATARS.slice(0, 3).map((src, i) => (
                  <img key={src} src={src} alt="" loading="lazy" style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)', marginLeft: i === 0 ? 0 : -7, position: 'relative', zIndex: 3 - i }} />
                ))}
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(37,99,235,0.3)', border: '2px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: -7, fontSize: 8, fontWeight: 800, color: '#93C5FD' }}>2k+</div>
              </div>
              <div>
                <p style={{ fontSize: 12.5, fontWeight: 700, color: '#F1F5F9', lineHeight: 1.2, marginBottom: 1 }}>Trusted by 2,000+</p>
                <p style={{ fontSize: 10.5, color: 'rgba(200,220,245,0.6)', lineHeight: 1.3 }}>homeowners &amp; businesses across the city.</p>
              </div>
            </div>
            <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
            <div style={{ flexShrink: 0, paddingLeft: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: '#F1F5F9', lineHeight: 1, letterSpacing: '-0.5px' }}>4.9</span>
                <div style={{ display: 'flex', gap: 1.5 }}>
                  {[...Array(5)].map((_, i) => <Fa key={i} icon={Icons.star} style={{ fontSize: 10, color: '#F59E0B' }} />)}
                </div>
              </div>
              <p style={{ fontSize: 10, color: 'rgba(200,220,245,0.6)', fontWeight: 500 }}>700+ Reviews</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Hide desktop video on mobile */
        @media (max-width: 860px) { .hero-vid-desk { display: none !important; } }
        @media (min-width: 861px) { .hero-mute { display: flex; } }

        /* Desktop grid ratios */
        @media (min-width: 861px)  and (max-width: 1100px) { .hero-desktop { grid-template-columns: 54% 46% !important; } }
        @media (min-width: 1101px) and (max-width: 1400px) { .hero-desktop { grid-template-columns: 52% 48% !important; } }
        @media (min-width: 1401px)                         { .hero-desktop { grid-template-columns: 50% 50% !important; } }
      `}</style>
    </section>
  );
}
