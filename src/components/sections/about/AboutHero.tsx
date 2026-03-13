import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const AboutHero = () => {
    return (
        <div className="bg-slate-50 relative overflow-hidden">
            <Section size="lg" className="relative z-10">
                <Container className="grid lg:grid-cols-2 place-items-center gap-16">
                    <div className="order-2 lg:order-1 w-full relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
                                alt="Clinicians working with technology"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative circle */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
                    </div>

                    <div className="text-center lg:text-start space-y-8 order-1 lg:order-2">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                            Our Story
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
                            Reimagining Healthcare from the <span className="text-primary italic">Inside Out</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            HISD3 didn’t start in a boardroom—it started at the bedside. Our founders, a group of frustrated physicians and visionary engineers, saw firsthand how legacy software became a barrier between doctor and patient.
                        </p>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We believed that technology should be an invisible ally. Today, HISD3 stands as a testament to that vision: a hospital information system that understands the heartbeat of clinical work because it was built by the people who live it every day.
                        </p>
                    </div>
                </Container>
            </Section>
            
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-primary/5 to-transparent -z-0 skew-x-12" />
        </div>
    )
}
