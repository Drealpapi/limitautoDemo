import { Phone, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { scrollTo } from '../lib/utils';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const badges = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Clock, label: '24/7 Emergency Service' },
  { icon: Star, label: 'Highly Rated' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero — FlowRight Plumbing"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=1920&q=85&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          fetchPriority="high"
        />
        {/* layered overlays — keeps background identifiable but readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F3C]/88 via-[#0D1F3C]/65 to-[#0D1F3C]/25" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C]/60 via-transparent to-transparent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 w-full pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-2xl">

          {/* Emergency badge */}
          <div
            className="inline-flex items-center gap-2 bg-[#F57C2B]/15 border border-[#F57C2B]/40 rounded-full px-4 py-2 mb-7"
            style={{ animation: 'fadeInUp 0.5s ease 0.1s both' }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F57C2B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F57C2B]"></span>
            </span>
            <span className="text-[#F57C2B] text-[12px] font-semibold tracking-wide">
              24/7 Emergency Service Available
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold text-white leading-[1.05] mb-5"
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 4.4rem)',
              animation: 'fadeInUp 0.6s ease 0.2s both',
            }}
          >
            Reliable Plumbing.<br />
            <span className="text-[#5BA8FF]">Done Right.</span>
          </h1>

          {/* Sub */}
          <p
            className="text-white/70 text-lg lg:text-xl leading-relaxed mb-9"
            style={{ animation: 'fadeInUp 0.6s ease 0.35s both' }}
          >
            From emergency repairs to installations and maintenance, we provide dependable plumbing solutions for homes and businesses.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-10"
            style={{ animation: 'fadeInUp 0.6s ease 0.5s both' }}
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#F57C2B] text-white font-semibold px-7 py-4 rounded-xl text-[15px] hover:bg-[#E06820] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F57C2B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1F3C] shadow-[0_4px_20px_rgba(245,124,43,0.45)]"
            >
              Book a Service
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-white/12 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-[15px] hover:bg-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone size={16} aria-hidden="true" />
              Call Now — {PHONE}
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeInUp 0.6s ease 0.65s both' }}
          >
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/65 text-[13px]">
                <Icon size={14} className="text-[#5BA8FF]" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/35 hidden lg:flex" aria-hidden="true">
        <span className="text-[10px] tracking-[0.15em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
