import { useState } from 'react';
import { Fa, Icons } from '../lib/icons';
import { services } from '../data/services';

const PHONE_HREF = 'tel:+15551234567';

function goTo(a: string) {
  const el = document.querySelector(a);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

const SERVICE_ICONS: Record<string, typeof Icons.emergency> = {
  'emergency':     Icons.emergency,
  'leak-pipe':     Icons.eyeDropper,
  'drain-cleaning':Icons.water,
  'water-heater':  Icons.fire,
  'toilets':       Icons.bath,
  'faucets-sinks': Icons.shower,
  'sewer':         Icons.merge,
  'water-lines':   Icons.arrowsUpDown,
  'bathroom':      Icons.shower,
  'kitchen':       Icons.utensils,
  'inspection':    Icons.search,
};

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" style={{ background: '#0E1C2E', padding: '96px 0 100px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 24, height: 2, background: '#4A6FA5', borderRadius: 2 }} />
            <span style={{ fontSize: 10.5, fontWeight: 700, color: '#6B8CAE', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              Plumbing Services
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#F0F4FA', lineHeight: 1.08, letterSpacing: '-0.8px' }}>
              What Can We Fix For You?
            </h2>
            <button onClick={() => goTo('#contact')} style={{
              display: 'flex', alignItems: 'center', gap: 7,
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13.5, fontWeight: 500, color: 'rgba(107,140,174,0.85)',
              transition: 'color 0.15s', paddingBottom: 4,
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#A8C6E8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(107,140,174,0.85)')}
            >
              Request Any Service <Fa icon={Icons.arrowRight} style={{ fontSize: 12 }} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
          {services.map(s => {
            const icon = SERVICE_ICONS[s.id] ?? Icons.wrench;
            const isHov = hovered === s.id;
            const isEmergency = !!s.emergency;

            return (
              <article
                key={s.id}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.03)',
                  border: isHov ? '1px solid rgba(255,255,255,0.2)' : isEmergency ? '1px solid rgba(220,60,60,0.25)' : '1px solid rgba(74,111,165,0.16)',
                  borderRadius: 14, overflow: 'hidden',
                  display: 'flex', flexDirection: 'column', cursor: 'pointer',
                  transform: isHov ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isHov ? '0 20px 48px rgba(0,0,0,0.4)' : isEmergency ? '0 2px 12px rgba(200,40,40,0.12)' : '0 2px 10px rgba(0,0,0,0.18)',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: 156, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={s.image} alt={s.title} loading="lazy" style={{
                    width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block',
                    transform: isHov ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.45s ease',
                    filter: isHov ? 'brightness(0.85)' : 'brightness(0.7) saturate(0.9)',
                  }} />
                  <div style={{ position: 'absolute', inset: 0, background: isHov ? 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' : 'linear-gradient(to top, rgba(14,28,46,0.7) 0%, rgba(14,28,46,0.15) 60%)', transition: 'background 0.22s ease' }} />
                  {/* Icon badge */}
                  <div style={{
                    position: 'absolute', top: 10, left: 10,
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: isEmergency ? 'rgba(180,30,30,0.85)' : 'rgba(14,28,46,0.75)',
                    backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                    border: isEmergency ? '1px solid rgba(255,120,120,0.3)' : '1px solid rgba(74,111,165,0.3)',
                    borderRadius: 8, padding: '5px 9px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}>
                    <Fa icon={icon} style={{ fontSize: 12, color: isEmergency ? '#ffaaaa' : '#93B4D8' }} />
                    {isEmergency && <span style={{ fontSize: 8.5, fontWeight: 800, color: '#ffaaaa', letterSpacing: '0.12em', textTransform: 'uppercase' }}>24/7</span>}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '14px 15px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ fontSize: 13.5, fontWeight: 700, lineHeight: 1.25, color: isHov ? '#1E2D45' : '#E8F0FA', transition: 'color 0.2s' }}>
                    {s.title}
                  </p>
                  <p style={{ fontSize: 12, lineHeight: 1.6, color: isHov ? '#5A6A85' : 'rgba(140,168,205,0.75)', transition: 'color 0.2s', flex: 1 }}>
                    {s.shortDesc}
                  </p>
                  <div style={{
                    display: 'flex', gap: 7, marginTop: 4,
                    opacity: isHov ? 1 : 0,
                    transform: isHov ? 'translateY(0)' : 'translateY(6px)',
                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                  }}>
                    <button onClick={e => { e.stopPropagation(); goTo('#contact'); }} className="btn btn-slate"
                      style={{ flex: 1, padding: '9px 12px', fontSize: 11.5, borderRadius: 7, justifyContent: 'center' }}>
                      Book Service
                    </button>
                    {isEmergency && (
                      <a href={PHONE_HREF} onClick={e => e.stopPropagation()} className="btn btn-call"
                        style={{ flex: 1, padding: '9px 12px', fontSize: 11.5, borderRadius: 7, textDecoration: 'none', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Fa icon={Icons.phone} style={{ fontSize: 11 }} /> Call Now
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTAs */}
        <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <button onClick={() => goTo('#contact')} className="btn btn-slate"
            style={{ padding: '13px 32px', fontSize: 14, borderRadius: 10 }}>
            Book a Service
          </button>
          <a href={PHONE_HREF} className="btn btn-ghost"
            style={{ padding: '13px 32px', fontSize: 14, borderRadius: 10, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Fa icon={Icons.phone} style={{ fontSize: 14 }} /> Call Now — 24/7
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .svc-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 760px)  { .svc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px)  { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
