import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../ui/carousel";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { useQuery } from "@apollo/client/react";
import { GET_GALLERY } from "@/graphql/queries";
import type { GetGalleriesQuery } from "@/graphql/generated/graphql";

const fallbackImages = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1600&auto=format&fit=crop",
    alt: "Doctor smiling with patient",
  },
  {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1600&auto=format&fit=crop",
    alt: "Medical team discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
    alt: "Doctor in laboratory",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
    alt: "Surgical team",
  },
];

export const Gallery = () => {
  const { data, loading, error } = useQuery<GetGalleriesQuery>(GET_GALLERY);

  const galleryImages =
    data?.galleries && data.galleries.length > 0
      ? data.galleries.map((g) => ({
          src: `${import.meta.env.VITE_API_URL}${g.coverImageUrl}`,
          alt: g.title,
        }))
      : fallbackImages;

  return (
    <Section
      size="lg"
      className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            HISD3 Photo Gallery
          </h2>
          <p className="mt-4 text-slate-500">
            A modern look at our healthcare environment and professional team.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-16 text-red-500">
            <p>Failed to load gallery. Showing default images.</p>
          </div>
        )}

        <div className="relative w-full mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="relative"
          >
            {/* Subtle SaaS Fade Edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-white to-transparent z-10" />
            <CarouselContent className="py-8">
              {galleryImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-4"
                >
                  <div className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Bottom Caption Bar (SaaS style) */}
                    <div className="p-4 bg-white">
                      <p className="text-sm font-medium text-slate-800">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};
