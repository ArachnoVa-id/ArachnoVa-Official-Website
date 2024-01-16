import Content from "./Content";
import { IoCall } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";

const FirstTouchPoint = () => {
  return (
    <div className="relative w-[31.458vw] h-[31.354vw] flex flex-col justify-center items-center">
      <img
        src="/image/OurMechs/bg-right.png"
        className="absolute w-[28.073vw] h-[23.542vw] aspect-[1037/1070] z-[1] -right-[1.563vw]"
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
        Variant="Left"
      />
    </div>
  );
};

export default FirstTouchPoint;
