import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const AboutAction = () => {
  return (
    <Section size="lg" className="bg-primary text-primary-foreground py-24">
      <Container>
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Experience the Clinical{" "}
            <span className="italic opacity-80 text-white underline decoration-white/30 underline-offset-8">
              Difference
            </span>{" "}
            Firsthand.
          </h2>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover how HISD3 can transform your facility's operations and
            patient care quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contactUs">
              <button className="bg-white text-primary font-bold py-4 px-10 rounded-full text-lg hover:bg-slate-100 transition-colors shadow-lg flex items-center gap-2 cursor-pointer">
                Get in Touch <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/solutions">
              <button className="bg-primary-foreground/10 text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-primary-foreground/20 transition-colors border border-white/20 cursor-pointer">
                Browse Solutions
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
