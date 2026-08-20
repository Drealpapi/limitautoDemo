import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeading from './SectionHeading';
import { MapPin, Phone } from 'lucide-react';
import { scrollTo } from '../lib/utils';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

// Replace these with the actual service area
const areas = [
  { name: 'Downtown', primary: true },
  { name: 'Riverside District', primary: true },
  { name: 'Greenfield Heights', primary: true },
  { name: 'Oakwood', primary: true },
  { name: 'Elmwood Estates', primary: false },
  { name: 'Northside', primary: false },
  { name: 'Westfield', primary: false },
  { name: 'Parkview', primary: false },
  { name: 'Lakewood', primary: false },
  { name: 'Cedar Hills', primary: false },
  { name: 'Maplewood', primary: false },
  { name: 'Harborview', primary: false },
];

export default function ServiceAreaSection() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="service-area"
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="area-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={[
              'transition-all duration-700',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
            ].join(' ')}
          >
            <SectionHeading
              eyebrow="Where We Work"
              title="Serving Your Community"
              subtitle="We provide plumbing services across the following areas. Not sure if we cover your location? Give us a call — we'll let you know."
              id="area-heading"
            />

            {/* Area chips */}
            <div className="flex flex-wrap gap-2.5 mt-7 mb-8">
              {areas.map((area) => (
                <span
                  key={area.name}
                  className={[
                    'flex items-center gap-1.5 text-[13px] font-medium px-3.5 py-2 rounded-xl',
                    area.primary
                      ? 'bg-[#EBF3FF] text-[#1B6FDB] border border-[#C4DAFB]'
                      : 'bg-[#F1F5FD] text-[#5A6A85] border border-[#E2EAF5]',
                  ].join(' ')}
                >
                  <MapPin size={11} aria-hidden="true" />
                  {area.name}
                </span>
              ))}
            </div>

            <p className="text-[#8FA0BA] text-sm mb-6">
              * Replace with your actual service area. Coverage and response times may vary by distance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-[#1B6FDB] text-white font-semibold px-6 py-3.5 rounded-xl text-[14px] hover:bg-[#1560C0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB] focus-visible:ring-offset-2"
              >
                <Phone size={15} aria-hidden="true" />
                Call {PHONE}
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 text-[14px] font-semibold text-[#1B6FDB] border border-[#C4DAFB] px-6 py-3.5 rounded-xl hover:bg-[#EBF3FF] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB]"
              >
                Check My Area
              </button>
            </div>
          </div>

          {/* Right: map placeholder */}
          <div className="relative rounded-2xl overflow-hidden bg-[#EBF3FF] border border-[#C4DAFB]" style={{ minHeight: '380px' }}>
            {/* Styled map placeholder */}
            <div className="w-full h-full min-h-[380px] flex flex-col items-center justify-center gap-4 p-8">
              <div className="w-16 h-16 bg-[#1B6FDB]/10 rounded-full flex items-center justify-center">
                <MapPin size={30} className="text-[#1B6FDB]" aria-hidden="true" />
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-[#0D1F3C] text-lg mb-2">Service Area Map</p>
                <p className="text-[#5A6A85] text-sm max-w-xs text-center">
                  Replace this placeholder with a Google Maps embed showing your coverage area.
                </p>
              </div>
              {/* Fake dot pattern for visual interest */}
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: 'radial-gradient(circle, #1B6FDB 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
