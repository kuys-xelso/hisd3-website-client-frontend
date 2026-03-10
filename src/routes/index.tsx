import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@apollo/client/react";
import { TEST_QUERY } from "@/graphql/queries";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { PartnerSection } from "@/components/sections/home/PartnerSection";
import { AdvantageSection } from "@/components/sections/home/AdvantageSection";
import { FeaturedSolutionSection } from "@/components/sections/home/FeaturedSolutionSection";
import { GET_PRODUCTS } from "@/graphql/queries";
// import { TestimonialSection } from "@/components/sections/home/TestimonialSections";
import { TestimonialCardSection } from "@/components/sections/home/TestimonialCardSection";

export const Route = createFileRoute("/")({ component: App });

function ApolloConnectionTest() {
  const { data, loading, error } = useQuery(TEST_QUERY);

  if (loading)
    return (
      <div className="p-4 bg-blue-100 text-blue-800 rounded-md m-4">
        Testing connection to GraphQL...
      </div>
    );
  if (error)
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded-md m-4 border-red-500 border">
        Connection Error: {error.message}
      </div>
    );

  return (
    <div className="flex p-2 bg-green-100 text-green-800 rounded-md m-4 border-green-500 border">
      <p className="font-bold">Successfully Connected to GraphQL Backend!</p>
      <p>
        Loaded {(data as any)?.__schema?.types?.length || 0} types from the
        backend schema.
      </p>
    </div>
  );
}

function App() {
  const { data, loading } = useQuery(GET_PRODUCTS);

  return (
    <>
      <ApolloConnectionTest />
      <HeroSection />
      <PartnerSection />
      <AdvantageSection />
      <FeaturedSolutionSection
        products={data?.products || []}
        isLoading={loading}
      />
      <TestimonialCardSection />
    </>
  );
}
