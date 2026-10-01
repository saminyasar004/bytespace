"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import { levelFilters, searchChips, searchFacets, sortOptions } from "@/lib/data";
import { useSearchStore, type SortKey } from "@/store/use-search-store";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 * Search input
 * ------------------------------------------------------------------ */

export function SearchInput({ autoFocus }: { autoFocus?: boolean }) {
  const query = useSearchStore((s) => s.query);
  const setQuery = useSearchStore((s) => s.setQuery);

  return (
    <div className="relative flex h-13 w-full items-center gap-3 rounded-full border border-line bg-white pl-6 pr-2 transition-colors focus-within:border-brand">
      <Search className="h-4.5 w-4.5 shrink-0 text-ink-700" strokeWidth={1.8} aria-hidden />
      <label htmlFor="search-input" className="sr-only">
        Search courses
      </label>
      <input
        id="search-input"
        type="search"
        autoFocus={autoFocus}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Courses"
        className="min-w-0 flex-1 bg-transparent text-[16px] text-ink outline-none placeholder:text-muted"
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-full text-ink-700 transition-colors hover:bg-surface"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      )}
      <span className="hidden h-8 w-px bg-line sm:block" aria-hidden />
      <button
        type="submit"
        className="hidden h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full bg-lime text-ink-900 transition-colors hover:bg-lime-dark sm:grid"
        aria-label="Run search"
      >
        <Search className="h-4 w-4" strokeWidth={2.2} aria-hidden />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Generic popover panel
 * ------------------------------------------------------------------ */

function Panel({
  open,
  onClose,
  children,
  align = "left",
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-[calc(100%+10px)] z-40 min-w-[280px] rounded-2xl border border-line bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)]",
        align === "right" ? "right-0" : "left-0"
      )}
    >
      {children}
    </div>
  );
}

function CheckRow({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count?: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 py-2 text-[16px] text-ink-900 transition-colors hover:text-brand">
      <input type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />
      <span
        aria-hidden
        className={cn(
          "grid h-5 w-5 shrink-0 place-items-center rounded-[5px] border border-line transition-colors peer-checked:border-brand peer-checked:bg-brand peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40"
        )}
      >
        {checked && <Check className="h-3.5 w-3.5 text-surface" strokeWidth={3} aria-hidden />}
      </span>
      <span className="flex-1">{label}</span>
      {count !== undefined && <span className="text-[14px] text-muted">{count}</span>}
    </label>
  );
}

/* ------------------------------------------------------------------ *
 * Filter / level / sort triggers
 * ------------------------------------------------------------------ */

function Trigger({
  label,
  active,
  onClick,
  hasChevron = true,
  icon,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
  hasChevron?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={active}
      className={cn(
        "inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border px-5 text-[16px] transition-colors",
        active ? "border-brand bg-brand text-surface" : "border-line bg-white text-ink hover:border-brand"
      )}
    >
      {icon}
      {label}
      {hasChevron && <ChevronDown className="h-4 w-4" strokeWidth={1.8} aria-hidden />}
    </button>
  );
}

export function LevelFilter() {
  const { open, setOpen, levels, toggleLevel } = useSearchStore();
  const isOpen = open === "level";

  return (
    <div className="relative">
      <Trigger
        label="Level"
        active={isOpen || levels.length > 0}
        onClick={() => setOpen(isOpen ? null : "level")}
      />
      <Panel open={isOpen} onClose={() => setOpen(null)}>
        <p className="mb-2 text-[15px] font-semibold text-ink">Level</p>
        {levelFilters.map((level) => (
          <CheckRow
            key={level}
            label={level}
            checked={levels.includes(level)}
            onChange={() => toggleLevel(level)}
          />
        ))}
      </Panel>
    </div>
  );
}

export function CategoryFilter() {
  const { open, setOpen, categories, toggleCategory } = useSearchStore();
  const isOpen = open === "category";
  const label = categories.length === 1 ? categories[0] : "Category";

  return (
    <div className="relative">
      <Trigger
        label={label}
        active={isOpen || categories.length > 0}
        onClick={() => setOpen(isOpen ? null : "category")}
      />
      <Panel open={isOpen} onClose={() => setOpen(null)}>
        <p className="mb-2 text-[15px] font-semibold text-ink">Category</p>
        {searchFacets.categories.map((cat) => (
          <CheckRow
            key={cat}
            label={cat}
            checked={categories.includes(cat)}
            onChange={() => toggleCategory(cat)}
          />
        ))}
      </Panel>
    </div>
  );
}

export function AllFilters() {
  const { open, setOpen, levels, categories, price, setPrice, toggleLevel, reset } = useSearchStore();
  const isOpen = open === "filter";
  const count = levels.length + categories.length + (price === "all" ? 0 : 1);

  return (
    <div className="relative">
      <Trigger
        label="Filter"
        active={isOpen}
        onClick={() => setOpen(isOpen ? null : "filter")}
        icon={<SlidersHorizontal className="h-4 w-4" strokeWidth={1.8} aria-hidden />}
      />
      <Panel open={isOpen} onClose={() => setOpen(null)}>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[15px] font-semibold text-ink">All filters</p>
          {count > 0 && (
            <button
              type="button"
              onClick={reset}
              className="cursor-pointer text-[14px] text-brand hover:underline"
            >
              Clear all
            </button>
          )}
        </div>
        <CheckRow
          label="Free courses only"
          checked={price === "free"}
          onChange={() => setPrice(price === "free" ? "all" : "free")}
        />
        <div className="my-3 h-px bg-line-soft" />
        {levelFilters.map((level) => (
          <CheckRow
            key={level}
            label={level}
            checked={levels.includes(level)}
            onChange={() => toggleLevel(level)}
          />
        ))}
      </Panel>
    </div>
  );
}

export function SortMenu() {
  const { sort, setSort } = useSearchStore();
  const [open, setLocalOpen] = useState(false);

  return (
    <div className="relative">
      <Trigger
        label={sortOptions.find((o) => o.value === sort)?.label ?? "Most relevant"}
        active={open}
        onClick={() => setLocalOpen((v) => !v)}
      />
      <Panel open={open} onClose={() => setLocalOpen(false)} align="right">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              setSort(option.value as SortKey);
              setLocalOpen(false);
            }}
            className={cn(
              "flex w-full cursor-pointer items-center justify-between gap-6 rounded-lg px-2 py-2.5 text-left text-[16px] transition-colors hover:bg-surface",
              sort === option.value && "text-brand"
            )}
          >
            {option.label}
            {sort === option.value && <Check className="h-4 w-4" strokeWidth={2.4} aria-hidden />}
          </button>
        ))}
      </Panel>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Category chip row
 * ------------------------------------------------------------------ */

export function CategoryChips() {
  const activeChip = useSearchStore((s) => s.activeChip);
  const setChip = useSearchStore((s) => s.setChip);

  return (
    <ul className="no-scrollbar -mx-6 flex gap-3 overflow-x-auto px-6 pb-1" aria-label="Categories">
      {searchChips.map((chip) => (
        <li key={chip} className="shrink-0">
          <button
            type="button"
            onClick={() => setChip(chip)}
            aria-pressed={activeChip === chip}
            className={cn(
              "h-9 cursor-pointer rounded-full border px-4 text-[15px] transition-colors",
              activeChip === chip
                ? "border-brand bg-brand text-surface"
                : "border-line bg-white text-ink hover:border-brand"
            )}
          >
            {chip}
          </button>
        </li>
      ))}
    </ul>
  );
}
