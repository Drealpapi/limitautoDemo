import { useState } from 'react';
import { ArrowUpRight, FolderOpen } from 'lucide-react';
import { galleryItems, categories } from '../data/gallery';

function goTo(a: string) {
  const el = document.querySelector(a);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

export default function GallerySection() {
  const [active,  setActive]  = useState('All');
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <section id="gallery" style={{ background: '#fff', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 24, height: 2.5, background: '#4A6FA5', borderRadius: 2 }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#4A6FA5', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Our Work</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(1.85rem,3.5vw,2.6rem)', fontWeight: 800, color: '#1E2D45', lineHeight: 1.08, letterSpacing: '-0.7px' }}>
            Projects We're Proud Of
          </h2>
          <button onClick={() => goTo('#contact')} style={{
            display: 'flex', alignItems: 'center', gap: 7,
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 13.5, fontWeight: 600, color: '#4A6FA5', transition: 'color 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1E2D45')}
            onMouseLeave={e => (e.currentTarget.style.color = '#4A6FA5')}
          >
            Book a Service <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Filter pills */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              fontSize: 12.5, fontWeight: 600,
              padding: '7px 16px', borderRadius: 100,
              border: active === cat ? 'none' : '1.5px solid #E2E8F0',
              cursor: 'pointer',
              background: active === cat ? '#1E2D45' : '#fff',
              color: active === cat ? '#fff' : '#5A6A85',
              boxShadow: active === cat ? '0 2px 10px rgba(30,45,69,0.2)' : 'none',
              transition: 'all 0.15s ease',
            }}
              onMouseEnter={e => { if (active !== cat) { (e.currentTarget as HTMLElement).style.borderColor = '#4A6FA5'; (e.currentTarget as HTMLElement).style.color = '#1E2D45'; } }}
              onMouseLeave={e => { if (active !== cat) { (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0'; (e.currentTarget as HTMLElement).style.color = '#5A6A85'; } }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="gal-grid">
          {filtered.map((item, i) => (
            <div key={item.id} style={{
              position: 'relative', borderRadius: 10,
              overflow: 'hidden', cursor: 'pointer',
              aspectRatio: '4/3',
              boxShadow: hovered === item.id ? '0 10px 36px rgba(30,45,69,0.18)' : '0 2px 10px rgba(30,45,69,0.08)',
              transition: 'box-shadow 0.25s ease',
            }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={item.image} alt={item.title}
                loading={i < 3 ? 'eager' : 'lazy'}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  transform: hovered === item.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.45s ease',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(17,27,40,0.72) 0%, rgba(17,27,40,0.1) 55%, transparent 100%)',
                opacity: hovered === item.id ? 1 : 0.75,
                transition: 'opacity 0.3s',
              }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 16px',
                transform: hovered === item.id ? 'translateY(0)' : 'translateY(3px)',
                transition: 'transform 0.3s ease',
              }}>
                <span style={{ fontSize: 9.5, fontWeight: 700, color: '#93B4D8', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>
                  {item.category}
                </span>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>{item.title}</span>
              </div>
              {hovered === item.id && (
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 7, padding: '5px 10px',
                  display: 'flex', alignItems: 'center', gap: 5,
                  fontSize: 11, fontWeight: 600, color: '#fff',
                }}>
                  <FolderOpen size={12} /> View
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
