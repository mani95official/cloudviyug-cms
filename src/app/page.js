import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import WhatWeDoBestSection from '@/components/sections/WhatWeDoBestSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (PDF Page 1) */}
      <HeroSection />

      {/* 2. Who We Are / About Section (PDF Page 1) */}
      <AboutSection />

      {/* 3. What We Do / Cloud Services (PDF Page 1 & 2) */}
      <ServicesSection />

      {/* 4. Why Businesses Choose CloudViyug & Milestones (PDF Page 2) */}
      <WhyChooseUsSection />

      {/* 5. What We Do Best (PDF Page 3) */}
      <WhatWeDoBestSection />

      {/* 6. Client Feedback / What Our Clients Say (PDF Page 3) */}
      <TestimonialsSection />

      {/* 7. Frequently Asked Questions & Expert Help (PDF Page 3 & 4) */}
      <FaqSection />

      {/* 8. Our Major Capabilities / Tech Partners (PDF Page 4) */}
      <CapabilitiesSection />

      {/* 9. Book a Free Consultation Form & Company Info (PDF Page 4 & 5) */}
      <ContactSection />
    </>
  );
}
