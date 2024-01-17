import { HiArrowRight } from "react-icons/hi";

const ServiceCard = ({ src, Title, Description }) => {
  return (
    <a
      href="/"
      className="relative w-[19.792vw] aspect-[400/480] flex flex-col p-[2.083vw] bg-neutral-a border-solid border-[0.156vw] border-[##E2E8F0] rounded-[1.302vw] z-[20] text-neutral-e hover:text-LightBlue-c hover:scale-[103%] transition-all duration-300 ease-in-out"
    >
      <img
        className="w-[4.479vw] aspect-[1/1]"
        src={src}
        draggable="false"
        alt="icon"
      />
      <h1 className="w-[8.333vw] font-SourceSansProBold text-neutral-g text-[2.083vw] leading-[2.604vw] mt-[1.823vw]">
        {Title}
      </h1>
      <p className="w-[15.625vw] font-SourceSansProSemibold text-neutral-e text-[0.938vw] mt-[0.781vw]">
        {Description}
      </p>
      <HiArrowRight
        className="absolute right-[2.083vw] bottom-[2.083vw]"
        size="2.344vw"
      />
    </a>
  );
};

export default ServiceCard;
