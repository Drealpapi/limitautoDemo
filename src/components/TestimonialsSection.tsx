import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

/* Partner/brand logos — plumbing brand equivalents of reference's partner row */
const PARTNERS = [
  { name: 'RHEEM',    mark: 'RH' },
  { name: 'KOHLER',   mark: 'KO' },
  { name: 'MOEN',     mark: 'MN' },
  { name: 'BRADFORD', mark: 'BW' },
];

export default function TestimonialsSection() {
  return (
    <>
      {/* ── Review cards — white bg ── */}
      <section id="reviews" style={{ background: '#fff', padding: '80px 0 72px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
            <div style={{ width: 36, height: 2, background: '#111' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#999', letterSpacing: '.2em', textTransform: 'uppercase' }}>Reviews</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 40 }}>
            <h2 style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', fontWeight: 800, color: '#111', lineHeight: 1.08, letterSpacing: '-1px' }}>
              What Our Customers Say
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              {[...Array(5)].map((_,i) => <Star key={i} size={14} style={{ color: '#F59E0B', fill: '#F59E0B' }} />)}
              <span style={{ fontSize: 14, fontWeight: 800, color: '#111', marginLeft: 6 }}>4.9</span>
              <span style={{ fontSize: 13, color: '#999' }}>· 500+ reviews</span>
            </div>
          </div>

          {/* 4-column cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="rev-grid">
            {testimonials.map(t => (
              <div
                key={t.id}
                style={{ border: '1px solid #E8E8E8', padding: '22px 20px', display: 'flex', flexDirection: 'column', transition: 'box-shadow .2s, border-color .2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.1)'; (e.currentTarget as HTMLElement).style.borderColor = '#ccc'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = '#E8E8E8'; }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
                  {[...Array(t.rating)].map((_,i) => <Star key={i} size={12} style={{ color: '#F59E0B', fill: '#F59E0B' }} />)}
                </div>

                {/* Large open-quote mark — reference style */}
                <div style={{ fontSize: 60, color: '#E5E5E5', lineHeight: 0.75, marginBottom: 14, fontFamily: 'Georgia,serif', fontWeight: 700, userSelect: 'none' }}
                  aria-hidden="true">"</div>

                <p style={{ fontSize: 13, color: '#444', lineHeight: 1.72, flex: 1, marginBottom: 20 }}>
                  {t.text}
                </p>

                <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#111', lineHeight: 1.2 }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: '#999', marginTop: 2 }}>{t.location}</p>
                  </div>
                  <span style={{
                    fontSize: 9, fontWeight: 800, color: '#1B6FDB',
                    background: '#EBF3FF', padding: '4px 8px',
                    letterSpacing: '.08em', textTransform: 'uppercase', flexShrink: 0,
                  }}>
                    {t.service.split(' ').slice(0,2).join(' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder quote strip — pure black, exact reference ── */}
      <section style={{ background: '#0A0A0A', padding: '60px 0' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 80, alignItems: 'center' }} className="founder-grid">

            {/* Left: name / title */}
            <div>
              <p style={{ fontSize: 17, fontWeight: 800, color: '#fff', marginBottom: 5, lineHeight: 1.2 }}>
                [Owner Name]
              </p>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.4 }}>
                Founder, FlowRight Plumbing
              </p>
            </div>

            {/* Right: quote — large open-quotes, italic body */}
            <div style={{ position: 'relative', paddingLeft: 8 }}>
              <div
                style={{ position: 'absolute', top: -28, left: -16, fontSize: 96, color: '#fff', opacity: 0.1, lineHeight: 1, fontFamily: 'Georgia,serif', fontWeight: 700, userSelect: 'none', pointerEvents: 'none' }}
                aria-hidden="true"
              >"</div>
              <p style={{ fontSize: 'clamp(14px,1.8vw,18px)', color: '#ccc', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 400, position: 'relative' }}>
                Our business is built off of close relationships and we are glad that we are able to share our positive plumbing service experiences with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner logos — black bg, spaced logos, exact reference bottom row ── */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid #1a1a1a', padding: '36px 0' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 72, flexWrap: 'wrap' }} className="logos-row">
            {PARTNERS.map(p => (
              <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.35, transition: 'opacity .2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.65')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '0.35')}
              >
                {/* Stylised monogram mark — mirrors reference's geometric brand logos */}
                <div style={{
                  width: 40, height: 40, border: '2px solid #fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: '#fff', letterSpacing: '.05em' }}>{p.mark}</span>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '.2em', textTransform: 'uppercase' }}>
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px)  { .rev-grid     { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px)  { .rev-grid     { grid-template-columns: 1fr !important; } }
        @media (max-width: 700px)  { .founder-grid { grid-template-columns: 1fr !important; gap: 28px !important; } }
        @media (max-width: 480px)  { .logos-row    { gap: 36px !important; } }
      `}</style>
    </>
  );
}
