import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'bg-white rounded-2xl p-6 lg:p-7 border border-[#E2EAF5] flex flex-col hover:shadow-[0_4px_24px_rgba(13,31,60,0.08)] transition-all duration-300',
        'transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-[#F59E0B] fill-[#F59E0B]" aria-hidden="true" />
        ))}
      </div>

      <Quote size={22} className="text-[#C4DAFB] mb-3" aria-hidden="true" />

      <p className="text-[#2E4068] text-sm leading-relaxed flex-1 mb-5 italic">
        "{t.text}"
      </p>

      <footer className="flex items-center justify-between border-t border-[#E2EAF5] pt-4">        <div>
          <cite className="font-semibold text-[#0D1F3C] text-[14px] not-italic">{t.name}</cite>
          <p className="text-[#8FA0BA] text-xs mt-0.5">{t.location}</p>
        </div>
        <span className="text-[11px] font-semibold text-[#1B6FDB] bg-[#EBF3FF] px-2.5 py-1 rounded-lg whitespace-nowrap">
          {t.service}
        </span>
      </footer>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="py-16 lg:py-24 bg-[#F1F5FD]"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Our Customers Say"
            subtitle="Real feedback from real customers. We're proud of the service we deliver and the trust we've earned."
            align="center"
            id="reviews-heading"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>

        <p className="text-center text-[#8FA0BA] text-xs mt-8">
          * Placeholder testimonials. Replace with verified reviews from your customers.
        </p>
      </div>
    </section>
  );
}
