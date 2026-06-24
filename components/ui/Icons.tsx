import { SiteImage } from "@/components/ui/SiteImage";
import { IMAGES } from "@/lib/constants";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={className}>
      <SiteImage
        src={IMAGES.logo}
        alt="ОР АВНЕР — Новосибирский еврейский лицей"
        width={300}
        height={110}
        priority
        className="h-10 w-auto md:h-12"
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
      width={900}
      height={423}
      aria-hidden
      className={className ?? "h-20 w-auto md:h-28"}
    />
  );
}

export function MapPinDoodle({ className }: { className?: string }) {
  return (
    <SiteImage
      src={IMAGES.decorMapPin}
      alt=""
      width={500}
      height={177}
      aria-hidden
      className={className ?? "h-14 w-auto md:h-16"}
    />
  );
}

const LETTER_IMAGES: Record<string, string> = {
  А: IMAGES.letterA,
  Л: IMAGES.letterL,
  Е: IMAGES.letterE,
  Ф: IMAGES.letterF,
};

export function LetterIcon({ letter }: { letter: string }) {
  const src = LETTER_IMAGES[letter];
  if (!src) {
    return null;
  }

  return (
    <SiteImage
      src={src}
      alt={letter}
      width={220}
      height={220}
      className="h-[72px] w-[72px] shrink-0 object-contain md:h-20 md:w-20"
    />
  );
}

export function HeroCurves() {
  return (
    <>
      <div className="hero-curve left-[6%] top-[20%] h-36 w-36 opacity-80 md:h-48 md:w-48" />
      <div className="hero-curve left-[12%] top-[30%] h-44 w-44 opacity-55 md:h-60 md:w-60" />
      <div className="hero-curve right-[10%] top-[24%] hidden h-40 w-40 opacity-45 md:block lg:h-52 lg:w-52" />
    </>
  );
}

export function AlephIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] md:max-w-[380px]">
      <SiteImage
        src={IMAGES.alephPodium}
        alt="Рейтинг лицея — первое место"
        width={494}
        height={700}
        className="h-auto w-full object-contain"
      />
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
