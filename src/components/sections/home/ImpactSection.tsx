"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "@tanstack/react-router";

const hospitalImpacts = [
  "Reduce operational costs",
  "Eliminate paperwork bottlenecks",
  "Ensure 100% regulatory compliance",
  "Streamline staff coordination",
];

const patientImpacts = [
  "Reduced waiting times",
  "Faster, more accurate diagnostics",
  "Personalized care journey",
  "Secure, transparent health records",
];

type ImpactCardProps = {
  title: string;
  items: string[];
  index: number;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const ImpactCard = ({ title, items, index }: ImpactCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <Card className="bg-primary/10 border-slate-100 shadow-sm hover:shadow-md transition-shadow rounded-3xl h-full">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
            {title}
          </h3>

          <ul className="space-y-4">
            {items.map((impact) => (
              <li
                key={impact}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="text-lg">{impact}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const ImpactSection = () => {
  return (
    <Section size="lg" id="impact" className="bg-background">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Better Systems. Better Care.{" "}
            <span className="text-primary">Better Outcomes.</span>
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Our platform doesn't just manage data—it transforms the entire
            healthcare experience for both providers and patients.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ImpactCard title="For Hospitals" items={hospitalImpacts} index={0} />

          <ImpactCard title="For Patients" items={patientImpacts} index={1} />
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-12 rounded-[3rem] bg-linear-to-r from-primary to-primary/90 text-primary-foreground shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Hospital’s Digital Future?
          </h3>

          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the growing network of hospitals that trust HISD3 to power
            their clinical excellence.
          </p>

          <Link to="/contactUs">
            <button className="bg-white text-primary font-bold py-4 px-10 rounded-full text-lg hover:bg-slate-100 transition-colors shadow-lg cursor-pointer">
              Request Your Personal Demo Today
            </button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};
