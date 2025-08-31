"use client";

import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import DigitalServicesSection from "@/components/sections/DigitalServicesSection";
import ShareMarketSection from "@/components/sections/ShareMarketSection";
import DemoWebUi from "@/components/DemoWebUi";

export default function Home() {
  return (
    <div className="relative "> 
      <HeroSection />
      <DemoWebUi />
      <DigitalServicesSection />
      <TestimonialsSection />
      <ShareMarketSection />
      <CTASection />
    </div>
  );
}
