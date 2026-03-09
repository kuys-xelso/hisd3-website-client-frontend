import { Card, CardContent } from "@/components/ui/card"
import { Marquee } from "@/components/shadcn-space/animations/marquee"
import { Quote, Star, Building2 } from "lucide-react"; // Added Building2 icon
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";


const reviews = [
    {
        name: "Ken Masters",
        position: "Hospital Director",
        hospitalName: "Saint Luke’s Medical Center",
        body: "“Our operational efficiency has nearly doubled. The automation of patient intake and bed management allowed our administrative staff to focus on patient experience rather than paperwork.”",
        profile: "https://images.shadcnspace.com/assets/profiles/rough.webp",
        date: "12 Jan 2026"
    },
    {
        name: "Sarah Wilson",
        position: "Chief Nursing Officer",
        hospitalName: "General Health Trust",
        body: "“What surprised us most was the clinical adoption rate. The interface is so intuitive that our nursing staff required minimal training, directly reducing charting time and burnout.”",
        profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
        date: "05 Feb 2026"
    },
    {
        name: "Lirael Nassun",
        position: "Head of Emergency Medicine",
        hospitalName: "Metropolitan Trauma Center",
        body: "“In high-pressure environments, every second counts. This solution has streamlined our triage communication and simplified the way we track real-time patient status.”",
        profile: "https://images.shadcnspace.com/assets/profiles/linda.webp",
        date: "28 Feb 2026"
    },
    {
        name: "Jessica Chen",
        position: "Lab Technician",
        hospitalName: "Bio-Research Diagnostics",
        body: "“The integration with our existing LIS was seamless. We can now push results to physicians instantly, significantly reducing the turnaround time for critical diagnostic reports.”",
        profile: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
        date: "01 Mar 2026"
    },
    {
        name: "Jenny Lawson",
        position: "Pharmacy Manager",
        hospitalName: "Central Apothecary Services",
        body: "“Managing inventory and medication tracking used to be a headache. This platform’s security protocols and audit trails give us the peace of mind we need for HIPAA compliance.”",
        profile: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
        date: "15 Feb 2026"
    },
    {
        name: "Marcus Thorne",
        position: "Radiology Department Lead",
        hospitalName: "Westside Imaging Institute",
        body: "“The scalability is impressive. Even with high-resolution imaging data, the platform remains fast and responsive, which is vital for our radiologists' daily workflow.”",
        profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
        date: "10 Feb 2026"
    }
];

const firstrow = reviews.slice(0, reviews.length / 2);
const secondrow = reviews.slice(reviews.length / 2);


const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
    return (
        <Card className="relative h-full w-72 cursor-pointer overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-md p-5">
            {/* Visual Accent */}
            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 opacity-20" />

            <CardContent className="p-0 flex flex-col gap-4">
                {/* Header: Profile & Identity */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                        <img
                            className="rounded-full border border-border object-cover mt-1"
                            width="44"
                            height="44"
                            alt={`${review.name}`}
                            src={review.profile}
                        />
                        <div className="flex flex-col min-w-0">
                            <p className="text-sm font-bold text-foreground truncate">
                                {review.name}
                            </p>
                            <p className="text-[11px] font-medium text-primary/90 leading-tight">
                                {review.position}
                            </p>
                            {/* Added Hospital Name Here */}
                            <div className="flex items-center gap-1 mt-0.5 text-muted-foreground">
                                <Building2 className="h-3 w-3 shrink-0" />
                                <p className="text-[10px] font-medium truncate uppercase tracking-tight">
                                    {review.hospitalName || "St. Jude Medical Center"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>

                {/* The Testimonial */}
                <div className="relative">
                    <p className="text-sm leading-relaxed text-foreground/90 italic line-clamp-4">
                        "{review.body}"
                    </p>
                </div>

                {/* Verification Footer */}
                <div className="mt-auto pt-2 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                        Staff Verified
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                        {review.date}
                    </span>
                </div>
            </CardContent>
        </Card>
    );
};



export const TestimonialCardSection = () => {
    return (
        <Section size="lg" className="overflow-x-hidden">
            <Container>

            <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-primary">
                What Our Clients Say
            </h1>
            <p className="text-center text-muted-foreground  mb-8">
                Hear from our satisfied clients about how HISD3 has transformed their
                hospital operations and patient care.
            </p>

            <Marquee pauseOnHover className="[--duration:40s]" style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
            }}  >
                {firstrow.map((review) => (
                    <ReviewCard key={review.name} review={review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s]" style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
            }}  >
                {secondrow.map((review) => (
                    <ReviewCard key={review.name} review={review} />
                ))}
            </Marquee>
            </Container>
        </Section>
    )
}
