"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { footerColumns, legalLinks } from "@/lib/data";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="mt-auto w-full border-t border-line bg-white">
      <div className="container-site pb-14 pt-20">
        <div className="grid gap-14 lg:grid-cols-[620px_1fr] lg:gap-0">
          {/* Newsletter */}
          <div className="max-w-[620px]">
            <Logo variant="dark" width={171} />
            <p className="mt-6 text-[14px] leading-5 text-ink-900">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form
              className="mt-12 flex items-center gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribed(false);
                }}
                placeholder="Enter your email"
                className="h-13 w-full max-w-[376px] rounded-full border border-line bg-white pl-6 pr-5 text-[16px] text-ink-900 outline-none transition-colors placeholder:text-ink-900 focus:border-brand/50"
              />
              <button
                type="submit"
                className="h-12 shrink-0 cursor-pointer rounded-full bg-lime px-6 text-[16px] font-medium text-ink-900 transition-colors hover:bg-lime-dark"
              >
                {subscribed ? "Done" : "Search"}
              </button>
            </form>

            <p className="mt-8 max-w-[600px] text-[13px] leading-[1.6] text-ink-900">
              By subscribing, you agree to our{" "}
              <Link href="#" className="inline hover:underline">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <ul key={col[0]} className="flex flex-col">
                {col.map((item) => (
                  <li key={item} className="mb-1">
                    <Link
                      href={item === "Featured Courses" ? "/search" : "#"}
                      className="inline-block py-2.5 text-[14px] text-ink-900 transition-colors hover:text-brand"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-site">
        <div className="flex flex-col gap-4 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-ink-900">@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <li key={item}>
                <Link href="#" className="text-[13px] text-ink-900 transition-colors hover:text-brand">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
