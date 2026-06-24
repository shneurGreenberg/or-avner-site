import { SiteImage } from "@/components/ui/SiteImage";
import { IMAGES, SITE } from "@/lib/constants";
import { HeroCurves } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[700px]">
        <SiteImage
          src={IMAGES.heroStaircase}
          alt="Ученики лицея «ОР АВНЕР»"
          fill
          priority
          className="object-cover object-[72%_center]"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent md:h-28" />
        <HeroCurves />

        <div className="relative mx-auto h-full max-w-[1320px] px-4 md:px-8">
          <SiteImage
            src={IMAGES.heroBoy}
            alt="Ученик лицея «ОР АВНЕР»"
            width={590}
            height={900}
            priority
            className="absolute bottom-0 left-2 z-20 h-auto w-[42vw] max-w-[240px] object-contain object-bottom sm:left-4 sm:max-w-[280px] md:left-6 md:max-w-[320px] lg:left-8 lg:max-w-[380px]"
          />

          <div className="relative z-10 flex min-h-[520px] flex-col justify-center pb-8 pl-[44vw] pt-16 text-right sm:pl-[46vw] md:min-h-[620px] md:justify-end md:pb-14 md:pl-[340px] md:pt-10 lg:min-h-[700px] lg:pb-16 lg:pl-[400px]">
            <p className="font-display text-[1.75rem] font-extrabold leading-[1.05] tracking-tight text-brand-navy sm:text-4xl md:text-[3rem] lg:text-[3.5rem]">
              {SITE.name}
            </p>
            <p className="font-display mt-2 text-lg font-extrabold leading-tight text-brand-navy sm:text-xl md:text-2xl lg:text-3xl">
              {SITE.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
