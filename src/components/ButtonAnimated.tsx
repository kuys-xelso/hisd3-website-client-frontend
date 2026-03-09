import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonAnimatedProps extends React.ComponentProps<typeof Button> {
    gradientClassName?: string;
}

const ButtonAnimated = ({
    children,
    className,
    gradientClassName,
    variant = "outline",
    ...props
}: ButtonAnimatedProps) => {
    return (
        <div className="w-fit h-fit relative inline-flex rounded-full overflow-hidden">
            {/* Animated gradient border */}
            <span className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
                <span className={cn(
                    "absolute -inset-full animate-spin [animation-duration:4s] bg-[conic-gradient(from_0deg,_#2b7fff_0deg,_#2b7fff_40deg,_transparent_60deg)]",
                    gradientClassName
                )} />
            </span>

            {/* Button */}
            <Button
                variant={variant}
                {...props}
                className={cn(
                    "relative z-10 m-[1px] rounded-md bg-background dark:bg-background hover:bg-background dark:hover:bg-background shadow-none",
                    className
                )}>
                {children}
            </Button>
        </div>
    );
};

export default ButtonAnimated;

