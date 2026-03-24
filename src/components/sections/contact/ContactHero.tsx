import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const ContactHero = () => {
  return (
    <Section size="lg">
      <Container className="grid lg:grid-cols-2 place-items-center gap-10">
        <div className="text-center lg:text-start space-y-6 order-1 lg:order-2">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let’s Transform Your Hospital’s Workflow.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Ready to streamline your hospital operations? Let’s talk about how
            our HIS can revolutionize your workflow.
          </p>
        </div>
        <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-center">
          <img
            src="contact-hero.svg"
            alt="teamwork"
            className="w-full h-auto"
          />
        </div>
      </Container>
    </Section>
  );
};
