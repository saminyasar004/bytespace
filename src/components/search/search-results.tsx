"use client";

import { Fragment, useMemo, useState } from "react";
import { CourseCard, CourseCardSkeleton } from "@/components/course/course-card";
import {
  AllFilters,
  CategoryChips,
  CategoryFilter,
  LevelFilter,
  SearchInput,
  SortMenu,
} from "./search-controls";
import { selectFilteredResults, useSearchStore } from "@/store/use-search-store";
import type { Course } from "@/lib/data";

/* The design lays the catalogue out as rows of three, revealing two rows at a
 * time behind a centred "DO MORE." button. */
const COLUMNS = 3;
const ROWS_PER_STEP = 2;
const INITIAL_STEPS = 3;
const MAX_STEPS = 4;
const TOTAL = COLUMNS * ROWS_PER_STEP * MAX_STEPS;

function DoMore({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <div className="col-span-full mt-2 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-hidden={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className="flex h-13 w-[190px] cursor-pointer flex-col items-center justify-center rounded-full bg-brand text-[15px] font-medium uppercase leading-tight text-surface transition-colors hover:bg-brand-dark disabled:cursor-default disabled:opacity-0"
      >
        <span>Do</span>
        <span>More.</span>
      </button>
    </div>
  );
}

export function SearchResults() {
  const state = useSearchStore();
  const [step, setStep] = useState(INITIAL_STEPS);
  const { results, total } = useMemo(() => selectFilteredResults(state), [state]);

  /* Reset the expansion whenever any filter changes. */
  const filterKey = [
    state.query,
    state.activeChip,
    state.levels.join(","),
    state.categories.join(","),
    state.price,
    state.sort,
  ].join("|");
  const [lastKey, setLastKey] = useState(filterKey);
  if (lastKey !== filterKey) {
    setLastKey(filterKey);
    setStep(INITIAL_STEPS);
  }

  /* Cycle the filtered catalogue so the grid can fill every step. */
  const pool: Course[] = useMemo(() => {
    if (results.length === 0) return [];
    const out: Course[] = [];
    while (out.length < TOTAL) out.push(...results);
    return out.slice(0, Math.max(TOTAL, Math.ceil(total / COLUMNS) * COLUMNS));
  }, [results, total]);

  const visibleRows = ROWS_PER_STEP * step;
  const visible = pool.slice(0, visibleRows * COLUMNS);
  const hasMore = visible.length < pool.length;

  /* The design breaks the grid with a centred "DO MORE." button after every
   * pair of rows, so the cards are grouped rather than flattened. */
  const groupSize = COLUMNS * ROWS_PER_STEP;
  const groups: Course[][] = [];
  for (let i = 0; i < visible.length; i += groupSize) {
    groups.push(visible.slice(i, i + groupSize));
  }

  return (
    <section className="bg-white pb-20 pt-12">
      <div className="container-site">
        <h1 className="heading-lg text-center text-[36px] text-ink lg:text-[40px]">
          Find Your Next Course
        </h1>

        <div className="mx-auto mt-8 max-w-[580px]">
          <SearchInput />
        </div>

        <div className="mt-10">
          <CategoryChips />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <AllFilters />
            <LevelFilter />
            <CategoryFilter />
          </div>
          <SortMenu />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {state.isLoading ? (
            Array.from({ length: groupSize }, (_, i) => <CourseCardSkeleton key={i} />)
          ) : (
            groups.map((group, gi) => (
              <Fragment key={`group-${gi}`}>
                {group.map((course, i) => (
                  <CourseCard
                    key={`${course.slug}-${gi}-${i}`}
                    course={course}
                    headingLevel="h3"
                  />
                ))}
                <DoMore
                  onClick={() => setStep((s) => Math.min(s + ROWS_PER_STEP, MAX_STEPS))}
                  disabled={!hasMore}
                />
              </Fragment>
            ))
          )}
        </div>

        {!state.isLoading && results.length === 0 && (
          <div className="mt-16 flex flex-col items-center text-center">
            <p className="heading-md text-[24px] text-ink">No courses matched your search</p>
            <p className="mt-3 max-w-[420px] text-[16px] text-ink-500">
              Try a different keyword, or clear the filters to see everything on ByteSpace.
            </p>
            <button
              type="button"
              onClick={state.reset}
              className="mt-8 h-12 cursor-pointer rounded-full border border-line px-8 text-[16px] transition-colors hover:border-brand"
            >
              Clear all filters
            </button>
          </div>
        )}

        {total > 0 && (
          <p className="sr-only" role="status">
            {total} results found, showing {visible.length}
          </p>
        )}
      </div>
    </section>
  );
}
