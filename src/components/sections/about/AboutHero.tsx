import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const AboutHero = () => {
    return (
        <div className="bg-secondary">
            <Section size="lg">
                <Container className="grid lg:grid-cols-2 place-items-center gap-10">
                    <div className="order-2 lg:order-1 w-full flex justify-center lg:justify-center">
                    <img
                        src="hero-about-section.svg"
                        alt="Healthcare Innovation"
                        className="w-full max-w-[500px] h-auto animate-in fade-in slide-in-from-left-8 duration-1000"
                    />
                </div>

                <div className="text-center lg:text-start space-y-6 order-1 lg:order-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary">About Us</h1>

                    <p className="text-xl text-muted-foreground md:w-11/12 mx-auto lg:mx-0 leading-relaxed">
                        At HISD3 Inc., we bridge the gap between complex technology and real-world medical workflows.
                        Founded on the principle of clinical intuition, we provide software that thinks like a clinician.
                    </p>

                    <p className="text-xl text-muted-foreground md:w-11/12 mx-auto lg:mx-0 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, recusandae? Necessitatibus voluptatem nam animi nemo saepe. Accusamus nostrum animi natus vel aspernatur! Fuga debitis nostrum, facilis hic modi repellendus voluptatem.
                    </p>
                </div>
                </Container>
            </Section>
        </div>
    )
}
