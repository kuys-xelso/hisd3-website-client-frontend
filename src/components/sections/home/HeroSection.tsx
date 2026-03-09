
import ButtonAnimated from "@/components/ButtonAnimated";
import ButtonHero from "@/components/ButtonHero";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const HeroSection = () => {
  return (
    <Section size="xl" className="relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Announcement Badge */}
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm shadow-sm transition-all hover:border-primary/30">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
            Empowering Modern Healthcare
          </div>

          <main className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              The{" "}
              <span className="bg-linear-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                Hospital Information
              </span>{" "}
              That Thinks Like a Clinician.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              HISD3 provides comprehensive software solutions to digitize your
              entire hospital. Secure, scalable, and intuitive by design.
            </p>
          </main>

          <div className="flex flex-col items-center justify-center  sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <Link to="/contactUs" className="w-full sm:w-auto">
              <ButtonHero />
            </Link>

            <Link to="/aboutUs" className="w-full sm:w-auto">
              <ButtonAnimated className="h-12 rounded-full px-8 text-sm font-semibold sm:w-auto w-full">
                Learn More
              </ButtonAnimated>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
