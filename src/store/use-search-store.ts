"use client";

import { create } from "zustand";
import { courses, levelFilters, searchChips, type Course } from "@/lib/data";

export type SearchScope = "courses" | "creators" | "lessons";
export type SortKey =
  | "most-relevant"
  | "newest"
  | "popular"
  | "rating"
  | "price-low"
  | "price-high";
export type OpenPanel = null | "filter" | "level" | "price" | "category";

const PAGE_SIZE = 18;

type SearchState = {
  query: string;
  scope: SearchScope;
  activeChip: string;
  levels: string[];
  categories: string[];
  price: "all" | "free" | "paid";
  open: OpenPanel;
  sort: SortKey;
  page: number;
  pageSize: number;
  isLoading: boolean;

  setQuery: (q: string) => void;
  setScope: (s: SearchScope) => void;
  setChip: (c: string) => void;
  toggleLevel: (l: string) => void;
  toggleCategory: (c: string) => void;
  setPrice: (p: SearchState["price"]) => void;
  setOpen: (p: OpenPanel) => void;
  setSort: (s: SortKey) => void;
  setPage: (p: number) => void;
  setLoading: (v: boolean) => void;
  reset: () => void;
};

const initial = {
  query: "",
  scope: "courses" as SearchScope,
  activeChip: searchChips[0],
  levels: [] as string[],
  categories: [] as string[],
  price: "all" as const,
  open: null as OpenPanel,
  sort: "most-relevant" as SortKey,
  page: 1,
  pageSize: PAGE_SIZE,
  isLoading: false,
};

export const useSearchStore = create<SearchState>()((set) => ({
  ...initial,
  setQuery: (query) => set({ query }),
  setScope: (scope) => set({ scope }),
  setChip: (activeChip) => set({ activeChip, page: 1, open: null }),
  toggleLevel: (level) =>
    set((s) => ({
      levels: s.levels.includes(level) ? s.levels.filter((l) => l !== level) : [...s.levels, level],
      page: 1,
    })),
  toggleCategory: (category) =>
    set((s) => ({
      categories: s.categories.includes(category)
        ? s.categories.filter((c) => c !== category)
        : [...s.categories, category],
      page: 1,
    })),
  setPrice: (price) => set({ price, page: 1 }),
  setOpen: (open) => set({ open }),
  setSort: (sort) => set({ sort, page: 1, open: null }),
  setPage: (page) => set({ page }),
  setLoading: (isLoading) => set({ isLoading }),
  reset: () => set({ ...initial, open: null }),
}));

/* ------------------------------------------------------------------ *
 * Derived selectors
 * ------------------------------------------------------------------ */

function matchesQuery(course: Course, query: string) {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  return (
    course.title.toLowerCase().includes(q) ||
    course.creator.toLowerCase().includes(q) ||
    course.category.toLowerCase().includes(q)
  );
}

export type SearchResult = {
  results: Course[];
  total: number;
};

export function selectFilteredResults(state: SearchState): SearchResult {
  let list = courses.filter((c) => matchesQuery(c, state.query));

  if (state.activeChip && state.activeChip !== "Featured") {
    list = list.filter((c) => c.category === state.activeChip);
  }
  if (state.levels.length) {
    list = list.filter((c) => state.levels.includes(c.level));
  }
  if (state.categories.length) {
    list = list.filter((c) => state.categories.includes(c.category));
  }
  if (state.price === "free") list = list.filter((c) => c.price === 0);
  if (state.price === "paid") list = list.filter((c) => c.price > 0);

  const sorted = [...list];
  switch (state.sort) {
    case "newest":
      sorted.sort((a, b) => a.slug.localeCompare(b.slug));
      break;
    case "popular":
      sorted.sort((a, b) => b.students - a.students);
      break;
    case "rating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "price-low":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sorted.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  return { results: sorted, total: sorted.length };
}

export { levelFilters, PAGE_SIZE };
