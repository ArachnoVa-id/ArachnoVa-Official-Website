"use client";
import { useSwiper } from "swiper/react";

const CardContents = ({ title, description, image }) => {
  const swiper = useSwiper();
  return (
    <section>
      <div className="relative bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] mx-[5vw] rounded-[2vw] w-[70.260vw] aspect-[1349/576] flex flex-col justify-end items-center mt-[13vw] max-lg:hidden">
        <div
          className="absolute flex justify-center items-center w-[4vw] h-[4vw] -left-[2vw] top-[24vh] bg-[#84D4E1] rounded-[3vw] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <img
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[1.771vw] mr-[0.4vw]"
            draggable="false"
          />
        </div>
        <div
          className="flex justify-center items-center absolute w-[4vw] h-[4vw] -right-[2vw] top-[24vh] bg-[#84D4E1] rounded-[3vw] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <img
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[1.771vw] ml-[0.4vw]"
            draggable="false"
          />
        </div>
        <div className="font-SourceSansProBold text-[2.083vw]">{title}</div>
        <div className="w-[60vw] text-center text-[1.042vw] font-SourceSansProSemibold mb-[3vw] ">
          {description}
        </div>
        <div className="absolute -top-[12vw] w-[61.823vw] aspect-[1187/573]  ">
          <img
            alt="Image "
            src={image}
            className="absolute w-full h-full "
            draggable="false"
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="relative bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] rounded-2xl aspect-[344/304] w-[70.442vw]   flex flex-col justify-end items-center mt-[30vw] lg:hidden">
        <div onClick={() => swiper.slidePrev()}>
          <img
            alt="Previous Arrow"
            src="/image/Projects/LeftArrow.png"
            className="absolute w-[6vw] h-[6vw] left-[0.3vw] top-[14vh] "
            draggable="false"
          />
        </div>
        <div onClick={() => swiper.slideNext()}>
          <img
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="absolute w-[6vw] h-[6vw] right-[0.3vw] top-[14vh]  "
            draggable="false"
          />
        </div>
        <div className="font-SourceSansProBold text-[5.581vw]">{title}</div>
        <div className="w-[60vw] text-[3vw] text-center font-SourceSansProSemibold mb-[3vw] ">
          {description}
        </div>
        <div className="absolute -top-[20vw] w-[76.744vwvw] h-[35vw] aspect-[1920/1080] ">
          <img
            alt="Image "
            src={image}
            className="absolute w-full h-full rounded-xl  "
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default CardContents;
