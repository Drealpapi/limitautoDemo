import { useRef, useEffect, useState } from 'react';
import { Fa, Icons } from '../lib/icons';

const PHONE      = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';
const VIDEO_SRC  = '/hero.mp4';
const VIDEO_POSTER =
  'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=1400&q=85&auto=format&fit=crop';

function goTo(a: string) {
  const el = document.querySelector(a);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

const TRUST = [
  { icon: Icons.shield, label: 'Licensed & Insured' },
  { icon: Icons.clock,  label: 'Fast Response'       },
  { icon: Icons.check,  label: 'Quality Work'         },
];

const AVATARS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80&auto=format&fit=crop',
];

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
      className="hero-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        /* The section itself has NO background — the video/poster IS the background */
        background: '#0C1829',
        paddingTop: 68,
      }}
    >
      {/* ══════════════════════════════════════
          FULL-BLEED VIDEO / POSTER BACKGROUND
          Fills the entire hero behind everything.
          The left content's navy bg is applied
          via clip-path on the content column.
      ══════════════════════════════════════ */}

      {/* Poster — always visible, no flash */}
      <img
        src={VIDEO_POSTER} alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '65% center',
          zIndex: 0,
          filter: 'brightness(0.65) saturate(0.9)',
        }}
      />

      {/* Video — fades in on top once buffered */}
      <video
        ref={deskRef}
        autoPlay muted loop playsInline
        poster={VIDEO_POSTER}
        onCanPlay={() => setVideoReady(true)}
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '65% center',
          display: 'block', zIndex: 1,
          opacity: videoReady ? 1 : 0,
          transition: 'opacity 0.8s ease',
          filter: 'brightness(0.68) saturate(1.05) contrast(1.03)',
        }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Top gradient for navbar readability */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 160, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(12,24,41,0.72) 0%, transparent 100%)',
      }} />

      {/* Bottom vignette */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '35%', zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(8,14,28,0.75) 0%, transparent 100%)',
      }} />

      {/* Mute button */}
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        style={{
          position: 'absolute', top: 84, right: 20, zIndex: 20,
          width: 36, height: 36, borderRadius: 8,
          background: 'rgba(8,14,28,0.55)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.14)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'background 0.18s',
          color: 'rgba(255,255,255,0.65)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,99,235,0.55)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(8,14,28,0.55)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
      >
        <Fa icon={muted ? Icons.volumeOff : Icons.volumeOn} style={{ fontSize: 13 }} />
      </button>

      {/* ══════════════════════════════════════
          DESKTOP LAYOUT ≥861px
          Left content column has navy background
          with clip-path curve on its right edge.
          Image shows through naturally on the right.
      ══════════════════════════════════════ */}
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
        {/* ── LEFT: navy content area with clip-path curve ── */}
        <div
          className="hero-content"
          style={{
            position: 'relative',
            /*
              Transparent background — the video shows through the whole hero.
              A left-side gradient overlay ensures text stays readable
              without blocking the cinematic image.
            */
            background: 'linear-gradient(to right, rgba(8,14,28,0.82) 0%, rgba(8,14,28,0.7) 55%, rgba(8,14,28,0.15) 88%, transparent 100%)',
            /* Remove the clip-path — with transparent bg the curve effect
               is now handled purely by the gradient fade, which looks cleaner */
            clipPath: 'none',
            WebkitClipPath: 'none',
            padding: 'clamp(52px,7vh,88px) clamp(28px,4vw,72px) 52px clamp(32px,4.5vw,80px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}
        >
          {/* 24/7 label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginBottom: 24, width: 'fit-content',
            animation: 'fadeInUp 0.4s ease both',
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#22C55E', flexShrink: 0,
              boxShadow: '0 0 0 3px rgba(34,197,94,0.25)',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: 'rgba(190,215,245,0.75)',
            }}>
              24/7 Emergency Plumbing
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.8rem, 4.6vw, 5rem)',
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: '-2px', marginBottom: 20,
            animation: 'fadeInUp 0.5s ease 0.08s both',
          }}>
            <span style={{ color: '#F1F5F9', display: 'block' }}>Reliable Plumbing.</span>
            <span style={{ color: '#3B82F6', display: 'block' }}>Done Right.</span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(15px, 1.25vw, 16.5px)',
            color: 'rgba(148,175,210,0.85)', lineHeight: 1.75,
            maxWidth: 380, marginBottom: 36,
            animation: 'fadeInUp 0.5s ease 0.16s both',
          }}>
            Fast, professional plumbing services for homes and businesses — from urgent repairs to complete installations.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap',
            marginBottom: 36,
            animation: 'fadeInUp 0.5s ease 0.24s both',
          }}>
            <button
              onClick={() => goTo('#contact')}
              className="btn btn-slate"
              style={{ padding: '14px 30px', fontSize: 15, borderRadius: 8 }}
            >
              Book a Service <Fa icon={Icons.arrowRight} style={{ fontSize: 13 }} />
            </button>
            <a
              href={PHONE_HREF}
              className="btn btn-call"
              style={{ padding: '13px 24px', fontSize: 15, borderRadius: 8, textDecoration: 'none' }}
            >
              <Fa icon={Icons.phone} style={{ fontSize: 14 }} /> Call Now
            </a>
          </div>

          {/* Trust signals */}
          <div style={{
            display: 'flex', gap: 24, flexWrap: 'wrap',
            animation: 'fadeInUp 0.5s ease 0.32s both',
          }}>
            {TRUST.map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6,
              }}>
                <Fa icon={icon} style={{ fontSize: 18, color: '#3B82F6' }} />
                <span style={{ fontSize: 11.5, fontWeight: 600, color: 'rgba(255,255,255,0.7)', lineHeight: 1.3 }}>
                  {label}
                </span>
                <span style={{ fontSize: 10.5, color: 'rgba(148,175,210,0.55)', lineHeight: 1.3 }}>
                  {label === 'Licensed & Insured' && 'Your property is in safe hands.'}
                  {label === 'Fast Response' && 'We arrive on time, every time.'}
                  {label === 'Quality Work' && 'Built to last. Done right.'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: empty — image shows through ── */}
        <div style={{ position: 'relative', zIndex: 5 }}>
          {/* Review / rating panel over lower-right of image */}
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
            {/* Avatars + text */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, paddingRight: 16 }}>
              <div style={{ display: 'flex', flexShrink: 0 }}>
                {AVATARS.map((src, i) => (
                  <img key={src} src={src} alt="" loading="lazy" style={{
                    width: 32, height: 32, borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(255,255,255,0.25)',
                    marginLeft: i === 0 ? 0 : -8,
                    position: 'relative', zIndex: AVATARS.length - i, flexShrink: 0,
                  }} />
                ))}
              </div>
              <div>
                <p style={{ fontSize: 12.5, fontWeight: 700, color: '#F1F5F9', lineHeight: 1.2, marginBottom: 2 }}>
                  Trusted by 2,000+
                </p>
                <p style={{ fontSize: 11, color: 'rgba(200,220,245,0.62)', lineHeight: 1.35 }}>
                  homeowners &amp; businesses across the city.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,0.18)', flexShrink: 0 }} />

            {/* Rating */}
            <div style={{ flexShrink: 0, paddingLeft: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: '#F1F5F9', lineHeight: 1, letterSpacing: '-0.5px' }}>4.9</span>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Fa key={i} icon={Icons.star} style={{ fontSize: 11, color: '#F59E0B' }} />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 11, color: 'rgba(200,220,245,0.62)', fontWeight: 500 }}>700+ Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE ≤860px
          Stack layout — content then image.
          No curve on mobile.
      ══════════════════════════════════════ */}
      <div
        className="hero-mobile"
        style={{
          display: 'none',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 5,
          minHeight: 'calc(100svh - 68px)',
        }}
      >
        {/* Content over the video bg */}
        <div style={{
          padding: 'clamp(28px,5vw,48px) 20px 28px',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginBottom: 18, width: 'fit-content',
            animation: 'fadeInUp 0.4s ease both',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', flexShrink: 0, animation: 'pulse-dot 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(190,215,245,0.65)' }}>
              24/7 Emergency Plumbing
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 9.5vw, 2.9rem)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-2px', marginBottom: 14, animation: 'fadeInUp 0.45s ease 0.08s both' }}>
            <span style={{ color: '#F1F5F9', display: 'block' }}>Reliable Plumbing.</span>
            <span style={{ color: '#3B82F6', display: 'block' }}>Done Right.</span>
          </h1>

          <p style={{ fontSize: 15, color: 'rgba(148,175,210,0.85)', lineHeight: 1.7, marginBottom: 24, animation: 'fadeInUp 0.45s ease 0.16s both' }}>
            Fast, professional plumbing for homes and businesses — available when you need us.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22, animation: 'fadeInUp 0.45s ease 0.24s both' }}>
            <button onClick={() => goTo('#contact')} className="btn btn-slate"
              style={{ width: '100%', padding: '16px', fontSize: 16, borderRadius: 10, minHeight: 54, justifyContent: 'center' }}>
              Book a Service <Fa icon={Icons.arrowRight} style={{ fontSize: 14 }} />
            </button>
            <a href={PHONE_HREF} className="btn btn-call"
              style={{ width: '100%', padding: '15px', fontSize: 15.5, borderRadius: 10, minHeight: 52, textDecoration: 'none', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Fa icon={Icons.phone} style={{ fontSize: 15 }} /> Call Now — {PHONE}
            </a>
          </div>

          {/* Trust — horizontal compact */}
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', animation: 'fadeInUp 0.45s ease 0.32s both' }}>
            {TRUST.map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, color: 'rgba(148,175,210,0.72)' }}>
                <Fa icon={icon} style={{ fontSize: 12, color: '#3B82F6' }} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Image block */}
        <div style={{ position: 'relative', flex: 1, minHeight: 260, margin: '0 14px', borderRadius: '16px 16px 0 0', overflow: 'hidden', animation: 'fadeIn 0.5s ease 0.28s both', zIndex: 6 }}>
          <img src={VIDEO_POSTER} alt="Professional plumber at work"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '65% top', filter: 'brightness(0.62) saturate(0.88)' }}
          />
          <video ref={mobRef} autoPlay muted loop playsInline poster={VIDEO_POSTER}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '65% top', opacity: videoReady ? 1 : 0, transition: 'opacity 0.6s ease', zIndex: 2, filter: 'brightness(0.62) saturate(1.05)' }}>
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {/* Top blend */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '28%', background: 'linear-gradient(to bottom, #0C1829, transparent)', zIndex: 3 }} />

          {/* Mute */}
          <button onClick={toggleMute} aria-label={muted ? 'Unmute video' : 'Mute video'}
            style={{ position: 'absolute', top: 12, right: 12, zIndex: 10, width: 34, height: 34, borderRadius: 8, background: 'rgba(8,14,28,0.65)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}>
            <Fa icon={muted ? Icons.volumeOff : Icons.volumeOn} style={{ fontSize: 13 }} />
          </button>

          {/* Mobile review panel */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10, background: 'linear-gradient(to top, rgba(7,14,30,0.9) 0%, rgba(7,14,30,0.65) 70%, transparent 100%)', padding: '28px 16px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {AVATARS.slice(0, 3).map((src, i) => (
                  <img key={src} src={src} alt="" loading="lazy" style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(7,14,30,0.9)', marginLeft: i === 0 ? 0 : -8, position: 'relative', zIndex: 3 - i }} />
                ))}
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(37,99,235,0.35)', border: '2px solid rgba(7,14,30,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: -8, fontSize: 8.5, fontWeight: 700, color: '#93C5FD' }}>2k+</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end', marginBottom: 2 }}>
                  <span style={{ fontSize: 20, fontWeight: 800, color: '#F1F5F9', letterSpacing: '-0.5px', lineHeight: 1 }}>4.9</span>
                  <div style={{ display: 'flex', gap: 1.5 }}>
                    {[...Array(5)].map((_, i) => <Fa key={i} icon={Icons.star} style={{ fontSize: 10, color: '#F59E0B' }} />)}
                  </div>
                </div>
                <p style={{ fontSize: 10, color: 'rgba(148,175,210,0.7)', fontWeight: 500 }}>700+ Reviews · 2,000+ customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ CSS for clip-path responsiveness ═══ */}
      <style>{`
        /* Desktop curve — full sweep */
        .hero-content {
          clip-path: path("M0,0 H72% C82%,0 88%,15% 88%,50% C88%,85% 82%,100% 72%,100% H0 Z");
          -webkit-clip-path: path("M0,0 H72% C82%,0 88%,15% 88%,50% C88%,85% 82%,100% 72%,100% H0 Z");
        }

        /* Tablet — softer curve */
        @media (max-width: 1100px) and (min-width: 861px) {
          .hero-content {
            clip-path: path("M0,0 H78% C85%,0 90%,15% 90%,50% C90%,85% 85%,100% 78%,100% H0 Z");
            -webkit-clip-path: path("M0,0 H78% C85%,0 90%,15% 90%,50% C90%,85% 85%,100% 78%,100% H0 Z");
          }
        }

        /* ─ Responsive grid breakpoints ─ */
        @media (min-width: 861px) and (max-width: 1100px)  {
          .hero-desktop { grid-template-columns: 54% 46% !important; }
        }
        @media (min-width: 1101px) and (max-width: 1400px) {
          .hero-desktop { grid-template-columns: 52% 48% !important; }
        }
        @media (min-width: 1401px) {
          .hero-desktop { grid-template-columns: 50% 50% !important; }
        }
      `}</style>
    </section>
  );
}
