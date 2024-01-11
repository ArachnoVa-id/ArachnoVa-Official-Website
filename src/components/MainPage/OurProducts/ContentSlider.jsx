"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState, useRef } from "react";
import "swiper/css";
import ContentCard from "./ContentCard";

const ContentSlider = ({ data, sliderRef }) => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} loop={true} ref={sliderRef}>
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <ContentCard img={data[index]} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ContentSlider;
