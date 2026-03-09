import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const ResourceHero = () => {
    return (

        <Section size="lg" className="relative overflow-hidden">


            <Container className="relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-primary text-sm font-medium mb-6 border border-primary/20">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Healthcare Insights & Perspectives
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight">
                        Resources & <span className="text-primary">Insights</span>
                    </h1>
                    <p className="mt-6 text-xl text-foreground/60 leading-relaxed">
                        Explore our latest perspectives on healthcare technology, clinical innovation, and evidence-based hospital management.
                    </p>
                </div>
            </Container>
        </Section>
    );
};  
