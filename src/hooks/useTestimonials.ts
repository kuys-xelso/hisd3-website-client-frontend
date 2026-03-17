import { useQuery } from "@apollo/client/react";
import { GET_TESTIMONIALS } from "@/graphql/queries";

/**
 * Custom hook to fetch and manage testimonials.
 * Encapsulates the GraphQL query and provides a clean interface.
 */
export const useTestimonials = () => {
  const { data, loading, error, refetch } = useQuery(GET_TESTIMONIALS, {
    notifyOnNetworkStatusChange: true,
  });

  const testimonies = data?.testimonies || [];
  const hasTestimonies = testimonies.length > 0;

  return {
    testimonies,
    hasTestimonies,
    isLoading: loading,
    error,
    refetch,
  };
};
