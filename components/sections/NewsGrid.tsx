import { SiteImage } from "@/components/ui/SiteImage";
import { newsItems } from "@/content/homepage";
import { ButtonLink } from "@/components/ui/Button";
import { SectionContainer, SectionTitle } from "@/components/ui/Section";

export function NewsGrid() {
  return (
    <SectionContainer id="news">
      <div className="text-center">
        <SectionTitle>Новости школы</SectionTitle>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="group overflow-hidden rounded-3xl"
          >
            <div className="overflow-hidden rounded-3xl">
              <SiteImage
                src={item.image}
                alt={item.title}
                width={1280}
                height={851}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-52"
              />
            </div>
            <div className="pt-5">
              <h3 className="font-display text-lg font-extrabold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-body">
                {item.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <ButtonLink href="#news">ВСЕ НОВОСТИ</ButtonLink>
      </div>
    </SectionContainer>
  );
}
