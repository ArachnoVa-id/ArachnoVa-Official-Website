"use client";

import Container from "./Container";
import { useState } from "react";
import { FaHandshake } from "react-icons/fa6";
import FirstTouchPoint from "./FirstTouchPoint";
import ProjectExecution from "./ProjectExecution";
import FutureTouchPoints from "./FutureTouchPoints";
import FinishingProject from "./FinishingProject";
import BorderSeparator from "../BorderSeparator/BorderSeparator";

const OurMechs = () => {
	const [firstTouchPoint, setFirstTouchPoint] = useState(true);
	const [projectExecution, setProjectExecution] = useState(false);
	const [finishingTheProject, setFinishingTheProject] = useState(false);
	const [futureTouchPoints, setFutureTouchPoints] = useState(false);

	const handleFirstTouchPoint = () => {
		setFirstTouchPoint(true);
		setProjectExecution(false);
		setFinishingTheProject(false);
		setFutureTouchPoints(false);

		console.log("First Touch Point Displayed");
	};

	const handleProjectExecution = () => {
		setFirstTouchPoint(false);
		setProjectExecution(true);
		setFinishingTheProject(false);
		setFutureTouchPoints(false);

		console.log("Project Execution Displayed");
	};

	const handleFinishingTheProject = () => {
		setFirstTouchPoint(false);
		setProjectExecution(false);
		setFinishingTheProject(true);
		setFutureTouchPoints(false);

		console.log("Finishing the Project Displayed");
	};

	const handleFutureTouchPoints = () => {
		setFirstTouchPoint(false);
		setProjectExecution(false);
		setFinishingTheProject(false);
		setFutureTouchPoints(true);

		console.log("Future Touch Points Displayed");
	};
	return (
		<section className="relative flex flex-col w-full lg:min-h-[59.74vw] min-h-[885.581vw] justify-center items-center bg-white-MainPage">
			<div className="w-[70.521vw] h-[44.792vw] hidden lg:flex flex-col gap-y-[2.083vw]">
				<div className="w-[28.385vw] flex flex-col">
					<p className="font-SourceSansProBold text-[1.042vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
						Simple Steps, Remarkable Solutions
					</p>
					<h1 className="font-SourceSansProBold text-[1.823vw] text-neutral-g leading-[1.563vw] mt-[0.521vw]">
						How Our Mechanism Can <br /> Help You Build Your Dream Website
					</h1>
					<p className="font-SourceSansProSemibold text-[1.042vw] text-neutral-e mt-[1.042vw]">
						Dengan ArachnoVa, Anda dapat membangun situs web impian Anda.
						Mekanisme kami sederhana dan efektif, Anda memberi tahu kami apa
						yang Anda inginkan, dan kami mewujudkannya
					</p>
				</div>
				<div className="w-full flex flex-row justify-between">
					<div className="w-fit flex flex-col">
						<Container
							Title="First Touch Point"
							Description="Lorem ipsum dolor sit amet consectetur. Consequat gravida libero tortor vulputate morbi."
							Icon={
								<img
									src="/image/OurMechs/icon-1.png"
									className="w-[2vw] aspect-[21/17]"
									draggable="false"
									alt="icon"
								/>
							}
							State={firstTouchPoint}
							Clicked={handleFirstTouchPoint}
						/>
						<Container
							Title="Project Execution"
							Description="Lorem ipsum dolor sit amet consectetur. Consequat gravida libero tortor vulputate morbi."
							Icon={
								<img
									src="/image/OurMechs/icon-2.png"
									className="w-[1.563vw] aspect-[1/1]"
									draggable="false"
									alt="icon"
								/>
							}
							State={projectExecution}
							Clicked={handleProjectExecution}
						/>
						<Container
							Title="Finishing the Project"
							Description="Lorem ipsum dolor sit amet consectetur. Consequat gravida libero tortor vulputate morbi."
							Icon={
								<img
									src="/image/OurMechs/icon-3.png"
									className="w-[1.563vw] aspect-[1/1]"
									draggable="false"
									alt="icon"
								/>
							}
							State={finishingTheProject}
							Clicked={handleFinishingTheProject}
						/>
						<Container
							Title="Future Touch Points"
							Description="Lorem ipsum dolor sit amet consectetur. Consequat gravida libero tortor vulputate morbi."
							Icon={
								<img
									src="/image/OurMechs/icon-4.png"
									className="w-[1.563vw] aspect-[1/1]"
									draggable="false"
									alt="icon"
								/>
							}
							State={futureTouchPoints}
							Clicked={handleFutureTouchPoints}
						/>
					</div>
					<>
						{firstTouchPoint ? (
							<>
								<FirstTouchPoint />
							</>
						) : (
							""
						)}
						{projectExecution ? (
							<>
								<ProjectExecution />
							</>
						) : (
							""
						)}
						{finishingTheProject ? (
							<>
								<FinishingProject />
							</>
						) : (
							""
						)}
						{futureTouchPoints ? (
							<>
								<FutureTouchPoints />
							</>
						) : (
							""
						)}
					</>
				</div>
			</div>
			{/* Mobile Version */}
			<div className="w-fit h-fit flex items-center flex-col lg:hidden gap-y-[13.953vw]">
				<div className="w-[90.698vw] lg:hidden flex flex-col gap-y-[1.86vw]">
					<p className="font-SourceSansProBold text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
						Simple Steps, Remarkable Solutions
					</p>
					<h1 className="font-SourceSansProBold text-[6.977vw] text-neutral-g leading-[6.977vw] mt-[0.521vw]">
						How Our Mechanism Can <br /> Help You Build Your Dream Website
					</h1>
					<p className="font-SourceSansProSemibold text-[4.186vw] text-neutral-e mt-[1.042vw]">
						Dengan ArachnoVa, Anda dapat membangun situs web impian Anda.
						Mekanisme kami sederhana dan efektif, Anda memberi tahu kami apa
						yang Anda inginkan, dan kami mewujudkannya
					</p>
				</div>
				<div className="flex flex-col w-fit h-[763.721vw] justify-between items-center">
					<div className="relative flex flex-col w-fit h-fit justify-center items-center">
						<img
							src="/image/OurMechs/bg-mobile-left.png"
							className="w-[120.698vw] aspect-[621/632] z-[0] absolute -left-[25vw] -bottom-[10vw]"
							alt="bg"
							draggable="false"
						/>
						<img
							src="/image/OurMechs/bg-mobile-right.png"
							className="w-[120.698vw] aspect-[598/600] z-[0] absolute -right-[25vw] top-[25vw]"
							alt="bg"
							draggable="false"
						/>
						<Container
							Title="First Touch Point"
							Description="Lorem ipsum dolor sit amet consectetur. Consequat gravida libero tortor vulputate morbi."
							Icon={
								<img
									src="/image/OurMechs/icon-1.png"
									className="w-[6.512vw] aspect-[21/17]"
									draggable="false"
									alt="icon"
								/>
							}
						/>
						<FirstTouchPoint />
					</div>

					<div className="relative flex flex-col w-fit h-fit justify-center items-center">
						<img
							src="/image/OurMechs/bg-mobile-left.png"
							className="w-[120.698vw] aspect-[621/632] z-[0] absolute -left-[25vw] -bottom-[10vw]"
							alt="bg"
							draggable="false"
						/>
						<img
							src="/image/OurMechs/bg-mobile-right.png"
							className="w-[120.698vw] aspect-[598/600] z-[0] absolute -right-[25vw] top-[25vw]"
							alt="bg"
							draggable="false"
						/>
						<Container
							Title="Project Execution"
							Description="Lorem ipsum dolor sit amet consectetur. Consequat gravida libero tortor vulputate morbi."
							Icon={
								<img
									src="/image/OurMechs/icon-2.png"
									className="w-[6.512vw] aspect-[1/1]"
									draggable="false"
									alt="icon"
								/>
							}
						/>
						<ProjectExecution />
					</div>

					<div className="relative flex flex-col w-fit h-fit justify-center items-center">
						<img
							src="/image/OurMechs/bg-mobile-left.png"
							className="w-[120.698vw] aspect-[621/632] z-[0] absolute -left-[25vw] -bottom-[10vw]"
							alt="bg"
							draggable="false"
						/>
						<img
							src="/image/OurMechs/bg-mobile-right.png"
							className="w-[120.698vw] aspect-[598/600] z-[0] absolute -right-[25vw] top-[25vw]"
							alt="bg"
							draggable="false"
						/>
						<Container
							Title="Finishing the Project"
							Description="Lorem ipsum dolor sit amet consectetur. Consequat gravida libero tortor vulputate morbi."
							Icon={
								<img
									src="/image/OurMechs/icon-3.png"
									className="w-[6.512vw] aspect-[1/1]"
									draggable="false"
									alt="icon"
								/>
							}
						/>
						<FinishingProject />
					</div>

					<div className="relative flex flex-col w-fit h-fit justify-center items-center">
						<img
							src="/image/OurMechs/bg-mobile-left.png"
							className="w-[120.698vw] aspect-[621/632] z-[0] absolute -left-[25vw] -bottom-[10vw]"
							alt="bg"
							draggable="false"
						/>
						<img
							src="/image/OurMechs/bg-mobile-right.png"
							className="w-[120.698vw] aspect-[598/600] z-[0] absolute -right-[25vw] top-[25vw]"
							alt="bg"
							draggable="false"
						/>
						<Container
							Title="Future Touch Points"
							Description="Lorem ipsum dolor sit amet consectetur. Consequat gravida libero tortor vulputate morbi."
							Icon={
								<img
									src="/image/OurMechs/icon-4.png"
									className="w-[6.047vw] aspect-[1/1]"
									draggable="false"
									alt="icon"
								/>
							}
						/>
						<FutureTouchPoints />
					</div>
				</div>
			</div>
			<BorderSeparator />
		</section>
	);
};

export default OurMechs;
