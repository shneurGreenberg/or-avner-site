import { SiteImage } from "@/components/ui/SiteImage";
import { admissionContent } from "@/content/homepage";
import { ButtonLink } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/Section";

export function AdmissionBanner() {
  return (
    <SectionContainer className="bg-white py-8 md:py-12">
      <div className="overflow-hidden rounded-[32px] bg-brand-lavender">
        <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-12 lg:p-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-brand-navy md:text-4xl">
              {admissionContent.title}
            </h2>
            <p className="mt-3 font-sans text-base font-normal italic text-brand-lavender-text md:text-lg lg:text-xl">
              {admissionContent.subtitle}
            </p>
            <div className="mt-8">
              <ButtonLink href="#contacts">{admissionContent.cta}</ButtonLink>
            </div>
          </div>

          <div className="dashed-frame dashed-frame-white mx-auto max-w-md">
            <div className="image-blue-bg overflow-hidden rounded-3xl">
              <SiteImage
                src={admissionContent.image}
                alt="Ученики лицея"
                width={1280}
                height={851}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
