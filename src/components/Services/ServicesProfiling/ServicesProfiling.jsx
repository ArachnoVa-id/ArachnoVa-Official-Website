import Content from "@/components/MainPage/OurProducts/Content";
import ServicesContainer from "../ServicesContainer";

const ServicesProfiling = () => {
  return (
    <div
      id="ServicesProfilingPage"
      className="w-full lg:min-h-[39.531vw] min-h-[175.349vw] flex flex-col lg:justify-start justify-center items-center bg-white-MainPage"
    >
      <ServicesContainer
        Title="Profiling Page"
        Description="Lorem ipsum dolor sit amet consectetur. Praesent phasellus sagittis dignissim id egestas aenean dictum et. Gravida enim rutrum adipiscing adipiscing sed vitae."
        Function="Lorem ipsum dolor sit amet consectetur. Iaculis."
        Duration="Lorem ipsum dolor sit amet consectetur. Iaculis."
        Pages="Lorem ipsum dolor sit amet consectetur. Iaculis."
        SlideContent={
          <Content
            data={["/image/OurProducts/Profiling-1.png"]}
            totalSlide={1}
          />
        }
      />
    </div>
  );
};

export default ServicesProfiling;
