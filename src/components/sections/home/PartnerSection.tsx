import type { JSX } from "react";
import { Marquee } from "@/components/shadcn-space/animations/marquee"
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const PartnerSection = () => {

    interface SponsorProps {
        icon: JSX.Element;
        name: string;
    }

    const sponsors: SponsorProps[] = [
        {
            icon: <img src="/Untitled (1).png" alt="" className='h-50 w-auto object-contain' />,
            name: "Sponsor 1",
        },
        {
            icon: <img src="/Untitled (2).png" alt="" className='h-50 w-auto object-contain' />,
            name: "Sponsor 2",
        },
        {
            icon: <img src="/Untitled (3).png" alt="" className='h-50 w-auto object-contain' />,
            name: "Sponsor 3",
        },
        {
            icon: <img src="/Untitled (1).png" alt="" className='h-50 w-auto object-contain' />,
            name: "Sponsor 4",
        },
        {
            icon: <img src="/Untitled (1).png" alt="" className='h-50 w-auto object-contain' />,
            name: "Sponsor 5",
        }
    ];

    return (
        <Section
            id="sponsors"
            size="sm"
        >
            <Container>
            <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-12 text-primary">
                Trusted by leading hospitals and healthcare facilities
            </h1>

            <div className="relative">
                <Marquee className="py-4" style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}>
                    {sponsors.map((sponsor, index) => (
                        <div key={index}>
                            {sponsor.icon}
                        </div>
                    ))}
                </Marquee>

            </div>
            </Container>
        </Section>
    )
}
