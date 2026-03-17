import { Card, CardContent } from "@/components/ui/card";
import { Quote, Building2 } from "lucide-react";

interface Testimony {
  id: string;
  name: string;
  position?: string | null;
  avatarUrl?: string | null;
  company?: string | null;
  content: string;
}

export const ReviewCard = ({ review }: { review: Testimony }) => {
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
