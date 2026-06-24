import { SiteImage } from "@/components/ui/SiteImage";
import { IMAGES, SITE } from "@/lib/constants";
import { HeroCurves } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative min-h-[560px] md:min-h-[640px] lg:min-h-[720px]">
        <SiteImage
          src={IMAGES.heroStaircase}
          alt="Ученики лицея «ОР АВНЕР»"
          fill
          priority
          className="object-cover object-[70%_center]"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent md:h-32" />
        <HeroCurves />

        <div className="relative mx-auto flex h-full max-w-[1320px] flex-col px-4 pb-10 pt-6 md:flex-row md:items-end md:justify-between md:px-8 md:pb-14 md:pt-10">
          <div className="relative flex w-full max-w-[280px] shrink-0 items-end md:max-w-[340px] lg:max-w-[380px]">
            <SiteImage
              src={IMAGES.logo}
              alt=""
              width={200}
              height={200}
              aria-hidden
              className="pointer-events-none absolute -left-4 top-8 z-0 h-40 w-40 opacity-25 md:-left-8 md:h-52 md:w-52 lg:h-60 lg:w-60"
            />
            <SiteImage
              src={IMAGES.heroBoy}
              alt="Ученик с логотипом «ОР АВНЕР»"
              width={708}
              height={1080}
              priority
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>

          <div className="mt-4 max-w-xl text-center md:mt-0 md:pb-8 md:text-right lg:max-w-2xl lg:pb-12">
            <p className="font-display text-[2rem] font-extrabold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl md:text-[3.25rem] lg:text-6xl">
              {SITE.name}
            </p>
            <p className="font-display mt-2 text-xl font-extrabold leading-tight text-brand-navy sm:text-2xl md:text-3xl lg:text-4xl">
              {SITE.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
