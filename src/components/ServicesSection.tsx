import { useState } from 'react';
import { MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';

function goTo(anchor: string) {
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
}

const SPECS: Record<string, { icon: string; text: string }[]> = {
  'emergency':        [{ icon: '⚡', text: '24/7' }, { icon: '🔧', text: 'Any issue' }, { icon: '⏱', text: 'Fast response' }],
  'drain-cleaning':   [{ icon: '🌀', text: 'Hydro-jet' }, { icon: '📷', text: 'Camera' }, { icon: '✅', text: 'Guaranteed' }],
  'leak-detection':   [{ icon: '🔍', text: 'Non-invasive' }, { icon: '💧', text: 'Slab leaks' }, { icon: '🔧', text: 'Full repair' }],
  'water-heater':     [{ icon: '🔥', text: 'Tank/Tankless' }, { icon: '⚡', text: 'Gas/Electric' }, { icon: '📅', text: 'Same day' }],
  'pipe-repair':      [{ icon: '🔩', text: 'Copper/PEX' }, { icon: '🏠', text: 'Full repipe' }, { icon: '🛡', text: 'Warrantied' }],
  'bathroom-kitchen': [{ icon: '🚿', text: 'Fixtures' }, { icon: '🍽', text: 'Kitchen' }, { icon: '🔧', text: 'Remodel' }],
  'sewer-line':       [{ icon: '📷', text: 'Inspection' }, { icon: '💦', text: 'Hydro-jet' }, { icon: '🚫', text: 'Root removal' }],
  'commercial':       [{ icon: '🏢', text: 'All sizes' }, { icon: '📋', text: 'Contracted' }, { icon: '⚡', text: 'Priority' }],
};

const PRICE: Record<string, string> = {
  'emergency': 'Free Call-Out', 'drain-cleaning': 'From $149',
  'leak-detection': 'From $199', 'water-heater': 'From $299',
  'pipe-repair': 'Free Quote', 'bathroom-kitchen': 'Free Quote',
  'sewer-line': 'From $249', 'commercial': 'Custom Quote',
};

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" style={{ background: '#0C0C0C', padding: '88px 0 96px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 32, height: 2, background: 'rgba(255,255,255,0.5)', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#8BA8CC', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              What We Do
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <h2 style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.7rem)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.08, letterSpacing: '-0.8px', maxWidth: 520,
            }}>
              Complete Plumbing Services
            </h2>
            <button
              onClick={() => goTo('#contact')}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 13.5, fontWeight: 500, color: 'rgba(255,255,255,0.6)',
                paddingBottom: 4, transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              Request Any Service <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* ── Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="svc-grid">
          {services.map(s => {
            const specs = SPECS[s.id] ?? [];
            const price = PRICE[s.id] ?? 'Free Quote';
            const isHov = hovered === s.id;

            return (
              <article
                key={s.id}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  display: 'flex', flexDirection: 'column',
                  overflow: 'hidden',
                  transform: isHov ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isHov
                    ? '0 20px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)'
                    : '0 2px 12px rgba(0,0,0,0.25)',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: 175, overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={s.image} alt={s.title} loading="lazy"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transform: isHov ? 'scale(1.07)' : 'scale(1)',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  {/* Bottom fade */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)',
                  }} />
                  {s.emergency && (
                    <div style={{
                      position: 'absolute', top: 10, right: 10,
                      background: 'linear-gradient(135deg,#F57C2B,#FF9A4A)',
                      color: '#fff', fontSize: 9, fontWeight: 800,
                      padding: '4px 9px', borderRadius: 20,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      boxShadow: '0 2px 8px rgba(245,124,43,0.5)',
                    }}>24/7</div>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '16px 16px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Title row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 7, marginBottom: 11 }}>
                    <MapPin size={13} style={{ color: '#1B6FDB', flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: '#111', lineHeight: 1.3 }}>
                      {s.title}
                    </span>
                  </div>

                  {/* Specs */}
                  <div style={{
                    display: 'flex', gap: 10, flexWrap: 'wrap',
                    paddingBottom: 12, marginBottom: 14,
                    borderBottom: '1px solid #F0F0F0',
                  }}>
                    {specs.map(sp => (
                      <div key={sp.text} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ fontSize: 11 }}>{sp.icon}</span>
                        <span style={{ fontSize: 11, color: '#888', fontWeight: 400 }}>{sp.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', gap: 8 }}>
                    <button
                      onClick={() => goTo('#contact')}
                      className="btn-glass btn-primary"
                      style={{ padding: '9px 16px', fontSize: 11.5, borderRadius: 7, fontWeight: 700, letterSpacing: '0.03em' }}
                    >
                      Book Now
                    </button>
                    <span style={{ fontSize: 12, fontWeight: 800, color: '#111', letterSpacing: '-0.2px', textAlign: 'right' }}>
                      {price}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA row */}
        <div style={{ marginTop: 52, textAlign: 'center' }}>
          <button
            onClick={() => goTo('#contact')}
            className="btn-glass btn-ghost-dark"
            style={{ padding: '14px 36px', fontSize: 14, borderRadius: 10 }}
          >
            View All Services & Pricing
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) { .svc-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 720px)  { .svc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px)  { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
