"use client";
import { useSwiper } from "swiper/react";

const CardContents = ({ title, description, image }) => {
  const swiper = useSwiper();
  return (
    <div className="relative bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] rounded-xl w-[70vw] h-[30vw] flex flex-col justify-end items-center mt-[10vw]">
      <div onClick={() => swiper.slidePrev()}>
        <img
          alt="Previous Arrow"
          src="/image/Projects/LeftArrow.png"
          className="absolute w-[4vw] h-[4vw] left-[2vw] top-[24vh] "
          draggable="false"
        />
      </div>
      <div onClick={() => swiper.slideNext()}>
        <img
          alt="Next Arrow"
          src="/image/Projects/RightArrow.png"
          className="absolute w-[4vw] h-[4vw] right-[2vw] top-[24vh] "
          draggable="false"
        />
      </div>
      <div className="font-SourceSansProBold text-[1.7vw]">{title}</div>
      <div className="w-[60vw] text-center font-SourceSansProSemibold mb-[3vw] ">
        {description}
      </div>
      <div className="absolute -top-[8vw] w-[45vw] h-[45vh] ">
        <img
          alt="Image "
          src={image}
          className="absolute w-full h-full rounded-xl  "
          draggable="false"
        />
      </div>
    </div>
  );
};

export default CardContents;
