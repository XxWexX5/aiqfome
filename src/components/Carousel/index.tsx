"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

type SLIDE_TYPE = {
  src: string;
  alt: string;
  fill: boolean;
  priority: boolean;
};

interface CarouselProps {
  slides: SLIDE_TYPE[];
  slidesMobile?: SLIDE_TYPE[];
}

export function Carousel({ slides, slidesMobile }: CarouselProps) {
  const [currentSlides, setCurrentSlides] = useState<SLIDE_TYPE[]>(slides);

  useEffect(() => {
    const handleResize = () => {
      if (slidesMobile && window.innerWidth < 768) {
        setCurrentSlides(slidesMobile);
      } else {
        setCurrentSlides(slides);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [slides, slidesMobile]);

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
        {currentSlides.map((slide, id) => (
          <SwiperSlide key={`${slide.src}-${id}`}>
            <div className="relative w-full h-[130px] md:h-[210px] lg:h-[250px]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill={slide.fill}
                priority={slide.priority}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
