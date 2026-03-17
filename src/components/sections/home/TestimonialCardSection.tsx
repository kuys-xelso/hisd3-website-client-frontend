import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { Quote, AlertCircle, RefreshCcw } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ReviewCard } from "@/components/ReviewCard";
import { useTestimonials } from "@/hooks/useTestimonials";

export const TestimonialCardSection = () => {
  const { testimonies, isLoading, error, refetch } = useTestimonials();

  if (isLoading) {
    return (
      <Section size="lg" className="overflow-x-hidden">
        <Container>
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground animate-pulse">
            <RefreshCcw className="h-8 w-8 animate-spin mb-4 text-primary/50" />
            <p>Loading testimonials...</p>
          </div>
        </Container>
      </Section>
    );
  }

  if (error) {
    return (
      <Section size="lg" className="overflow-x-hidden">
        <Container>
          <div className="flex flex-col items-center justify-center py-20 text-center border rounded-xl bg-destructive/5 border-destructive/20">
            <AlertCircle className="h-10 w-10 text-destructive mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Failed to load testimonials
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Please check your internet connection or try again later. If the
              problem persists, our backend servers might be temporarily down.
            </p>
            <Button
              variant="outline"
              onClick={() => refetch()}
              className="gap-2"
            >
              <RefreshCcw className="h-4 w-4" /> Try Again
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  if (testimonies.length === 0) {
    return (
      <Section size="lg" className="overflow-x-hidden">
        <Container>
          <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-primary">
            What Our Clients Say
          </h1>
          <div className="flex flex-col items-center justify-center py-20 border border-dashed rounded-xl bg-muted/30">
            <Quote className="h-10 w-10 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">
              No testimonials are available right now. Check back later!
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  const firstrow = testimonies.slice(0, Math.ceil(testimonies.length / 2));
  const secondrow = testimonies.slice(Math.ceil(testimonies.length / 2));

  return (
    <Section size="lg" className="overflow-x-hidden">
      <Container>
        <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-primary">
          What Our Clients Say
        </h1>
        <p className="text-center text-muted-foreground  mb-8">
          Hear from our satisfied clients about how HISD3 has transformed their
          hospital operations and patient care.
        </p>

        <Marquee
          pauseOnHover
          className="[--duration:40s]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {firstrow.map((review: any) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Marquee>
        {secondrow.length > 0 && (
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:40s]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            {secondrow.map((review: any) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </Marquee>
        )}
      </Container>
    </Section>
  );
};
