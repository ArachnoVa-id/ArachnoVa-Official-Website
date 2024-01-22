import { IoIosMail } from "react-icons/io";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const AboutUs = () => {
  const Description =
    "Lorem ipsum dolor sit amet consectetur. Vitae augue facilisis consectetur arcu volutpat non blandit dolor cras. Turpis vulputate faucibus commodo urna diam id imperdiet. Bibendum duis aliquet nulla purus venenatis condimentum magna. Ac mauris sagittis ultrices bibendum mi porttitor. Pellentesque fermentum convallis fames ipsum quam feugiat nisl convallis eleifend. Mauris in velit non tempus risus vel amet. Commodo viverra risus donec malesuada interdum est vulputate eu. Sed auctor condimentum ornare id amet venenatis. Nunc lorem turpis elit scelerisque varius. Orci non blandit diam eget.";
  return (
    <section className="relative w-full min-h-[104.167vw] flex flex-col justify-center items-center bg-white-MainPage">
      <img
        className="absolute top-[4.271vw] w-full aspect-[1920/458] z-0"
        src="/image/OurServices/ServicesHero/bg.png"
        alt="bg"
        draggable="false"
      />
      <div className="w-fit flex flex-col items-center gap-y-[0.417vw]">
        <p className="font-SourceSansProBold text-[1.563vw] leading-[1.563vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
          Who We Are
        </p>
        <h1 className="font-SourceSansProBold text-[2.396vw] leading-[2.448vw] text-neutral-g">
          About ArachnoVa
        </h1>
      </div>
      <div
        className="relative w-[58.75vw] aspect-[1128/414] justify-center items-center flex flex-col rounded-[0.833vw] border-[0.104vw] border-white"
        style={{ background: "rgba(241, 245, 249, 0.50)" }}
      >
        <div className="absolute top-[0.677vw] left-[0.677vw] flex flex-row w-[3.125vw] justify-between">
          <div
            className="w-[0.729vw] aspect-[1/1] rounded-full"
            style={{
              background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
              boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
            }}
          />
          <div
            className="w-[0.729vw] aspect-[1/1] rounded-full"
            style={{
              background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
              boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
            }}
          />
          <div
            className="w-[0.729vw] aspect-[1/1] rounded-full"
            style={{
              background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
              boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
            }}
          />
        </div>
        <div className="w-fit flex flex-col justify-center items-center mb-[1.25vw]">
          <img
            src="/image/AboutUs/logo.png"
            alt="logo"
            className="w-[4.583vw] aspect-[88/65]"
            draggable="false"
          />
          <p className="font-CoolveticaReg text-[2.604vw] text-[#1AB0C8]">
            ARACHNOVA
          </p>
        </div>
        <div className="w-[54.583vw] aspect-[1048/3] bg-neutral-d opacity-50" />
        <p className="w-[53.333vw] mt-[0.677vw] text-center font-SourceSansProSemibold text-[1.042vw] text-neutral-g">
          {Description}
        </p>
      </div>
      <div
        className="flex flex-row justify-between items-center w-[40.625vw] aspect-[702/111] p-[2.083vw] bg-white rounded-[1.042vw] border-[0.156vw] border-[#E2E8F0]"
        style={{ boxShadow: "0px 10px 40px -10px rgba(71, 85, 105, 0.25)" }}
      >
        <div className="w-[15.35vw] flex flex-col items-start justify-center">
          <h1 className="font-SourceSansProBold text-[2.083vw] text-neutral-g">
            Get In Touch
          </h1>
          <p className="font-SourceSansProSemibold text-[1.042vw] text-neutral-e">
            Let's Connect and Create Together Reach Out to Us Today!
          </p>
        </div>
        <div className="w-[17.135vw] flex flex-row justify-between items-center">
          <SocialMediaIcon
            Icon={<IoIosMail size="2.708vw" className="text-white" />}
          />
          <SocialMediaIcon
            Icon={<FaInstagram size="2.448vw" className="text-white" />}
          />
          <SocialMediaIcon
            Icon={<FaWhatsapp size="2.448vw" className="text-white" />}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
