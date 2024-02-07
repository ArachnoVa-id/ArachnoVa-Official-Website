import Content from "@/components/MainPage/OurProducts/Content";
import ServicesContainer from "../ServicesContainer";

const ServicesProfiling = () => {
  const Description =
    "Website Profiling memberikan informasi menyeluruh tentang organisasi atau event melalui beberapa halaman, memungkinkan pengunjung untuk dengan mudah menavigasi situs dan memperoleh detail informasi mendetail.";
  const Function = "Penjelasan lengkap tentang instansi.";
  const Duration = "2 - 4 Minggu.";
  const Pages = "3 - 5 Halaman.";
  const Data = [
    "/image/OurProducts/KPUFTHero.svg",
    "/image/OurProducts/KPUFTInfoCalon.svg",
    "/image/OurProducts/KPUFTTentangKami.svg",
  ];
  const TotalSlide = 3;
  return (
    <section
      id="ServicesProfilingPage"
      className="w-full lg:min-h-[39.531vw] min-h-[175.349vw] flex flex-col lg:justify-start justify-center items-center bg-white-MainPage"
    >
      <div className="lg:flex hidden">
        <ServicesContainer
          Title="Profiling Page"
          Description={Description}
          Function={Function}
          Duration={Duration}
          Pages={Pages}
          SlideContent={
            <Content data={Data} totalSlide={TotalSlide - 1} aos="fade-left" />
          }
          Variant="left"
        />
      </div>
      <div className="lg:hidden flex">
        <ServicesContainer
          Title="Profiling Page"
          Description={Description}
          Function={Function}
          Duration={Duration}
          Pages={Pages}
          SlideContent={
            <Content
              data={Data}
              totalSlide={TotalSlide - 1}
              variant="mobile"
              aos="zoom-in"
            />
          }
        />
      </div>
    </section>
  );
};

export default ServicesProfiling;
