import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "light",
  className,
  width = 171,
}: {
  variant?: "light" | "dark";
  className?: string;
  width?: number;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="ByteSpace home"
    >
      <Image
        src={variant === "light" ? "/assets/bytespace-logo.svg" : "/assets/logo-black.svg"}
        alt="ByteSpace"
        width={width}
        height={Math.round((width * 37) / 171)}
        priority
      />
    </Link>
  );
}
