import { useSwiper } from "swiper/react";

const ContentCard = ({ img }) => {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex justify-center items-center lg:w-[34.167vw] w-[75.814vw] lg:h-[19.271vw] h-[42.326vw] lg:rounded-[0.521vw] rounded-[1.86vw] border-solid lg:border-[0.104vw] border-[0.233vw] border-[#E2E8F0] overflow-hidden">
        <img src={img} className="w-full h-full object-cover" />
      </div>
    </>
  );
};

export default ContentCard;
