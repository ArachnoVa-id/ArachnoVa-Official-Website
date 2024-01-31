import Content from "@/components/MainPage/OurProducts/Content";
import ServicesContainer from "../ServicesContainer";

const ServicesLandingPage = () => {
	const Data = [
		"/image/OurProducts/LandingPage-1.png",
		"/image/OurProducts/LandingPage-2.png",
		"/image/OurProducts/LandingPage-3.png",
	];
	return (
		<>
			<section
				id="ServicesLandingPage"
				className="w-full lg:min-h-[39.531vw] min-h-[175.349vw] lg:flex flex-col lg:justify-start justify-center items-center bg-white-MainPage hidden"
			>
				<ServicesContainer
					Title="Landing Page"
					Description="Lorem ipsum dolor sit amet consectetur. Praesent phasellus sagittis dignissim id egestas aenean dictum et. Gravida enim rutrum adipiscing adipiscing sed vitae."
					Function="Lorem ipsum dolor sit amet consectetur. Iaculis."
					Duration="Lorem ipsum dolor sit amet consectetur. Iaculis."
					Pages="Lorem ipsum dolor sit amet consectetur. Iaculis."
					SlideContent={<Content data={Data} totalSlide={2} />}
				/>
			</section>
			<section
				id="ServicesLandingPage"
				className="w-full lg:min-h-[39.531vw] min-h-[175.349vw] flex flex-col lg:justify-start justify-center items-center bg-white-MainPage lg:hidden"
			>
				<ServicesContainer
					Title="Landing Page"
					Description="Lorem ipsum dolor sit amet consectetur. Praesent phasellus sagittis dignissim id egestas aenean dictum et. Gravida enim rutrum adipiscing adipiscing sed vitae."
					Function="Lorem ipsum dolor sit amet consectetur. Iaculis."
					Duration="Lorem ipsum dolor sit amet consectetur. Iaculis."
					Pages="Lorem ipsum dolor sit amet consectetur. Iaculis."
					SlideContent={<Content data={Data} totalSlide={2} variant="Mobile" />}
				/>
			</section>
		</>
	);
};

export default ServicesLandingPage;
