import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const PartnerSection = () => {
  interface SponsorProps {
    image: string;
    lightimg: string;
    name: string;
  }

  const sponsors: SponsorProps[] = [
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-1.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-1.svg",
      name: "Brand 1",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-2.svg",
      name: "Brand 2",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-3.svg",
      name: "Brand 3",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-4.svg",
      name: "Brand 4",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-5.svg",
      name: "Brand 5",
    },
  ];

  return (
    <Section id="sponsors" size="sm">
      <Container>
        <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-12 text-primary">
          Trusted by leading hospitals and healthcare facilities
        </h1>

        <div className="relative">
          <Marquee
            className="py-4"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            {sponsors.map((sponsor, index) => (
              <div key={index} className="mx-8 flex items-center">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </Section>
  );
};
