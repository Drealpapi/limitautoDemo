export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Bathroom',
    title: 'Full Bathroom Plumbing Fit-Out',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'g2',
    category: 'Kitchen',
    title: 'Kitchen Sink & Disposal Install',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'g3',
    category: 'Water Heater',
    title: 'Tankless Water Heater Installation',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'g4',
    category: 'Pipe Repair',
    title: 'Copper Repiping — Residential',
    image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'g5',
    category: 'Drain',
    title: 'Hydro-Jet Drain Cleaning',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'g6',
    category: 'Commercial',
    title: 'Commercial Building Fit-Out',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop',
  },
];

export const categories = ['All', 'Bathroom', 'Kitchen', 'Water Heater', 'Pipe Repair', 'Drain', 'Commercial'];
