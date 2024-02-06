import BorderSeparator from "../BorderSeparator/BorderSeparator";
import styles from "./PortoSection.module.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortoSection() {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	return (
		<section className="w-full h-full aspect-[1920/1151] relative  flex flex-row justify-center items-center bg-white-MainPage gap-y-[2.083vw]">
			{/* Desktop */}
			<div className="flex flex-col justify-center items-center max-lg:hidden">
				<div className="text-neutral-g text-[2.3vw] font-SourceSansProBold flex justify-center mt-[6.250vw] ">
					Our Work in Action
				</div>
				<div
					data-aos="fade-up"
					className="text-neutral-e w-[58vw] text-center text-[1vw] font-SourceSansProSemibold mt-[0.75vw] mb-[2.083vw] "
				>
					ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek
					Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan
					beberapa karya kami sebagai gambaran representatif. Berikut merupakan
					website terbaru karya kami, serta jelajahi lebih lanjut portofolio
					yang kami miliki.
				</div>
				<div data-aos="fade-up" className="relative mr-[10vw]">
					<div className="bg-[#E2E8F0] p-[0.2vw] rounded-[0.781vw] group">
						<div className="aspect-[1008/588] w-[52.500vw] p-[1vw] bg-[#FBFCFD] flex flex-col shadow-2xl rounded-[0.781vw]">
							<div className="w-full h-full relative overflow-y-scroll no-scrollbar rounded-[0.781vw]">
								<Image
									alt="Content layer"
									src="/image/Porto/EnforianFullPage.svg"
									className="w-full rounded-xl"
									draggable="false"
									width={1000}
									height={1000}
								/>
								<div className="p-[1.2vw] w-full h-full fixed top-0 left-0 pointer-events-none">
									<div className="w-full justify-center items-center flex group-hover:opacity-0 duration-500 ">
										<Image
											alt="Content layer"
											src="/image/Porto/scroll-down.gif"
											className="w-[5vw] z-[3] absolute bottom-[2vw] rounded-xl"
											draggable="false"
											width={1000}
											height={1000}
										/>
									</div>
									<div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[0.781vw]" />
								</div>
							</div>
						</div>
					</div>

					<div className="absolute aspect-[303/514] z-[3] w-[15.781vw] border-[1vw] border-white shadow-2xl rounded-[0.521vw] -bottom-[4vh] -right-[12vw] flex flex-col overflow-y-scroll no-scrollbar  ">
						<Image
							alt="Content layer"
							src="/image/Porto/EnforianFullPageMobile.svg"
							className="w-full"
							draggable="false"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="absolute bg-[#E2E8F0] aspect-[303/510] w-[16.2vw] -bottom-[4.4vh] -right-[12.2vw] rounded-[0.521vw]"></div>
				</div>

				<a
					href="/projects"
					className={
						"flex flex-row justify-center items-center w-[9.792vw] gap-x-[0.26vw] mt-[4.531vw] aspect-[188/48] bg-transparent rounded-[0.417vw] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
						styles.ButtonShadow
					}
				>
					<p className="font-InterBold text-[0.833vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
						More Projects
					</p>
					<FaArrowRight className="text-[#24AAA7] w-[1.25vw] aspect-[1/1]" />
				</a>
			</div>

			{/* Mobile */}
			<div className="flex flex-col justify-center items-center lg:hidden aspect-[430/1101]">
				<div
					data-aos="fade-up"
					className="text-neutral-g text-[8vw] font-SourceSansProBold flex justify-center "
				>
					Our Work in Action
				</div>
				<div className="text-neutral-e w-[78vw] text-center text-[2.5vw] font-SourceSansProSemibold my-[1vw] mb-[5vw] ">
					ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek
					Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan
					beberapa karya kami sebagai gambaran representatif. Berikut merupakan
					website terbaru karya kami, serta jelajahi lebih lanjut portofolio
					yang kami miliki.
				</div>

				<div className="border-[#E2E8F0] border-[0.5vw] rounded-[1.781vw] shadow-2xl">
					<div className="w-[90.698vw] aspect-[390/228]  bg-transparent border-[2.2vw] border-[#FBFCFD] rounded-[1.781vw]  flex flex-col overflow-y-scroll no-scrollbar  ">
						<Image
							alt="Content layer"
							src="/image/Porto/EnforianFullPage.svg"
							className="w-full rounded-xl"
							draggable="false"
							width={1000}
							height={1000}
						/>
					</div>
				</div>

				<div className="border-[#E2E8F0] border-[0.4vw] rounded-[1.781vw] shadow-2xl mt-[3vw]">
					<div className="w-[60.465vw]  aspect-[260/438] bg-black border-[2.2vw] border-[#FBFCFD] rounded-md -bottom-[4vh] -right-[4vw] flex flex-col overflow-y-scroll no-scrollbar  ">
						<Image
							alt="Content layer"
							src="/image/Porto/EnforianFullPageMobile.svg"
							className="w-full rounded-xl"
							draggable="false"
							width={1000}
							height={1000}
						/>
					</div>
				</div>
			</div>

			<BorderSeparator />
		</section>
	);
}
