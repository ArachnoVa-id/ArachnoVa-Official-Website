import { FaHandshake } from "react-icons/fa6";

const Container = ({ Icon, Title, Description, State, Clicked }) => {
	const style = State
		? "border-[0.129vw] border-[#E2E8F0] bg-white"
		: "bg-transparent";
	return (
		<div
			className={`lg:w-[32.917vw] lg:h-[6.875vw] w-[90.698vw] h-[29.07vw] flex flex-row lg:p-[1.25vw] gap-x-[1.042vw] rounded-[0.729vw] lg:cursor-pointer z-50 ${style}}`}
			onClick={Clicked}
		>
			<div className="w-fit h-fit lg:flex hidden">{Icon}</div>
			<div className="flex flex-col gap-y-[0.469vw]">
				<div className="w-fit h-fit flex lg:hidden">{Icon}</div>
				<p className="font-SourceSansProBold lg:text-[1.458vw] text-[4.651vw]/[6.977vw] text-neutral-g lg:leading-[1.563vw]">
					{Title}
				</p>
				<p className="font-SourceSansProSemibold lg:text-[0.833vw] text-[3.721vw] lg:leading-normal leading-[4.651vw] text-[#64748B]">
					{Description}
				</p>
			</div>
		</div>
	);
};

export default Container;
