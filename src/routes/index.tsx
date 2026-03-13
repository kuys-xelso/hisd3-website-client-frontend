import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@apollo/client/react";
// import { TEST_QUERY } from "@/graphql/queries";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { PartnerSection } from "@/components/sections/home/PartnerSection";
import { AdvantageSection } from "@/components/sections/home/AdvantageSection";
import { FeaturedSolutionSection } from "@/components/sections/home/FeaturedSolutionSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { ImpactSection } from "@/components/sections/home/ImpactSection";
import { GET_PRODUCTS } from "@/graphql/queries";
// import { TestimonialSection } from "@/components/sections/home/TestimonialSections";
import { TestimonialCardSection } from "@/components/sections/home/TestimonialCardSection";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const { data, loading } = useQuery(GET_PRODUCTS);

  return (
    <>
      {/* <ApolloConnectionTest /> */}
      <HeroSection />
      <PartnerSection />
      <AboutSection />
      <AdvantageSection />
      <FeaturedSolutionSection
        products={data?.products || []}
        isLoading={loading}
      />
      <ImpactSection />
      <TestimonialCardSection />
    </>
  );
}
