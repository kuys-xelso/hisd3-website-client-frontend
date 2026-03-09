
import { Card, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { Shield, UserCog, Zap, MousePointer2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

const principles = [
    {
        icon: <UserCog className="w-8 h-8 text-primary" />,
        title: "Physician-Led Engineering",
        description: "We don't write a single line of code without consulting our clinical advisory board. Healthcare professionals dictate our roadmap.",
    },
    {
        icon: <Shield className="w-8 h-8 text-primary" />,
        title: "Uncompromising Security",
        description: "Patient privacy is our foundation. We build with enterprise-grade encryption and strict global compliance standards.",
    },
    {
        icon: <MousePointer2 className="w-8 h-8 text-primary" />,
        title: "Invisible Technology",
        description: "We design minimalist, intuitive interfaces so the technology fades away, letting the patient take center stage.",
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Agile Adaptability",
        description: "Our cloud-native architecture adapts swiftly to new medical guidelines, billing regulations, and hospital needs.",
    },
];

export const Principle = () => {
    return (
        <Section size="lg" className="bg-background">
            <Container>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Our <span className="text-primary">Clinical Tech Philosophy</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Vertical Cards */}
                    <div className="flex flex-col gap-4 order-2 lg:order-1">
                        {principles.map((principle, index) => (
                            <Card key={index} className="bg-primary/5 border-none shadow-none">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
                                        {principle.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <CardTitle className="text-lg font-semibold text-primary">
                                            {principle.title}
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground mt-1">
                                            {principle.description}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>

                    {/* Right Column: Image */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <img
                            src="/about-hero.svg"
                            alt="HISD3 Principles"
                            className="w-full max-w-[600px] h-auto object-contain rounded-2xl animate-in fade-in slide-in-from-right-8 duration-1000"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
};