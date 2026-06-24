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
    <section id={id} className={cn("px-4 py-14 md:px-8 md:py-20 lg:py-24", className)}>
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
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
        "font-display text-[2rem] font-extrabold leading-tight text-brand-navy md:text-[2.5rem] lg:text-[42px]",
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
        "mt-2 text-lg font-medium italic text-brand-lavender-text md:text-xl",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function DashedDivider() {
  return (
    <div className="title-divider my-8 md:my-10">
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
