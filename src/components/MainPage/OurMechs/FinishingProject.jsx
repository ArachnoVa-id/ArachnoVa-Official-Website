import Content from "./Content";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { BsBoxFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";

const FinishingProject = () => {
  return (
    <div className="relative w-[31.458vw] h-[31.354vw] flex flex-col justify-center items-center">
      <img
        src="/image/OurMechs/bg-right.png"
        className="absolute w-[40vw] aspect-[1037/1070] z-[9] right-[0vw]"
        alt="bg"
        draggable="false"
      />
      <Content
        Title="Deployment"
        List={
          <>
            <li>Lorem ipsum dolor sit amet consectetur. </li>
            <li>
              At tempor massa integer porttitor egestas vitae turpis nisi neque.
            </li>
            <li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
          </>
        }
        Icon={
          <>
            <BsFillCloudArrowUpFill size="1.042vw" className="text-[#0893D4]" />
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
              At tempor massa integer porttitor egestas vitae turpis nisi neque.
            </li>
            <li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
          </>
        }
        Icon={<FaLaptopCode size="1.042vw" className="text-[#0893D4]" />}
        Position="absolute right-[2.031vw] bottom-[2.604vw] z-[30]"
      />
    </div>
  );
};

export default FinishingProject;
