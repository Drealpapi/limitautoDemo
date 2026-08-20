import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeading from './SectionHeading';
import { Zap, UserCheck, DollarSign, Award, ShieldCheck, Home } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Response',
    body: 'We understand that plumbing problems can\'t wait. We aim to respond quickly and get to you the same day whenever possible.',
  },
  {
    icon: UserCheck,
    title: 'Experienced Technicians',
    body: 'Our plumbers are fully trained, experienced professionals who take pride in doing the job correctly the first time.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    body: 'No hidden fees, no surprise charges. We provide clear, upfront pricing before any work begins so you know exactly what to expect.',
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    body: 'We use quality materials, follow best practices, and stand behind every job we complete. Our work is built to last.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    body: 'Fully licensed and insured for your peace of mind. You\'re protected, and our work meets all local codes and standards.',
  },
  {
    icon: Home,
    title: 'Residential & Commercial',
    body: 'Whether it\'s a family home or a multi-story commercial building, we have the expertise and equipment to handle it.',
  },
];

function ReasonCard({ item, index }: { item: typeof reasons[0]; index: number }) {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });
  const Icon = item.icon;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'flex gap-4 p-5 lg:p-6 bg-white rounded-2xl border border-[#E2EAF5] hover:border-[#C4DAFB] hover:shadow-[0_4px_24px_rgba(13,31,60,0.07)] transition-all duration-300',
        'transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
      ].join(' ')}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="w-11 h-11 bg-[#EBF3FF] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={20} className="text-[#1B6FDB]" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-display font-bold text-[#0D1F3C] text-[15px] mb-1.5">{item.title}</h3>
        <p className="text-[#5A6A85] text-sm leading-relaxed">{item.body}</p>
      </div>
    </div>
  );
}

export default function WhyUsSection() {
  const [imgRef, imgVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="why-us"
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: image */}
          <div
            ref={imgRef as React.RefObject<HTMLDivElement>}
            className={[
              'relative transition-all duration-700',
              imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
            ].join(' ')}
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80&auto=format&fit=crop"
                alt="FlowRight plumber inspecting pipe work on a job site"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay card */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-[0_4px_24px_rgba(13,31,60,0.15)]">
                  <p className="text-[11px] font-semibold text-[#1B6FDB] tracking-widest uppercase mb-1.5">Our Promise</p>
                  <p className="text-[#0D1F3C] text-sm font-medium leading-snug">
                    We won't leave until the job is done right and you're satisfied.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#EBF3FF] rounded-2xl -z-10" aria-hidden="true" />
          </div>

          {/* Right: reasons grid */}
          <div>
            <div className="mb-8">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Plumbing You Can Actually Count On"
                subtitle="We know you have options. Here's why homeowners and businesses in our community keep choosing FlowRight."
                id="why-us-heading"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {reasons.map((r, i) => (
                <ReasonCard key={r.title} item={r} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
