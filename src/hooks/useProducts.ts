import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "@/graphql/queries";
import type { GetProductsQuery } from "@/graphql/generated/graphql";

export const useProducts = () => {
  const { data, loading, error, refetch } =
    useQuery<GetProductsQuery>(GET_PRODUCTS);

  const products = data?.products || [];
  const hasProducts = products.length > 0;

  return {
    products,
    hasProducts,
    isLoading: loading,
    error,
    refetch,
  };
};
