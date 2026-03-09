import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ButtonHeroProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: React.ReactNode | string;
}

const ButtonHero = ({ 
    text = "Let's Collaborate", 
    icon = <ArrowUpRight size={16} />, 
    className,
    ...props 
}: ButtonHeroProps) => {
    return (
        <Button 
            className={cn(
                "relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer",
                className
            )}
            {...props}
        >
            <span className="relative z-10 transition-all duration-500">
                {text}
            </span>
            <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                {typeof icon === "string" ? (
                    <img src={icon} alt="" className="w-4 h-4" />
                ) : (
                    icon
                )}
            </div>
        </Button>
    )
}

export default ButtonHero
