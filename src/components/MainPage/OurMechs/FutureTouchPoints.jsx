import { BsBugFill } from "react-icons/bs";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import Content from "./Content";

const FutureTouchPoints = () => {
  return (
    <>
      <div className="relative w-[31.458vw] h-[31.354vw] lg:flex hidden flex-col justify-center items-center">
        <img
          src="/image/OurMechs/bg-right.png"
          className="absolute w-[40vw] aspect-[1037/1070] z-[9] right-[0vw]"
          alt="bg"
          draggable="false"
        />
        <Content
          Title="Problem Fixing"
          List={
            <>
              <li>Lorem ipsum dolor sit amet consectetur. </li>
              <li>At tempor massa integer porttitor </li>
            </>
          }
          Icon={
            <>
              <BsBugFill size="1.042vw" className="text-[#0893D4]" />
            </>
          }
          Position="absolute left-[3.646vw] top-0 z-[10]"
        />
        <Content
          Title="Upgrading"
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
            <FaScrewdriverWrench size="1.042vw" className="text-[#0893D4]" />
          }
          Position="absolute top-[9.167vw] right-0 z-[20]"
          Variant="Left"
        />
        <Content
          Title="More Projects"
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
          Icon={<FaArchive size="1.042vw" className="text-[#0893D4]" />}
          Position="absolute right-[7.865vw] bottom-[0] z-[30]"
        />
      </div>

      <div className="w-fit h-[143.721vw] flex lg:hidden flex-col justify-between">
        <Content
          Title="Problem Fixing"
          List={
            <>
              <li>Lorem ipsum dolor sit amet consectetur. </li>
              <li>At tempor massa integer porttitor </li>
            </>
          }
          Icon={
            <>
              <BsBugFill size="5.581vw" className="text-[#0893D4]" />
            </>
          }
          Variant="Left"
        />
        <Content
          Title="Upgrading"
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
            <FaScrewdriverWrench size="5.581vw" className="text-[#0893D4]" />
          }
        />
        <Content
          Title="More Projects"
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
          Icon={<FaArchive size="5.581vw" className="text-[#0893D4]" />}
          Variant="Left"
        />
      </div>
    </>
  );
};

export default FutureTouchPoints;
