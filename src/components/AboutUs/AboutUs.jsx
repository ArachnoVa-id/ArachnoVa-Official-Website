import { IoIosMail } from "react-icons/io";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ContentBox from "./ContentBox";

const AboutUs = () => {
	const email = "#";
	const instagram = "#";
	const whatsapp = "#";
	const Description =
		"Lorem ipsum dolor sit amet consectetur. Vitae augue facilisis consectetur arcu volutpat non blandit dolor cras. Turpis vulputate faucibus commodo urna diam id imperdiet. Bibendum duis aliquet nulla purus venenatis condimentum magna. Ac mauris sagittis ultrices bibendum mi porttitor. Pellentesque fermentum convallis fames ipsum quam feugiat nisl convallis eleifend. Mauris in velit non tempus risus vel amet. Commodo viverra risus donec malesuada interdum est vulputate eu. Sed auctor condimentum ornare id amet venenatis. Nunc lorem turpis elit scelerisque varius. Orci non blandit diam eget.";
	return (
		<section className="relative w-full lg:min-h-[104.167vw] min-h-[413.256vw] flex flex-col justify-around items-center bg-white-MainPage">
			<img
				className="absolute top-[4.271vw] w-full aspect-[1920/458] z-0 lg:flex hidden"
				src="/image/OurServices/ServicesHero/bg.png"
				alt="bg"
				draggable="false"
			/>
			<img
				className="absolute top-[0] w-full aspect-[430/195] z-0 lg:hidden"
				src="/image/OurServices/ServicesHero/bg-mobile.png"
				alt="bg"
				draggable="false"
			/>
			<div className="w-fit flex flex-col items-center gap-y-[0.417vw] mt-[4.271vw]">
				<p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] lg:leading-[1.563vw] leading-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
					Who We Are
				</p>
				<h1 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] lg:leading-[2.448vw] leading-[6.977vw] text-neutral-g">
					About ArachnoVa
				</h1>
			</div>
			<div className="relative w-fit h-fit">
				<img
					src="/image/AboutUs/blur-left.png"
					className="absolute -left-[19.083vw] -bottom-[10.917vw] lg:w-[45.552vw] w-[50vw] aspect-[433/235] z-0 lg:flex hidden"
					alt="blur"
				/>
				<img
					src="/image/AboutUs/blur-right.png"
					className="absolute lg:-right-[11.208vw] -right-[5vw] -top-[15vw] lg:w-[28.24vw] w-[40vw] aspect-[225/321] z-0 lg:flex hidden"
				/>
				<img
					src="/image/AboutUs/blur-left-mobile.png"
					className="absolute z-0 w-[100vw] aspect-[430/576] -left-[5vw] -bottom-[49vw] lg:hidden flex"
					alt="blur"
				/>
				<img
					src="/image/AboutUs/blur-right-mobile.png"
					className="absolute z-0 w-[65.349vw] aspect-[281/621] -right-[5vw] -top-[50vw] lg:hidden flex"
				/>
				<div
					className="relative lg:w-[58.75vw] w-[90.698vw] lg:aspect-[1128/414] aspect-[390/612] justify-center items-center flex flex-col lg:rounded-[0.833vw] rounded-[3.721vw] lg:border-[0.104vw] border-[0.698vw] border-white z-10"
					style={{ background: "rgba(241, 245, 249, 0.50)" }}
				>
					<div className="absolute lg:top-[0.677vw] top-[3.023vw] lg:left-[0.677vw] left-[3.023vw] flex flex-row lg:w-[3.125vw] w-[12.093vw] justify-between">
						<div
							className="lg:w-[0.729vw] w-[2.791vw] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
								boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
							}}
						/>
						<div
							className="lg:w-[0.729vw] w-[2.791vw] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
								boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
							}}
						/>
						<div
							className="lg:w-[0.729vw] w-[2.791vw] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
								boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
							}}
						/>
					</div>
					<div className="w-fit flex flex-col justify-center items-center mb-[1.25vw]">
						<img
							src="/image/AboutUs/logo.png"
							alt="logo"
							className="lg:w-[4.583vw] w-[18.372vw] lg:aspect-[88/65] aspect-[79/58]"
							draggable="false"
						/>
						<p className="font-CoolveticaReg lg:text-[2.604vw] text-[9.302vw] text-[#1AB0C8]">
							ARACHNOVA
						</p>
					</div>
					<div className="lg:w-[54.583vw] w-[82.791vw] lg:aspect-[1048/3] aspect-[356/3] bg-neutral-d opacity-50" />
					<p className="lg:w-[53.333vw] w-[82.791vw] lg:mt-[0.677vw] mt-[4.186vw] font-SourceSansProSemibold lg:text-[1.042vw] text-[4.186vw] text-neutral-g text-justify">
						{Description}
					</p>
				</div>
			</div>
			<div
				className="flex lg:flex-row flex-col justify-between lg:items-center items-start lg:w-[40.625vw] w-[90.698vw] lg:aspect-[702/111] aspect-[390/253] lg:p-[2.083vw] p-[9.302vw] bg-white lg:rounded-[1.042vw] rounded-[4.651vw] lg:border-[0.156vw] border-[0.698vw] border-[#E2E8F0] lg:mb-[2.604vw]"
				style={{ boxShadow: "0px 10px 40px -10px rgba(71, 85, 105, 0.25)" }}
			>
				<div className="lg:w-[15.35vw] w-[61.395vw] flex flex-col items-start justify-center">
					<h1 className="font-SourceSansProBold lg:text-[2.083vw] text-[6.977vw] text-neutral-g">
						Get In Touch
					</h1>
					<p className="font-SourceSansProSemibold lg:text-[1.042vw] text-[4.186vw] text-neutral-e">
						Let's Connect and Create Together Reach Out to Us Today!
					</p>
				</div>
				<div className="w-[17.135vw] lg:flex hidden flex-row justify-between items-center">
					<SocialMediaIcon
						Icon={<IoIosMail size="2.708vw" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="2.448vw" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="2.448vw" className="text-white" />}
						href={whatsapp}
					/>
				</div>
				<div className="w-[52.791vw] flex lg:hidden flex-row justify-between items-center mt-[5.581vw]">
					<SocialMediaIcon
						Icon={<IoIosMail size="7.907vw" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="7.209vw" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="7.209vw" className="text-white" />}
						href={whatsapp}
					/>
				</div>
			</div>
			<div className="lg:w-[66.667vw] lg:h-fit w-[90.698vw] h-[113.767vw] flex flex-col lg:flex-row justify-between items-center lg:mb-[10vw]">
				<ContentBox
					Title="Vision"
					Description="Lorem ipsum dolor sit amet consectetur. Aliquam natoque nec porta eget convallis fames. Erat sit mauris in rhoncus in convallis posuere. Nibh dictum vitae nec tristique elit imperdiet. Ut mauris leo est ultricies nunc nunc eu. Elementum magna ac ut justo at sed eget. A at quis porta."
					Background="linear-gradient(65deg, rgba(107, 179, 231, 0.50) 6.41%, rgba(209, 248, 241, 0.50) 101.04%)"
					Border="border-[#76BDE4]"
				/>
				<ContentBox
					Title="Mission"
					Description="Lorem ipsum dolor sit amet consectetur. Aliquam natoque nec porta eget convallis fames. Erat sit mauris in rhoncus in convallis posuere. Nibh dictum vitae nec tristique elit imperdiet. Ut mauris leo est ultricies nunc nunc eu. Elementum magna ac ut justo at sed eget. A at quis porta."
					Background="linear-gradient(107deg, rgba(118, 188, 239, 0.50) -5.5%, rgba(135, 213, 224, 0.50) 106.23%)"
					Border="border-[#52CEE0]"
				/>
			</div>
		</section>
	);
};

export default AboutUs;
