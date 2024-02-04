import BorderSeparator from "../BorderSeparator/BorderSeparator";
import styles from "./PortoSection.module.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortoSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section className="w-full h-full aspect-[1920/1151] relative  flex flex-row justify-center items-center bg-white-MainPage gap-y-[2.083vw]">
      {/* Desktop */}
      <div className="flex flex-col justify-center items-center max-lg:hidden">
        <div className="text-neutral-g text-[2.3vw] font-SourceSansProBold flex justify-center mt-[6.250vw] ">
          Our Work in Action
        </div>
        <div
          data-aos="fade-up"
          className="text-neutral-e w-[58vw] text-center text-[1vw] font-SourceSansProSemibold mt-[0.75vw] mb-[2.083vw] "
        >
          Lorem ipsum dolor sit amet consectetur. Nunc luctus libero enim dui
          pellentesque dolor mattis lacus. Malesuada accumsan tempor ultrices
          id. Sed et id ut etiam. Et egestas varius at pellentesque nisl cursus
          donec arcu. Nisi elementum lectus imperdiet elit risus. Mi at orci
          nunc leo eget natoque vitae. Urna ut vestibulum id nisl vel nunc.
          Massa scelerisque egestas egestas dictum ut velit feugiat.
        </div>
        <div data-aos="fade-up" className="relative mr-[10vw]">
          <div className="border-[#E2E8F0] border-[0.2vw] rounded-[0.781vw] ">
            <div className="aspect-[1008/588]  w-[52.500vw] bg-transparent border-[1vw] rounded-[0.781vw] border-[#FBFCFD] flex flex-col overflow-y-scroll no-scrollbar shadow-2xl  ">
              <Image
                alt="Content layer"
                src="/image/Porto/HeroEnfo.png"
                className="w-full h-screen"
                draggable="false"
                width={1000}
                height={1000}
              />
              <Image
                alt="Content layer"
                src="/image/Porto/AboutUsEnfo.png"
                className="w-full h-screen shadow-2xl"
                draggable="false"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="absolute aspect-[303/514] w-[15.781vw] border-[1vw] border-white shadow-2xl rounded-[0.521vw] -bottom-[4vh] -right-[12vw] flex flex-col overflow-y-scroll no-scrollbar  ">
            <Image
              alt="Content layer Mobile"
              src="/image/Porto/HeroEnforianMobile.png"
              className="w-full h-screen"
              draggable="false"
              width={1000}
              height={1000}
            />
            <Image
              alt="Content layer Mobile"
              src="/image/Porto/TeaserEnfo.png"
              className="w-full h-screen"
              draggable="false"
              width={1000}
              height={1000}
            />
            <Image
              alt="Content layer Mobile"
              src="/image/Porto/AboutUsEnfoMobile.png"
              className="w-full h-screen"
              draggable="false"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <button
          className={
            "flex flex-row justify-center items-center w-[9.792vw] gap-x-[0.26vw] mt-[4.531vw] aspect-[188/48] bg-transparent rounded-[0.417vw] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
            styles.ButtonShadow
          }
        >
          <p className="font-InterBold text-[0.833vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
            More Projects
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[1.25vw] aspect-[1/1]" />
        </button>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden aspect-[430/1101]">
        <div
          data-aos="fade-up"
          className="text-neutral-g text-[8vw] font-SourceSansProBold flex justify-center "
        >
          Our Work in Action
        </div>
        <div className="text-neutral-e w-[78vw] text-center text-[2.5vw] font-SourceSansProSemibold my-[1vw] mb-[5vw] ">
          Lorem ipsum dolor sit amet consectetur. Nunc luctus libero enim dui
          pellentesque dolor mattis lacus. Malesuada accumsan tempor ultrices
          id. Sed et id ut etiam. Et egestas varius at pellentesque nisl cursus
          donec arcu. Nisi elementum lectus imperdiet elit risus. Mi at orci
          nunc leo eget natoque vitae. Urna ut vestibulum id nisl vel nunc.
          Massa scelerisque egestas egestas dictum ut velit feugiat.
        </div>

        <div className="border-[#E2E8F0] border-[0.5vw] rounded-[1.781vw] shadow-2xl">
          <div className="w-[90.698vw] aspect-[390/228]  bg-transparent border-[2.2vw] border-[#FBFCFD] rounded-[1.781vw]  flex flex-col overflow-y-scroll no-scrollbar  ">
            <Image
              alt="Content layer "
              src="/image/Porto/HeroEnfo.png"
              className="w-full h-screen"
              draggable="false"
              width={1000}
              height={1000}
            />
            <Image
              alt="Content layer "
              src="/image/Porto/AboutUsEnfo.png"
              className="w-full h-screen"
              draggable="false"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="border-[#E2E8F0] border-[0.4vw] rounded-[1.781vw] shadow-2xl mt-[3vw]">
          <div className="w-[60.465vw]  aspect-[260/438] bg-black border-[2.2vw] border-[#FBFCFD] rounded-md -bottom-[4vh] -right-[4vw] flex flex-col overflow-y-scroll no-scrollbar  ">
            <Image
              alt="Content layer Mobile"
              src="/image/Porto/HeroEnforianMobile.png"
              className="w-full h-screen"
              draggable="false"
              width={1000}
              height={1000}
            />
            <Image
              alt="Content layer Mobile"
              src="/image/Porto/TeaserEnfo.png"
              className="w-full h-screen"
              draggable="false"
              width={1000}
              height={1000}
            />
            <Image
              alt="Content layer Mobile"
              src="/image/Porto/AboutUsEnfoMobile.png"
              className="w-full h-screen"
              draggable="false"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      <BorderSeparator />
    </section>
  );
}
