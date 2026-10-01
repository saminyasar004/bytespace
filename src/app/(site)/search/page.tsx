import { Suspense } from "react";
import { SearchResults } from "@/components/search/search-results";
import { CourseCardSkeleton } from "@/components/course/course-card";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="container-site grid grid-cols-1 gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
