import { useQuery } from "@apollo/client/react";
import { GET_GALLERY } from "@/graphql/queries";
import type { GetGalleriesQuery } from "@/graphql/generated/graphql";

export const useGallery = () => {
  const { data, loading, error, refetch } =
    useQuery<GetGalleriesQuery>(GET_GALLERY);

  const galleryImages = data?.galleries || [];
  const hasGalleryImages = galleryImages.length > 0;

  return {
    galleryImages,
    hasGalleryImages,
    isLoading: loading,
    error,
    refetch,
  };
};
