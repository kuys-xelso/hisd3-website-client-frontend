import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ResourcePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ResourcePagination({
  currentPage,
  totalPages,
  onPageChange,
}: ResourcePaginationProps) {
  if (totalPages <= 1) return null;

  const delta = 1;

  const generatePages = (): (number | "ellipsis")[] => {
    const pages: (number | "ellipsis")[] = [];

    for (let i = 1; i <= totalPages; i++) {
      const isFirst = i === 1;
      const isLast = i === totalPages;
      const isNearCurrent = Math.abs(i - currentPage) <= delta;

      if (isFirst || isLast || isNearCurrent) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "ellipsis") {
        pages.push("ellipsis");
      }
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <Pagination className="mt-12">
      <PaginationContent className="gap-1">

        {/* Previous Button */}
        <PaginationItem>
          <button
            onClick={() => { if (currentPage > 1) onPageChange(currentPage - 1); }}
            disabled={currentPage === 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>
        </PaginationItem>

        {/* Page Numbers */}
        {pages.map((page, index) => (
          <PaginationItem key={page === "ellipsis" ? `ellipsis-${index}` : page}>
            {page === "ellipsis" ? (
              <PaginationEllipsis className="text-slate-400" />
            ) : (
              <button
                onClick={() => { if (page !== currentPage) onPageChange(page); }}
                className={`w-10 h-10 rounded-full text-sm font-semibold border transition-all duration-200 shadow-sm
                  ${page === currentPage
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/30 scale-110"
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary hover:shadow-md"
                  }`}
              >
                {page}
              </button>
            )}
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <button
            onClick={() => { if (currentPage < totalPages) onPageChange(currentPage + 1); }}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md disabled:pointer-events-none disabled:opacity-40"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}