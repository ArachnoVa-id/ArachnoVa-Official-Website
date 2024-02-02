import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CTA() {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	return (
		<section className="w-full lg:h-[60vh] max-lg:h-[30vh] relative bg-transparent flex flex-row justify-center items-center">
			<Image
				alt=""
				src="/image/CTA/BGCTA.png"
				className="absolute w-full h-full -z-[1]  "
				draggable="false"
				fill
			/>

			{/* Desktop */}
			<div className="flex flex-col justify-center items-center max-lg:hidden">
				<div
					data-aos="fade-up"
					className="text-neutral-g font-SourceSansProBold text-[2.396vw]/[2.4vw] flex flex-col justify-center items-center"
				>
					<p>Ready to Transform Your Digital Presence ? </p>
					<p>Let&apos;s Start Crafting Your Website Today</p>
				</div>
				<button
					data-aos="fade-up"
					className="bg-black w-[13.646vw] aspect-[262/54] rounded-[0.260vw] font-SourceSansProSemibold mt-[3vw] text-[1.042vw] hover:bg-neutral-e duration-500"
				>
					Start Your Project
				</button>
			</div>

			{/* Mobile */}
			<div className="flex flex-col justify-center items-center lg:hidden">
				<div
					data-aos="fade-up"
					className="text-neutral-g font-SourceSansProBold text-[4.5vw]/[5vw] flex flex-col justify-center items-center"
				>
					<p>Ready to Transform Your Digital Presence ? </p>
					<p>Let&apos;s Start Crafting Your Website Today</p>
				</div>
				<button
					data-aos="fade-up"
					className="bg-black w-[53.256vw] aspect-[229/49] rounded-lg font-SourceSansProSemibold mt-[8vw] text-[4.5vw] hover:bg-neutral-e duration-500"
				>
					Start Your Project
				</button>
			</div>
		</section>
	);
}
