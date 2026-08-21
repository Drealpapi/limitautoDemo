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
  { icon: Clock,       label: 'Fast Response'       },
  { icon: Award,       label: 'Quality Work'         },
];

/* Fake avatar initials for social proof */
const AVATARS = ['MR', 'JL', 'SA', 'DK'];
const AVATAR_COLORS = ['#2563EB', '#1E3A5F', '#3B82F6', '#1D4ED8'];

export default function Hero() {
  const [muted,      setMuted]      = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const deskRef   = useRef<HTMLVideoElement>(null);
  const mobRef    = useRef<HTMLVideoElement>(null);

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
      {/* ═══════════════════════════════════════
          DESKTOP  ≥861px
      ═══════════════════════════════════════ */}
      <div
        className="hero-desktop"
        style={{
          display: 'grid',
          gridTemplateColumns: '44% 56%',
          minHeight: 'calc(94vh - 68px)',
          maxHeight: 900,
          position: 'relative',
        }}
      >
        {/* ── LEFT: copy ── */}
        <div style={{
          position: 'relative', zIndex: 3,
          padding: 'clamp(56px,8vh,96px) clamp(36px,4vw,72px) 56px clamp(36px,4.5vw,80px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>

          {/* Emergency label — small, professional */}
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              marginBottom: 28, width: 'fit-content',
              animation: 'fadeInUp 0.4s ease both',
            }}
            aria-label="24/7 Emergency Plumbing available"
          >
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#22C55E', flexShrink: 0,
              boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(200,220,245,0.75)',
            }}>
              24/7 Emergency Plumbing
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 4.6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-2.5px',
              marginBottom: 22,
              animation: 'fadeInUp 0.5s ease 0.08s both',
            }}
          >
            <span style={{ color: '#F1F5F9', display: 'block' }}>Reliable Plumbing.</span>
            <span style={{ color: '#3B82F6', display: 'block' }}>Done Right.</span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(15px, 1.3vw, 17px)',
            color: 'rgba(148,175,210,0.9)',
            lineHeight: 1.75,
            maxWidth: 400,
            marginBottom: 40,
            animation: 'fadeInUp 0.5s ease 0.16s both',
          }}>
            Fast, professional plumbing services for homes and businesses — from urgent repairs to complete installations.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap',
            marginBottom: 40,
            animation: 'fadeInUp 0.5s ease 0.24s both',
          }}>
            <button
              onClick={() => goTo('#contact')}
              className="btn btn-cta-red"
              style={{ padding: '14px 32px', fontSize: 14.5, borderRadius: 8 }}
            >
              Book a Service <ArrowRight size={15} />
            </button>
            <a
              href={PHONE_HREF}
              className="btn btn-call"
              style={{ padding: '13px 26px', fontSize: 14.5, borderRadius: 8, textDecoration: 'none' }}
            >
              <Phone size={15} /> Call Now
            </a>
          </div>

          {/* Trust signals — compact row */}
          <div style={{
            display: 'flex', gap: 22, flexWrap: 'wrap',
            animation: 'fadeInUp 0.5s ease 0.32s both',
          }}>
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                fontSize: 12.5, fontWeight: 500,
                color: 'rgba(148,175,210,0.8)',
              }}>
                <Icon size={14} color="rgba(59,130,246,0.85)" strokeWidth={2} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: video + SVG curve ── */}
        <div style={{ position: 'relative', overflow: 'hidden' }} aria-hidden="true">

          {/* Poster fallback */}
          <img
            src={VIDEO_POSTER} alt=""
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '65% center',
              opacity: videoReady ? 0 : 1,
              transition: 'opacity 0.8s ease', zIndex: 1,
              filter: 'brightness(0.68) saturate(0.9)',
            }}
          />

          {/* Video */}
          <video
            ref={deskRef}
            autoPlay muted loop playsInline
            poster={VIDEO_POSTER}
            onCanPlay={() => setVideoReady(true)}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '65% center', display: 'block',
              opacity: videoReady ? 1 : 0,
              transition: 'opacity 0.8s ease', zIndex: 1,
              filter: 'brightness(0.7) saturate(1.05) contrast(1.04)',
            }}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {/* ── SVG CURVED MASK — navy overlaps into photo ── */}
          {/*
            The SVG sits on the LEFT edge of the video column.
            It draws the navy background color as a curved shape
            that bleeds ~120px into the photo area,
            creating a smooth cinematic merge.
          */}
          <svg
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '36%',        /* how far the curve extends into the photo */
              height: '100%',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          >
            {/* Navy fill — matches hero bg exactly */}
            <path
              d="M0,0 L0,100 C40,100 60,50 40,0 Z"
              fill="#0C1829"
            />
          </svg>

          {/* Bottom vignette */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '38%',
            zIndex: 2, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(8,14,28,0.75) 0%, transparent 100%)',
          }} />

          {/* Top vignette */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '18%',
            zIndex: 2, pointerEvents: 'none',
            background: 'linear-gradient(to bottom, rgba(8,14,28,0.4) 0%, transparent 100%)',
          }} />

          {/* ── Mute button ── */}
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            style={{
              position: 'absolute', bottom: 20, right: 20, zIndex: 10,
              width: 36, height: 36, borderRadius: 8,
              background: 'rgba(8,14,28,0.65)',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'background 0.18s',
              color: 'rgba(255,255,255,0.65)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,99,235,0.5)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(8,14,28,0.65)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>

          {/* ── Review / trust panel — bottom left of photo ── */}
          <div style={{
            position: 'absolute', bottom: 28, left: '28%', zIndex: 10,
            background: 'rgba(8,16,32,0.72)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 14,
            padding: '14px 18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            maxWidth: 280,
            animation: 'fadeIn 0.7s ease 0.6s both',
            transition: 'transform 0.22s ease',
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
          >
            {/* Avatars + rating row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              {/* Overlapping avatar circles */}
              <div style={{ display: 'flex', flexShrink: 0 }}>
                {AVATARS.map((init, i) => (
                  <div key={init} style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: AVATAR_COLORS[i],
                    border: '2px solid rgba(8,16,32,0.85)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, fontWeight: 700, color: '#fff',
                    marginLeft: i === 0 ? 0 : -8,
                    zIndex: AVATARS.length - i,
                    position: 'relative',
                  }}>
                    {init}
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: '#F1F5F9', lineHeight: 1 }}>4.9</span>
                  <div style={{ display: 'flex', gap: 1.5 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} color="#F59E0B" fill="#F59E0B" />
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: 10.5, color: 'rgba(148,175,210,0.75)', fontWeight: 500, marginTop: 1 }}>
                  700+ Reviews
                </p>
              </div>
            </div>

            <p style={{
              fontSize: 11.5, color: 'rgba(148,175,210,0.8)',
              lineHeight: 1.5, fontWeight: 400,
            }}>
              Trusted by 2,000+ homeowners &amp; businesses
            </p>
          </div>
        </div>
      </div>


      {/* ═══════════════════════════════════════
          MOBILE  ≤860px
          Stack layout: content on dark bg,
          then image below with rating overlay
      ═══════════════════════════════════════ */}
      <div
        className="hero-mobile"
        style={{
          display: 'none',
          flexDirection: 'column',
          minHeight: 'calc(100svh - 68px)',
        }}
      >
        {/* ── Top: text content ── */}
        <div style={{
          padding: 'clamp(32px,6vw,52px) 20px 28px',
          display: 'flex', flexDirection: 'column',
          position: 'relative', zIndex: 2,
        }}>
          {/* Emergency label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginBottom: 20, width: 'fit-content',
            animation: 'fadeInUp 0.4s ease both',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#22C55E', flexShrink: 0,
              boxShadow: '0 0 0 3px rgba(34,197,94,0.18)',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            <span style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(200,220,245,0.7)',
            }}>
              24/7 Emergency Plumbing
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 10vw, 3rem)',
            fontWeight: 800, lineHeight: 1.04,
            letterSpacing: '-2px', marginBottom: 14,
            animation: 'fadeInUp 0.45s ease 0.08s both',
          }}>
            <span style={{ color: '#F1F5F9', display: 'block' }}>Reliable Plumbing.</span>
            <span style={{ color: '#3B82F6', display: 'block' }}>Done Right.</span>
          </h1>

          <p style={{
            fontSize: 15, color: 'rgba(148,175,210,0.88)',
            lineHeight: 1.7, marginBottom: 26,
            animation: 'fadeInUp 0.45s ease 0.16s both',
          }}>
            Fast, professional plumbing for homes and businesses — available when you need us.
          </p>

          {/* CTAs — stacked, full-width, large tap targets */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24,
            animation: 'fadeInUp 0.45s ease 0.24s both',
          }}>
            <button
              onClick={() => goTo('#contact')}
              className="btn btn-cta-red"
              style={{ width: '100%', padding: '16px', fontSize: 16, borderRadius: 10, minHeight: 54, justifyContent: 'center' }}
            >
              Book a Service <ArrowRight size={16} />
            </button>
            <a
              href={PHONE_HREF}
              className="btn btn-call"
              style={{ width: '100%', padding: '15px', fontSize: 16, borderRadius: 10, minHeight: 52, textDecoration: 'none', justifyContent: 'center' }}
            >
              <Phone size={16} /> Call Now — {PHONE}
            </a>
          </div>

          {/* Trust row */}
          <div style={{
            display: 'flex', gap: 18, flexWrap: 'wrap',
            animation: 'fadeInUp 0.45s ease 0.32s both',
          }}>
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 12, fontWeight: 500, color: 'rgba(148,175,210,0.75)',
              }}>
                <Icon size={13} color="rgba(59,130,246,0.8)" strokeWidth={2} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Image block ── */}
        <div style={{
          position: 'relative',
          flex: 1,
          margin: '0 16px',
          borderRadius: '18px 18px 0 0',
          overflow: 'hidden',
          minHeight: 240,
          animation: 'fadeIn 0.55s ease 0.3s both',
        }}>
          {/* Poster */}
          <img
            src={VIDEO_POSTER} alt="Professional plumber at work"
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '70% top',
              opacity: videoReady ? 0 : 1, transition: 'opacity 0.8s ease',
              filter: 'brightness(0.65) saturate(0.9)',
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
              objectFit: 'cover', objectPosition: '70% top',
              opacity: videoReady ? 1 : 0, transition: 'opacity 0.8s ease',
              filter: 'brightness(0.65) saturate(1.05)',
            }}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {/* Top fade to match section bg */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '30%',
            background: 'linear-gradient(to bottom, #0C1829, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />

          {/* Mute btn */}
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

          {/* Rating panel — bottom of image */}
          <div style={{
            position: 'absolute', bottom: 14, left: 14, zIndex: 10,
            background: 'rgba(8,16,32,0.75)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 12, padding: '10px 14px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* Mini avatars */}
              <div style={{ display: 'flex', flexShrink: 0 }}>
                {AVATARS.slice(0, 3).map((init, i) => (
                  <div key={init} style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: AVATAR_COLORS[i],
                    border: '1.5px solid rgba(8,16,32,0.8)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 7.5, fontWeight: 700, color: '#fff',
                    marginLeft: i === 0 ? 0 : -6,
                    position: 'relative', zIndex: 3 - i,
                  }}>
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#F1F5F9' }}>4.9</span>
                  <div style={{ display: 'flex', gap: 1 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={9} color="#F59E0B" fill="#F59E0B" />
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: 10, color: 'rgba(148,175,210,0.7)', marginTop: 1 }}>
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
