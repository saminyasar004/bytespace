import Image from "next/image";
import { notFound } from "next/navigation";
import {
  AllFilters,
  CategoryFilter,
  LevelFilter,
  SortMenu,
} from "@/components/search/search-controls";
import { CourseCard } from "@/components/course/course-card";
import { courses, creators, getCreator } from "@/lib/data";

export function generateStaticParams() {
  return creators.map((creator) => ({ id: creator.id }));
}

export default async function CreatorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const creator = getCreator(id);
  if (!creator) notFound();

  const products = courses.filter((c) => c.creatorId === creator.id);

  return (
    <>
      {/* Blue hero */}
      <section className="relative overflow-hidden bg-brand">
        <div className="grid-overlay absolute inset-0" aria-hidden />
        <div className="container-site relative flex flex-col items-center py-14 text-center">
          <span className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-surface/25">
            <Image src={creator.avatar} alt="" fill priority sizes="112px" className="object-cover" />
          </span>
          <h1 className="heading-lg mt-7 text-[36px] text-surface lg:text-[40px]">
            {creator.name} Creator
          </h1>
          <p className="mt-3 text-[18px] text-lime">{creator.tagline}</p>
        </div>
      </section>

      <section className="bg-white pb-16 pt-10">
        <div className="container-site">
          {/* Bio */}
          <div className="max-w-[1100px] space-y-4 text-[16px] leading-[1.75] text-ink-500">
            {creator.bio.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>

          {/* Meta row */}
          <ul className="mt-10 flex flex-wrap items-center gap-8 text-[16px] text-ink">
            <li>
              <span className="font-semibold">{products.length}</span> Products
            </li>
            <li>
              <span className="font-semibold">{creator.followers}</span> Followers
            </li>
            <li>
              <button
                type="button"
                className="h-10 cursor-pointer rounded-full bg-lime px-6 text-[15px] font-medium text-ink-900 transition-colors hover:bg-lime-dark"
              >
                Follow
              </button>
            </li>
          </ul>

          {/* Filter bar — same control set as /search */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <AllFilters />
              <LevelFilter />
              <CategoryFilter />
            </div>
            <SortMenu />
          </div>

          {/* Products */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="flex h-13 w-[180px] cursor-pointer flex-col items-center justify-center rounded-full bg-brand text-[15px] font-medium uppercase leading-tight text-surface transition-colors hover:bg-brand-dark"
            >
              <span>Do</span>
              <span>More.</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
