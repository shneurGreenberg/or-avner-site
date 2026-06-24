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
        "mt-2 font-sans text-base font-normal italic text-brand-lavender-text md:text-lg lg:text-xl",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function FullWidthDottedRule() {
  return (
    <div className="section-dotted-rule my-8 md:my-10" aria-hidden="true">
      {Array.from({ length: 48 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

export function DashedDivider() {
  return <FullWidthDottedRule />;
}
