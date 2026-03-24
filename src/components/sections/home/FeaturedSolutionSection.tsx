import { SolutionCard } from "@/components/SulotionCard";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import ButtonHero from "@/components/ButtonHero";
import { ArrowUpRight } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";

const solutionList = [
  {
    icon: "/advantage-stethoscope.svg",
    title: "HISD3 Mobile",
    description:
      "Your clinical dashboard, anywhere. Access real-time patient data and hospital operations securely from any mobile device.",
    slug: "hisd3-mobile",
    image: "https://images.shadcnspace.com/assets/blog/blog-img12.jpg",
  },
  {
    icon: "/advantage-rack-server.svg",
    title: "HISD3 Cloud",
    description:
      "A limitless, secure, and highly available backbone for your hospital’s data and operations.",
    slug: "hisd3-cloud",
    image: "https://images.shadcnspace.com/assets/blog/blog-img11.jpg",
  },
  {
    icon: "/advantage-query-stats.svg",
    title: "Patient Portal",
    description:
      "Transform the patient experience with self-service scheduling, digital health records, and secure communication.",
    slug: "patient-portal",
    image: "https://images.shadcnspace.com/assets/blog/blog-img10.jpg",
  },
  {
    icon: "/advantage-headset.svg",
    title: "Diagnostic AI",
    description:
      "Advanced AI-powered tools for faster diagnostics and improved clinical accuracy.",
    slug: "diagnostic-ai",
    image: "https://images.shadcnspace.com/assets/blog/blog-img9.jpg",
  },
];

export const FeaturedSolutionSection = () => {
  const { products, isLoading } = useProducts();

  // Use fetched products if available, otherwise fallback to static list for demonstration
  const displayList =
    products && products.length > 0
      ? products.slice(0, 3).map((p) => ({
          icon: p.media?.[0]?.url || "https://github.com/shadcn.png",
          title: p.name,
          description: p.tagline || "",
          slug: p.slug,
        }))
      : solutionList.slice(0, 3);

  return (
    <Section size="lg" id="featured-solution">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Comprehensive Digital Infrastructure for{" "}
            <span className="text-primary">Modern Healthcare</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg text-balance">
            From independent clinics to multi-specialty hospital networks, HISD3
            provides a unified ecosystem to manage every patient journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {isLoading
            ? // Skeleton Loader
              Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[400px] rounded-xl bg-muted animate-pulse"
                />
              ))
            : displayList.map((solution, index) => (
                <SolutionCard
                  key={index}
                  title={solution.title}
                  description={solution.description}
                  slug={solution.slug}
                  image={solution.icon}
                  icon={solution.icon}
                />
              ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/solutions" className="inline-block">
            <ButtonHero
              text="View All Solutions"
              icon={<ArrowUpRight size={16} />}
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
};
