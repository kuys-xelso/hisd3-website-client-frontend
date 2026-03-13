import { Card, CardHeader, CardContent } from "../../ui/card";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "@/graphql/queries";
import type { GetProductsQuery } from "@/graphql/generated/graphql";
import { SolutionCard } from "@/components/SulotionCard";

import { solutionsData as fallbackSolutionList } from "./solutionsData";

export const SolutionsList = () => {
  const { data, loading, error } = useQuery<GetProductsQuery>(GET_PRODUCTS);
  // const loading = true; // Forced for testing

  const products = data?.products ?? [];

  const displayList =
    products.length > 0
      ? products.map((p) => ({
          icon: p.media?.[0]?.url || "https://github.com/shadcn.png",
          title: p.name,
          description: p.tagline,
          slug: p.slug,
        }))
      : fallbackSolutionList;

  if (error) {
    return (
      <div className="py-24 text-center text-red-500">
        <p>Error loading solutions: {error.message}</p>
      </div>
    );
  }

  return (
    <Section size="lg" className="bg-background">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary border-l-4 border-primary pl-4 inline-block">
            Our Full Suite of Solutions
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of products designed to modernize
            every aspect of healthcare delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? // Skeleton Loaders
              Array.from({ length: 6 }).map((_, i) => (
                <Card
                  key={i}
                  className="flex flex-col h-full animate-pulse border-slate-100"
                >
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-slate-200 mb-4" />
                    <div className="h-7 w-3/4 bg-slate-200 rounded" />
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="h-4 bg-slate-200 rounded w-full" />
                    <div className="h-4 bg-slate-200 rounded w-5/6 mx-auto" />
                    <div className="h-12 bg-slate-200 rounded w-full mt-8" />
                  </CardContent>
                </Card>
              ))
            : displayList.map((solution: any, index: number) => (
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
      </Container>
    </Section>
  );
};
