import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

const advantageList = [
  {
    icon: "/advantage-stethoscope.svg",
    title: "Clinical Intuition",
    description: "Interfaces developed by medical professionals to match real-world bedside workflows. This ensures that the system is intuitive and easy to use for healthcare providers.",
  },
  {
    icon: "/advantage-rack-server.svg",
    title: "Seamless Scalability",
    description: "Cloud-native architecture that grows effortlessly with your hospital's expanding needs. This ensures that the system is always available and can handle the demands of a busy hospital.",
  },
  {
    icon: "/advantage-query-stats.svg",
    title: "Actionable Insights",
    description: "Real-time analytics and reporting tools for data-driven clinical and administrative decisions. This ensures that the system is always available and can handle the demands of a busy hospital.",
  },
  {
    icon: "/advantage-headset.svg",
    title: "Unmatched Support",
    description: "24/7 dedicated technical assistance and expert training for your entire medical staff. This ensures that the system is always available and can handle the demands of a busy hospital.",
  },
];

export const AdvantageSection = () => {
  return (
    <Section size="lg" id="advantage" className="bg-background">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">HISD3</span>?
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            HISD3 is a comprehensive hospital information system that helps
            hospitals streamline operations, improve patient care, and enhance
            data management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-6">
          {advantageList.map((advantage, index) => (
            <Card key={index} className="bg-transparent flex flex-col h-full border-1 border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
              <CardHeader className="flex flex-col pb-2">
                <div className="bg-primary/10 p-5 rounded-2xl mb-4">
                  <img
                    src={advantage.icon}
                    alt={advantage.title}
                    className="w-10 h-10"
                  />
                </div>
                <CardTitle className="text-xl font-bold">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center">
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
