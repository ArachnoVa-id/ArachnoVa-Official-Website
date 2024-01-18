import Content from "@/components/MainPage/OurProducts/Content";
import ServicesContainer from "../ServicesContainer";

const ServicesLandingPage = () => {
  return (
    <>
      <section
        id="ServicesLandingPage"
        className="w-full min-h-[39.531vw] flex flex-col justify-start items-center bg-white-MainPage"
      >
        <ServicesContainer
          Title="Landing Page"
          Description="Lorem ipsum dolor sit amet consectetur. Praesent phasellus sagittis dignissim id egestas aenean dictum et. Gravida enim rutrum adipiscing adipiscing sed vitae."
          Function="Lorem ipsum dolor sit amet consectetur. Iaculis."
          Duration="Lorem ipsum dolor sit amet consectetur. Iaculis."
          Pages="Lorem ipsum dolor sit amet consectetur. Iaculis."
          SlideContent={
            <Content
              data={[
                "/image/OurProducts/LandingPage-1.png",
                "/image/OurProducts/LandingPage-2.png",
                "/image/OurProducts/LandingPage-3.png",
              ]}
              totalSlide={2}
            />
          }
        />
      </section>
    </>
  );
};

export default ServicesLandingPage;
