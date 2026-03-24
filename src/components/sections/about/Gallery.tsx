import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { useGallery } from "@/hooks/useGallery";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Gallery = () => {
  const { galleryImages, isLoading, error, refetch } = useGallery();

  if (error || (!isLoading && galleryImages.length === 0)) {
    return (
      <Section size="lg" className="overflow-x-hidden">
        <Container>
          <div className="flex flex-col items-center justify-center py-20 text-center border rounded-xl bg-destructive/5 border-destructive/20">
            <AlertCircle className="h-10 w-10 text-destructive mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Failed to load gallery
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Please check your internet connection or try again later.
            </p>
            <Button variant="outline" onClick={() => refetch()} className="gap-2">
              <RefreshCcw className="h-4 w-4" /> Try Again
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  const Images = galleryImages.map((g) => ({
    src: g.coverImageUrl || "",
    alt: g.title,
  }));

  return (
    <Section
      size="lg"
      className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            HISD3 Photo Gallery
          </h2>
          <p className="mt-4 text-slate-500">
            A modern look at our healthcare environment and professional team.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
          </div>
        ) : (
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
                {Images.map((image, index) => (
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

                      {/* Bottom Caption Bar */}
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
        )}
      </Container>
    </Section>
  );
};
