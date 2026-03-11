import { Link } from "@tanstack/react-router";
import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS, GET_COMPANY_PROFILE } from "@/graphql/queries";
import type { GetProductsQuery, CompanyProfileQuery } from "@/graphql/generated/graphql";
import { solutionsData as fallbackSolutionList } from "@/components/sections/solutions/solutionsData";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { FacebookIcon, InstagramIcon } from "@/components/NewIcons";

const pages = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Solutions",
    slug: "/solutions",
  },
  {
    title: "About Us",
    slug: "/aboutUs",
  },
  {
    title: "Resources",
    slug: "/resources",
  },
  {
    title: "Contact Us",
    slug: "/contactUs",
  },
];

export const Footer = () => {
  const { data } = useQuery<GetProductsQuery>(GET_PRODUCTS);
  const { data: companyData } = useQuery<CompanyProfileQuery>(GET_COMPANY_PROFILE);

  const profile = companyData?.companyProfile;
  const socials = profile?.socials as Record<string, string> | undefined;

  const displayList =
    data?.products && data.products.length > 0
      ? data.products.map((p) => ({
          title: p.name,
          slug: p.slug,
        }))
      : fallbackSolutionList;

  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <Section size="lg" className="pt-20">
        <Container className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link to="/" className="font-bold text-4xl flex items-center">
              <img src="/hisd3-logo.svg" alt="" className="h-20 w-20 mr-2" />
              HIS<span className="text-logo-red">D3</span>
            </Link>
            <p className="text-muted-foreground">
              HISD3 helps you centralize your product, sales, and user data -
              all in one simple, real-time dashboard built for growing
              businesses.
            </p>
            <div className="mt-4">
              <h3 className="font-bold text-lg">Follow us on</h3>

              <div className="flex gap-1 mt-4">
                <a
                  href={socials?.facebook ?? "https://facebook.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit"
                >
                  <FacebookIcon className="w-10 h-10 text-primary transition-transform duration-300 hover:scale-115" />
                </a>
                <a
                  href={socials?.instagram ?? "https://instagram.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit"
                >
                  <InstagramIcon className="w-10 h-10 text-primary transition-transform duration-300 hover:scale-115" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Quick Links</h3>
            {pages.map((page: any, index: number) => (
              <div key={index} className="overflow-hidden">
                <Link
                  to={page.slug}
                  className="inline-block text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-2"
                >
                  {page.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Solutions</h3>
            {displayList.slice(0, 10).map((solution: any, index: number) => (
              <div key={index} className="overflow-hidden">
                <Link
                  to="/solutions/$solutionId"
                  params={{ solutionId: solution.slug }}
                  className="inline-block text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-2"
                >
                  {solution.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="col-span-full xl:col-span-2">
            <h3 className="font-bold text-lg">Address</h3>
            <div className="text-muted-foreground hover:text-foreground">
              {profile?.address ?? "2/F F & L Centre 2211 Commonwealth Avenue Brgy. Holy Spirit, Quezon City, Philippines 1127"}
            </div>

            <h3 className="font-bold text-lg mt-4">Contacts</h3>
            {profile?.phone && (
              <div>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-muted-foreground hover:text-foreground hover:translate-x-2"
                >
                  {profile.phone}
                </a>
              </div>
            )}
            {!profile?.phone && (
              <div>
                <a
                  href="tel:+639171234567"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-2"
                >
                  +63 917 123 4567
                </a>
              </div>
            )}

            {profile?.email && (
              <div>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground hover:text-foreground hover:translate-x-2"
                >
                  {profile.email}
                </a>
              </div>
            )}
            {!profile?.email && (
              <div>
                <a
                  href="mailto:info@hisd3.com"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-2"
                >
                  info@hisd3.com
                </a>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Section size="none" className="pb-14">
        <Container className="text-center">
          <h3>
            &copy; 2026{" "}
            <span className="text-primary transition-all border-primary hover:border-b-2">
              HISD3 Inc.
            </span>{" "}
            All rights reserved | Built to digitize healthcare facilities{" "}
          </h3>
        </Container>
      </Section>
    </footer>
  );
};
