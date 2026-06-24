import { SiteImage } from "@/components/ui/SiteImage";
import { IMAGES } from "@/lib/constants";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={className}>
      <SiteImage
        src={IMAGES.logo}
        alt="ОР АВНЕР — Новосибирский еврейский лицей"
        width={776}
        height={274}
        priority
        className="h-12 w-auto md:h-14"
      />
    </a>
  );
}

export function FooterLogo({ className }: { className?: string }) {
  return (
    <SiteImage
      src={IMAGES.logoFooter}
      alt="ОР АВНЕР"
      width={667}
      height={235}
      className={className ?? "h-10 w-auto md:h-12"}
    />
  );
}

export function FaqDoodle({ className }: { className?: string }) {
  return (
    <SiteImage
      src={IMAGES.decorFaq}
      alt=""
      width={741}
      height={349}
      aria-hidden
      className={className ?? "h-24 w-auto md:h-32"}
    />
  );
}

export function MapPinDoodle({ className }: { className?: string }) {
  return (
    <SiteImage
      src={IMAGES.decorMapPin}
      alt=""
      width={776}
      height={274}
      aria-hidden
      className={className ?? "h-16 w-auto md:h-20"}
    />
  );
}

export function LetterIcon({ letter }: { letter: string }) {
  return (
    <div className="font-display letter-badge flex h-[72px] w-[72px] shrink-0 items-center justify-center text-5xl font-extrabold md:h-20 md:w-20 md:text-6xl">
      {letter}
    </div>
  );
}

export function HeroCurves() {
  return (
    <>
      <div className="hero-curve left-[8%] top-[18%] h-40 w-40 opacity-70 md:h-56 md:w-56" />
      <div className="hero-curve left-[14%] top-[28%] h-52 w-52 opacity-50 md:h-72 md:w-72" />
      <div className="hero-curve right-[12%] top-[22%] hidden h-48 w-48 opacity-40 md:block" />
    </>
  );
}

export function AlephIllustration() {
  return (
    <div className="relative mx-auto max-w-xs md:max-w-sm">
      <div className="flex items-end justify-center gap-3">
        <div className="flex h-24 w-14 items-end justify-center rounded-t-2xl border-2 border-brand-navy bg-brand-lavender pb-2 font-display text-2xl font-extrabold text-brand-navy md:h-28 md:w-16 md:text-3xl">
          2
        </div>
        <div className="relative flex h-32 w-20 items-end justify-center rounded-t-2xl border-2 border-brand-navy bg-brand-navy pb-2 font-display text-3xl font-extrabold text-white md:h-36 md:w-24 md:text-4xl">
          1
          <SiteImage
            src={IMAGES.logo}
            alt=""
            width={120}
            height={120}
            aria-hidden
            className="absolute -top-14 left-1/2 h-16 w-16 -translate-x-1/2 object-contain md:-top-16 md:h-20 md:w-20"
          />
        </div>
        <div className="flex h-20 w-12 items-end justify-center rounded-t-2xl border-2 border-brand-navy bg-brand-lavender pb-2 font-display text-xl font-extrabold text-brand-navy md:h-24 md:w-14 md:text-2xl">
          3
        </div>
      </div>
    </div>
  );
}

export function GlassesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className ?? "h-6 w-6 text-brand-navy"}
      aria-hidden="true"
    >
      <circle cx="7" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 12h2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 12h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
