import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-surface text-ink border border-line",
        lime: "bg-lime text-ink",
        brand: "bg-brand text-white",
        outline: "border border-line bg-white text-ink",
        muted: "bg-black/55 text-white backdrop-blur-sm border border-white/20",
      },
      size: {
        default: "h-7 px-3",
        sm: "h-6 px-2.5 text-[11px]",
        lg: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
