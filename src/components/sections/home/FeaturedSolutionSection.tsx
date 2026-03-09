import { SolutionCard } from "@/components/SulotionCard";
import { Link } from "@tanstack/react-router";
import type { GetProductsQuery } from "@/graphql/generated/graphql";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import ButtonHero from "@/components/ButtonHero";
import { ArrowUpRight } from "lucide-react";

const solutionList = [
  {
    icon: "/advantage-stethoscope.svg",
    title: "HISD3 Mobile",
    description: "Access patient data and hospital operations on the go with our secure mobile application.",
    slug: "hisd3-mobile",
    image: "https://images.shadcnspace.com/assets/blog/blog-img12.jpg"
  },
  {
    icon: "/advantage-rack-server.svg",
    title: "HISD3 Cloud",
    description: "Secure and scalable cloud-based hospital management system for modern healthcare.",
    slug: "hisd3-cloud",
    image: "https://images.shadcnspace.com/assets/blog/blog-img11.jpg"
  },
  {
    icon: "/advantage-query-stats.svg",
    title: "Patient Portal",
    description: "Empower patients with secure access to their medical records and appointment scheduling.",
    slug: "patient-portal",
    image: "https://images.shadcnspace.com/assets/blog/blog-img10.jpg"
  },
  {
    icon: "/advantage-headset.svg",
    title: "Diagnostic AI",
    description: "Advanced AI-powered tools for faster diagnostics and improved clinical accuracy.",
    slug: "diagnostic-ai",
    image: "https://images.shadcnspace.com/assets/blog/blog-img9.jpg"
  },
];

interface FeaturedSolutionSectionProps {
  products?: GetProductsQuery['products'];
  isLoading?: boolean;
}

export const FeaturedSolutionSection = ({ products, isLoading }: FeaturedSolutionSectionProps) => {
  // Use fetched products if available, otherwise fallback to static list for demonstration
  const displayList = products && products.length > 0
    ? products.slice(0, 3).map((p) => ({
      icon: p.media?.[0]?.url || "https://github.com/shadcn.png",
      title: p.name,
      description: p.tagline || "",
      slug: p.slug
    }))
    : solutionList.slice(0, 3);

  return (
    <Section size="lg" id="featured-solution">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything Your Hospital Needs in <span className="text-primary">One Platform</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg text-balance">
            HISD3 is a comprehensive hospital information system that helps
            hospitals streamline operations, improve patient care, and enhance data
            management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton Loader
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-[400px] rounded-xl bg-muted animate-pulse" />
            ))
          ) : (
            displayList.map((solution, index) => (
              <SolutionCard
                key={index}
                title={solution.title}
                description={solution.description}
                slug={solution.slug}
                image={solution.icon}
                icon={solution.icon}
              />
            ))
          )}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/solutions"
            className="inline-block"
          >
            <ButtonHero
              text="Explore All Solutions"
              icon={<ArrowUpRight size={16} />}
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
};
