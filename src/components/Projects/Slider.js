"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardContents from "./CardContents";

export default function Slider() {
  const data = {
    title: ["Lustrum DTETI XII", "KPU FT"],
    description: [
      "Lorem ipsum dolor sit amet consectetur. Tincidunt lectus leo diam id turpis urna pellentesque. Lorem turpis lectus magna purus laoreet accumsan velit nibh. Malesuada lacus sed auctor neque lacus sed ullamcorper. Augue amet egestas ornare at suspendisse. Nibh orci pellentesque in massa imperdiet ipsum tristique purus. Gravida eget nulla.",
      "Tincidunt lectus leo diam id turpis urna pellentesque. Lorem ipsum dolor sit amet consectetur.  Lorem turpis lectus magna purus laoreet accumsan velit nibh. Malesuada lacus sed auctor neque lacus sed ullamcorper. Augue amet egestas ornare at suspendisse. Nibh orci pellentesque in massa imperdiet ipsum tristique purus. Gravida eget nulla.",
    ],
    image: ["/image/Porto/LustrumDTETI/LustrumDTETIDesktop.png", "/image/Porto/LustrumDTETI/LustrumDTETIDesktop.png"],
    imageMobile : ["/image/Porto/LustrumDTETI/LustrumDTETIMobile.svg", "/image/Porto/LustrumDTETI/LustrumDTETIMobile.svg"]
  };

  return (
    <Swiper height={720} spaceBetween={40} slidesPerView={1} loop={true}>
      {data.title.map(function (item, index) {
        return (
          <SwiperSlide key={index}>
            <CardContents
              title={data.title[index]}
              description={data.description[index]}
              image={data.image[index]}
              imageMobile={data.imageMobile[index]}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
