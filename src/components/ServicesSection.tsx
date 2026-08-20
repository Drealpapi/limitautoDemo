import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { services } from '../data/services';

function goTo(anchor: string) {
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
}

/* Plumbing equivalents of the "4 Bed / 10x10m / 1600m" spec row */
const SPECS: Record<string, { icon: string; text: string }[]> = {
  'emergency':        [{ icon: '⚡', text: '24/7' },        { icon: '🔧', text: 'Any issue' },    { icon: '⏱', text: 'Fast response' }],
  'drain-cleaning':   [{ icon: '🌀', text: 'Hydro-jet' },   { icon: '📷', text: 'Camera' },       { icon: '✅', text: 'Guaranteed' }],
  'leak-detection':   [{ icon: '🔍', text: 'Non-invasive' },{ icon: '💧', text: 'Slab leaks' },   { icon: '🔧', text: 'Full repair' }],
  'water-heater':     [{ icon: '🔥', text: 'Tank/Tankless' },{ icon: '⚡', text: 'Gas/Electric' },{ icon: '📅', text: 'Same day' }],
  'pipe-repair':      [{ icon: '🔩', text: 'Copper/PEX' },  { icon: '🏠', text: 'Full repipe' },  { icon: '🛡', text: 'Warrantied' }],
  'bathroom-kitchen': [{ icon: '🚿', text: 'Fixtures' },    { icon: '🍽', text: 'Kitchen' },      { icon: '🔧', text: 'Remodel' }],
  'sewer-line':       [{ icon: '📷', text: 'Inspection' },  { icon: '💦', text: 'Hydro-jet' },    { icon: '🚫', text: 'Root removal' }],
  'commercial':       [{ icon: '🏢', text: 'All sizes' },   { icon: '📋', text: 'Contracted' },   { icon: '⚡', text: 'Priority' }],
};

const PRICE: Record<string, string> = {
  'emergency':        'Free Call-Out',
  'drain-cleaning':   'From $149',
  'leak-detection':   'From $199',
  'water-heater':     'From $299',
  'pipe-repair':      'Free Quote',
  'bathroom-kitchen': 'Free Quote',
  'sewer-line':       'From $249',
  'commercial':       'Custom Quote',
};

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" style={{ background: '#0A0A0A', padding: '72px 0 80px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>

        {/* ── Header row: eyebrow + heading + "Explore All →" — exact reference ── */}
        <div style={{ marginBottom: 40 }}>
          {/* "— POPULAR" eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
            <div style={{ width: 36, height: 2, background: '#fff' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '.2em', textTransform: 'uppercase' }}>
              Our Services
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.08, letterSpacing: '-1px',
            }}>
              Complete Plumbing Services
            </h2>

            {/* "Explore All →" — reference style */}
            <button
              onClick={() => goTo('#contact')}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 14, fontWeight: 500, color: '#fff',
                whiteSpace: 'nowrap', paddingBottom: 6, opacity: 0.8,
                transition: 'opacity .15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
            >
              Request Any Service <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* ── Cards grid — 4 columns (all 8 services) ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }} className="svc-grid">
          {services.map(s => {
            const specs = SPECS[s.id] ?? [];
            const price = PRICE[s.id]  ?? 'Free Quote';
            const isHov = hovered === s.id;

            return (
              <article
                key={s.id}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#fff',
                  display: 'flex', flexDirection: 'column',
                  overflow: 'hidden',
                  transform: isHov ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: isHov ? '0 16px 48px rgba(0,0,0,.35)' : '0 2px 8px rgba(0,0,0,.2)',
                  transition: 'transform .22s ease, box-shadow .22s ease',
                  cursor: 'default',
                }}
              >
                {/* ── Image — portrait-ish ratio like reference ── */}
                <div style={{ position: 'relative', height: 180, overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transform: isHov ? 'scale(1.06)' : 'scale(1)',
                      transition: 'transform .45s ease',
                    }}
                  />
                  {s.emergency && (
                    <div style={{
                      position: 'absolute', top: 10, right: 10,
                      background: '#F57C2B', color: '#fff',
                      fontSize: 9, fontWeight: 800,
                      padding: '4px 8px', letterSpacing: '.12em', textTransform: 'uppercase',
                    }}>24/7</div>
                  )}
                </div>

                {/* ── Card body ── */}
                <div style={{ padding: '14px 14px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>

                  {/* Location-pin row — mirrors "📍 Banana Island, Lagos" */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                    <MapPin size={13} style={{ color: '#1B6FDB', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#111', lineHeight: 1.2 }}>
                      {s.title}
                    </span>
                  </div>

                  {/* Spec row — mirrors "🛏 4 Bed  📐 10×10m  📏 1600m" */}
                  <div style={{
                    display: 'flex', gap: 12, flexWrap: 'wrap',
                    paddingBottom: 12, marginBottom: 12,
                    borderBottom: '1px solid #F0F0F0',
                  }}>
                    {specs.map(sp => (
                      <div key={sp.text} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ fontSize: 11 }}>{sp.icon}</span>
                        <span style={{ fontSize: 11, color: '#777', lineHeight: 1 }}>{sp.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* ── Bottom row: "Book Now" + price — EXACT reference ── */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <button
                      onClick={() => goTo('#contact')}
                      style={{
                        background: '#0A0A0A', color: '#fff',
                        fontSize: 11, fontWeight: 800,
                        padding: '9px 16px',
                        border: 'none', borderRadius: 0,
                        cursor: 'pointer', letterSpacing: '.04em',
                        textTransform: 'uppercase',
                        transition: 'background .15s',
                        lineHeight: 1,
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#1B6FDB')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#0A0A0A')}
                    >
                      Book Now
                    </button>
                    <span style={{
                      fontSize: 12, fontWeight: 800, color: '#111',
                      letterSpacing: '-.2px', lineHeight: 1,
                    }}>
                      {price}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .svc-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 768px)  { .svc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px)  { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
