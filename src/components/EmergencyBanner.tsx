import { Phone, AlertTriangle } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

export default function EmergencyBanner() {
  return (
    <section
      className="bg-[#0D1F3C] py-12 lg:py-14"
      aria-label="24/7 Emergency Plumbing Service"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-[#F57C2B]/15 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={26} className="text-[#F57C2B]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[#F57C2B] text-[11px] font-semibold tracking-[0.2em] uppercase mb-1">
                Emergency Plumbing
              </p>
              <h2 className="font-display font-bold text-white text-2xl lg:text-3xl mb-2">
                Plumbing problems don't wait.{' '}
                <span className="text-[#5BA8FF]">Neither do we.</span>
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed max-w-lg">
                Burst pipes, major leaks, flooding — our emergency team is available around the clock and ready to respond fast.
              </p>
            </div>
          </div>

          {/* Right: phone */}
          <div className="flex flex-col items-center lg:items-end gap-3 flex-shrink-0">
            <a
              href={PHONE_HREF}
              className="group flex items-center gap-3 bg-[#F57C2B] text-white font-bold px-7 py-4 rounded-xl text-lg hover:bg-[#E06820] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F57C2B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1F3C] shadow-[0_4px_20px_rgba(245,124,43,0.4)]"
              aria-label={`Call our 24/7 emergency line at ${PHONE}`}
            >
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" aria-hidden="true" />
                <Phone size={20} className="relative" aria-hidden="true" />
              </div>
              {PHONE}
            </a>
            <p className="text-white/35 text-xs">Available 24/7 · Rapid Response</p>
          </div>
        </div>
      </div>
    </section>
  );
}
