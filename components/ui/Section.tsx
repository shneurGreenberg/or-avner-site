import { cn } from "@/lib/utils";

export function SectionContainer({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("px-4 py-16 md:px-8 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold text-brand-navy md:text-4xl lg:text-[42px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-2 text-lg italic text-brand-lavender-text md:text-xl",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function DashedDivider() {
  return (
    <div className="my-10 flex justify-center">
      <div className="flex gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="h-1 w-3 rounded-full bg-brand-sky/60"
          />
        ))}
      </div>
    </div>
  );
}
