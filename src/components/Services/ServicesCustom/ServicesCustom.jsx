import Content from "@/components/MainPage/OurProducts/Content";
import ServicesContainer from "../ServicesContainer";

const ServicesCustomWeb = () => {
	const Description =
		"Lorem ipsum dolor sit amet consectetur. Praesent phasellus sagittis dignissim id egestas aenean dictum et. Gravida enim rutrum adipiscing adipiscing sed vitae.";
	const Function = "Lorem ipsum dolor sit amet consectetur. Iaculis.";
	const Duration = "Lorem ipsum dolor sit amet consectetur. Iaculis.";
	const Pages = "Lorem ipsum dolor sit amet consectetur. Iaculis.";
	const Data = ["/image/OurProducts/CustomWeb-1.png"];
	const TotalSlide = 1;
	return (
		<section
			id="ServicesCustomWeb"
			className="w-full lg:min-h-[39.531vw] min-h-[175.349vw] flex flex-col lg:justify-start justify-center items-center bg-white-MainPage"
		>
			<div className="lg:flex hidden">
				<ServicesContainer
					Title="Custom Web"
					Description={Description}
					Function={Function}
					Duration={Duration}
					Pages={Pages}
					SlideContent={<Content data={Data} totalSlide={TotalSlide - 1} />}
				/>
			</div>
			<div className="lg:hidden flex">
				<ServicesContainer
					Title="Custom Web"
					Description={Description}
					Function={Function}
					Duration={Duration}
					Pages={Pages}
					SlideContent={
						<Content data={Data} totalSlide={TotalSlide - 1} variant="Mobile" />
					}
				/>
			</div>
		</section>
	);
};

export default ServicesCustomWeb;
