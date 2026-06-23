import Image from "next/image";
import { aboutContent } from "@/content/homepage";
import { ButtonLink } from "@/components/ui/Button";
import {
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <SectionTitle>{aboutContent.title}</SectionTitle>
          <SectionSubtitle>{aboutContent.subtitle}</SectionSubtitle>
          <p className="mt-6 text-base leading-relaxed text-text-body md:text-lg">
            {aboutContent.text}
          </p>
          <div className="mt-8">
            <ButtonLink href="#reasons">{aboutContent.cta}</ButtonLink>
          </div>
        </div>

        <div className="dashed-frame mx-auto max-w-lg">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/building-front.jpg"
              alt="Здание лицея «ОР АВНЕР»"
              width={1080}
              height={530}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
