import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

const advantageList = [
  {
    icon: "/advantage-stethoscope.svg",
    title: "Clinical Intuition",
    description:
      "Designed by doctors to mirror actual hospital workflows, reducing documentation fatigue and clinical errors.",
  },
  {
    icon: "/advantage-rack-server.svg",
    title: "Seamless Scalability",
    description:
      "Our cloud-native architecture expands with your facility, from 50 beds to 5,000, without missing a beat.",
  },
  {
    icon: "/advantage-query-stats.svg",
    title: "Actionable Insights",
    description:
      "Turn raw data into life-saving decisions with real-time analytics for both clinical outcomes and administrative efficiency.",
  },
  {
    icon: "/advantage-headset.svg",
    title: "Unmatched Support",
    description:
      "Gain a partner, not just a vendor. We provide 24/7 dedicated technical assistance and staff training from experts who understand healthcare.",
  },
];

export const AdvantageSection = () => {
  return (
    <Section size="lg" id="advantage" className="bg-background">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built for the Bedside, <span className="text-primary">Optimized for the Boardroom</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Discover why hospitals around the world trust HISD3 to bridge the gap between complex digital infrastructure and seamless clinical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-6">
          {advantageList.map((advantage, index) => (
            <Card
              key={index}
              className="bg-primary/10 flex flex-col h-full border-none shadow-none p-6"
            >
              <CardHeader className="flex flex-col pb-2">
                <div className="bg-primary/10 p-5 rounded-2xl mb-4">
                  <img
                    src={advantage.icon}
                    alt={advantage.title}
                    className="w-10 h-10"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center">
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
