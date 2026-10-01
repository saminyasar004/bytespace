import Image from "next/image";
import Link from "next/link";
import { BarChart3, Star } from "lucide-react";
import { avatarPhotos, type Course } from "@/lib/data";
import { CardImage } from "./primitives";
import { cn } from "@/lib/utils";

/* The three translucent meta pills that sit on the card artwork. */
function ImageBadges({ course }: { course: Course }) {
  const items = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];
  return (
    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex h-7 items-center rounded-full bg-white/50 px-3 text-[13px] font-medium text-ink-900 backdrop-blur-[10px]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/* 4 photo avatars + a lime "26+" overflow chip, overlapping by 8px. */
function AvatarStack({ count = 26 }: { count?: number }) {
  return (
    <div className="flex items-center" aria-label={`${count}+ learners enrolled`}>
      {avatarPhotos.map((src, i) => (
        <span key={src} className="relative h-8 w-8 overflow-hidden rounded-full" style={{ marginLeft: i ? -8 : 0 }}>
          <Image src={src} alt="" fill sizes="32px" className="object-cover" />
        </span>
      ))}
      <span className="-ml-2 grid h-8 w-8 place-items-center rounded-full bg-lime text-[14px] font-semibold text-ink-900">
        {count}+
      </span>
    </div>
  );
}

export function LevelChip({ level }: { level: Course["level"] }) {
  return (
    <span className="inline-flex h-8 items-center gap-2 rounded-full bg-surface pl-[15px] pr-3">
      <BarChart3 className="h-3.5 w-3.5 text-ink-700" strokeWidth={1.8} aria-hidden />
      <span className="text-[16px] text-ink-700">{level}</span>
    </span>
  );
}

export function CourseCard({
  course,
  className,
  headingLevel = "h2",
}: {
  course: Course;
  className?: string;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article
      className={cn(
        "group flex w-full flex-col rounded-card border border-line bg-white p-4 transition-colors hover:border-brand",
        className
      )}
    >
      <div className="relative">
        <CardImage src={course.image} alt={course.title} />
        <ImageBadges course={course} />
      </div>

      <div className="mt-6 flex items-start justify-between gap-5">
        <Heading className="min-w-0 flex-1 truncate text-[20px] font-bold leading-tight text-ink">
          <Link href={`/courses/${course.slug}`} className="outline-none focus-visible:underline">
            {course.title}
          </Link>
        </Heading>
        <span className="flex shrink-0 items-center gap-1.5 pt-0.5">
          <span className="text-[18px] text-ink-500">{course.rating}</span>
          <Star className="h-4 w-4 fill-line text-line" aria-hidden />
        </span>
      </div>

      <p className="mt-1.5 text-[14px] text-ink-500">
        by{" "}
        <Link href={`/creators/${course.creatorId}`} className="text-brand hover:underline">
          {course.creator}
        </Link>
      </p>

      <div className="mt-[18px] flex h-8 items-center justify-between gap-3">
        <LevelChip level={course.level} />
        <AvatarStack />
      </div>

      <p className="mt-4 flex items-baseline">
        <span className="text-[20px] font-bold text-brand">${course.price}</span>
        <span className="text-[13px] text-ink-500">/lifetime</span>
      </p>
    </article>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="flex w-full flex-col rounded-card border border-line bg-white p-4">
      <div className="aspect-340/195 w-full rounded-media bg-surface" />
      <div className="mt-6 h-5 w-2/3 rounded bg-surface" />
      <div className="mt-3 h-4 w-1/2 rounded bg-surface" />
      <div className="mt-5 flex h-8 items-center justify-between">
        <div className="h-8 w-24 rounded-full bg-surface" />
        <div className="flex -space-x-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="h-8 w-8 rounded-full bg-surface" />
          ))}
        </div>
      </div>
      <div className="mt-4 h-5 w-24 rounded bg-surface" />
    </div>
  );
}
