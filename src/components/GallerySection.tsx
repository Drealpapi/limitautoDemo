import { useState } from 'react';
import { galleryItems, categories } from '../data/gallery';
import { ArrowRight } from 'lucide-react';

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function GallerySection() {
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <section id="gallery" style={{ background: '#fff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <div style={{ width: 32, height: 2, background: '#111' }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#999', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Our Work
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#111', lineHeight: 1.1, letterSpacing: '-0.5px' }}>
            Projects We're Proud Of
          </h2>
          <button
            onClick={() => scrollTo('#contact')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 500, color: '#111' }}
          >
            Book a Service <ArrowRight size={15} />
          </button>
        </div>

        {/* Filter pills */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background: active === cat ? '#111' : '#F5F5F5',
                color: active === cat ? '#fff' : '#555',
                border: 'none',
                fontSize: 12, fontWeight: 600,
                padding: '8px 16px',
                borderRadius: 0, cursor: 'pointer',
                letterSpacing: '0.02em',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="gallery-grid">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  transform: hovered === item.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.4s',
                }}
                loading={i < 3 ? 'eager' : 'lazy'}
              />
              {/* Label overlay — always visible at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
                padding: '32px 16px 14px',
                transform: hovered === item.id ? 'translateY(0)' : 'translateY(4px)',
                transition: 'transform 0.3s',
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#7DB8F5', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 3 }}>
                  {item.category}
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .gallery-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
