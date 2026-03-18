import { useQuery } from "@apollo/client/react";
import { GET_ARTICLE_BY_ID, GET_ARTICLES } from "@/graphql/queries";
import { useMemo } from "react";

export const useArticle = (articleId: string) => {
  // 1. Fetch the specific article by ID
  const { 
    data: articleData, 
    loading: articleLoading, 
    error: articleError, 
    refetch 
  } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { articleId },
    notifyOnNetworkStatusChange: true,
  });

  // 2. Fetch all articles to find related ones
  const { 
    data: allArticlesData, 
    loading: allLoading 
  } = useQuery(GET_ARTICLES);

  const article = articleData?.article;

  // 3. Logic to find related articles (same category, excluding current)
  const relatedArticles = useMemo(() => {
    const allArticles = allArticlesData?.articles || [];
    if (!article) return [];

    return allArticles
      .filter((a: any) => 
        a.category?.name === article.category?.name && a.id !== article.id
      )
      .slice(0, 2);
  }, [allArticlesData, article]);

  // 4. Format the date for the UI
  const formattedDate = useMemo(() => {
    if (!article?.createdAt) return null;
    return new Date(article.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [article?.createdAt]);

  return {
    article,
    relatedArticles,
    formattedDate,
    loading: articleLoading || (allLoading && !article), // Show loading if main article is still loading
    error: articleError,
    refetch,
  };
};
