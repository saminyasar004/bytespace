import { CoursePage } from "@/components/course/course-page";
import { courses, courseModules, modulesIntro } from "@/lib/data";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseLessonsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <CoursePage slug={slug} active="lessons">
      <section aria-labelledby="explore-modules">
        <h2 id="explore-modules" className="heading-md text-[24px] text-ink">
          Explore the Modules
        </h2>
        <p className="mt-4 max-w-[680px] text-[16px] leading-[1.75] text-ink-500">{modulesIntro}</p>
      </section>

      <section aria-labelledby="lesson-list" className="mt-16">
        <h2 id="lesson-list" className="heading-md text-[24px] text-ink">
          Lesson List
        </h2>
        <ol className="mt-8 space-y-6">
          {courseModules.map((mod) => (
            <li
              key={mod.n}
              className="rounded-2xl border border-line bg-white p-7 transition-colors hover:border-brand"
            >
              <h3 className="text-[18px] font-semibold text-ink">{mod.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-ink-500">{mod.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </CoursePage>
  );
}
