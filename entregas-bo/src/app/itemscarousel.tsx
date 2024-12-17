"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import React from 'react';
import './carusel.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default function Carousel() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Carrusel de Imágenes</h1>
      <Swiper
 effect={'coverflow'}
 grabCursor={true}
 centeredSlides={true}
 loop={true}
 slidesPerView={'auto'}
 coverflowEffect={{
   rotate: 0,
   stretch: 0,
   depth: 100,
   modifier: 2.5,
 }}
 pagination={{ el: '.swiper-pagination', clickable: true }}
 navigation={{
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
   clickable: true,
 }}
 modules={[EffectCoverflow, Pagination, Navigation]}
 className="swiper_container"
       
      >
        <SwiperSlide>
          <Image
            src="/azucarguabira.png"
            alt="Logo Entregas"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/aguaiazucarlogo.png"
            alt='azucar'
            width={250}
            height={250}
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/comunicartelogo.jpg"
            alt="Example 2"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
           
          
          </div>
          <div className="swiper-button-next slider-arrow">
          <button>hola</button>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
