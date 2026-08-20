import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollTo } from '../lib/utils';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  const transparent = !scrolled;

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          transparent
            ? 'bg-transparent'
            : 'bg-white shadow-[0_1px_24px_rgba(13,31,60,0.09)]',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB] rounded"
            aria-label="FlowRight Plumbing — home"
          >
            <div className="w-9 h-9 bg-[#1B6FDB] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-[0_2px_8px_rgba(27,111,219,0.35)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6.2V20a1 1 0 001 1h6a1 1 0 001-1v-4.8c1.8-1.5 3-3.7 3-6.2 0-4-3-7-7-7z" fill="white" opacity="0.9"/>
                <path d="M9 15.5V18h6v-2.5" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                <circle cx="12" cy="9" r="2.5" fill="white" opacity="0.5"/>
              </svg>
            </div>
            <div>
              <span className={`font-display font-bold text-[17px] tracking-tight transition-colors ${transparent ? 'text-white' : 'text-[#0D1F3C]'}`}>
                FlowRight
              </span>
              <span className={`font-display font-light text-[17px] tracking-tight transition-colors ${transparent ? 'text-white/80' : 'text-[#1B6FDB]'}`}>
                {' '}Plumbing
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={[
                  'text-[13.5px] font-medium px-3.5 py-2 rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB]',
                  transparent
                    ? 'text-white/85 hover:text-white hover:bg-white/10'
                    : 'text-[#2E4068] hover:text-[#1B6FDB] hover:bg-[#EBF3FF]',
                ].join(' ')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop right: phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className={[
                'flex items-center gap-2 text-[13.5px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB] rounded',
                transparent ? 'text-white hover:text-white/80' : 'text-[#0D1F3C] hover:text-[#1B6FDB]',
              ].join(' ')}
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone size={14} aria-hidden="true" />
              {PHONE}
            </a>
            <button
              onClick={() => handleNav('#contact')}
              className="text-[13.5px] font-semibold bg-[#F57C2B] text-white px-5 py-2.5 rounded-xl hover:bg-[#E06820] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F57C2B] focus-visible:ring-offset-2 shadow-[0_2px_8px_rgba(245,124,43,0.35)]"
            >
              Book a Service
            </button>
          </div>

          {/* Mobile: phone icon + menu */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={PHONE_HREF}
              className={`p-2 rounded-xl transition-colors ${transparent ? 'text-white hover:bg-white/10' : 'text-[#1B6FDB] hover:bg-[#EBF3FF]'}`}
              aria-label={`Call ${PHONE}`}
            >
              <Phone size={20} aria-hidden="true" />
            </a>
            <button
              className={`p-2 rounded-xl transition-colors ${transparent ? 'text-white hover:bg-white/10' : 'text-[#0D1F3C] hover:bg-[#EBF3FF]'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={[
          'fixed inset-0 z-40 bg-white flex flex-col pt-16 transition-all duration-300 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col px-5 py-5 gap-0.5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-left text-[17px] font-medium text-[#0D1F3C] py-3.5 border-b border-[#E2EAF5] hover:text-[#1B6FDB] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#1B6FDB]"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="px-5 pt-4 flex flex-col gap-3">
          <a
            href={PHONE_HREF}
            className="w-full flex items-center justify-center gap-2.5 bg-[#1B6FDB] text-white font-semibold py-4 rounded-xl text-base hover:bg-[#1560C0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB]"
          >
            <Phone size={18} aria-hidden="true" />
            Call Now — {PHONE}
          </a>
          <button
            onClick={() => handleNav('#contact')}
            className="w-full flex items-center justify-center gap-2 bg-[#F57C2B] text-white font-semibold py-4 rounded-xl text-base hover:bg-[#E06820] transition-colors cursor-pointer"
          >
            Book a Service
          </button>
        </div>
        <p className="text-center text-[#8FA0BA] text-xs mt-auto px-5 pb-8 pt-5">
          Available 24/7 for emergencies
        </p>
      </div>

      {/* Mobile sticky CTA bar (visible on scroll) */}
      <div
        className={[
          'fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 bg-white border-t border-[#E2EAF5] shadow-[0_-4px_20px_rgba(13,31,60,0.1)]',
          scrolled ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
        ].join(' ')}
        aria-hidden={!scrolled}
      >
        <div className="grid grid-cols-2 gap-0">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 text-[14px] font-semibold text-[#1B6FDB] py-4 border-r border-[#E2EAF5] hover:bg-[#EBF3FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB]"
            tabIndex={scrolled ? 0 : -1}
            aria-label={`Call ${PHONE}`}
          >
            <Phone size={16} aria-hidden="true" />
            Call Now
          </a>
          <button
            onClick={() => handleNav('#contact')}
            className="flex items-center justify-center gap-2 text-[14px] font-semibold text-white bg-[#F57C2B] hover:bg-[#E06820] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F57C2B]"
            tabIndex={scrolled ? 0 : -1}
          >
            Book a Service
          </button>
        </div>
      </div>
    </>
  );
}
