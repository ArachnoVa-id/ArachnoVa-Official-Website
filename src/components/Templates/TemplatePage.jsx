"use client";

import Image from "next/image";
import data from "./data";
import TemplateAccordion from "./TemplateAccordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TemplatePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section
      className="relative w-full lg:min-h-[53.021vw] min-h-[190.465vw] flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:pb-[5.208vw]"
    >
      <div className="lg:mt-[8vw] w-full">
        <div className="absolute top-[4.271vw] w-full aspect-[1920/458] z-0 lg:flex hidden">
          <Image
            src="/image/OurServices/ServicesHero/bg.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[0] w-full aspect-[430/195] z-0 lg:hidden">
          <Image
            src="/image/OurServices/ServicesHero/bg-mobile.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <div
          className="relative flex flex-col justify-center items-center
                   lg:gap-[5.469vw]"
        >
          <div
            className="lg:w-[43.981vw] w-[68.442vw] flex flex-col justify-center items-center mb-[15.767vw] lg:mb-0 lg:mt-0 mt-[20vw]"
            data-aos="fade-down"
          >
            <p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
              Section Template
            </p>
            <h1 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] text-neutral-g lg:leading-[2.448vw] leading-[6.977vw] text-center">
              Find the Best Section for You
            </h1>
          </div>
          <div className="flex flex-col lg:min-w-[70.521vw] lg:gap-[1.042vw]">
            <div
              data-aos="fade-left"
              className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#76BDE4] to-[#79CACA]
                         lg:p-[0.15625vw] lg:h-[5vw] lg:rounded-[0.833vw] lg:shadow-[0_0.208vw_1.042vw_-0.052vw_rgba(0,0,0,0.15)]"
              // if you ever wanted to change border thickness, change padding value but with as much accuracy as possible. It looked off with only 3 decimal numbers, but fixed after I manually calculated vw value and put it as it is.
            >
              <div
                className="w-full h-full flex flex-col justify-center bg-gradient-to-tr from-[#c4e1f5] to-[#eaf8f9]
                         lg:rounded-[0.729vw] lg:px-[2.083vw]"
              >
                <p
                  className="text-neutral-e font-SourceSansProSemibold leading-[150%]
                           lg:text-[0.938vw]"
                >
                  Pilihan template section hanya tersedia untuk paket{" "}
                  <span className="text-neutral-g font-SourceSansProBold">
                    Landing Page
                  </span>
                  .
                  <br />
                  Jelajahi beragam desain menarik kami dan pilih yang paling
                  sesuai dengan citra brand Anda.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full lg:gap-[1.042vw]">
              {data?.map((data) => {
                return (
                  <TemplateAccordion
                    key={data.key}
                    number={data.key}
                    title={data.title}
                    image={data.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TemplatePage;