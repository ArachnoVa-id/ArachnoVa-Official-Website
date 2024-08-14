"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { twMerge } from "tailwind-merge";

export default function PortoTemplate({
  type,
  title,
  desc,
  srcDesktop,
  srcMobile,
}) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  
  return (
    <section className="w-full lg:aspect-[1920/748] max-lg:aspect-[430/552] flex flex-col items-center justify-center bg-neutral-a overflow-hidden">
      {/* Desktop */}
      <div
        className={twMerge(
          type === 1
            ? "flex"
            : type === 2
            ? "flex flex-row-reverse "
            : "",
          " max-lg:hidden "
        )}
      >
        <div className="w-[20vw] text-black pt-[2vw] ml-[5vw]">
          <h1 className="text-[2vw] font-SourceSansProBold text-end">
            {title}
          </h1>
          <p className="text-[1vw]/[1.5vw] font-SourceSansProSemibold text-neutral-e text-end">
            {desc}
          </p>
          <div className="flex justify-end">
            <a
              href="https://recaping.id/"
              className={twMerge(
                "w-[4.688vw] mt-[1vw] bg-gradient-to-r rounded-[0.5vw] text-[0.833vw] aspect-[90/48] from-[#2DC0D8] to-[#179FB5] font-InterBold text-white",
                "flex justify-center items-center",
                "hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out "
              )}
            >
              Source
            </a>
          </div>
        </div>

        <div
          className="relative w-[40vw] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src={srcDesktop}
            className=" w-[34.6vw] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src={srcMobile}
            className="absolute w-[8vw] aspect-[245/485] rounded-[1vw] -bottom-[2vw] right-[0vw] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[6vw]">
        <h1 className="text-[8vw] font-SourceSansProBold text-neutral-g ">
          {title}
        </h1>
        <div
          className="relative w-[90.698vw] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src={srcDesktop}
            className=" w-[75.6vw] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src={srcMobile}
            className="absolute w-[20vw] aspect-[245/495] rounded-[3vw] -bottom-[2vw] right-[0vw] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="justify-center items-center w-[90vw]">
          <p className="text-[4.5vw]/[4.5vw] font-SourceSansProSemibold text-neutral-e ">
            {desc}
          </p>
        </div>
        <a
          href="https://www.ezparenting.id/"
          className="w-[90vw] h-[10vw] mt-[1vw] text-[3vw] bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out "
        >
          Source
        </a>
      </div>
    </section>
  );
}
