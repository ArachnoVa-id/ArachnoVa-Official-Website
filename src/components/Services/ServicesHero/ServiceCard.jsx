import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ src, Title, Description, href, aos }) => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	return (
		<div data-aos={aos}>
			<a
				href={href}
				className="relative lg:w-[19.792vw] w-[90.698vw] lg:h-[23.958vw] h-[40.233vw] lg:aspect-[400/480] flex lg:flex-col flex-row items-start lg:p-[2.083vw] p-[5.349vw] bg-neutral-a border-solid lg:border-[0.156vw] border-[0.698vw] border-[#E2E8F0] lg:rounded-[1.302vw] rounded-[4.651vw] z-[20] text-neutral-e hover:text-LightBlue-c lg:hover:w-[21.513vw] lg:hover:h-[25.679vw] transition-all duration-500 ease-in-out"
				style={{ boxShadow: "0px 9px 20px -3px rgba(0, 0, 0, 0.15)" }}
			>
				<div className="relative lg:w-[4.479vw] w-[7.907vw] aspect-[1/1]">
					<Image
						src={src}
						draggable="false"
						alt="icon"
						fill
						className="object-contain"
					/>
				</div>
				<div className="lg:flex flex-col hidden">
					<h1 className="w-[8.333vw] font-SourceSansProBold text-neutral-g text-[2.083vw] leading-[2.604vw] mt-[1.823vw]">
						{Title}
					</h1>
					<p className="w-[15.625vw] font-SourceSansProSemibold text-neutral-e text-[0.938vw] mt-[0.781vw]">
						{Description}
					</p>
				</div>
				<div className="lg:hidden flex flex-col w-[66.977vw] ml-[4.651vw]">
					<h1 className="font-SourceSansProBold text-neutral-g text-[5.581vw]">
						{Title}
					</h1>
					<p className="font-SourceSansProSemibold text-neutral-e text-[3.721vw]">
						{Description}
					</p>
				</div>
				<HiArrowRight
					className="absolute lg:right-[2.083vw] right-[5.581vw] lg:bottom-[2.083vw] bottom-[5.581vw] lg:flex hidden"
					size="2.344vw"
				/>
				<HiArrowRight
					className="absolute lg:right-[2.083vw] right-[5.581vw] lg:bottom-[2.083vw] bottom-[5.581vw] flex lg:hidden"
					size="6.744vw"
				/>
			</a>
		</div>
	);
};

export default ServiceCard;
