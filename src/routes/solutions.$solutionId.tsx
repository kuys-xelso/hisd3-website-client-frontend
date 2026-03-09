import { createFileRoute } from '@tanstack/react-router'
import { solutionsData } from '@/components/sections/solutions/solutionsData'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { useQuery } from '@apollo/client/react';
import { GET_PRODUCT_BY_ID } from '@/graphql/queries';
import { ArrowUpRight } from 'lucide-react';
import DOMPurify from 'dompurify';
import { Share2 } from 'lucide-react';
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import ButtonHero from '@/components/ButtonHero';



export const Route = createFileRoute('/solutions/$solutionId')({
    component: SolutionDetailComponent,
})

function SolutionDetailComponent() {
    const { solutionId } = Route.useParams()
    const { data, loading } = useQuery(GET_PRODUCT_BY_ID, {
        variables: { productId: solutionId }
    })


    const mockSolution = solutionsData.find((s: any) => s.slug === solutionId)
    const dbSolution = data?.product

    const solution = dbSolution ? {
        title: dbSolution.name,
        icon: dbSolution.media?.[0]?.url || "https://github.com/shadcn.png",
        description: dbSolution.tagline,
        fullDescription: dbSolution.description,
        slug: dbSolution.slug
    } : mockSolution


    if (loading) {
        return (
            <Section size="xl" className="text-center animate-pulse">
                <Container>
                    <div className="h-10 w-48 bg-slate-200 mx-auto mb-4 rounded" />
                    <div className="h-6 w-96 bg-slate-200 mx-auto rounded" />
                </Container>
            </Section>
        )
    }

    if (!solution) {
        return (
            <Section size="lg" className="text-center">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
                    <p className="mb-8 text-muted-foreground">We couldn't find the solution you're looking for.</p>
                    <Link to="/solutions">
                        <Button variant="default">Back to Solutions</Button>
                    </Link>
                </Container>
            </Section>
        )
    }

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <Section size="sm" className='relative pt-20 pb-10 bg-gradient-to-b from-white/60 to-slate-50/60'>
                <Container>
                    <div className='grid grid-cols-12'>
                        <div className='flex flex-col gap-8 w-full lg:col-span-9 col-span-12 mb-10'>
                            <div className='flex items-center gap-2'>
                                <p className='text-[11px] uppercase tracking-widest font-bold text-muted-foreground/70'>
                                    Solution Overview
                                </p>
                            </div>
                            <h1 className='text-left text-primary text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1]'>
                                {solution.title}
                            </h1>
                            <p className="text-xl text-primary/80 leading-relaxed font-medium max-w-3xl">
                                {solution.description}
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section size="md">
                <Container>
                    <div className='flex flex-col lg:flex-row items-start gap-12'>
                        {/* Main Content Area */}
                        <div className="flex-1 min-w-0">
                            <div
                                className="blog-details blog-content-body prose prose-lg dark:prose-invert max-w-none w-full break-words overflow-hidden prose-headings:text-primary prose-headings:tracking-tight prose-p:text-muted-foreground/90 prose-p:leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(solution.fullDescription || "", {
                                        ADD_ATTR: ['style']
                                    })
                                }}
                            />

                            {/* CTA Section */}
                            <div className="mt-20 pt-16 border-t border-slate-100 flex flex-col items-center text-center">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Interested in {solution.title}?</h2>
                                <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
                                    Contact our team today to learn more about how this solution can transform your healthcare facility.
                                </p>
                                <Link to="/contactUs">
                                    <ButtonHero
                                        text="Get Started"
                                        icon={<ArrowUpRight size={16} />}
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar Area */}
                        <div className='flex flex-col gap-8 lg:sticky lg:top-28 h-fit w-full lg:w-80 shrink-0'>
                            {/* Branding Card */}
                            <div className="p-2 border border-border rounded-2xl bg-card/50">
                                <img
                                    src={solution.icon}
                                    alt=""
                                    className="group-hover:scale-[1.02] duration-200 border border-border rounded-xl w-full h-full object-contain"
                                />
                            </div>

                            {/* Share Section */}
                            <div className="flex flex-col gap-4 p-5 border rounded-2xl bg-card shadow-sm">
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                                    <Share2 className="w-3 h-3" />
                                    <span>Share Solution</span>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.facebook.com"
                                        rel="noreferrer noopener"
                                        target="_blank"
                                        className="opacity-60 hover:opacity-100"
                                    >
                                        <img src="/icon-facebook-fill.svg" alt="" className="h-6 w-6" />
                                    </a>
                                    <a
                                        href="https://www.twitter.com"
                                        rel="noreferrer noopener"
                                        target="_blank"
                                        className="opacity-60 hover:opacity-100"
                                    >
                                        <img src="/icon-x-outlined.svg" alt="" className="h-6 w-6" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com"
                                        rel="noreferrer noopener"
                                        target="_blank"
                                        className="opacity-60 hover:opacity-100"
                                    >
                                        <img src="/icon-linkedin-fill.svg" alt="" className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
