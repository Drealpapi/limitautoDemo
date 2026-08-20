import Hero from '../components/Hero';
import EmergencyBanner from '../components/EmergencyBanner';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import ServiceAreaSection from '../components/ServiceAreaSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <EmergencyBanner />
      <ServicesSection />
      <WhyUsSection />
      <GallerySection />
      <AboutSection />
      <ServiceAreaSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
