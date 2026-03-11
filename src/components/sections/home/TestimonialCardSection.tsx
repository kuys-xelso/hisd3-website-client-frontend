import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { Quote, Building2, AlertCircle, RefreshCcw } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { useQuery } from "@apollo/client/react";
import { GET_TESTIMONIALS } from "@/graphql/queries";
import { Button } from "@/components/ui/button";

interface Testimony {
  id: string;
  name: string;
  position?: string | null;
  avatarUrl?: string | null;
  company?: string | null;
  content: string;
}


const ReviewCard = ({ review }: { review: Testimony }) => {
  return (
    <Card className="relative h-full w-72 cursor-pointer overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-md p-5">
      {/* Visual Accent */}
      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 opacity-20" />

      <CardContent className="p-0 flex flex-col gap-4">
        {/* Header: Profile & Identity */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <img
              className="rounded-full border border-border object-cover mt-1"
              width="44"
              height="44"
              alt={`${review.name}`}
              src={review.avatarUrl || undefined}
            />
            <div className="flex flex-col min-w-0">
              <p className="text-sm font-bold text-foreground truncate">
                {review.name}
              </p>
              <p className="text-[11px] font-medium text-primary/90 leading-tight">
                {review.position}
              </p>
              {/* Added Hospital Name Here */}
              <div className="flex items-center gap-1 mt-0.5 text-muted-foreground">
                <Building2 className="h-3 w-3 shrink-0" />
                <p className="text-[10px] font-medium truncate uppercase tracking-tight">
                  {review.company || "St. Jude Medical Center"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Testimonial */}
        <div className="relative">
          <p className="text-sm leading-relaxed text-foreground/90 italic line-clamp-4">
            "{review.content}"
          </p>
        </div>

        {/* Verification Footer */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
            Staff Verified
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export const TestimonialCardSection = () => {
  const { data, loading, error, refetch } = useQuery(GET_TESTIMONIALS, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
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
            <h3 className="text-lg font-semibold text-foreground mb-2">Failed to load testimonials</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Please check your internet connection or try again later. If the problem persists, our backend servers might be temporarily down.
            </p>
            <Button variant="outline" onClick={() => refetch()} className="gap-2">
              <RefreshCcw className="h-4 w-4" /> Try Again
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  const testimonies = data?.testimonies || [];
  
  if (testimonies.length === 0) {
    return (
      <Section size="lg" className="overflow-x-hidden">
        <Container>
          <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-primary">
            What Our Clients Say
          </h1>
          <div className="flex flex-col items-center justify-center py-20 border border-dashed rounded-xl bg-muted/30">
            <Quote className="h-10 w-10 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">No testimonials are available right now. Check back later!</p>
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
          {firstrow.map((review: Testimony) => (
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
            {secondrow.map((review: Testimony) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </Marquee>
        )}
      </Container>
    </Section>
  );
};
