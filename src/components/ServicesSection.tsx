import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeading from './SectionHeading';
import { services } from '../data/services';
import {
  AlertTriangle, Waves, Droplets, Flame,
  Wrench, ShowerHead, ArrowDownToLine, Building2,
  CheckCircle2, ArrowRight,
} from 'lucide-react';
import { scrollTo } from '../lib/utils';

const iconMap: Record<string, React.ElementType> = {
  AlertTriangle, Waves, Droplets, Flame,
  Wrench, ShowerHead, ArrowDownToLine, Building2,
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.08 });
  const Icon = iconMap[service.icon] ?? Wrench;

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={[
        'group bg-white rounded-2xl overflow-hidden border transition-all duration-300',
        service.emergency
          ? 'border-[#F57C2B]/30 hover:border-[#F57C2B]/60 hover:shadow-[0_8px_32px_rgba(245,124,43,0.12)]'
          : 'border-[#E2EAF5] hover:border-[#C4D4EC] hover:shadow-[0_8px_32px_rgba(13,31,60,0.09)]',
        'transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-[#EBF3FF]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C]/50 to-transparent" aria-hidden="true" />

        {/* Icon badge */}
        <div className={`absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center ${service.emergency ? 'bg-[#F57C2B]' : 'bg-[#1B6FDB]'} shadow-lg`}>
          <Icon size={18} className="text-white" aria-hidden="true" />
        </div>

        {service.emergency && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-bold text-white bg-[#F57C2B] px-2.5 py-1 rounded-lg tracking-wide">
              24/7
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6">
        <h3 className="font-display font-bold text-[#0D1F3C] text-lg mb-2 leading-snug">
          {service.title}
        </h3>
        <p className="text-[#5A6A85] text-sm leading-relaxed mb-4">{service.shortDesc}</p>

        <ul className="flex flex-col gap-1.5 mb-5" role="list">
          {service.bullets.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start gap-2 text-[12.5px] text-[#2E4068]">
              <CheckCircle2 size={13} className="text-[#1B6FDB] flex-shrink-0 mt-0.5" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('#contact')}
          className={[
            'group/btn flex items-center gap-1.5 text-[13px] font-semibold transition-colors cursor-pointer focus-visible:outline-none',
            service.emergency
              ? 'text-[#F57C2B] hover:text-[#E06820]'
              : 'text-[#1B6FDB] hover:text-[#1560C0]',
          ].join(' ')}
        >
          Get a Quote
          <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-[#F1F5FD]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="What We Do"
              title="Complete Plumbing Services"
              subtitle="From routine maintenance to urgent repairs — our licensed plumbers handle it all, for homes and businesses."
              id="services-heading"
            />
          </div>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#1B6FDB] hover:text-[#1560C0] transition-colors cursor-pointer focus-visible:outline-none whitespace-nowrap"
          >
            Request Any Service <ArrowRight size={14} aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
