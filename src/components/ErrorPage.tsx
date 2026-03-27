import { ServerCrash } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

interface ErrorPageProps {
  title?: string;
  description?: string;
  error?: Error | null;
  onRetry?: () => void;
}

export const ErrorPage = ({
  title = "Something went wrong",
  description = "We couldn't connect to the server. Please check your connection and try again.",
  error,
  onRetry,
}: ErrorPageProps) => {
  const displayMessage = error?.message || description;

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-center justify-center py-24 text-center max-w-md mx-auto">
          <div className="mb-6 p-5 rounded-full bg-destructive/10">
            <ServerCrash className="h-12 w-12 text-destructive" />
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-3 tracking-tight">
            {title}
          </h1>

          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            {displayMessage}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center">
            {onRetry && (
              <Button
                size="lg"
                onClick={onRetry}
                className="gap-2 rounded-full px-8"
              >
                Try Again
              </Button>
            )}
            <Link to="/">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full px-8"
              >
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
