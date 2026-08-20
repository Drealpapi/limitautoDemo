export interface Service {
  id: string;
  icon: string;          // lucide icon name
  title: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
  image: string;
  emergency?: boolean;
}

export const services: Service[] = [
  {
    id: 'emergency',
    icon: 'AlertTriangle',
    title: 'Emergency Plumbing',
    shortDesc: 'Available 24 hours a day, 7 days a week. We respond fast when it matters most.',
    fullDesc: 'Burst pipes, severe leaks, flooding, and gas emergencies require immediate attention. Our emergency plumbers are on call around the clock and can typically be on-site within the hour.',
    bullets: ['24/7 availability, including weekends and holidays', 'Rapid on-site response', 'Burst pipes, flooding & major leaks', 'Immediate shutoff and damage control'],
    image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&q=80&auto=format&fit=crop',
    emergency: true,
  },
  {
    id: 'drain-cleaning',
    icon: 'Waves',
    title: 'Drain Cleaning',
    shortDesc: 'Blocked drains cleared quickly and thoroughly — no mess, no return visits.',
    fullDesc: 'Slow drains and blockages are a daily frustration. We use professional-grade equipment to clear any blockage from kitchen sinks to main sewer lines, leaving your drains flowing freely.',
    bullets: ['Kitchen, bathroom & floor drains', 'Hydro-jet cleaning for stubborn blockages', 'Camera inspection available', 'Root intrusion removal'],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'leak-detection',
    icon: 'Droplets',
    title: 'Leak Detection & Repair',
    shortDesc: 'We find leaks others miss — behind walls, under slabs, and underground.',
    fullDesc: 'Hidden leaks cause serious structural damage and spike water bills. Our leak detection specialists use advanced technology to pinpoint leaks with minimal disruption, then repair them properly.',
    bullets: ['Non-invasive detection technology', 'Behind-wall and under-slab leaks', 'Water bill analysis', 'Full repair and reinstatement'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'water-heater',
    icon: 'Flame',
    title: 'Water Heater Services',
    shortDesc: 'Installation, repair, and replacement of all water heater types.',
    fullDesc: 'Whether your hot water has failed or you\'re upgrading to a more efficient system, we handle all makes and models of water heaters — tank, tankless, gas, and electric.',
    bullets: ['Tank and tankless water heaters', 'Gas and electric systems', 'Same-day installation available', 'Energy-efficient upgrades'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'pipe-repair',
    icon: 'Wrench',
    title: 'Pipe Repair & Replacement',
    shortDesc: 'From small repairs to full repiping — done right the first time.',
    fullDesc: 'Corroded, cracked, or outdated pipes cause ongoing problems. We handle everything from patching a single section to complete whole-home repiping, using materials built to last.',
    bullets: ['Copper, PEX and PVC piping', 'Partial or full repiping', 'Corroded and galvanized pipe replacement', 'Minimally invasive methods where possible'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'bathroom-kitchen',
    icon: 'ShowerHead',
    title: 'Bathroom & Kitchen Plumbing',
    shortDesc: 'Fixture installations, renovations, and repairs done by experienced plumbers.',
    fullDesc: 'Remodeling a bathroom or kitchen? Need a new faucet, toilet, or sink installed? We handle all fixture and appliance plumbing — ensuring correct installation and lasting results.',
    bullets: ['Toilet, faucet & shower installation', 'Sink, dishwasher & garbage disposal', 'Bathroom renovation plumbing', 'Fixture upgrades and replacements'],
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'sewer-line',
    icon: 'ArrowDownToLine',
    title: 'Sewer Line Services',
    shortDesc: 'Sewer inspections, cleaning, repairs, and replacements handled by specialists.',
    fullDesc: 'Sewer problems require specialist expertise. We provide full sewer line services including video inspection, hydro-jetting, spot repairs, and full line replacement using trenchless methods where available.',
    bullets: ['Video sewer inspections', 'Hydro-jet cleaning', 'Trenchless repair and replacement', 'Root removal and root barriers'],
    image: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'commercial',
    icon: 'Building2',
    title: 'Commercial Plumbing',
    shortDesc: 'Full-service plumbing for commercial buildings, offices, and multi-unit properties.',
    fullDesc: 'Commercial plumbing requires a different level of planning, coordination, and expertise. We serve businesses, offices, restaurants, and multi-unit residential buildings with comprehensive commercial plumbing services.',
    bullets: ['Office buildings and retail spaces', 'Restaurants and food service', 'Multi-unit residential buildings', 'Scheduled maintenance contracts'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
  },
];
