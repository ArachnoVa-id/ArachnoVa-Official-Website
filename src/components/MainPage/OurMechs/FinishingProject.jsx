import Content from "./Content";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { BsBoxFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import Image from "next/image";

const FinishingProject = () => {
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
					Title="Deployment"
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
							<BsFillCloudArrowUpFill
								size="1.042vw"
								className="text-[#0893D4]"
							/>
						</>
					}
					Position="absolute left-[7.031vw] top-0 z-[10]"
				/>
				<Content
					Title="Handover"
					List={
						<>
							<li>Lorem ipsum dolor sit amet consectetur. </li>
							<li>At tempor massa integer porttitor </li>
						</>
					}
					Icon={<BsBoxFill size="1.042vw" className="text-[#0893D4]" />}
					Position="absolute top-[10.104vw] -left-[0.729vw] z-[20]"
					Variant="Left"
				/>
				<Content
					Title="Maintenance"
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
					Icon={<FaLaptopCode size="1.042vw" className="text-[#0893D4]" />}
					Position="absolute right-[2.031vw] bottom-[2.604vw] z-[30]"
				/>
			</div>

			<div className="w-fit h-[143.721vw] flex lg:hidden flex-col justify-between">
				<Content
					Title="Deployment"
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
							<BsFillCloudArrowUpFill
								size="5.116vw"
								className="text-[#0893D4]"
							/>
						</>
					}
				/>
				<Content
					Title="Handover"
					List={
						<>
							<li>Lorem ipsum dolor sit amet consectetur. </li>
							<li>At tempor massa integer porttitor </li>
						</>
					}
					Icon={<BsBoxFill size="5.581vw" className="text-[#0893D4]" />}
					Variant="Left"
				/>
				<Content
					Title="Maintenance"
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
					Icon={<FaLaptopCode size="5.581vw" className="text-[#0893D4]" />}
				/>
			</div>
		</>
	);
};

export default FinishingProject;
