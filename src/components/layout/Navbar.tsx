import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/solutions",
    label: "Solutions",
  },
  {
    href: "/aboutUs",
    label: "About Us",
  },
  {
    href: "/resources",
    label: "Resources",
  },
  {
    href: "/contactUs",
    label: "Contact Us",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <div className="container h-14 px-4 mx-auto flex justify-between items-center w-full relative">
        {/* logo */}
        <Link
          to="/"
          activeOptions={{ exact: true }}
          // activeProps={{ className: "text-primary" }}
          className="font-extrabold text-xl flex items-center shrink-0 z-50"
        >
          <img src="/hisd3-logo.svg" alt="" className="h-10 w-10 mr-2" />
          HIS<span className="text-[#ff5733]">D3</span>
        </Link>

        {/* desktop nav - absolutely centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              {routeList.map((route: RouteProps, i) => (
                <NavigationMenuItem key={i}>
                  <Link
                    to={route.href}
                    activeProps={{ className: "text-primary" }}
                    className={`text-[17px] ${buttonVariants({
                      variant: "ghost",
                    })}`}
                  >
                    {route.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* right side: social & mobile menu */}
        <div className="flex items-center gap-4 z-50">
          <div className="hidden md:flex gap-2 items-center">
            <a
              href="https://www.facebook.com"
              rel="noreferrer noopener"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              <img src="/facebook.svg" alt="" className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com"
              rel="noreferrer noopener"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              <img src="/linkedin.svg" alt="" className="h-5 w-5" />
            </a>
            <a
              href="https://www.telegram.com"
              rel="noreferrer noopener"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              <img src="/telegram.svg" alt="" className="h-5 w-5" />
            </a>
          </div>

          {/* mobile toggle */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex h-5 w-5"
                  onClick={() => setIsOpen(true)} /
                >
                <span className="sr-only">Menu Icon</span>

              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="flex items-center font-bold text-xl">
                    <img src="/hisd3-logo.svg" alt="" className="h-8 w-8" />
                    <div className="flex items-center ml-2">
                      HIS<span className="text-[#ff5733]">D3</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      key={label}
                      to={href}
                      activeProps={{ className: "text-primary" }}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://www.facebook.com"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="opacity-60 hover:opacity-100"
                      title="Facebook"
                    >
                      <img
                        src="/facebook.svg"
                        alt="Facebook"
                        className="h-5 w-5"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="opacity-60 hover:opacity-100"
                      title="LinkedIn"
                    >
                      <img
                        src="/linkedin.svg"
                        alt="LinkedIn"
                        className="h-5 w-5"
                      />
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </span>
        </div>
      </div>
    </header>
  );
};
