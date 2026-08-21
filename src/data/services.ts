export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  emergency?: boolean;
}

export const services: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    shortDesc: 'Burst pipes, flooding & urgent leaks — we respond 24/7.',
    image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=700&q=80&auto=format&fit=crop',
    emergency: true,
  },
  {
    id: 'leak-pipe',
    title: 'Leak & Pipe Repair',
    shortDesc: 'Water leaks, pipe damage, pipe replacement & full repiping.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning & Clogs',
    shortDesc: 'Blocked sinks, showers, toilets & main drain problems cleared fast.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'water-heater',
    title: 'Water Heaters',
    shortDesc: 'Water heater repair, installation & replacement — tank or tankless.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'toilets',
    title: 'Toilets',
    shortDesc: 'Toilet repair, replacement & installation — leaks, clogs & running toilets.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'faucets-sinks',
    title: 'Faucets & Sinks',
    shortDesc: 'Faucet repair, replacement & sink installation and plumbing repairs.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'sewer',
    title: 'Sewer Services',
    shortDesc: 'Sewer line cleaning, camera inspection & trenchless repairs.',
    image: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'water-lines',
    title: 'Water Lines',
    shortDesc: 'Main water lines, supply lines & low water pressure repairs.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Plumbing',
    shortDesc: 'Showers, bathtubs, sinks, valves & full bathroom plumbing.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'kitchen',
    title: 'Kitchen Plumbing',
    shortDesc: 'Kitchen sinks, garbage disposals, dishwasher lines & faucets.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'inspection',
    title: 'Plumbing Inspection',
    shortDesc: 'Leak detection, camera inspections & preventative maintenance.',
    image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=700&q=80&auto=format&fit=crop',
  },
];
