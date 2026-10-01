import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-brand/40 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-lime text-ink hover:bg-lime-dark",
        brand: "bg-brand text-white hover:bg-brand-dark",
        outline: "border border-line bg-white hover:bg-surface text-ink",
        ghost: "hover:bg-surface text-ink",
        dark: "bg-ink text-white hover:bg-ink/90",
        link: "text-brand hover:underline underline-offset-4",
      },
      size: {
        default: "h-11 rounded-full px-6 text-sm",
        sm: "h-9 rounded-full px-4 text-[13px]",
        lg: "h-13 rounded-full px-9 text-[15px]",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
