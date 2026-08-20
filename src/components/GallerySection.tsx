import { useState } from 'react';
import { galleryItems, categories } from '../data/gallery';
import { ArrowUpRight } from 'lucide-react';

function goTo(anchor: string) {
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
}

export default function GallerySection() {
  const [active,  setActive]  = useState('All');
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <section id="gallery" style={{ background: '#fff', padding: '96px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{ width: 28, height: 2.5, background: '#1B6FDB', borderRadius: 2 }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1B6FDB', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Our Work
          </span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: 20, flexWrap: 'wrap', marginBottom: 36,
        }}>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3.5vw, 2.7rem)',
            fontWeight: 800, color: '#111',
            lineHeight: 1.08, letterSpacing: '-0.8px',
          }}>
            Projects We're Proud Of
          </h2>
          <button
            onClick={() => goTo('#contact')}
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13.5, fontWeight: 600, color: '#1B6FDB',
              transition: 'gap 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
            onMouseLeave={e => (e.currentTarget.style.gap = '7px')}
          >
            Book a Service <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontSize: 12.5, fontWeight: 600,
                padding: '8px 18px', borderRadius: 100,
                border: active === cat ? 'none' : '1.5px solid #E5E7EB',
                cursor: 'pointer',
                background: active === cat
                  ? 'linear-gradient(135deg,#1B6FDB,#2480F0)'
                  : '#fff',
                color: active === cat ? '#fff' : '#555',
                boxShadow: active === cat
                  ? '0 4px 14px rgba(27,111,219,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                  : 'none',
                transition: 'all 0.18s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => {
                if (active !== cat) {
                  (e.currentTarget as HTMLElement).style.borderColor = '#1B6FDB';
                  (e.currentTarget as HTMLElement).style.color = '#1B6FDB';
                }
              }}
              onMouseLeave={e => {
                if (active !== cat) {
                  (e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB';
                  (e.currentTarget as HTMLElement).style.color = '#555';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="gal-grid">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              style={{
                position: 'relative', borderRadius: 14,
                overflow: 'hidden', cursor: 'pointer',
                aspectRatio: '4/3',
                boxShadow: hovered === item.id
                  ? '0 12px 40px rgba(0,0,0,0.2)'
                  : '0 2px 10px rgba(0,0,0,0.07)',
                transition: 'box-shadow 0.25s ease',
              }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={item.image} alt={item.title}
                loading={i < 3 ? 'eager' : 'lazy'}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  transform: hovered === item.id ? 'scale(1.06)' : 'scale(1)',
                  transition: 'transform 0.45s ease',
                }}
              />
              {/* Gradient always visible */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                opacity: hovered === item.id ? 1 : 0.7,
                transition: 'opacity 0.3s',
              }} />

              {/* Label */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '20px 18px 18px',
                transform: hovered === item.id ? 'translateY(0)' : 'translateY(3px)',
                transition: 'transform 0.3s ease',
              }}>
                <span style={{
                  fontSize: 9.5, fontWeight: 800, color: '#93C5FD',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  display: 'block', marginBottom: 4,
                }}>
                  {item.category}
                </span>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>
                  {item.title}
                </span>
              </div>

              {/* Glass hover badge */}
              {hovered === item.id && (
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: 8, padding: '6px 12px',
                  fontSize: 11, fontWeight: 600, color: '#fff',
                }}>
                  View Project
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) { .gal-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .gal-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
