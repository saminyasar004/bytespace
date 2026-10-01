import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { notFoundCopy } from "@/lib/data";

/* "404" drawn as text with the lime → green gradient from the design. */
function NotFoundNumber() {
  return (
    <p
      aria-hidden
      className="select-none text-[170px] font-extrabold leading-[0.85] tracking-[-0.06em] sm:text-[220px] lg:text-[270px]"
      style={{
        backgroundImage: "linear-gradient(160deg, #d4fb20 0%, #a8d84f 45%, #6f9a5c 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        fontFamily: "var(--font-urbanist), var(--font-inter), sans-serif",
      }}
    >
      404
    </p>
  );
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section className="relative flex flex-1 items-center overflow-hidden bg-brand">
          <div className="grid-overlay absolute inset-0" aria-hidden />
          <div className="container-site relative flex flex-col items-center py-44 text-center">
            <NotFoundNumber />
            <h1 className="heading-lg mt-6 text-surface">
              {notFoundCopy.line1}
              <br />
              {notFoundCopy.line2}
            </h1>
            <Link
              href="/"
              className="mt-20 inline-flex h-13 items-center rounded-full bg-lime px-9 text-[16px] font-medium text-ink-900 transition-colors hover:bg-lime-dark"
            >
              {notFoundCopy.action}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
