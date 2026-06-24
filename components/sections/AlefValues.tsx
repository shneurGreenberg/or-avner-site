import { alefContent } from "@/content/homepage";
import { AlephIllustration, LetterIcon } from "@/components/ui/Icons";
import {
  DashedDivider,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";

function splitStatText(text: string) {
  const parts = text.split(" – ");
  if (parts.length < 2) {
    return { lead: text, body: "" };
  }
  return { lead: parts[0], body: parts.slice(1).join(" – ") };
}

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
        {alefContent.stats.map((stat) => {
          const { lead, body } = splitStatText(stat.text);
          return (
            <div
              key={stat.letter}
              className="flex items-start gap-5 border-b border-brand-lavender pb-8 last:border-0 md:gap-8"
            >
              <LetterIcon letter={stat.letter} />
              <div className="pt-1 md:pt-2">
                <p className="font-display text-lg font-extrabold text-brand-navy md:text-xl">
                  {lead}
                </p>
                {body && (
                  <p className="mt-1 text-base font-medium leading-relaxed text-text-body md:text-lg">
                    {body}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
