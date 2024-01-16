"use client";

import Container from "./Container";
import { useState } from "react";
import { FaHandshake } from "react-icons/fa6";
import FirstTouchPoint from "./FirstTouchPoint";
import ProjectExecution from "./ProjectExecution";
import FutureTouchPoints from "./FutureTouchPoints";
import FinishingProject from "./FinishingProject";

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
  };

  const handleProjectExecution = () => {
    setFirstTouchPoint(false);
    setProjectExecution(true);
    setFinishingTheProject(false);
    setFutureTouchPoints(false);
  };

  const handleFinishingTheProject = () => {
    setFirstTouchPoint(false);
    setProjectExecution(false);
    setFinishingTheProject(true);
    setFutureTouchPoints(false);
  };

  const handleFutureTouchPoints = () => {
    setFirstTouchPoint(false);
    setProjectExecution(false);
    setFinishingTheProject(false);
    setFutureTouchPoints(true);

    console.log("Future Touch Points Displayed");
  };
  return (
    <section className="flex flex-col w-full min-h-[59.74vw] justify-center items-center bg-white-MainPage">
      <div className="w-[70.521vw] h-[44.792vw] flex flex-col gap-y-[2.083vw]">
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
              OnClick={handleFirstTouchPoint}
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
              OnClick={handleProjectExecution}
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
              OnClick={handleFinishingTheProject}
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
    </section>
  );
};

export default OurMechs;
