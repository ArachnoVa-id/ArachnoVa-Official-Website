import Content from "./Content";
import { IoIosPeople } from "react-icons/io";
import { IoIosArchive } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const ProjectExecution = () => {
  return (
    <div className="relative w-[31.458vw] h-[31.354vw] flex flex-col justify-center items-center">
      <img
        src="/image/OurMechs/bg-right.png"
        className="absolute w-[40vw] aspect-[1037/1070] z-[9] right-[0vw]"
        alt="bg"
        draggable="false"
      />
      <Content
        Title="Meeting"
        List={
          <>
            <li>Lorem ipsum dolor sit amet consectetur. </li>
            <li>At tempor massa integer porttitor </li>
          </>
        }
        Icon={
          <>
            <IoIosPeople size="1.042vw" className="text-[#0893D4]" />
          </>
        }
        Position="absolute right-0 top-0 z-[10]"
      />
      <Content
        Title="Aggrement"
        List={
          <>
            <li>Lorem ipsum dolor sit amet consectetur. </li>
            <li>
              At tempor massa integer porttitor egestas vitae turpis nisi neque.
            </li>
            <li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
          </>
        }
        Icon={<IoIosArchive size="1.042vw" className="text-[#0893D4]" />}
        Position="absolute top-[7.604vw] -left-[1.51vw] z-[20]"
        Variant="Left"
      />
      <Content
        Title="Production"
        List={
          <>
            <li>Lorem ipsum dolor sit amet consectetur. </li>
            <li>
              At tempor massa integer porttitor egestas vitae turpis nisi neque.
            </li>
            <li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
          </>
        }
        Icon={<IoSettings size="1.042vw" className="text-[#0893D4]" />}
        Position="absolute right-[2.031vw] bottom-[2.604vw] z-[30]"
      />
    </div>
  );
};

export default ProjectExecution;
