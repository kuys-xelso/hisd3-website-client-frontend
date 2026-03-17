import { useQuery } from "@apollo/client/react";
import { GET_PRODUCT_BY_ID } from "@/graphql/queries";
import type { ProductQuery, ProductQueryVariables } from "@/graphql/generated/graphql";

/**
 * Custom hook to fetch a single product by its ID/Slug.
 * @param id The product ID or slug to fetch.
 */
export const useProduct = (id: string) => {
  const { data, loading, error, refetch } = useQuery<ProductQuery, ProductQueryVariables>(
    GET_PRODUCT_BY_ID,
    {
      variables: { productId: id },
      skip: !id, // Prevents the query from running if no ID is provided
      notifyOnNetworkStatusChange: true,
    }
  );

  return {
    product: data?.product || null,
    isLoading: loading,
    error,
    refetch,
  };
};
