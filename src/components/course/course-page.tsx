import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Award, Play, Share2 } from "lucide-react";
import {
  courseIncludes,
  courseSubtitle,
  courseTitle,
  enrollCta,
  getCourse,
  moreVideosLabel,
  sidebarModules,
  type Course,
} from "@/lib/data";
import { RatingStars } from "@/components/course/primitives";

/* ------------------------------------------------------------------ *
 * Tabs
 * ------------------------------------------------------------------ */

const tabs = [
  { label: "About", segment: "" },
  { label: "Lesson", segment: "lessons" },
  { label: "Reviews", segment: "reviews" },
] as const;

export function CourseTabs({ slug, active }: { slug: string; active: string }) {
  return (
    <nav className="flex items-center gap-1 border-b border-line" aria-label="Course sections">
      {tabs.map((tab) => {
        const isActive = tab.segment === active;
        const href = tab.segment ? `/courses/${slug}/${tab.segment}` : `/courses/${slug}`;
        return (
          <Link
            key={tab.segment || "overview"}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "relative px-5 py-4 text-[17px] font-semibold text-ink after:absolute after:inset-x-5 after:bottom-0 after:h-0.5 after:bg-brand"
                : "px-5 py-4 text-[17px] text-ink-500 transition-colors hover:text-ink"
            }
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}

/* ------------------------------------------------------------------ *
 * Blue header
 * ------------------------------------------------------------------ */

export function CourseHero({ course, active }: { course: Course; active: string }) {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="grid-overlay absolute inset-0" aria-hidden />
      <div className="container-site relative pb-24 pt-10">
        <div className="flex items-start justify-between gap-6">
          <h1 className="heading-lg max-w-[840px] text-[40px] text-surface lg:text-[44px]">
            {courseTitle}
          </h1>
          <button
            type="button"
            className="inline-flex h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full border border-white/35 px-5 text-[15px] text-surface transition-colors hover:bg-surface hover:text-brand"
          >
            <Share2 className="h-4 w-4" aria-hidden />
            Share
          </button>
        </div>

        <p className="mt-5 text-[18px] text-surface/85">{courseSubtitle}</p>

        <p className="mt-4 text-[15px] text-surface/85">
          by{" "}
          <Link href={`/creators/${course.creatorId}`} className="text-lime hover:underline">
            {course.creator}
          </Link>
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <span className="inline-flex h-9 items-center gap-2 rounded-full bg-white/15 pl-4 pr-4 text-[15px] text-surface">
            <Award className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
            {course.level}
          </span>
          <span className="flex items-center gap-2 text-[15px] text-surface">
            <span className="font-semibold text-lime">{course.rating}</span>
            <RatingStars value={course.rating} size={14} />
            <span className="text-surface/70">({course.ratingCount} reviews)</span>
          </span>
          <span className="text-[15px] text-surface/90">{course.students} Students</span>
        </div>

        <div className="mt-24">
          <CourseTabs slug={course.slug} active={active} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Sidebar
 * ------------------------------------------------------------------ */

function EnrollCard({ course }: { course: Course }) {
  return (
    <div className="rounded-card border border-line bg-white p-7">
      <p className="text-[16px] font-semibold text-ink">{enrollCta}</p>
      <p className="mt-4 flex items-baseline">
        <span className="text-[32px] font-bold text-brand">${course.price}</span>
        <span className="text-[14px] text-ink-500">/lifetime</span>
      </p>
      <Link
        href={`/courses/${course.slug}/lessons`}
        className="mt-5 flex h-12 w-full items-center justify-center rounded-full bg-brand text-[16px] font-medium text-surface transition-colors hover:bg-brand-dark"
      >
        Enroll Now
      </Link>
    </div>
  );
}

function IncludesCard() {
  return (
    <div className="rounded-card border border-line bg-white p-7">
      <p className="text-[16px] font-semibold text-ink">This course include</p>
      <ul className="mt-5 space-y-3">
        {courseIncludes.map((item) => (
          <li key={item} className="flex items-center gap-3 text-[15px] text-ink-500">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime">
              <Award className="h-3 w-3 text-ink-900" strokeWidth={2.5} aria-hidden />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CreatorCard({ course }: { course: Course }) {
  return (
    <div className="rounded-card border border-line bg-white p-7">
      <p className="text-[16px] font-semibold text-ink">PurePearl Studio</p>
      <p className="mt-1 text-[14px] text-ink-500">Professional Creator</p>
      <p className="mt-4 text-[15px] leading-[1.6] text-ink-500">{enrollCta}</p>
      <Link
        href={`/creators/${course.creatorId}`}
        className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full border border-line text-[15px] text-ink transition-colors hover:border-brand hover:text-brand"
      >
        See Full Profile
      </Link>
    </div>
  );
}

export function CourseSidebar({ course }: { course: Course }) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-8">
      <div className="rounded-card border border-line bg-white p-7">
        <p className="text-[17px] font-semibold text-ink">
          {course.lessons} Lessons ({course.duration})
        </p>
        <ul className="mt-5 space-y-4">
          {sidebarModules.map((mod) => (
            <li key={mod.n} className="flex items-start justify-between gap-4">
              <span className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[15px] text-ink-500">{mod.n}</span>
                <span className="text-[15px] text-ink">{mod.title}</span>
              </span>
              <span className="shrink-0 text-[14px] text-muted">{mod.minutes} mins</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-5 cursor-pointer text-[15px] text-brand hover:underline"
        >
          {moreVideosLabel}
        </button>
      </div>

      <EnrollCard course={course} />
      <IncludesCard />
      <CreatorCard course={course} />
    </aside>
  );
}

/* ------------------------------------------------------------------ *
 * Page shell
 * ------------------------------------------------------------------ */

export function CoursePage({
  slug,
  active,
  children,
}: {
  slug: string;
  active: string;
  children: React.ReactNode;
}) {
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <CourseHero course={course} active={active} />
      <div className="container-site grid gap-10 pb-20 pt-10 lg:grid-cols-[1fr_374px] lg:items-start">
        <div className="min-w-0">{children}</div>
        <CourseSidebar course={course} />
      </div>
    </>
  );
}

/* Video preview block used by the Overview tab ("Sneak Peak"). */
export function SneakPeak({ course }: { course: Course }) {
  return (
    <div>
      <h2 className="heading-md text-[24px] text-ink">Sneak Peak</h2>
      <div className="relative mt-5 aspect-340/195 w-full overflow-hidden rounded-media bg-brand-dark">
        <Image
          src={course.image}
          alt="Course preview"
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
        />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/25 backdrop-blur-[4px]">
            <Play className="ml-1 h-6 w-6 fill-surface text-surface" aria-hidden />
          </span>
        </span>
      </div>
    </div>
  );
}
