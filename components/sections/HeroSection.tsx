import Image from "next/image";
import { SITE } from "@/lib/constants";
import { HeroArcs } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[700px]">
        <Image
          src="/images/hero-staircase.jpg"
          alt="Ученики лицея «ОР АВНЕР»"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <HeroArcs />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pb-16 pt-8 md:flex-row md:items-end md:justify-between md:px-8 md:pb-20 md:pt-12">
          <div className="relative w-full max-w-xs shrink-0 md:max-w-sm lg:max-w-md">
            <Image
              src="/images/hero-boy-logo.jpg"
              alt="Ученик с логотипом «ОР АВНЕР»"
              width={708}
              height={1080}
              priority
              className="h-auto w-full object-contain drop-shadow-lg"
            />
          </div>

          <div className="max-w-xl text-center md:text-left">
            <p className="text-4xl font-bold leading-tight text-brand-navy md:text-5xl lg:text-6xl">
              {SITE.name}
            </p>
            <p className="mt-2 text-2xl font-bold leading-tight text-brand-navy md:text-3xl lg:text-4xl">
              {SITE.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
