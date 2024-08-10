import Image from "next/image";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const TemplateAccordion = ({ number, title, image }) => {
  const initial = () => {
    if (number != 1) {
      return false;
    }
    return true;
  };
  const fade = (number) => {
    if (number % 2 === 1) {
      return "fade-left";
    }
    return "fade-right";
  };
  const [toggle, setToggle] = useState(initial);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="w-full text-black">
      <div
        data-aos={fade(number)}
        className="flex flex-col justify-center w-full border-[#E2E8F0]
                   lg:border-[0.156vw] lg:rounded-[0.833vw] lg:shadow-[0_0.26vw_1.042vw_-0.156vw_rgba(0,0,0,0.15)]"
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="flex justify-between items-center w-full cursor-pointer
                     lg:px-[2.083vw] lg:py-[1.042vw]"
        >
          <div
            className="w-full flex items-center font-SourceSansProBold text-neutral-g
                       lg:gap-[1.25vw] lg:text-[1.25vw]
                       "
          >
            <p>{number.toString()}.</p>
            <p>{title}</p>
          </div>
          <div
            className="aspect-square
                       lg:w-[1.25vw]"
          >
            {toggle ? (
              <IoIosArrowUp size={"100%"} />
            ) : (
              <IoIosArrowDown size={"100%"} />
            )}
          </div>
        </div>
        <Collapse isOpened={toggle}>
          <div
            className="flex flex-col justify-center items-center w-full
                       lg:gap-[1.042vw] lg:pb-[2.083vw] lg:px-[2.083vw]"
          >
            <div
              className="bg-[#E2E8F0] w-full
                       lg:h-[0.104vw] lg:rounded-[0.104vw]"
            ></div>
            <div
              className="flex flex-wrap
                       lg:w-[65.677vw] lg:gap-[1.042vw]"
            >
              {image?.map((image) => {
                return (
                  <div
                    key={image.key}
                    className="flex flex-col overflow-hidden
                             lg:w-[32.292vw]"
                  >
                    <div
                      className="w-full border-[#E2E8F0] overflow-hidden
                               lg:border-[0.052vw] lg:border-b-0 lg:rounded-t-[0.208vw]"
                    >
                      <Image
                        src={image.src}
                        alt={image.caption}
                        draggable="false"
                        width={620}
                        height={349}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div
                      className="w-full flex justify-center items-center bg-[#F4F4F4] border-[#E2E8F0] 
                               lg:h-[1.615vw] lg:border-[0.052vw] lg:border-t-0 lg:rounded-b-[0.208vw]
                               "
                    >
                      <p
                        className="font-SourceSansProSemibold text-neutral-g
                                 lg:text-[0.938vw]"
                      >
                        {image.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default TemplateAccordion;
