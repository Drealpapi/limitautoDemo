export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus & Lisa T.',
    location: 'Riverside District',
    service: 'Emergency Plumbing',
    text: "We had a pipe burst at 11pm on a Sunday. FlowRight had a technician at our door within the hour. They stopped the flooding, fixed the pipe, and cleaned up after themselves. Couldn't have asked for better service in a stressful situation.",
    rating: 5,
  },
  {
    id: 't2',
    name: 'Donna C.',
    location: 'Greenfield Heights',
    service: 'Water Heater Replacement',
    text: "Our water heater died on a Thursday morning. By Friday afternoon we had a brand-new unit installed and hot water running again. The team was punctual, professional, and the price they quoted was the price I paid. No surprises.",
    rating: 5,
  },
  {
    id: 't3',
    name: 'Brian A.',
    location: 'Oakwood Business Park',
    service: 'Commercial Plumbing',
    text: "We use FlowRight for all our commercial properties. Their team understands the demands of a working business — they work around our schedule, communicate clearly, and do quality work. Highly recommend for any commercial property owner.",
    rating: 5,
  },
  {
    id: 't4',
    name: 'Sandra M.',
    location: 'Elmwood Estates',
    service: 'Drain Cleaning',
    text: "I had a recurring blocked drain that two other plumbers couldn't fully resolve. FlowRight used a camera to find the real cause and cleared it properly. It's been six months and not a single issue since.",
    rating: 5,
  },
];
