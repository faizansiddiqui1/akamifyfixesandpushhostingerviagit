"use client";

import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import DigitalServicesSection from "@/components/sections/DigitalServicesSection";
import ShareMarketSection from "@/components/sections/ShareMarketSection";
import DemoWebUi from "@/components/DemoWebUi";
import { TeamMember } from "./our-team/components/TeamMember";

export default function Home() {
  return (
    <div className="relative "> 
      <HeroSection />
      <DemoWebUi />
      <DigitalServicesSection />
      <TeamMember />
      <TestimonialsSection />
      <ShareMarketSection />
      <CTASection />
    </div>
  );
}
