import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeading from './SectionHeading';
import { galleryItems, categories } from '../data/gallery';

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.08 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'group relative rounded-2xl overflow-hidden bg-[#EBF3FF] transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
      style={{ transitionDelay: `${index * 60}ms`, aspectRatio: '4/3' }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C]/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-[10px] font-semibold text-[#5BA8FF] tracking-widest uppercase">{item.category}</span>
        <p className="text-white text-sm font-semibold leading-snug mt-0.5">{item.title}</p>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-16 lg:py-24 bg-[#F1F5FD]"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <SectionHeading
            eyebrow="Our Work"
            title="Projects We're Proud Of"
            subtitle="A sample of recent residential and commercial plumbing jobs — real work, real results."
            align="center"
            id="gallery-heading"
          />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8" role="group" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={[
                'text-[13px] font-medium px-4 py-2 rounded-xl transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB]',
                activeCategory === cat
                  ? 'bg-[#1B6FDB] text-white shadow-[0_2px_10px_rgba(27,111,219,0.3)]'
                  : 'bg-white text-[#5A6A85] border border-[#E2EAF5] hover:border-[#C4DAFB] hover:text-[#1B6FDB]',
              ].join(' ')}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
