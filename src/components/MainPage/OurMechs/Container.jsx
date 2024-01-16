import { FaHandshake } from "react-icons/fa6";

const Container = ({ Icon, Title, Description, State, Clicked }) => {
  const style = State
    ? "border-[0.104vw] border-[#E2E8F0] bg-white"
    : "bg-transparent";
  return (
    <div
      className={`w-[32.917vw] h-[6.875vw] flex flex-row p-[1.25vw] gap-x-[1.042vw] rounded-[0.729vw] cursor-pointer z-50 ${style}}`}
      onClick={Clicked}
    >
      <div className="w-fit h-fit">{Icon}</div>
      <div className="flex flex-col gap-y-[0.469vw]">
        <p className="font-SourceSansProBold text-[1.458vw] text-neutral-g leading-[1.563vw]">
          {Title}
        </p>
        <p className="font-SourceSansProSemibold text-[0.833vw] text-[#64748B]">
          {Description}
        </p>
      </div>
    </div>
  );
};

export default Container;
