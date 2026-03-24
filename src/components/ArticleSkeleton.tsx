import { Skeleton } from "@/components/ui/skeleton";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const ArticleSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Section
        size="none"
        className="relative pt-20 pb-10 bg-gradient-to-b from-white/60 to-slate-50/60"
      >
        <Container>
          <div className="grid grid-cols-12">
            <div className="flex flex-col gap-8 w-full lg:col-span-9 col-span-12 px-4 sm:px-6 mb-10">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-40" />
              </div>
              <Skeleton className="h-14 sm:h-16 md:h-20 w-3/4 max-w-3xl" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-12" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-0 flex flex-col lg:flex-row items-start gap-10 px-4 sm:px-6">
            <div className="flex-1 min-w-0 flex flex-col gap-10 w-full">
              {/* Featured Image placeholder */}
              <Skeleton className="relative w-full aspect-video rounded-2xl" />

              {/* Body text paragraphs */}
              <div className="flex flex-col gap-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-[95%]" />
                <Skeleton className="h-4 w-[85%]" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="flex flex-col gap-8 lg:sticky lg:top-28 h-fit w-full lg:w-80 shrink-0">
              {/* Share Section placeholder */}
              <div className="flex flex-col gap-4 p-4 border rounded-xl bg-card">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <Skeleton className="w-6 h-6 rounded-full" />
                </div>
              </div>

              {/* Related Resources placeholder */}
              <div className="flex flex-col gap-4">
                <Skeleton className="h-3 w-28 ml-1" />
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col gap-2 p-3 border border-transparent">
                    <Skeleton className="w-full h-32 object-cover rounded-lg mb-1" />
                    <Skeleton className="h-3 w-20 rounded-md" />
                    <Skeleton className="h-4 w-full mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
