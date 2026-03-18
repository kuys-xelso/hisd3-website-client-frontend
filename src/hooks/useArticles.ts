import { useState, useMemo } from "react";
import { useQuery } from "@apollo/client/react";
import { GetArticlesDocument } from "@/graphql/generated/graphql";
import type { Article, Category } from "@/graphql/generated/graphql";

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "Blog" | "Case Study" | "Whitepaper" | "Guide";
  date: string;
  image: string;
}

export const useArticles = () => {
  // 1. Fetch data from the API
  const { data, loading, error, refetch } = useQuery(GetArticlesDocument, {
    notifyOnNetworkStatusChange: true,
  });

  // 2. Local state for filtering and pagination
  const [selectedCategory, setSelectedCategory] = useState<Resource["category"] | "All">("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // 3. Map API articles to the UI Resource format
  const allResources = useMemo((): Resource[] => {
    const apiArticles = data?.articles as Article[] | undefined;
    
    if (!apiArticles || apiArticles.length === 0) {
      return [];
    }

    return apiArticles.map((article): Resource => ({
      id: article.id,
      slug: article.slug || "",
      title: article.title || "",
      description: article.excerpt || "",
      category: (article.category?.name as Resource["category"]) || "Blog",
      date: article.publishedAt
        ? new Date(article.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "",
      image: article.media?.[0]?.url || "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    }));
  }, [data?.articles]);

  // 4. Get unique categories for the filter buttons
  const displayCategories = useMemo(() => {
    const apiCats = (data?.categories as Category[] | undefined)?.map((c) => c.name) || [];
    
    return ["All", ...apiCats];
  }, [data?.categories]);

  // 5. Filter resources based on selected category
  const filteredResources = allResources.filter((resource) => {
    return selectedCategory === "All" || resource.category === selectedCategory;
  });

  // 6. Pagination logic
  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResources = filteredResources.slice(start, start + ITEMS_PER_PAGE);

  // Stats for the UI (e.g., "Showing 1 to 6 of 10")
  const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const lastItemIndex = Math.min(currentPage * ITEMS_PER_PAGE, filteredResources.length);

  // Helper functions
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category as any);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setCurrentPage(1);
  };

  return {
    resources: paginatedResources,
    displayCategories,
    loading,
    error,
    refetch,
    selectedCategory,
    handleCategoryChange,
    clearFilters,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredCount: filteredResources.length,
    firstItemIndex,
    lastItemIndex,
  };
};

