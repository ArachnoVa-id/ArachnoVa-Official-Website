import Slider from "./Slider";
import Image from "next/image";

const HeroProjects = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center relative justify-center aspect-[1920/1312] bg-neutral-a ">
      <Image
        alt="Background"
        src="/image/Projects/BGHeroProjects.png"
        className="absolute w-full h-full z-[1] max-lg:hidden"
        draggable="false"
        width={100000}
        height={100000}
      />
      <Image
        alt="Background"
        src="/image/Projects/BGHeroProjectsMobile.svg"
        className="absolute w-full top-[0] z-[1] lg:hidden "
        draggable="false"
        width={100000}
        height={100000}
      />

      <div className="text-black flex flex-col justify-center items-center  text-[2.3vw]/[2.2vw] max-lg:hidden z-[2] mb-[2.6vw]">
        <div className="text-[1.6vw] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] to-[#159E8D]">
          Unleashing Digital Excellence
        </div>
        <div className="text-[2.3vw] font-SourceSansProBold">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="flex items-center justify-center w-[80vw] max-lg:hidden">
        <div className="swiper swiper-backface-hidden w-full mx-auto  overflow-visible ">
          <Slider />
        </div>
      </div>

      {/* Mobile */}
      <div className="text-black flex flex-col justify-center items-center text-[4vw]/[6vw] mb-[10vw] lg:hidden z-[2]">
        <div className="text-[4.186vw] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] to-[#159E8D]">
          Unleashing Digital Excellence
        </div>
        <div className="text-[6.977vw] font-SourceSansProBold ">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="flex items-center justify-center w-[90vw] lg:hidden mb-[50vw]">
        <div className="swiper swiper-backface-hidden w-full mx-auto  overflow-visible ">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
