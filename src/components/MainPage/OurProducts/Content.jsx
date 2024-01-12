"use client";

import { useRef, useEffect, useState } from "react";
import ContentSlider from "./ContentSlider";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useSwiper } from "swiper/react";

const Content = ({ data, totalSlide }) => {
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
      <div className="flex justify-around items-center w-[40.729vw] h-[20.833vw]">
        <BsFillCaretLeftFill
          size="2.083vw"
          className="text-neutral-c cursor-pointer"
          onClick={handlePrevious}
        />
        <div className="flex justify-center items-center w-[35.729vw] h-[20.833vw] bg-[#FBFCFD] rounded-[0.781vw] border-solid border-[#E2E8F0] border-[0.156vw]">
          <div className="flex justify-center items-center w-[34.167vw] h-[19.271vw] rounded-[0.521vw] overflow-hidden">
            <ContentSlider data={data} sliderRef={sliderRef} />
          </div>
        </div>
        <BsFillCaretRightFill
          size="2.083vw"
          className="text-neutral-c cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </>
  );
};

export default Content;
