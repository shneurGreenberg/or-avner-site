import { SiteImage } from "@/components/ui/SiteImage";
import { IMAGES, SITE } from "@/lib/constants";
import { HeroCurves } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative min-h-[480px] md:min-h-[580px] lg:min-h-[660px]">
        <SiteImage
          src={IMAGES.heroStaircase}
          alt="Ученики лицея «ОР АВНЕР»"
          fill
          priority
          className="object-cover object-[68%_42%]"
          sizes="100vw"
        />

        <HeroCurves />

        <SiteImage
          src={IMAGES.heroBoy}
          alt="Ученик лицея «ОР АВНЕР»"
          width={590}
          height={900}
          priority
          className="absolute bottom-0 left-0 z-20 h-auto w-[46vw] max-w-[260px] object-contain object-bottom sm:max-w-[300px] md:max-w-[340px] lg:max-w-[390px]"
        />

        <div className="absolute bottom-0 right-0 z-20 max-w-[58%] px-4 pb-8 pt-24 text-right sm:px-8 sm:pb-10 md:max-w-[52%] md:pb-12 lg:pb-14">
          <p className="font-display text-[2rem] font-extrabold leading-[0.95] tracking-tight text-brand-navy sm:text-[2.35rem] md:text-5xl lg:text-[3.4rem]">
            {SITE.name}
          </p>
          <p className="font-display mt-2 text-lg font-extrabold leading-tight text-brand-navy sm:text-xl md:text-2xl lg:text-[1.75rem]">
            {SITE.taglineLine1}
          </p>
          <p className="font-display text-lg font-extrabold leading-tight text-brand-navy sm:text-xl md:text-2xl lg:text-[1.75rem]">
            {SITE.taglineLine2}
          </p>
        </div>

        <div className="hero-bottom-curve" aria-hidden="true" />
      </div>
    </section>
  );
}
