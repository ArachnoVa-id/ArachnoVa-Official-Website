import Content from "./Content";
import { IoCall } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";
import { IoFolder } from "react-icons/io5";

const FirstTouchPoint = () => {
  return (
    <div className="relative w-[31.458vw] h-[31.354vw] flex flex-col justify-center items-center">
      <img
        src="/image/OurMechs/bg-right.png"
        className="absolute w-[40vw] aspect-[1037/1070] z-[9] right-[0vw]"
        alt="bg"
        draggable="false"
      />
      <Content
        Title="Contact Us"
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
              At tempor massa integer porttitor egestas vitae turpis nisi neque.
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
              At tempor massa integer porttitor egestas vitae turpis nisi neque.
            </li>
            <li>Vitae varius lorem neque ante eu pretium volutpat nunc.</li>
          </>
        }
        Icon={<IoFolder size="1.042vw" className="text-[#0893D4]" />}
        Position="absolute left-[2.969vw] bottom-0 z-[30]"
      />
    </div>
  );
};

export default FirstTouchPoint;