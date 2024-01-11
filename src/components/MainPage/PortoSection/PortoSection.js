import styles from "./PortoSection.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function PortoSection() {
  return (
    <section className="w-full min-h-screen relative  flex flex-row justify-center items-center bg-white-MainPage border-b-[0.104vw] border-[#E6ECF0] gap-y-[2.083vw]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-neutral-g text-[2.3vw] font-SourceSansProBold flex justify-center ">
          Our Work in Action
        </div>
        <div className="text-neutral-e w-[58vw] text-center text-[1vw] font-SourceSansProSemibold ">
          Lorem ipsum dolor sit amet consectetur. Nunc luctus libero enim dui
          pellentesque dolor mattis lacus. Malesuada accumsan tempor ultrices
          id. Sed et id ut etiam. Et egestas varius at pellentesque nisl cursus
          donec arcu. Nisi elementum lectus imperdiet elit risus. Mi at orci
          nunc leo eget natoque vitae. Urna ut vestibulum id nisl vel nunc.
          Massa scelerisque egestas egestas dictum ut velit feugiat.
        </div>
        <div className="relative py-[2vw]">
          <div className="w-[53vw] h-[53vh] bg-transparent border-[1.2vw] border-[#E2E8F0] mr-[3vw] rounded-md flex flex-col overflow-y-scroll no-scrollbar  ">
            <img
              alt=""
              src="/image/Porto/HeroEnfo.png"
              className="w-full h-screen"
              draggable="false"
            />
            <img
              alt=""
              src="/image/Porto/AboutUsEnfo.png"
              className="w-full h-screen"
              draggable="false"
            />
          </div>
          <div className="absolute w-[15vw] h-[44vh] bg-black border-[1.2vw] border-[#E2E8F0] rounded-md -bottom-[4vh] -right-[4vw] flex flex-col overflow-y-scroll no-scrollbar  ">
            <img
              alt=""
              src="/image/Porto/HeroEnforianMobile.png"
              className="w-full h-screen"
              draggable="false"
            />
            <img
              alt=""
              src="/image/Porto/TeaserEnfo.png"
              className="w-full h-screen"
              draggable="false"
            />
            <img
              alt=""
              src="/image/Porto/AboutUsEnfoMobile.png"
              className="w-full h-screen"
              draggable="false"
            />
          </div>
        </div>

        <button
          className={
            "flex flex-row justify-center items-center w-[9.792vw] gap-x-[0.26vw] mt-[4vw] aspect-[188/48] bg-transparent rounded-[0.417vw] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
            styles.ButtonShadow
          }
        >
          <p className="font-InterBold text-[0.833vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
            More Projects
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[1.25vw] aspect-[1/1]" />
        </button>
      </div>
    </section>
  );
}
