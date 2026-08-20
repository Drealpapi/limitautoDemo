import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  id?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false, id }: Props) {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.15 });
  const center = align === 'center';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'transition-all duration-700',
        center ? 'text-center' : 'text-left',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
      ].join(' ')}
    >
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`}>
          <span className="w-5 h-0.5 bg-[#1B6FDB] rounded" aria-hidden="true" />
          <span className="text-[11px] font-semibold text-[#1B6FDB] tracking-[0.2em] uppercase">{eyebrow}</span>
        </div>
      )}
      <h2
        id={id}
        className={`font-display font-bold leading-tight ${light ? 'text-white' : 'text-[#0D1F3C]'}`}
        style={{ fontSize: 'clamp(1.65rem, 3vw, 2.5rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed ${center ? 'max-w-xl mx-auto' : 'max-w-lg'} ${light ? 'text-white/60' : 'text-[#5A6A85]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
