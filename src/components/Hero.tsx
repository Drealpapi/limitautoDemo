import { useRef, useEffect, useState } from 'react';
import { Phone, Star, Volume2, VolumeX, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

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
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Clock,       label: 'Fast Response'      },
  { icon: Award,       label: 'Quality Work'        },
];

/* Real face photos from Unsplash for the review panel */
const AVATAR_PHOTOS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop&face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop&face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop&face',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80&auto=format&fit=crop&face',
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
    const next = !muted;
    if (deskRef.current) deskRef.current.muted = next;
    if (mobRef.current)  mobRef.current.muted  = next;
    setMuted(next);
  };

  return (
    <section
      aria-label="Hero — FlowRight Plumbing"
      style={{ position: 'relative', background: '#0C1829', overflow: 'hidden', paddingTop: 68 }}
    >
      {/* ════════════════════════════════════════
          DESKTOP  ≥ 861px
      ════════════════════════════════════════ */}
      <div
        className="hero-desktop"
        style={{
          display: 'grid',
          gridTemplateColumns: '40% 60%',
          minHeight: 'calc(94vh - 68px)',
          maxHeight: 920,
          position: 'relative',
        }}
      >
        {/* ─────────────────────────────────────
            LEFT — copy
        ───────────────────────────────────── */}
        <div style={{
          position: 'relative', zIndex: 4,
          padding: 'clamp(52px,7vh,88px) clamp(20px,2.5vw,44px) 52px clamp(32px,4.5vw,80px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          /* The navy background of this column is the hero bg — no extra bg needed */
        }}>

          {/* 24/7 label */}
          <div
            aria-label="24/7 Emergency Plumbing available"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginBottom: 24, width: 'fit-content',
              animation: 'fadeInUp 0.4s ease both',
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#22C55E', flexShrink: 0,
              boxShadow: '0 0 0 3px rgba(34,197,94,0.22)',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'rgba(190,215,245,0.7)',
            }}>
              24/7 Emergency Plumbing
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.7rem, 4.8vw, 5.2rem)',
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: '-2.5px', marginBottom: 22,
            animation: 'fadeInUp 0.5s ease 0.08s both',
          }}>
            <span style={{ color: '#F1F5F9', display: 'block' }}>Reliable Plumbing.</span>
            <span style={{ color: '#3B82F6', display: 'block' }}>Done Right.</span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(15px, 1.25vw, 17px)',
            color: 'rgba(148,175,210,0.88)', lineHeight: 1.78,
            maxWidth: 390, marginBottom: 38,
            animation: 'fadeInUp 0.5s ease 0.16s both',
          }}>
            Fast, professional plumbing services for homes and businesses — from urgent repairs to complete installations.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap',
            marginBottom: 38,
            animation: 'fadeInUp 0.5s ease 0.24s both',
          }}>
            <button
              onClick={() => goTo('#contact')}
              className="btn btn-slate"
              style={{ padding: '14px 32px', fontSize: 15, borderRadius: 8 }}
            >
              Book a Service <ArrowRight size={15} />
            </button>
            <a
              href={PHONE_HREF}
              className="btn btn-call"
              style={{ padding: '13px 26px', fontSize: 15, borderRadius: 8, textDecoration: 'none' }}
            >
              <Phone size={15} /> Call Now
            </a>
          </div>

          {/* Trust signals */}
          <div style={{
            display: 'flex', gap: 22, flexWrap: 'wrap',
            animation: 'fadeInUp 0.5s ease 0.32s both',
          }}>
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                fontSize: 12.5, fontWeight: 500, color: 'rgba(148,175,210,0.78)',
              }}>
                <Icon size={14} color="#3B82F6" strokeWidth={2} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────
            RIGHT — photo/video with circular clip
            Uses clip-path for a perfect circular
            arc on the left edge — blends seamlessly
            with the navy background, exactly like
            the reference image.
        ───────────────────────────────────── */}
        <div
          style={{
            position: 'relative', overflow: 'visible',
            /*
              Instead of clip-path (which clips the element and hides overflow),
              we use an absolutely-positioned SVG overlay ON TOP of the image
              that paints the navy background color as a large circular arc —
              exactly matching the reference: a circle whose right arc is visible,
              sweeping from upper-mid down to lower-mid of the image left edge.
            */
          }}
          aria-hidden="true"
        >
          {/* SVG circle arc painted in navy over the left side of the image */}
          <svg
            viewBox="0 0 560 780"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              zIndex: 4,
              pointerEvents: 'none',
            }}
          >
            <defs>
              <mask id="curveMask">
                <rect width="560" height="780" fill="white" />
                {/*
                  Circle center at cx="-180" — well into the LEFT (navy) column.
                  Radius 400 — large enough that the RIGHT arc sweeps broadly
                  across the image left edge, creating a wide visible inward curve
                  that blends the navy column into the video, matching the reference.
                */}
                <circle cx="-180" cy="390" r="400" fill="black" />
              </mask>
            </defs>
            {/* Navy rect — the arc from the circle cut creates the curved right edge */}
            <rect
              x="0" y="0" width="320" height="780"
              fill="#0C1829"
              mask="url(#curveMask)"
            />
          </svg>

          {/* Poster — always visible, video fades over it */}
          <img
            src={VIDEO_POSTER} alt=""
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '60% center',
              opacity: 1, zIndex: 1,
              filter: 'brightness(0.68) saturate(0.88)',
            }}
          />

          {/* Video — fades in once buffered */}
          <video
            ref={deskRef}
            autoPlay muted loop playsInline
            poster={VIDEO_POSTER}
            onCanPlay={() => setVideoReady(true)}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '60% center', display: 'block',
              opacity: videoReady ? 1 : 0,
              transition: 'opacity 0.6s ease', zIndex: 2,
              filter: 'brightness(0.7) saturate(1.05) contrast(1.04)',
            }}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {/* Bottom gradient vignette */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
            zIndex: 3, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(8,14,28,0.82) 0%, transparent 100%)',
          }} />

          {/* Mute button */}
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            style={{
              position: 'absolute', top: 20, right: 20, zIndex: 10,
              width: 36, height: 36, borderRadius: 8,
              background: 'rgba(8,14,28,0.6)',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'background 0.18s',
              color: 'rgba(255,255,255,0.6)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,99,235,0.55)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(8,14,28,0.6)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>

          {/* REVIEW PANEL — Tailwind glass, compact like reference */}
          <div
            className="backdrop-blur-xl bg-white/10 border border-white/15"
            style={{
              position: 'absolute', bottom: 24, left: 20, right: 20,
              zIndex: 10,
              borderRadius: 14,
              padding: '12px 16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
              display: 'flex', alignItems: 'center',
              animation: 'fadeIn 0.6s ease 0.55s both',
            }}
          >
            {/* LEFT: avatars + text */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, paddingRight: 16 }}>
              <div style={{ display: 'flex', flexShrink: 0 }}>
                {AVATAR_PHOTOS.map((src, i) => (
                  <img key={src} src={src} alt="" loading="lazy" style={{
                    width: 34, height: 34, borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(255,255,255,0.2)',
                    marginLeft: i === 0 ? 0 : -9,
                    position: 'relative', zIndex: AVATAR_PHOTOS.length - i,
                    flexShrink: 0,
                  }} />
                ))}
              </div>
              <div>
                <p style={{ fontSize: 12.5, fontWeight: 700, color: '#F1F5F9', lineHeight: 1.2, marginBottom: 2 }}>
                  Trusted by 2,000+
                </p>
                <p style={{ fontSize: 11, color: 'rgba(200,220,245,0.6)', lineHeight: 1.35 }}>
                  homeowners &amp; businesses across the city.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />

            {/* RIGHT: 4.9 stars — zero wasted space */}
            <div style={{ flexShrink: 0, paddingLeft: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: '#F1F5F9', lineHeight: 1, letterSpacing: '-0.5px' }}>4.9</span>
                <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} color="#F59E0B" fill="#F59E0B" />)}
                </div>
              </div>
              <p style={{ fontSize: 11, color: 'rgba(200,220,245,0.6)', fontWeight: 500 }}>700+ Reviews</p>
            </div>
          </div>
        </div>
      </div>


      {/* ════════════════════════════════════════
          MOBILE  ≤ 860px
          Content above, image below.
          Review panel inside the image.
      ════════════════════════════════════════ */}
      <div
        className="hero-mobile"
        style={{
          display: 'none',
          flexDirection: 'column',
          minHeight: 'calc(100svh - 68px)',
        }}
      >
        {/* ── Content ── */}
        <div style={{
          padding: 'clamp(28px,5vw,48px) 20px 24px',
          display: 'flex', flexDirection: 'column',
          position: 'relative', zIndex: 2,
        }}>

          {/* Label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginBottom: 18, width: 'fit-content',
            animation: 'fadeInUp 0.4s ease both',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#22C55E', flexShrink: 0,
              boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            <span style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'rgba(190,215,245,0.65)',
            }}>
              24/7 Emergency Plumbing
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.1rem, 9.5vw, 2.9rem)',
            fontWeight: 800, lineHeight: 1.04,
            letterSpacing: '-2px', marginBottom: 14,
            animation: 'fadeInUp 0.45s ease 0.08s both',
          }}>
            <span style={{ color: '#F1F5F9', display: 'block' }}>Reliable Plumbing.</span>
            <span style={{ color: '#3B82F6', display: 'block' }}>Done Right.</span>
          </h1>

          <p style={{
            fontSize: 15, color: 'rgba(148,175,210,0.85)',
            lineHeight: 1.7, marginBottom: 24,
            animation: 'fadeInUp 0.45s ease 0.16s both',
          }}>
            Fast, professional plumbing for homes and businesses — available when you need us.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22,
            animation: 'fadeInUp 0.45s ease 0.24s both',
          }}>
            <button
              onClick={() => goTo('#contact')}
              className="btn btn-slate"
              style={{ width: '100%', padding: '16px', fontSize: 16, borderRadius: 10, minHeight: 54, justifyContent: 'center' }}
            >
              Book a Service <ArrowRight size={16} />
            </button>
            <a
              href={PHONE_HREF}
              className="btn btn-call"
              style={{ width: '100%', padding: '15px', fontSize: 15.5, borderRadius: 10, minHeight: 52, textDecoration: 'none', justifyContent: 'center' }}
            >
              <Phone size={16} /> Call Now — {PHONE}
            </a>
          </div>

          {/* Trust */}
          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            animation: 'fadeInUp 0.45s ease 0.32s both',
          }}>
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 12, fontWeight: 500, color: 'rgba(148,175,210,0.72)',
              }}>
                <Icon size={13} color="#3B82F6" strokeWidth={2} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Image ── */}
        <div style={{
          position: 'relative',
          flex: 1, minHeight: 260,
          margin: '0 14px',
          borderRadius: '16px 16px 0 0',
          overflow: 'hidden',
          animation: 'fadeIn 0.5s ease 0.28s both',
        }}>
          {/* Poster — always visible underneath */}
          <img
            src={VIDEO_POSTER} alt="Professional plumber at work"
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '65% top',
              opacity: 1,
              filter: 'brightness(0.62) saturate(0.88)',
            }}
          />
          {/* Video */}
          <video
            ref={mobRef}
            autoPlay muted loop playsInline
            poster={VIDEO_POSTER}
            onCanPlay={() => setVideoReady(true)}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '65% top',
              opacity: videoReady ? 1 : 0, transition: 'opacity 0.6s ease', zIndex: 2,
              filter: 'brightness(0.62) saturate(1.05)',
            }}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {/* Top fade */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '28%',
            background: 'linear-gradient(to bottom, #0C1829, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />

          {/* Mute */}
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            style={{
              position: 'absolute', top: 12, right: 12, zIndex: 10,
              width: 34, height: 34, borderRadius: 8,
              background: 'rgba(8,14,28,0.65)',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'rgba(255,255,255,0.7)',
            }}
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>

          {/* Mobile review panel — bottom of image, full-width */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
            background: 'linear-gradient(to top, rgba(7,14,30,0.92) 0%, rgba(7,14,30,0.7) 70%, transparent 100%)',
            padding: '32px 16px 16px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Avatars */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {AVATAR_PHOTOS.slice(0, 3).map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Customer ${i + 1}`}
                    loading="lazy"
                    style={{
                      width: 32, height: 32, borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid rgba(7,14,30,0.9)',
                      marginLeft: i === 0 ? 0 : -8,
                      position: 'relative', zIndex: 3 - i,
                    }}
                  />
                ))}
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'rgba(37,99,235,0.3)',
                  border: '2px solid rgba(7,14,30,0.9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginLeft: -8, fontSize: 9, fontWeight: 700, color: '#93C5FD',
                }}>2k+</div>
              </div>

              {/* Stars + number */}
              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end', marginBottom: 2 }}>
                  <span style={{ fontSize: 22, fontWeight: 800, color: '#F1F5F9', letterSpacing: '-0.5px', lineHeight: 1 }}>4.9</span>
                  <div style={{ display: 'flex', gap: 1.5 }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={11} color="#F59E0B" fill="#F59E0B" />)}
                  </div>
                </div>
                <p style={{ fontSize: 10.5, color: 'rgba(148,175,210,0.7)', fontWeight: 500 }}>
                  700+ Reviews · 2,000+ customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
