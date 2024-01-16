import { IoCall } from "react-icons/io5";
import ContentHeader from "./ContentHeader";

const Content = ({ Title, Icon, List, Variant, Position }) => {
  return (
    <div
      className={`${Position} w-[18.281vw] h-[11.563vw] flex flex-col items-center border-solid rounded-[0.833vw] border-[0.104vw] border-white z-[10]`}
      style={{ background: "rgba(241, 245, 249, 0.50)" }}
    >
      <ContentHeader Title={Title} Icon={Icon} Variant={Variant} />
      <div className="w-[15.104vw] font-SourceSansProSemibold text-[0.938vw] ml-[1.563vw]">
        <ul className="list-disc text-neutral-e leading-[1.146vw]">{List}</ul>
      </div>
    </div>
  );
};

export default Content;
