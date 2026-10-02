import Image from "next/image";
import Link from "next/link";

/**
 * Split auth shell: full-bleed blue backdrop with the banner copy and artwork
 * on the left and the form inside a white card on the right.
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
    <div className="relative min-h-screen w-full overflow-x-clip bg-brand">
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

      <div className="container-site relative min-h-screen">
        <Link href="/" aria-label="ByteSpace home" className="absolute left-6 top-7 z-10 inline-flex">
          <Image src="/assets/bytespace-favicon.svg" alt="ByteSpace" width={29} height={32} priority />
        </Link>

        <div className="flex min-h-screen items-center py-28 lg:py-12">
          <div className="grid w-full gap-12 lg:grid-cols-[1fr_575px] lg:items-start">
            {/* Left: copy and banner artwork */}
            <div className="text-center lg:text-left">
              <h2 className="heading-md text-[22px] text-surface">{bannerTitle}</h2>
              <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.65] text-surface/70 lg:mx-0">
                {bannerBody}
              </p>

              <div className="relative mx-auto mt-14 aspect-552/586 w-full max-w-[560px] lg:mx-0 lg:-ml-8">
                <Image src={banner} alt={bannerAlt} fill priority sizes="560px" className="object-contain" />
              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-[24px] bg-white px-8 py-12 sm:px-14 sm:py-14 lg:px-15">
              {children}
            </div>
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
    <p className="text-center text-[15px] text-ink-500">
      {prompt}{" "}
      <Link href={href} className="font-medium text-brand hover:underline">
        {action}
      </Link>
    </p>
  );
}
