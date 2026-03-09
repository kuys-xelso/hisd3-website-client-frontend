import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn("max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8", className)} 
      {...props}
    >
      {children}
    </div>
  );
};
