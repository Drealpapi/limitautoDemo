import { Zap, UserCheck, DollarSign, Award, ShieldCheck, Home } from 'lucide-react';

function goTo(a: string) {
  const el = document.querySelector(a);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
}

const REASONS = [
  { icon: Zap,         title: 'Fast Response',           body: 'Same-day response as standard. Emergency calls answered immediately, any time of day.' },
  { icon: UserCheck,   title: 'Experienced Technicians', body: 'Licensed, trained plumbers who get the job done correctly the first time — every time.' },
  { icon: DollarSign,  title: 'Transparent Pricing',     body: 'Clear upfront pricing before work starts. No hidden fees, no surprise charges.' },
  { icon: Award,       title: 'Quality Workmanship',     body: 'Quality materials and proven methods. Every job is fully backed by our workmanship guarantee.' },
  { icon: ShieldCheck, title: 'Licensed & Insured',      body: 'Fully licensed and insured for your complete peace of mind. All work meets local codes.' },
  { icon: Home,        title: 'Homes & Businesses',      body: 'From a single faucet to a full commercial fit-out — residential and commercial covered.' },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" style={{ background: '#F6F8FC', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 24, height: 2.5, background: '#4A6FA5', borderRadius: 2 }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#4A6FA5', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Why Choose Us
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 56 }}>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)', fontWeight: 800,
            color: '#1E2D45', lineHeight: 1.08, letterSpacing: '-0.7px', maxWidth: 500,
          }}>
            Plumbing You Can Actually Count On
          </h2>
          <button onClick={() => goTo('#contact')} className="btn btn-outline" style={{ padding: '11px 22px', fontSize: 13.5 }}>
            Get a Free Quote
          </button>
        </div>

        {/* Two-col */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="why-grid">

          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 12px 40px rgba(30,45,69,0.14)' }}>
              <img
                src="https://images.unsplash.com/photo-1542013936693-884638332954?w=800&q=80&auto=format&fit=crop"
                alt="Plumber working on residential pipe installation"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
            {/* Glass promise card */}
            <div style={{
              position: 'absolute', bottom: 18, left: 18, right: 18,
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.7)',
              borderRadius: 10, padding: '15px 18px',
              boxShadow: '0 6px 24px rgba(30,45,69,0.1)',
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#4A6FA5', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 5 }}>Our Promise</p>
              <p style={{ fontSize: 13.5, fontWeight: 600, color: '#1E2D45', lineHeight: 1.5 }}>
                We won't leave until the job is done right and you're satisfied.
              </p>
            </div>
            <div style={{ position: 'absolute', top: -8, right: -8, width: 64, height: 64, borderRadius: 12, background: 'rgba(74,111,165,0.08)', zIndex: -1 }} aria-hidden="true" />
          </div>

          {/* Reason cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {REASONS.map(r => {
              const Icon = r.icon;
              return (
                <div key={r.title} style={{
                  background: '#fff', borderRadius: 10, padding: '18px',
                  border: '1px solid #E8EDF6',
                  boxShadow: '0 1px 6px rgba(30,45,69,0.05)',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'translateY(-3px)';
                    el.style.boxShadow = '0 8px 24px rgba(74,111,165,0.12)';
                    el.style.borderColor = '#C0CEE8';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = '0 1px 6px rgba(30,45,69,0.05)';
                    el.style.borderColor = '#E8EDF6';
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 9, marginBottom: 12,
                    background: '#EBF1FA',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={17} color="#4A6FA5" />
                  </div>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: '#1E2D45', marginBottom: 6, lineHeight: 1.3 }}>{r.title}</p>
                  <p style={{ fontSize: 12.5, color: '#6B7A99', lineHeight: 1.65 }}>{r.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) { .why-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 520px) { .why-grid > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
