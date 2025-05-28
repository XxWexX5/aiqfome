"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

type SLIDE_TYPE = {
  src: string;
  alt: string;
  fill: boolean;
  objectFit: "cover";
  priority: boolean;
};

interface CarouselProps {
  slides: SLIDE_TYPE[];
}

export function Carousel({ slides }: CarouselProps) {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="overflow-hidden"
      >
        {slides.map((slide, id) => (
          <SwiperSlide key={`${slide.src}-${id}`}>
            <div className="relative w-full h-[130px] md:h-[210px]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill={slide.fill}
                objectFit={slide.objectFit}
                priority={slide.priority}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
