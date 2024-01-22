import FooterItem from "./FooterItem";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiWhatsappLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-around items-center w-full min-h-[12.708vw] bg-LightBlue-c">
        <div className="flex flex-row justify-center items-center w-[28.698vw]">
          <img
            src="/image/Footer/FooterLogo.png"
            alt="logo"
            className="w-[7.135vw] aspect-[137/132] mr-[3.385vw]"
          />
          <div className="w-[0.104vw] h-[8.333vw] bg-neutral-a" />
          <div className="flex flex-col ml-[1.979vw] gap-y-[0.521vw]">
            <div className="flex items-center">
              <ul className="flex flex-row gap-x-[2.135vw]">
                <FooterItem Items="Projects" href="/projects" />
                <FooterItem Items="Services" href="/services" />
                <FooterItem Items="About" href="/aboutus" />
              </ul>
            </div>
            <div className="flex flex-row items-center justify-center">
              <AiOutlineCopyright size="0.938vw" className="text-neutral-a" />
              <p className="font-InterSemibold text-neutral-a text-[0.833vw]">
                2024 ArachnoVa. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[5.781vw] justify-center items-end gap-y-[0.417vw]">
          <p className="font-InterBold text-[0.938vw] text-neutral-a">
            Follow Us!
          </p>
          <div className="w-full flex flex-row justify-between">
            <a href="#">
              <FaLinkedin
                size="1.563vw"
                className="text-neutral-a hover:text-neutral-c transition-all duration-500 ease-in-out"
              />
            </a>
            <a href="#">
              <AiFillInstagram
                size="1.563vw"
                className="text-neutral-a hover:text-neutral-c transition-all duration-500 ease-in-out"
              />
            </a>
            <a href="#">
              <PiWhatsappLogoFill
                size="1.563vw"
                className="text-neutral-a hover:text-neutral-c transition-all duration-500 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
