import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/skeleton";

export const SolutionDetailSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Section
        size="sm"
        className="relative !pt-16 !pb-8 bg-gradient-to-b from-white/60 to-slate-50/60"
      >
        <Container>
          <div className="grid grid-cols-12">
            <div className="flex flex-col gap-8 w-full lg:col-span-9 col-span-12 mb-10">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-14 sm:h-16 md:h-20 w-3/4 max-w-2xl" />
            </div>
          </div>
        </Container>
      </Section>

      <Section size="md" className="!bg-white/50 !pt-0">
        <Container>
          <div className="flex flex-col-reverse lg:flex-row items-start gap-12">
            {/* Main Content Area */}
            <div className="flex-1 min-w-0 w-full">
              <div className="flex flex-col gap-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full mt-4" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-4/5" />
                <div className="my-8">
                  <Skeleton className="h-64 w-full rounded-xl" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              {/* CTA Section */}
              <div className="mt-20 pt-16 border-t border-slate-100 flex flex-col items-center text-center">
                <Skeleton className="h-8 w-64 mb-4" />
                <Skeleton className="h-6 w-96 max-w-full mb-10" />
                <Skeleton className="h-12 w-40 rounded-full" />
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="flex flex-col gap-8 lg:sticky lg:top-28 h-fit w-full lg:w-80 shrink-0">
              {/* Branding Card */}
              <div className="p-2 border border-border rounded-2xl bg-card/50">
                <Skeleton className="w-full aspect-[4/3] rounded-xl" />
              </div>

              {/* Share Section */}
              <div className="flex flex-col gap-4 p-5 border rounded-2xl bg-card shadow-sm">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-3 h-3 rounded-full" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <Skeleton className="w-6 h-6 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
