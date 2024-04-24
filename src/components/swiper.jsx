import React from 'react'
import { SwiperCard } from './swiperCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const SwiperSection = () => {
  return (
    <Swiper
    className="Swiper"
    modules={[Pagination]}
    slidesPerView={1}
    spaceBetween={0}
    pagination={{ clickable: true }}
  >
    <SwiperSlide className="SwiperSlide"><SwiperCard /></SwiperSlide>
    <SwiperSlide className="SwiperSlide"><SwiperCard /></SwiperSlide>
    <SwiperSlide className="SwiperSlide"><SwiperCard /></SwiperSlide>
    <SwiperSlide className="SwiperSlide"><SwiperCard /></SwiperSlide>
  </Swiper>
  )
}
