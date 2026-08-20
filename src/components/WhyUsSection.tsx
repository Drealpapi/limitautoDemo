import { Zap, UserCheck, DollarSign, Award, ShieldCheck, Home } from 'lucide-react';

function goTo(anchor: string) {
  const el = document.querySelector(anchor);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
}

const REASONS = [
  { icon: Zap,         title: 'Fast Response',           body: 'Same-day response as standard. Emergency calls answered immediately.' },
  { icon: UserCheck,   title: 'Experienced Technicians', body: 'Licensed, trained plumbers who get the job done correctly the first time.' },
  { icon: DollarSign,  title: 'Transparent Pricing',     body: 'Clear upfront pricing before work starts. No hidden fees. Zero surprises.' },
  { icon: Award,       title: 'Quality Workmanship',     body: 'Quality materials and proven methods. Every job is backed by our guarantee.' },
  { icon: ShieldCheck, title: 'Licensed & Insured',      body: 'Fully licensed and insured. All work meets local codes and standards.' },
  { icon: Home,        title: 'Homes & Businesses',      body: 'From a single faucet to a full commercial fit-out — we handle both.' },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" style={{ background: '#F4F7FB', padding: '96px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{ width: 28, height: 2.5, background: '#1B6FDB', borderRadius: 2 }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1B6FDB', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Why Choose Us
          </span>
        </div>

        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: 20, flexWrap: 'wrap', marginBottom: 56,
        }}>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3.5vw, 2.7rem)',
            fontWeight: 800, color: '#111',
            lineHeight: 1.08, letterSpacing: '-0.8px', maxWidth: 500,
          }}>
            Plumbing You Can Actually Count On
          </h2>
          <button
            onClick={() => goTo('#contact')}
            className="btn-glass btn-ghost-light"
            style={{ padding: '12px 24px', fontSize: 13.5, borderRadius: 9 }}
          >
            Get a Free Quote
          </button>
        </div>

        {/* ── Two-column ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="why-grid">

          {/* Image block */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.14)' }}>
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80&auto=format&fit=crop"
                alt="FlowRight plumber at work"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
            {/* Glass overlay card */}
            <div style={{
              position: 'absolute', bottom: 20, left: 20, right: 20,
              background: 'rgba(255,255,255,0.88)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.7)',
              borderRadius: 12, padding: '16px 20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#1B6FDB', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 5 }}>
                Our Promise
              </p>
              <p style={{ fontSize: 13.5, fontWeight: 600, color: '#111', lineHeight: 1.5 }}>
                We won't leave until the job is done right and you're satisfied.
              </p>
            </div>
            {/* Decorative accent */}
            <div style={{
              position: 'absolute', top: -10, right: -10,
              width: 72, height: 72, borderRadius: 16,
              background: 'rgba(27,111,219,0.08)',
              zIndex: -1,
            }} aria-hidden="true" />
          </div>

          {/* Reason cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {REASONS.map(r => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  style={{
                    background: '#fff',
                    borderRadius: 12, padding: '20px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(27,111,219,0.12)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(27,111,219,0.25)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.06)';
                  }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: 'linear-gradient(135deg,#EBF3FF,#D6E9FF)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 14, boxShadow: '0 2px 8px rgba(27,111,219,0.12)',
                  }}>
                    <Icon size={17} color="#1B6FDB" />
                  </div>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: '#111', marginBottom: 7, lineHeight: 1.3 }}>{r.title}</p>
                  <p style={{ fontSize: 12.5, color: '#6B7280', lineHeight: 1.65 }}>{r.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) { .why-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 540px) { .why-grid > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
