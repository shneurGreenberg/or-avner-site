import { alefContent } from "@/content/homepage";
import {
  AlephIllustration,
  LetterIcon,
} from "@/components/ui/Icons";
import {
  DashedDivider,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";

export function AlefValues() {
  return (
    <SectionContainer id="lev">
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
        <AlephIllustration />

        <div>
          <SectionTitle>{alefContent.title}</SectionTitle>
          <SectionSubtitle>{alefContent.subtitle}</SectionSubtitle>
          <div className="mt-6 space-y-4">
            {alefContent.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="text-base leading-relaxed text-text-body">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      <DashedDivider />

      <div className="space-y-8">
        {alefContent.stats.map((stat) => (
          <div
            key={stat.letter}
            className="flex items-start gap-5 border-b border-brand-lavender pb-8 last:border-0 md:gap-8"
          >
            <LetterIcon letter={stat.letter} />
            <p className="pt-2 text-base font-medium leading-relaxed text-brand-navy md:pt-3 md:text-lg">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
