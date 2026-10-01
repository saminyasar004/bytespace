import Image from "next/image";
import { Star } from "lucide-react";
import { CoursePage } from "@/components/course/course-page";
import {
  avatarPhotos,
  courses,
  overallRating,
  ratingBreakdown,
  ratingFilters,
  reviews,
  reviewsIntro,
} from "@/lib/data";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={i < value ? "h-4 w-4 fill-lime text-lime" : "h-4 w-4 fill-line text-line"}
          aria-hidden
        />
      ))}
    </span>
  );
}

export default async function CourseReviewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const max = ratingBreakdown[0].count;

  return (
    <CoursePage slug={slug} active="reviews">
      <section aria-labelledby="learners-saying">
        <h2 id="learners-saying" className="heading-md text-[24px] text-ink">
          What Learners Are Saying
        </h2>
        <p className="mt-4 max-w-[720px] text-[16px] leading-[1.75] text-ink-500">{reviewsIntro}</p>

        <div className="mt-9 flex flex-col gap-10 rounded-card border border-line bg-white p-8 sm:flex-row sm:items-center sm:gap-14">
          <div className="flex shrink-0 flex-col items-center gap-2 sm:items-start">
            <p className="text-[56px] font-bold leading-none text-ink">{overallRating}</p>
            <Stars value={5} />
            <p className="text-[15px] text-ink-500">Ratings</p>
          </div>

          <ul className="flex-1 space-y-3">
            {ratingBreakdown.map((row) => {
              const pct = Math.round((row.count / max) * 100);
              return (
                <li key={row.stars} className="flex items-center gap-4">
                  <span className="w-8 shrink-0 text-right text-[15px] text-ink-500">{row.stars} ★</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
                    <span
                      className="block h-full rounded-full bg-lime"
                      style={{ width: `${Math.max(pct, 2)}%` }}
                    />
                  </span>
                  <span className="w-12 shrink-0 text-right text-[15px] text-muted">{row.count}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="individual-reviews" className="mt-12">
        <h2 id="individual-reviews" className="heading-md text-[24px] text-ink">
          Individual Reviews:
        </h2>

        <ul className="mt-6 flex flex-wrap items-center gap-3">
          {ratingFilters.map((f, i) => (
            <li key={f}>
              <button
                type="button"
                aria-pressed={i === 0}
                className={
                  i === 0
                    ? "h-10 cursor-pointer rounded-full border border-brand bg-brand px-5 text-[15px] text-surface"
                    : "h-10 cursor-pointer rounded-full border border-line bg-white px-5 text-[15px] text-ink transition-colors hover:border-brand"
                }
              >
                {f}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-6">
          {reviews.map((review, i) => (
            <article key={review.name} className="rounded-card border border-line bg-white p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-surface">
                    <Image
                      src={avatarPhotos[i % avatarPhotos.length]}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <p className="text-[16px] font-semibold text-ink">{review.name}</p>
                    <p className="text-[14px] text-ink-500">{review.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Stars value={5} />
                  <span className="text-[14px] text-muted">{review.when}</span>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-[1.8] text-ink-500">{review.body}</p>
            </article>
          ))}
        </div>
      </section>
    </CoursePage>
  );
}
