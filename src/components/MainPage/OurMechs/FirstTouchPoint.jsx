import Content from "./Content";
import { IoCall } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";
import { IoFolder } from "react-icons/io5";
import Image from "next/image";

const FirstTouchPoint = () => {
	return (
		<>
			<div className="relative w-[31.458vw] h-[31.354vw] lg:flex hidden flex-col justify-center items-center">
				<div className="absolute w-[55vw] aspect-[1037/1070] z-[9] -right-[10vw] -top-[20vw]">
					<Image
						src="/image/OurMechs/bg-right.png"
						alt="bg"
						fill
						className="object-contain"
						draggable="false"
					/>
				</div>
				<Content
					Title="Contact Us"
					List={
						<>
							<li>Lorem ipsum dolor sit amet consectetur. </li>
							<li>
								At tempor massa integer porttitor egestas vitae turpis nisi
								neque.
							</li>
							<li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
						</>
					}
					Icon={
						<>
							<IoCall size="1.042vw" className="text-[#0893D4]" />
						</>
					}
					Position="absolute left-0 top-0 z-[10]"
				/>
				<Content
					Title="Consultation"
					List={
						<>
							<li>Lorem ipsum dolor sit amet consectetur. </li>
							<li>
								At tempor massa integer porttitor egestas vitae turpis nisi
								neque.
							</li>
							<li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
						</>
					}
					Icon={<IoChatbubbles size="1.042vw" className="text-[#0893D4]" />}
					Position="absolute top-[9.583vw] left-[13.177vw] z-[20]"
					Variant="Left"
				/>
				<Content
					Title="Pre-Execution"
					List={
						<>
							<li>Lorem ipsum dolor sit amet consectetur. </li>
							<li>
								At tempor massa integer porttitor egestas vitae turpis nisi
								neque.
							</li>
							<li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
						</>
					}
					Icon={<IoFolder size="1.042vw" className="text-[#0893D4]" />}
					Position="absolute left-[2.969vw] bottom-0 z-[30]"
				/>
			</div>
			{/* Mobile Version */}
			<div className="relative w-fit h-[143.721vw] flex lg:hidden flex-col justify-between">
				<Content
					Title="Contact Us"
					List={
						<>
							<li>Lorem ipsum dolor sit amet consectetur. </li>
							<li>
								At tempor massa integer porttitor egestas vitae turpis nisi
								neque.
							</li>
							<li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
						</>
					}
					Icon={
						<>
							<IoCall size="4.186vw" className="text-[#0893D4]" />
						</>
					}
				/>
				<Content
					Title="Consultation"
					List={
						<>
							<li>Lorem ipsum dolor sit amet consectetur. </li>
							<li>
								At tempor massa integer porttitor egestas vitae turpis nisi
								neque.
							</li>
							<li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
						</>
					}
					Icon={<IoChatbubbles size="4.186vw" className="text-[#0893D4]" />}
					Variant="Left"
				/>
				<Content
					Title="Pre-Execution"
					List={
						<>
							<li>Lorem ipsum dolor sit amet consectetur. </li>
							<li>
								At tempor massa integer porttitor egestas vitae turpis nisi
								neque.
							</li>
							<li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
						</>
					}
					Icon={<IoFolder size="4.186vw" className="text-[#0893D4]" />}
				/>
			</div>
		</>
	);
};

export default FirstTouchPoint;
