import { Skeleton } from "@/components/ui/skeleton"

export const ArticleSkeleton = () => {
    return (
        <div className="flex flex-col space-y-3 max-w-[600px]">
            {/* Featured Image placeholder */}
            <Skeleton className="h-[250px] w-full rounded-xl" />

            <div className="space-y-2">
                {/* Title placeholder */}
                <Skeleton className="h-6 w-3/4" />
                {/* Author/Date line */}
                <Skeleton className="h-4 w-1/4" />
            </div>

            <div className="space-y-2 pt-4">
                {/* Body text paragraphs */}
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[85%]" />
            </div>
        </div>
    )
}   