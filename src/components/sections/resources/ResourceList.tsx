import { useState } from "react";
import { useQuery } from "@apollo/client/react";
import { GetArticlesDocument } from "@/graphql/generated/graphql";
import type { Resource } from "./resourcesData";
import { resourcesData } from "./resourcesData";
import { ResourceCard } from "./ResourceCard";
import { Button } from "../../ui/button";
import { FilterIcon, AlertCircle, RefreshCcw } from "lucide-react";
import { ResourcePagination } from "@/components/Pagination";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const ResourceList = () => {
    const { data, loading, error, refetch } = useQuery(GetArticlesDocument, {
        notifyOnNetworkStatusChange: true,
    });
    const [selectedCategory, setSelectedCategory] = useState<Resource['category'] | 'All'>('All');
    const [currentPage, setCurrentPage] = useState(1);

    if (loading) {
        return (
            <Section size="lg" className="bg-slate-50 min-h-screen">
                <Container>
                    <div className="flex flex-col items-center justify-center py-32 text-muted-foreground animate-pulse">
                        <RefreshCcw className="h-10 w-10 animate-spin mb-4 text-primary/50" />
                        <p className="text-xl font-semibold">Loading resources...</p>
                    </div>
                </Container>
            </Section>
        );
    }

    if (error) {
        return (
            <Section size="lg" className="bg-slate-50 min-h-screen">
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 text-center border rounded-xl bg-destructive/5 border-destructive/20 mt-10">
                        <AlertCircle className="h-12 w-12 text-destructive mb-4" />
                        <h3 className="text-2xl font-bold text-foreground mb-2">Failed to load resources</h3>
                        <p className="text-muted-foreground mb-8 max-w-md">
                            We encountered an error while fetching the articles. Please check your connection and try again.
                        </p>
                        <Button size="lg" onClick={() => refetch()} className="gap-2 rounded-full px-8">
                            <RefreshCcw className="h-5 w-5" /> Try Again
                        </Button>
                    </div>
                </Container>
            </Section>
        );
    }

    const apiResources: Resource[] = (data?.articles || []).map(article => ({
        id: article.id || "",
        slug: article.slug || "",
        title: article.title || "",
        description: article.excerpt || "",
        category: (article.category?.name as any) || "Blog",
        date: article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
        }) : "",
        image: article.media?.[0]?.url || "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
        buttonText: "Read More"
    }));


    const resources = apiResources.length > 0 ? apiResources : resourcesData;

    // 1. Extract category names from the GraphQL data
    const apiCategories = data?.categories?.map(c => c.name) || [];

    // 2. Create the final list of categories (always default 'All' as the first option)
    const displayCategories = apiCategories.length > 0
        ? ['All', ...apiCategories]
        : ['All', 'Blog', 'Case Study', 'Whitepaper', 'Guide'];

    const filteredResources = resources.filter(resource => {
        return selectedCategory === 'All' || resource.category === selectedCategory;
    });

    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
    const paginatedResources = filteredResources.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const lastItemIndex = Math.min(currentPage * ITEMS_PER_PAGE, filteredResources.length);


    const clearFilters = () => {
        setSelectedCategory('All');
        setCurrentPage(1);
    };


    return (
        <Section size="lg" className="bg-slate-50 min-h-screen">
            <Container>
                {/* Filter Controls */}
                <div className="flex flex-col items-start gap-6 mb-12">
                    <div className="flex flex-wrap justify-start gap-3">
                        {displayCategories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                onClick={() => {
                                    setSelectedCategory(category as any);
                                    setCurrentPage(1);
                                }}
                                className={`rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? "shadow-lg shadow-primary/25 scale-105"
                                    : "bg-white hover:border-primary hover:text-primary border-slate-200"
                                    }`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Results Count & Active Filters Indicator */}
                <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center text-slate-600 font-semibold text-lg">
                        <FilterIcon className="w-5 h-5 mr-3 text-primary" />
                        Showing {firstItemIndex} to {lastItemIndex} of {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
                        {selectedCategory !== 'All' && (
                            <span className="ml-2 text-slate-400 font-normal">in {selectedCategory}</span>
                        )}
                    </div>

                    {selectedCategory !== 'All' && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearFilters}
                            className="text-slate-500 hover:text-destructive transition-colors font-medium"
                        >
                            Reset Category
                        </Button>
                    )}
                </div>

                {/* Grid */}
                {paginatedResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedResources.map((resource, index) => (
                            <div key={resource.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both" style={{ animationDelay: `${index * 100}ms` }}>
                                <ResourceCard resource={resource} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-slate-200 shadow-sm flex flex-col items-center justify-center animate-in fade-in duration-500">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                            <FilterIcon className="w-10 h-10 text-slate-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">No resources found</h3>
                        <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
                            We couldn't find any resources in the selected category.
                        </p>
                        <Button
                            size="lg"
                            onClick={clearFilters}
                            className="rounded-full px-8"
                        >
                            View All Resources
                        </Button>
                    </div>
                )}
                <ResourcePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </Container>

        </Section>
    );
};
