import { Phone, Mail, MapPin, Share2, Star } from 'lucide-react';
import { scrollTo } from '../lib/utils';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';
const year = new Date().getFullYear();

const serviceLinks = [
  'Emergency Plumbing',
  'Drain Cleaning',
  'Leak Detection & Repair',
  'Water Heater Services',
  'Pipe Repair & Replacement',
  'Bathroom & Kitchen Plumbing',
  'Sewer Line Services',
  'Commercial Plumbing',
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Project Gallery', href: '#gallery' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Customer Reviews', href: '#reviews' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1F3C] text-white" role="contentinfo">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-xl mb-1">Need a plumber today?</p>
            <p className="text-white/50 text-sm">We're ready to help. Call now or send us a message.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-[#F57C2B] text-white font-semibold px-6 py-3.5 rounded-xl text-[14px] hover:bg-[#E06820] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F57C2B]"
            >
              <Phone size={15} aria-hidden="true" />
              Call {PHONE}
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-[14px] border border-white/15 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Book a Service
            </button>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-12 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#1B6FDB] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6.2V20a1 1 0 001 1h6a1 1 0 001-1v-4.8c1.8-1.5 3-3.7 3-6.2 0-4-3-7-7-7z" fill="white" opacity="0.9"/>
                  <circle cx="12" cy="9" r="2.5" fill="white" opacity="0.5"/>
                </svg>
              </div>
              <span className="font-display font-bold text-[16px]">
                FlowRight <span className="font-light text-[#5BA8FF]">Plumbing</span>
              </span>
            </div>
            <p className="text-white/45 text-[13px] leading-relaxed max-w-[220px] mb-5">
              Reliable plumbing and drain services for homes and businesses. Available 24/7 for emergencies.
            </p>
            {/* Contact */}
            <div className="space-y-2.5">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-[#5BA8FF]">
                <Phone size={13} className="text-[#5BA8FF]" aria-hidden="true" /> {PHONE}
              </a>
              <a href="mailto:service@flowrightplumbing.com" className="flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-[#5BA8FF]">
                <Mail size={13} className="text-[#5BA8FF]" aria-hidden="true" /> service@flowrightplumbing.com
              </a>
              <div className="flex items-center gap-2 text-[13px] text-white/55">
                <MapPin size={13} className="text-[#5BA8FF] flex-shrink-0" aria-hidden="true" />
                <span>Your City, State [Replace]</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-2.5 mt-5">
              {[Share2, Share2, Star].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/8 hover:bg-[#1B6FDB] rounded-xl flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label={['Facebook', 'Instagram', 'Reviews'][i]}
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-semibold text-white/30 tracking-[0.18em] uppercase mb-4">Services</p>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-[13px] text-white/50 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#5BA8FF] text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-semibold text-white/30 tracking-[0.18em] uppercase mb-4">Company</p>
            <ul className="space-y-2.5" role="list">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-[13px] text-white/50 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#5BA8FF] text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[10px] font-semibold text-white/30 tracking-[0.18em] uppercase mb-4">Hours</p>
            <ul className="space-y-2.5 text-[13px] text-white/50" role="list">
              {[
                ['Monday – Friday', '7:00 AM – 7:00 PM'],
                ['Saturday', '8:00 AM – 5:00 PM'],
                ['Sunday', 'Emergency Only'],
                ['Emergency Line', '24/7 Available'],
              ].map(([day, hours]) => (
                <li key={day} className="flex flex-col gap-0.5">
                  <span className="text-white/70 font-medium">{day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 bg-[#F57C2B]/10 border border-[#F57C2B]/20 rounded-xl p-4">
              <p className="text-[#F57C2B] text-[11px] font-bold tracking-widest uppercase mb-1">Emergency?</p>
              <a
                href={PHONE_HREF}
                className="text-white font-semibold text-sm hover:text-[#5BA8FF] transition-colors focus-visible:outline-none"
              >
                Call {PHONE}
              </a>
              <p className="text-white/40 text-xs mt-0.5">Available right now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30">
            © {year} FlowRight Plumbing. All rights reserved. [Replace with your business name]
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Licensing Info'].map((l) => (
              <button key={l} className="text-[12px] text-white/30 hover:text-white/70 transition-colors cursor-pointer focus-visible:outline-none">{l}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
