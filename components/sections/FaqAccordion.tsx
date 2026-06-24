"use client";

import { useState } from "react";
import { faqItems } from "@/content/homepage";
import { FaqDoodle } from "@/components/ui/Icons";
import { SectionContainer, SectionTitle } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionContainer id="faq">
      <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <SectionTitle>Часто задаваемые вопросы</SectionTitle>
        <FaqDoodle className="h-20 w-auto shrink-0 md:h-28" />
      </div>

      <div className="divide-y divide-brand-sky/40">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-base font-medium text-text-body md:text-lg">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center text-2xl font-light text-brand-navy transition-transform",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="pb-5 pr-12">
                  <p className="text-base leading-relaxed text-text-body">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
