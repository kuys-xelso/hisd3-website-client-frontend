import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { PartnerSection } from "@/components/sections/home/PartnerSection";
import { AdvantageSection } from "@/components/sections/home/AdvantageSection";
import { FeaturedSolutionSection } from "@/components/sections/home/FeaturedSolutionSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { ImpactSection } from "@/components/sections/home/ImpactSection";
import { TestimonialCardSection } from "@/components/sections/home/TestimonialCardSection";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <AboutSection />
      <AdvantageSection />
      <FeaturedSolutionSection />
      <ImpactSection />
      <TestimonialCardSection />
    </>
  );
}
