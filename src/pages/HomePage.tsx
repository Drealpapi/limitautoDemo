import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import TeamSection from '../components/TeamSection';
import AboutSection from '../components/AboutSection';
import ServiceAreaSection from '../components/ServiceAreaSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <ServicesSection />
      <WhyUsSection />
      <TeamSection />
      <AboutSection />
      <ServiceAreaSection />
      <ContactSection />
    </main>
  );
}
