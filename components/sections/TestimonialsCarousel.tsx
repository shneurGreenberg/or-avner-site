"use client";

import { SiteImage } from "@/components/ui/SiteImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { testimonials } from "@/content/homepage";
import {
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";

export function TestimonialsCarousel() {
  return (
    <SectionContainer id="reviews" className="bg-white">
      <div className="text-center">
        <SectionTitle>Что люди говорят о нас</SectionTitle>
        <SectionSubtitle>Отзывы родителей</SectionSubtitle>
      </div>

      <div className="testimonials-swiper mt-10 md:mt-14">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1.15}
          centeredSlides
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1.45, spaceBetween: 20 },
            1024: { slidesPerView: 2.15, spaceBetween: 24 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={`${item.alt}-${index}`}>
              <button
                type="button"
                className="group relative block w-full overflow-hidden rounded-[28px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
                aria-label={`${item.alt}. Воспроизвести видео`}
              >
                <div className="relative aspect-[9/16] max-h-[420px] w-full md:max-h-[480px]">
                  <SiteImage
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 80vw, 320px"
                  />
                  <div className="absolute inset-0 bg-brand-lavender/25 transition-colors group-hover:bg-brand-lavender/35" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="block h-0 w-0 border-y-[22px] border-l-[34px] border-y-transparent border-l-white drop-shadow-md transition-transform group-hover:scale-105"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-white/90 p-1.5 shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-brand-navy"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      aria-hidden="true"
                    >
                      <path d="M11 5 6 9H2v6h4l5 4V5z" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <line x1="22" y1="2" x2="16" y2="8" />
                      <line x1="16" y1="2" x2="22" y2="8" />
                    </svg>
                  </div>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
}
