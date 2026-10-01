import { Award } from "lucide-react";
import { CoursePage, SneakPeak } from "@/components/course/course-page";
import { courses, courseDescription, courseKeyPoints, getCourse } from "@/lib/data";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);

  return (
    <CoursePage slug={slug} active="">
      <section aria-labelledby="description">
        <h2 id="description" className="heading-md text-[24px] text-ink">
          Description
        </h2>
        <div className="mt-5 space-y-5 text-[16px] leading-[1.8] text-ink-500">
          {courseDescription.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
        </div>
      </section>

      {course && (
        <section className="mt-12">
          <SneakPeak course={course} />
        </section>
      )}

      <section aria-labelledby="key-points" className="mt-14">
        <h2 id="key-points" className="heading-md text-[24px] text-ink">
          Key Points
        </h2>
        <ul className="mt-6 space-y-3">
          {courseKeyPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-[16px] text-ink-500">
              <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime">
                <Award className="h-3 w-3 text-ink-900" strokeWidth={2.5} aria-hidden />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </section>
    </CoursePage>
  );
}
