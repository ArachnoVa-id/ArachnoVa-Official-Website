// src/app/academy/page.js
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function AcademyPage() {
  // Example condition for redirection
  const shouldRedirect = true;

  if (shouldRedirect) {
    redirect('https://forms.gle/47BD69dSta8wDPrV8'); // The URL to redirect to
  }

  return (
    <section className="relative w-full lg:min-h-[104.167vw] min-h-[413.256vw] flex flex-col justify-around items-center bg-white-MainPage">
    <div
				className="w-fit flex flex-col items-center gap-y-[0.417vw] lg:mt-[4.271vw] mt-[15vw]"
				data-aos="fade-down"
			>
				<p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] lg:leading-[1.563vw] leading-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
					Redirecting to...
				</p>
				<h1 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] lg:leading-[2.448vw] leading-[6.977vw] text-neutral-g">
					ArachnoVa Academy
				</h1>
			</div>
			<div className="relative w-fit h-fit" data-aos="fade-up">
				<div className="absolute -left-[23.083vw] -bottom-[13.917vw] lg:w-[55.552vw] w-[50vw] aspect-[433/235] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-left.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute lg:-right-[11.208vw] -right-[10vw] -top-[25vw] lg:w-[40.24vw] w-[40vw] aspect-[225/321] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-right.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[100vw] aspect-[430/576] -left-[5vw] -bottom-[49vw] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-left-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[65.349vw] aspect-[281/621] -right-[5vw] -top-[50vw] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-right-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div
					className="relative lg:w-[58.75vw] w-[90.698vw] lg:aspect-[1128/414] aspect-[390/612] justify-center items-center flex flex-col lg:rounded-[0.833vw] rounded-[3.721vw] lg:border-[0.104vw] border-[0.698vw] border-white z-10"
					style={{
						background: "rgba(241, 245, 249, 0.50)",
						boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
					}}
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
						<div className="relative lg:w-[4.583vw] w-[18.372vw] lg:aspect-[88/65] aspect-[79/58]">
							<Image
								src="/image/AboutUs/logo.png"
								alt="logo"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<p className="font-CoolveticaReg lg:text-[2.604vw] text-[9.302vw] text-[#1AB0C8]">
							ARACHNOVA
						</p>
					</div>
					<div className="lg:w-[54.583vw] w-[82.791vw] lg:aspect-[1048/3] aspect-[356/3] bg-neutral-d opacity-50" />
					<p className="lg:w-[53.333vw] w-[82.791vw] lg:mt-[0.677vw] mt-[4.186vw] font-SourceSansProSemibold lg:text-[1.042vw] text-[4.186vw] text-neutral-g text-justify">
						{""}
					</p>
				</div>
			</div>
    </section>
  );
}
