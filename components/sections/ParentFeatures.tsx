import Image from "next/image";
import { parentFeatures } from "@/content/homepage";
import {
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";

export function ParentFeatures() {
  return (
    <SectionContainer id="gallery">
      <div className="text-center">
        <SectionTitle>{parentFeatures.title}</SectionTitle>
        <SectionSubtitle>{parentFeatures.subtitle}</SectionSubtitle>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-body">
          {parentFeatures.intro}
        </p>
      </div>

      <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
        {parentFeatures.items.map((item) => (
          <div
            key={item.title}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
          >
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={item.image}
                alt={item.title}
                width={1280}
                height={851}
                className="h-56 w-full object-cover md:h-72"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-body">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
