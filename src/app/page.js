import Image from "next/image";
import Hero from "@/components/MainPage/Hero/Hero";
import PortoSection from "@/components/MainPage/PortoSection/PortoSection";
import AboutUs from "@/components/MainPage/AboutUs/AboutUs";
import OurProducts from "@/components/MainPage/OurProducts/OurProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <PortoSection />
      <OurProducts />
    </>
  );
}
