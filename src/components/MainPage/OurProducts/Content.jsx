"use client";

import { useRef, useEffect, useState } from "react";
import ContentSlider from "./ContentSlider";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useSwiper } from "swiper/react";

const Content = ({ data, totalSlide, variant }) => {
  const size = variant ? "4.884vw" : "2.083vw";

  const swiper = useSwiper();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (currentSlide < totalSlide) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(totalSlide);
    }
  };

  useEffect(() => {
    sliderRef.current.swiper.slideTo(currentSlide, 500, true);
  }, [currentSlide]);
  return (
    <>
      <div className="flex justify-around items-center lg:w-[40.729vw] w-[90.698vw] lg:h-[20.833vw] h-[45.581vw] z-10">
        <BsFillCaretLeftFill
          size={size}
          className="text-neutral-c cursor-pointer"
          onClick={handlePrevious}
        />
        <div className="flex justify-center items-center lg:w-[35.729vw] w-[79.07vw] lg:h-[20.833vw] h-[45.581vw] bg-[#FBFCFD] lg:rounded-[0.781vw] rounded-[2.326vw] border-solid border-[#E2E8F0] lg:border-[0.156vw] border-[0.349vw]">
          <div className="flex justify-center items-center object-cover lg:w-[34.167vw] w-[75.814vw] lg:h-[19.271vw] h-[42.326vw] lg:rounded-[0.521vw] rounded-[1.86vw] overflow-hidden">
            <ContentSlider data={data} sliderRef={sliderRef} />
          </div>
        </div>
        <BsFillCaretRightFill
          size={size}
          className="text-neutral-c cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </>
  );
};

export default Content;
