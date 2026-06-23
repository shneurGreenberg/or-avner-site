"use client";

import Image from "next/image";
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
    <SectionContainer id="reviews">
      <div className="text-center">
        <SectionTitle>Что люди говорят о нас</SectionTitle>
        <SectionSubtitle>Отзывы родителей</SectionSubtitle>
      </div>

      <div className="testimonials-swiper mt-10 md:mt-14">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1.2}
          centeredSlides
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.2, spaceBetween: 24 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={`${item.alt}-${index}`}>
              <button
                type="button"
                className="group relative block w-full overflow-hidden rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
                aria-label={`${item.alt}. Воспроизвести видео`}
              >
                <div className="relative aspect-[9/16] max-h-[420px] w-full md:max-h-[480px]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 80vw, 320px"
                  />
                  <div className="absolute inset-0 bg-brand-navy/20 transition-colors group-hover:bg-brand-navy/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-1 h-7 w-7 text-brand-navy"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
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
