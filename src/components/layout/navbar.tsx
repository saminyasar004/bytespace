"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { navLinks } from "@/lib/data";
import { useAuthStore } from "@/store/use-auth-store";
import { useCartStore } from "@/store/use-cart-store";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const items = useCartStore((s) => s.items);
  const user = useAuthStore((s) => s.user);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("/").slice(0, 2).join("/"));

  return (
    <header className="relative z-50 w-full bg-brand text-surface">
      <div className="container-site flex h-30 items-center justify-between">
        <Logo width={171} className="translate-x-[2px] -translate-y-[7px]" />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-[16px] transition-opacity hover:opacity-70",
                isActive(link.href) && "font-medium"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link href={user ? "/search" : "/login"} className="font-display text-[16px] transition-opacity hover:opacity-70">
            {user ? user.name.split(" ")[0] : "Sign In"}
          </Link>
          <Link
            href={user ? "/search" : "/register"}
            className="font-display text-[16px] transition-opacity hover:opacity-70"
          >
            {user ? "Browse" : "Join Us"}
          </Link>
          <Link
            href="/search"
            className="relative grid h-6 w-6 place-items-center"
            aria-label={`Cart${items.length ? `, ${items.length} items` : ""}`}
          >
            <Image src="/assets/cart.svg" alt="" width={16} height={20} aria-hidden />
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-lime px-1 text-[10px] font-semibold text-ink-900">
                {items.length}
              </span>
            )}
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 grid h-11 w-11 place-items-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="container-site border-t border-white/15 pb-8 pt-5 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[16px]"
              >
                {link.label}
              </Link>
            ))}
            <Link href={user ? "/search" : "/login"} onClick={() => setOpen(false)} className="text-[16px]">
              {user ? user.name.split(" ")[0] : "Sign In"}
            </Link>
            <Link href={user ? "/search" : "/register"} onClick={() => setOpen(false)} className="text-[16px]">
              {user ? "Browse" : "Join Us"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
