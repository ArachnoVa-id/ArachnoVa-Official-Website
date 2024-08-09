import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ServiceDetails = ({ _key, selected, title, description, image }) => {
  const isSelected = (key, selected) => {
    if (key === selected) return "flex";
    return "hidden";
  };

  const swiperRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [selected]);
  return (
    <div
      data-aos="fade-up"
      className={`justify-start items-center bg-[#FAFDFF] border-[#E2E8F0] 
                  ${isSelected(_key, selected)}
                  lg:flex-row lg:min-h-[22.813vw] lg:px-[3.125vw] lg:py-[2.083vw]  lg:gap-[2.083vw] lg:rounded-[1.302vw] lg:border-[0.156vw] lg:shadow-[0px_0.469vw_1.042vw_0.156vw_rgba(0,0,0,0.15)]`}
    >
      <div
        className="flex justify-center items-center
                   lg:gap-[0.417vw]"
      >
        <div
          className="text-[#9CADB4]
                     lg:w-[2.083vw]"
        >
          <BsFillCaretLeftFill
            size={"100%"}
            className="cursor-pointer"
            onClick={() => {
              swiperRef.current.slidePrev(250, true);
            }}
          />
        </div>
        <div
          className="flex justify-center items-center bg-[#FBFCFD] border-[#E2E8F0]
                   lg:w-[31.979vw] lg:h-[18.646vw] lg:rounded-[0.781vw] lg:border-[0.156vw] lg:shadow-[0px_0.208vw_2.083vw_-0.26vw_rgba(0,0,0,0.15)"
        >
          <Swiper
            className="overflow-hidden
                       lg:w-[30.625vw] lg:rounded-[0.521vw]"
            slidesPerView={1}
            spaceBetween={5}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
          >
            {image?.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    draggable="false"
                    alt=""
                    style={{ width: "30.625vw", height: "auto" }}
                    width="1920"
                    height="1080"
                    className=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div
          className="text-[#9CADB4]
                     lg:w-[2.083vw]"
        >
          <BsFillCaretRightFill
            size={"100%"}
            className="cursor-pointer"
            onClick={() => {
              swiperRef.current.slideNext(250, true);
            }}
          />
        </div>
      </div>
      <div
        className="flex flex-col
                   lg:gap-[0.521vw]"
      >
        <div
          className="text-[#001118] font-SourceSansProBold
                     lg:text-[2.083vw] lg:leading-[117.5%]"
        >
          {title}
        </div>
        <div
          className="text-[#4E5F66] leading-[150%] text-justify font-SourceSansProSemibold
                     lg:text-[1.042vw] lg:w-[26.615vw]"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
