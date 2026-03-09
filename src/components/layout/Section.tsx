import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg" | "xl" | "none";
}

export const Section = ({ className, children, size = "md", ...props }: SectionProps) => {
  const paddingVariants = {
    none: "",
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
    xl: "py-32 md:py-40",
  };

  return (
    <section className={cn(paddingVariants[size], className)} {...props}>
      {children}
    </section>
  );
};
