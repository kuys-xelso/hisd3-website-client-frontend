import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const AboutSection = () => {
  return (
    <Section size="lg" id="about-hisd3" className="bg-slate-50/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              About HISD3
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Bridging Technology and <span className="text-primary">Clinical Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At HISD3, our mission is to empower healthcare providers with technology that helps, never hinders. Founded by medical professionals, we develop digital solutions that understand the nuances of clinical work, ensuring doctors can focus on what matters most: saving lives.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HISD3 Inc. is a premier HealthTech innovator dedicated to digitizing healthcare infrastructure. Our team of doctors and elite software engineers collaborate to build systems that are as clinically sound as they are technologically advanced.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Doctors collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
