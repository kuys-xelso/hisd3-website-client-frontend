"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { TextAlignJustify } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import ButtonHero from "@/components/ButtonHero";

export type NavigationSection = {
  title: string;
  href: string;
};

const navigationData: NavigationSection[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "About Us",
    href: "/aboutUs",
  },
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: "Contact Us",
    href: "/contactUs",
  },
];

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-transparent">
        <Container className="py-4">
          <nav
            className={cn(
              "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
              sticky
                ? "p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
                : "bg-transparent border-transparent",
            )}
          >
            <Link
              to="/"
              className="font-extrabold text-xl flex items-center shrink-0 z-50"
            >
              <img src="/hisd3-logo.svg" alt="" className="h-10 w-10 mr-2" />
              HIS<span className="text-[#ff5733]">D3</span>
            </Link>
            <div>
              <NavigationMenu className="max-lg:hidden bg-muted p-0.5 rounded-full">
                <NavigationMenuList className="flex gap-0">
                  {navigationData.map((navItem) => (
                    <NavigationMenuItem key={navItem.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={navItem.href}
                          activeProps={{
                            className:
                              "!bg-background !text-primary shadow-xs border border-border !rounded-full",
                          }}
                          className="px-2 lg:px-4 py-2 text-sm font-medium !rounded-full text-muted-foreground hover:text-primary hover:bg-background border border-transparent hover:border-border hover:shadow-xs transition tracking-normal block"
                        >
                          {navItem.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <Link to="/contactUs" className="hidden lg:flex">
              <ButtonHero />
            </Link>

            <div className="lg:hidden">
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger className="rounded-full bg-background border border-border p-2 outline-none flex items-center justify-center cursor-pointer transition-colors">
                  <TextAlignJustify size={20} />
                  <span className="sr-only">Menu</span>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="w-56 mt-2 shadow-xl border-border/50 backdrop-blur-md"
                >
                  {navigationData.map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full cursor-pointer text-sm font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
                      >
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <div className="p-2 border-t mt-2">
                    <Link to="/contactUs" onClick={() => setIsOpen(false)}>
                      <Button className="w-full rounded-full text-xs h-9">
                        Collaborate
                      </Button>
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </Container>
      </header>
    </div>
  );
};
