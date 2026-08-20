import { Zap, UserCheck, DollarSign, Award, ShieldCheck, Home } from 'lucide-react';

const reasons = [
  { icon: Zap,         title: 'Fast Response',          body: 'We aim to respond same-day. When you need a plumber, waiting isn\'t an option.' },
  { icon: UserCheck,   title: 'Experienced Technicians', body: 'Licensed, trained plumbers who take pride in doing the job correctly the first time.' },
  { icon: DollarSign,  title: 'Transparent Pricing',     body: 'Clear upfront pricing before work begins. No hidden fees. No surprises.' },
  { icon: Award,       title: 'Quality Workmanship',     body: 'Quality materials and proven methods. We stand behind every job we complete.' },
  { icon: ShieldCheck, title: 'Licensed & Insured',      body: 'Fully licensed and insured for your peace of mind. All work meets local codes.' },
  { icon: Home,        title: 'Residential & Commercial',body: 'From family homes to multi-story commercial buildings — we handle both.' },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function WhyUsSection() {
  return (
    <section id="why-us" style={{ background: '#F7F9FC', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <div style={{ width: 32, height: 2, background: '#111' }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#999', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Why Choose Us
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#111', lineHeight: 1.1, letterSpacing: '-0.5px', maxWidth: 480 }}>
            Plumbing You Can Actually Count On
          </h2>
          <button
            onClick={() => scrollTo('#contact')}
            style={{
              background: 'none', border: '1.5px solid #111', color: '#111',
              fontSize: 13, fontWeight: 600, padding: '10px 20px',
              borderRadius: 0, cursor: 'pointer',
              transition: 'background 0.15s, color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#111'; }}
          >
            Get a Free Quote
          </button>
        </div>

        {/* 2-col layout: image left, cards grid right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="why-grid">

          {/* Image */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80&auto=format&fit=crop"
              alt="FlowRight plumber at work"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
            {/* Floating card */}
            <div style={{
              position: 'absolute', bottom: 20, left: 20, right: 20,
              background: '#fff',
              padding: '16px 18px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#1B6FDB', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
                Our Commitment
              </p>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#111', lineHeight: 1.5 }}>
                We won't leave until the job is done right and you're satisfied.
              </p>
            </div>
          </div>

          {/* 2×3 cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  style={{
                    background: '#fff',
                    padding: '20px',
                    border: '1px solid #EBEBEB',
                    transition: 'box-shadow 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = '#1B6FDB'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#EBEBEB'; }}
                >
                  <div style={{
                    width: 36, height: 36,
                    background: '#EBF3FF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 12,
                  }}>
                    <Icon size={17} color="#1B6FDB" />
                  </div>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: '#111', marginBottom: 6, lineHeight: 1.3 }}>{r.title}</p>
                  <p style={{ fontSize: 12.5, color: '#666', lineHeight: 1.6 }}>{r.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
