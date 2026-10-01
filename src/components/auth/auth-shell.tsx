import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { avatarPhotos, courses } from "@/lib/data";

/** Miniature course card used in the auth pages' left column. */
function MiniCourseCard({ index }: { index: number }) {
  const course = courses[index];
  return (
    <article className="w-full rounded-card border border-line bg-white p-4">
      <div className="relative aspect-340/195 w-full overflow-hidden rounded-media bg-surface">
        <Image src={course.image} alt="" fill sizes="240px" className="object-cover" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((b) => (
            <span
              key={b}
              className="inline-flex h-6 items-center rounded-full bg-white/55 px-2.5 text-[12px] text-ink-900 backdrop-blur-[8px]"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="min-w-0 flex-1 truncate text-[17px] font-bold text-ink">{course.title}</h3>
        <span className="flex shrink-0 items-center gap-1 text-[15px] text-ink-500">
          4.5
          <Star className="h-3.5 w-3.5 fill-lime text-lime" aria-hidden />
        </span>
      </div>
      <p className="mt-1 text-[13px] text-ink-500">by purepearl studio</p>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="inline-flex h-7 items-center rounded-full bg-surface px-3 text-[13px] text-ink-700">
          Beginner
        </span>
        <span className="text-[17px] font-bold text-brand">$25</span>
      </div>
    </article>
  );
}

function HappyStudents() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        {avatarPhotos.slice(0, 3).map((src, i) => (
          <span
            key={src}
            className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white"
            style={{ marginLeft: i ? -10 : 0 }}
          >
            <Image src={src} alt="" fill sizes="44px" className="object-cover" />
          </span>
        ))}
      </div>
      <div>
        <p className="text-[15px] font-medium text-ink">Happy Students</p>
        <p className="mt-0.5 flex items-center gap-1 text-[13px] text-ink-500">
          <span className="font-semibold text-ink">4.5</span>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="h-3 w-3 fill-lime text-lime" aria-hidden />
          ))}
          <span>(240)</span>
        </p>
      </div>
      <span className="text-[19px] font-semibold text-brand">2K+</span>
    </div>
  );
}

/**
 * Split auth shell: full-bleed blue backdrop with a white card holding the
 * banner artwork + social proof on the left and the form on the right.
 */
export function AuthShell({
  banner,
  bannerAlt,
  bannerTitle,
  bannerBody,
  children,
}: {
  banner: string;
  bannerAlt: string;
  bannerTitle: string;
  bannerBody: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-brand">
      <div className="grid-overlay absolute inset-0" aria-hidden />
      <Image
        src="/assets/yellow-glowing-circle-1.svg"
        alt=""
        width={400}
        height={400}
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 hidden w-[360px] lg:block"
      />
      <Image
        src="/assets/blue-glowing-circle-1.svg"
        alt=""
        width={400}
        height={400}
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 hidden w-[360px] lg:block"
      />

      <div className="relative grid min-h-screen place-items-center px-6 py-10">
        <div className="grid w-full max-w-[1200px] overflow-hidden rounded-card bg-white lg:grid-cols-[484px_1fr]">
          {/* Left: artwork, copy and social proof */}
          <div className="flex flex-col bg-surface px-12 py-14">
            <h2 className="heading-md text-[24px] text-ink">{bannerTitle}</h2>
            <p className="mt-4 max-w-[380px] text-[15px] leading-[1.6] text-ink-500">{bannerBody}</p>

            <div className="relative mx-auto mt-8 aspect-340/220 w-full max-w-[400px]">
              <Image
                src={banner}
                alt={bannerAlt}
                fill
                priority
                sizes="400px"
                className="object-contain"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <MiniCourseCard index={1} />
              <MiniCourseCard index={0} />
            </div>

            <div className="mt-8">
              <HappyStudents />
            </div>
          </div>

          {/* Right: form */}
          <div className="flex flex-col justify-center px-8 py-12 sm:px-14 lg:px-16">
            <Logo variant="dark" width={171} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuthSwitch({
  prompt,
  action,
  href,
}: {
  prompt: string;
  action: string;
  href: string;
}) {
  return (
    <p className="text-[15px] text-ink-500">
      {prompt}{" "}
      <Link href={href} className="font-semibold text-brand hover:underline">
        {action}
      </Link>
    </p>
  );
}
