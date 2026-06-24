import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors",
        variant === "primary" &&
          "bg-brand-navy text-white hover:bg-brand-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy",
        variant === "outline" &&
          "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  className,
  href,
  children,
  variant = "primary",
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors",
        variant === "primary" &&
          "bg-brand-navy text-white hover:bg-brand-navy-dark",
        variant === "outline" &&
          "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
        className,
      )}
    >
      {children}
    </a>
  );
}
