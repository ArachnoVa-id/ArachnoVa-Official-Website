"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ContentCard from "./ContentCard";

const ContentSlider = ({ data }) => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} loop={true}>
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
