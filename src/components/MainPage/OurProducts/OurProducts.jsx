import BorderSeparator from "../BorderSeparator/BorderSeparator";
import Content from "./Content";
import Description from "./Description";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurProducts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  const hrefLandingPage = "#";
  const hrefProfiling = "#";
  const hrefCustomWeb = "#";
  return (
    <>
      <section className="relative flex flex-col w-full lg:min-h-[103.021vw] min-h-[397.442vw] justify-around items-center bg-white-MainPage">
        <div className="lg:flex hidden flex-col w-fit h-[88.958vw] justify-between items-center bg-transparent">
          <div
            data-aos="fade-up"
            className="flex flex-col w-[19vw] items-center justify-center gap-y-[0.625vw]"
          >
            <p className="font-SourceSansProBold text-[1.302vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
              Unlocking Possibilities
            </p>
            <h1 className="font-SourceSansProBold text-[2.083vw] leading-[2.083vw] text-neutral-g text-center">
              Explore the Range of Websites We Craft
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-row w-[72.917vw] justify-between items-center"
          >
            <Description
              Title="Landing Page"
              Description="Jenis website dengan page tunggal, memiliki tujuan untuk mengarahkan pengunjung website pada informasi yang ingin disampaikan pemilik website secara spesifik seperti mempromosikan kegiatan/produk, pemberian kontak person dan lain-lain."
              Variant="Left"
              href={hrefLandingPage}
            />
            <Content
              data={[
                "/image/OurProducts/LandingPage-1.png",
                "/image/OurProducts/LandingPage-2.png",
                "/image/OurProducts/LandingPage-3.png",
              ]}
              totalSlide={2}
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-row w-[72.917vw] justify-between items-center"
          >
            <Content
              data={[
                "/image/OurProducts/KPUFTHero.svg",
                "/image/OurProducts/KPUFTInfoCalon.svg",
                "/image/OurProducts/KPUFTTentangKami.svg",
              ]}
              totalSlide={2}
            />
            <Description
              Title="Profiling"
              Description="Website profiling memberikan informasi menyeluruh organisasi atau event melalui beberapa halaman. Pengunjung website dapat menavigasi situs sehingga dapat memaparkan detail informasi yang mendetail."
              Variant="Right"
              href={hrefProfiling}
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-row w-[72.917vw] justify-between items-center"
          >
            <Description
              Title="Custom Web"
              Description="Website yang memiliki kapabilitas melakukan hal yang lebih kompleks untuk keperluan client seperti pembentukan dashboard profesional, sistem registrasi dalam platform dan beberapa fitur yang memerlukan database."
              Variant="Left"
              href={hrefCustomWeb}
            />
            <Content
              data={[
                "/image/OurProducts/TropoTable.svg",
                "/image/OurProducts/TropoRegis.svg",
                "/image/OurProducts/CustomWeb-1.png",
              ]}
              totalSlide={2}
            />
          </div>
        </div>
        {/* Mobile Version */}
        <div className="flex flex-col w-[90.698vw] h-[340.465vw] justify-between items-center lg:hidden">
          <div
            data-aos="fade-up"
            className="flex flex-col w-[62.558vw] items-center justify-center"
          >
            <p className="font-SourceSansProBold text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
              Unlocking Possibilities
            </p>
            <h1 className="font-SourceSansProBold text-[6.977vw] leading-[5.814vw] text-neutral-g text-center">
              Explore the Range of Websites We Craft
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col w-full justify-center items-center"
          >
            <Content
              data={[
                "/image/OurProducts/LandingPage-1.png",
                "/image/OurProducts/LandingPage-2.png",
                "/image/OurProducts/LandingPage-3.png",
              ]}
              totalSlide={2}
              variant="Mobile"
            />
            <Description
              Title="Landing Page"
              Description="Jenis website dengan page tunggal, memiliki tujuan untuk mengarahkan pengunjung website pada informasi yang ingin disampaikan pemilik website secara spesifik seperti mempromosikan kegiatan/produk, pemberian kontak person dan lain-lain."
              href={hrefLandingPage}
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col w-full justify-center items-center"
          >
            <Content
              data={[
                "/image/OurProducts/KPUFTHero.svg",
                "/image/OurProducts/KPUFTInfoCalon.svg",
                "/image/OurProducts/KPUFTTentangKami.svg",
              ]}
              totalSlide={2}
              variant="Mobile"
            />
            <Description
              Title="Profiling"
              Description="Website profiling memberikan informasi menyeluruh organisasi atau event melalui beberapa halaman. Pengunjung website dapat menavigasi situs sehingga dapat memaparkan detail informasi yang mendetail."
              href={hrefProfiling}
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col w-full justify-center items-center"
          >
            <Content
              data={[
                "/image/OurProducts/TropoTable.svg",
                "/image/OurProducts/TropoRegis.svg",
                "/image/OurProducts/CustomWeb-1.png",
              ]}
              totalSlide={2}
              variant="Mobile"
            />
            <Description
              Title="Custom Web"
              Description="Website yang memiliki kapabilitas melakukan hal yang lebih kompleks untuk keperluan client seperti pembentukan dashboard profesional, sistem registrasi dalam platform dan beberapa fitur yang memerlukan database."
              href={hrefCustomWeb}
            />
          </div>
        </div>
        <BorderSeparator />
      </section>
    </>
  );
};

export default OurProducts;
