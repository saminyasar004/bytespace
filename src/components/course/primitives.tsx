import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function RatingStars({
  value = 5,
  className,
  size = 16,
}: {
  value?: number;
  className?: string;
  size?: number;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={cn(i < Math.round(value) ? "fill-lime text-lime" : "fill-line text-line")}
          aria-hidden
        />
      ))}
    </span>
  );
}

export function CardImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative aspect-340/195 w-full overflow-hidden rounded-media bg-surface", className)}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 373px" className="object-cover" />
    </div>
  );
}
