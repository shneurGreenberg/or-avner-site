"use client";

import { SiteImage } from "@/components/ui/SiteImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { reasons } from "@/content/homepage";
import {
  DashedDivider,
  SectionContainer,
  SectionTitle,
} from "@/components/ui/Section";

export function ReasonsCarousel() {
  return (
    <SectionContainer id="reasons">
      <div className="text-center">
        <SectionTitle>8 причин почему выбирают нас:</SectionTitle>
      </div>
      <DashedDivider />

      <div className="reasons-swiper relative px-8 md:px-14">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          className="pb-12"
        >
          {reasons.map((reason) => (
            <SwiperSlide key={reason.title}>
              <div className="grid items-center gap-8 overflow-hidden rounded-[32px] bg-brand-lavender p-6 md:grid-cols-2 md:gap-10 md:p-10 lg:p-12">
                <div className="overflow-hidden rounded-[28px]">
                  <SiteImage
                    src={reason.image}
                    alt={reason.title}
                    width={1280}
                    height={851}
                    className="h-56 w-full object-cover md:h-80"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-brand-navy md:text-2xl">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-text-body">
                    {reason.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
}
