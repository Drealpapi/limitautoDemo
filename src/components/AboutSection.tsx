import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeading from './SectionHeading';
import { CheckCircle2, Phone } from 'lucide-react';
import { scrollTo } from '../lib/utils';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const commitments = [
  'We show up on time and work cleanly',
  'We explain what\'s wrong before we start',
  'We price fairly and transparently',
  'We clean up completely before leaving',
  'We stand behind all our work',
  'We treat your home with respect',
];

export default function AboutSection() {
  const [imgRef, imgVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [textRef, textVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-[#F1F5FD]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div
            ref={imgRef as React.RefObject<HTMLDivElement>}
            className={[
              'relative transition-all duration-700 order-2 lg:order-1',
              imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
            ].join(' ')}
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80&auto=format&fit=crop"
                alt="FlowRight plumber at work installing a water heater"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Stat callout */}
              <div className="absolute top-5 right-5 bg-[#1B6FDB] text-white rounded-2xl px-5 py-4 shadow-[0_4px_20px_rgba(27,111,219,0.4)]">
                <p className="text-2xl font-bold leading-none mb-1">[X]+</p>
                <p className="text-[11px] text-white/75 font-medium">Years Serving<br />Our Community</p>
              </div>
            </div>
            {/* Second image */}
            <div className="absolute -bottom-5 -left-5 w-40 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-[0_4px_20px_rgba(13,31,60,0.15)] hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80&auto=format&fit=crop"
                alt="Plumber working on pipes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text side */}
          <div
            ref={textRef as React.RefObject<HTMLDivElement>}
            className={[
              'order-1 lg:order-2 transition-all duration-700',
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
            ].join(' ')}
          >
            <SectionHeading
              eyebrow="About FlowRight"
              title="Your Local Plumber. Built on Trust."
              subtitle="FlowRight Plumbing was built on a simple idea: do excellent work, treat customers well, and be the company your neighbors call when something goes wrong. We've carried that philosophy through every job we've ever done."
              id="about-heading"
            />

            <p className="text-[#5A6A85] text-sm leading-relaxed mt-5 mb-6">
              Our team of licensed plumbers brings the skills, tools, and experience needed to solve virtually any plumbing problem — from a dripping faucet to a complete commercial fit-out. We stay current with the latest techniques and materials so you get the best long-term results.
            </p>

            {/* Commitments */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8" role="list">
              {commitments.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[13.5px] text-[#2E4068]">
                  <CheckCircle2 size={15} className="text-[#1B6FDB] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 bg-[#1B6FDB] text-white font-semibold px-7 py-3.5 rounded-xl text-[14.5px] hover:bg-[#1560C0] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB] focus-visible:ring-offset-2"
              >
                Get a Free Quote
              </button>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 text-[14.5px] font-semibold text-[#0D1F3C] border border-[#C4D4EC] px-7 py-3.5 rounded-xl hover:bg-[#EBF3FF] hover:border-[#C4DAFB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB]"
              >
                <Phone size={15} aria-hidden="true" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
