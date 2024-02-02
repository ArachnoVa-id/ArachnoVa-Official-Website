"use client";

import Image from "next/image";
import Hero from "@/components/MainPage/Hero/Hero";
import PortoSection from "@/components/MainPage/PortoSection/PortoSection";
import AboutUs from "@/components/MainPage/AboutUs/AboutUs";
import OurProducts from "@/components/MainPage/OurProducts/OurProducts";
import CTA from "@/components/MainPage/CTA";
import OurMechs from "@/components/MainPage/OurMechs/OurMechs";
import HeroProjects from "@/components/Projects/HeroProjects";
import PortoLustrumDTETI from "@/components/Projects/PortoLustrumDTETI";

export default function Home() {
	return (
		<>
			<Hero />
			<AboutUs />
			<OurMechs />
			<PortoSection />
			<OurProducts />
			<CTA />
		</>
	);
}
