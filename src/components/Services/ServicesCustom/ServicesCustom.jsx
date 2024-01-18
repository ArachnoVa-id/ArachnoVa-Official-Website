import Content from "@/components/MainPage/OurProducts/Content";
import ServicesContainer from "../ServicesContainer";

const ServicesCustomWeb = () => {
  return (
    <div
      id="ServicesCustomWeb"
      className="w-full min-h-[39.531vw] flex flex-col justify-start items-center bg-white-MainPage"
    >
      <ServicesContainer
        Title="Custom Web"
        Description="Lorem ipsum dolor sit amet consectetur. Praesent phasellus sagittis dignissim id egestas aenean dictum et. Gravida enim rutrum adipiscing adipiscing sed vitae."
        Function="Lorem ipsum dolor sit amet consectetur. Iaculis."
        Duration="Lorem ipsum dolor sit amet consectetur. Iaculis."
        Pages="Lorem ipsum dolor sit amet consectetur. Iaculis."
        SlideContent={
          <Content
            data={["/image/OurProducts/CustomWeb-1.png"]}
            totalSlide={1}
          />
        }
      />
    </div>
  );
};

export default ServicesCustomWeb;
