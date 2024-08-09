"use client";

import data from "./data";
import Image from "next/image";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesAdditionalSwiper from "./ServicesAdditionalSwiper";

const ServicesAdditional = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section
      className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:pt-[5.208vw] lg:pb-[7.813vw]"
    >
      <div
        className="relative flex flex-col justify-center items-center
                   lg:gap-[3.125vw]"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center
                     lg:gap-[0.417vw]"
        >
          <div
            className="font-SourceSansProBold text-neutral-g
                       lg:text-[2.083vw] leading-[125%]"
          >
            Additional Package
          </div>
          <div
            className="font-SourceSansProSemibold text-neutral-e
                       lg:text-[1.042vw]"
          >
            Fitur tambahan yang dapat diimplementasikan dalam web Anda
          </div>
        </div>
        <div
          className="flex flex-col
                     lg:gap-[5.208vw]"
        >
          <div
            className="flex flex-col
                       lg:gap-[5.208vw]"
          >
            {data?.map((data) => {
              return (
                <div
                  key={data.key}
                  className="flex justify-center items-center
                             lg:gap-[3.75vw]"
                >
                  <div data-aos="fade-right">
                    <ServicesAdditionalSwiper image={data.image} />
                  </div>
                  <div
                    data-aos="fade-left"
                    className="flex flex-col justify-center items-start
                               lg:gap-[0.885vw]"
                  >
                    <div
                      className="font-SourceSansProBold text-neutral-g leading-[100%]
                               lg:text-[1.823vw]"
                    >
                      {data.title}
                    </div>
                    <div
                      className="font-SourceSansProSemibold text-neutral-e leading-[150%]
                               lg:text-[1.042vw] lg:w-[27.76vw]"
                    >
                      {data.description}
                    </div>
                    <a
                      href={data.demo}
                      className="flex justify-center items-center bg-gradient-to-r from-[#2EC1D9] to-[#179FB5] hover:scale-[115%] transition-all duration-500 ease-in-out
                               lg:h-[2.396vw] lg:w-[5.938vw] lg:rounded-[0.417vw] "
                    >
                      <p
                        className="font-InterBold text-neutral-a
                                 lg:text-[0.833vw]"
                      >
                        Demo
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 w-full bg-gradient-to-r from-[#F1F5F9] via-[#CBD5E1] to-[#F1F5F9]
                   lg:h-[0.052vw]"
      ></div>
    </section>
  );
};

export default ServicesAdditional;
