import styles from "./AboutUs.module.css";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <section className="w-full min-h-[33.125vw] flex flex-col justify-center items-center bg-white-MainPage border-b-[0.104vw] border-[#E6ECF0] gap-y-[2.083vw]">
        <div className="w-fit flex flex-row justify-center items-center gap-x-[3.333vw]">
          <div
            className={
              "flex flex-col justify-center items-center w-[31.667vw] aspect-[608/316] rounded-[0.833vw] border-solid border-[0.156vw] border-[#76BDE4] gap-y-[1.823vw] " +
              styles.BoxLeft
            }
          >
            <h1 className="font-SourceSansProBold text-[2.083vw] text-neutral-g">
              What is
              <span className="text-[#0893D4]"> ArachnoVa?</span>
            </h1>
            <p className="w-[25.938vw] font-SourceSansProSemibold text-[1.042vw] text-[#606D7F] text-justify">
              ArachnoVa adalah{" "}
              <span className="text-[#1E293B]">
                community-based business mahasiswa DTETI UGM{" "}
              </span>
              (Departemen Teknik Elektro dan Teknologi Informasi) yang
              menawarkan jasa web design dan development.
            </p>
          </div>
          <div
            className={
              "flex flex-col justify-center items-center w-[31.667vw] aspect-[608/316] rounded-[0.833vw] border-solid border-[0.156vw] border-[#52CEE0] gap-y-[1.146vw] " +
              styles.BoxRight
            }
          >
            <h1 className="font-SourceSansProBold text-[2.083vw] text-neutral-g">
              What Are We <span className="text-[#0893D4]"> Capable</span> Of?
            </h1>
            <p className="w-[25.938vw] font-SourceSansProSemibold text-[1.042vw] text-[#606D7F] text-justify">
              ArachnoVa menargetkan untuk pembuatan website organisasi dan event
              bagi client yang membutuhkan official website baik berbentuk
              <span className="text-[#1E293B]">
                {" "}
                Landing page, Profiling, maupun Custom Website{" "}
              </span>{" "}
              untuk meningkatkan digital presence yang profesional.
            </p>
          </div>
        </div>
        <button
          className={
            "flex flex-row justify-center items-center w-[9.792vw] gap-x-[0.26vw] aspect-[188/48] bg-transparent rounded-[0.417vw] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
            styles.ButtonShadow
          }
        >
          <p className="font-InterBold text-[0.833vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
            Get to know more
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[1.25vw] aspect-[1/1]" />
        </button>
      </section>
    </>
  );
};

export default AboutUs;
