
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from "@tanstack/react-router";

interface SolutionCardProps {
    title: string;
    description: string;
    icon?: string;
    image?: string;
    slug: string;
    users?: { user: string }[];
}


export const SolutionCard = ({
    title,
    description,
    slug,
    icon
}: SolutionCardProps) => {
    return (
        <>

            {/* Card Motion Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='w-full h-full'
            >
                <Card className='p-0 gap-0 w-full h-full border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-card'>
                    {/* Top Image Animation */}
                    <div className="overflow-hidden relative h-48 sm:h-56">
                        <motion.img
                            src={icon}
                            alt={title}
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content Area */}
                    <CardContent className='p-6 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-14rem)]'>
                        <div className="flex-grow">
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className='text-lg font-bold text-foreground group-hover:text-primary transition-colors'>
                                {title}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45 }}
                                className='text-sm font-medium text-muted-foreground mt-2 line-clamp-3'>
                                {description}
                            </motion.p>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <Link
                                to="/solutions/$solutionId"
                                params={{ solutionId: slug }}
                                className="block h-full"
                            >
                                <span className="relative font-semibold text-sm after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full group-hover:text-primary">
                                    Learn More
                                </span>
                            </Link>
                        </div>
                    </CardContent>
                </Card >
            </motion.div >
        </>

    );
};
