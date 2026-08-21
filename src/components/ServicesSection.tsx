import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Zap, Waves, Droplets, Flame, Wrench, ShowerHead, GitMerge, Building2 } from 'lucide-react';
import { services } from '../data/services';

function goTo(a: string) {
  const el = document.querySelector(a);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

/* Lucide icon map — replaces all emoji specs */
const ICON_MAP: Record<string, React.ElementType> = {
  'emergency':        Zap,
  'drain-cleaning':   Waves,
  'leak-detection':   Droplets,
  'water-heater':     Flame,
  'pipe-repair':      Wrench,
  'bathroom-kitchen': ShowerHead,
  'sewer-line':       GitMerge,
  'commercial':       Building2,
};

/* Spec rows — text only, no emoji */
const SPECS: Record<string, { label: string }[]> = {
  'emergency':        [{ label: '24/7 Response' }, { label: 'Any Issue' }, { label: 'Fast Dispatch' }],
  'drain-cleaning':   [{ label: 'Hydro-Jet' }, { label: 'Camera Inspect' }, { label: 'Guaranteed' }],
  'leak-detection':   [{ label: 'Non-Invasive' }, { label: 'Slab Leaks' }, { label: 'Full Repair' }],
  'water-heater':     [{ label: 'Tank/Tankless' }, { label: 'Gas & Electric' }, { label: 'Same Day' }],
  'pipe-repair':      [{ label: 'Copper / PEX' }, { label: 'Full Repipe' }, { label: 'Warranted' }],
  'bathroom-kitchen': [{ label: 'All Fixtures' }, { label: 'Kitchen Lines' }, { label: 'Remodel Ready' }],
  'sewer-line':       [{ label: 'Video Inspect' }, { label: 'Hydro-Jet' }, { label: 'Root Removal' }],
  'commercial':       [{ label: 'All Sizes' }, { label: 'Contracted' }, { label: 'Priority Service' }],
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
    <section id="services" style={{ background: '#111B28', padding: '88px 0 96px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 28, height: 2, background: '#4A6FA5', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#6B8CAE', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              What We Do
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <h2 style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.7rem)', fontWeight: 800,
              color: '#fff', lineHeight: 1.08, letterSpacing: '-0.8px', maxWidth: 520,
            }}>
              Complete Plumbing Services
            </h2>
            <button onClick={() => goTo('#contact')} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13.5, fontWeight: 500, color: '#6B8CAE',
              paddingBottom: 4, transition: 'color 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B8CAE')}
            >
              Request Any Service <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="svc-grid">
          {services.map(s => {
            const Icon = ICON_MAP[s.id] ?? Wrench;
            const specs = SPECS[s.id] ?? [];
            const price = PRICE[s.id] ?? 'Free Quote';
            const isHov = hovered === s.id;

            return (
              <article
                key={s.id}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#fff', borderRadius: 10,
                  display: 'flex', flexDirection: 'column', overflow: 'hidden',
                  transform: isHov ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: isHov
                    ? '0 18px 48px rgba(0,0,0,0.35)'
                    : '0 2px 10px rgba(0,0,0,0.22)',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: 168, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={s.image} alt={s.title} loading="lazy" style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transform: isHov ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.45s ease',
                  }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17,27,40,0.4) 0%, transparent 55%)' }} />
                  {/* Icon badge top-left */}
                  <div style={{
                    position: 'absolute', top: 10, left: 10,
                    width: 32, height: 32, borderRadius: 7,
                    background: '#1E2D45',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}>
                    <Icon size={15} color="#93B4D8" />
                  </div>
                  {s.emergency && (
                    <div style={{
                      position: 'absolute', top: 10, right: 10,
                      background: '#1E2D45', color: '#93B4D8',
                      fontSize: 9, fontWeight: 800,
                      padding: '3px 8px', borderRadius: 20,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      border: '1px solid rgba(147,180,216,0.3)',
                    }}>24/7</div>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '15px 15px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Title */}
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: '#1E2D45', lineHeight: 1.3, marginBottom: 10 }}>
                    {s.title}
                  </p>

                  {/* Spec chips — Lucide text, no emoji */}
                  <div style={{
                    display: 'flex', gap: 6, flexWrap: 'wrap',
                    paddingBottom: 12, marginBottom: 12,
                    borderBottom: '1px solid #EEF2F8',
                  }}>
                    {specs.map(sp => (
                      <span key={sp.label} style={{
                        fontSize: 10.5, fontWeight: 500, color: '#4A6FA5',
                        background: '#EBF1FA', borderRadius: 4,
                        padding: '3px 7px', lineHeight: 1.4,
                      }}>
                        {sp.label}
                      </span>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', gap: 8 }}>
                    <button onClick={() => goTo('#contact')} className="btn btn-navy"
                      style={{ padding: '8px 14px', fontSize: 11.5, borderRadius: 5 }}>
                      Book Now
                    </button>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#1E2D45', textAlign: 'right' }}>
                      {price}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <button onClick={() => goTo('#contact')} className="btn btn-ghost" style={{ padding: '13px 32px', fontSize: 14, borderRadius: 8 }}>
            View All Services &amp; Pricing <ArrowUpRight size={15} />
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
