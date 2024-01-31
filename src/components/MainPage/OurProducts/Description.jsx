import Button from "@/components/AllPage/Button/Button";

const Description = ({ Title, Description, Variant, href }) => {
	const VarianStyle =
		Variant === "Right"
			? "items-end justify-end"
			: Variant === "Left"
			? "items-start justify-start"
			: "justify-center items-center text-justify";
	const ButtonMobile = () => {
		return (
			<button className="w-[77.907vw] aspect-[335/40] rounded-[1.86vw] flex lg:hidden items-center justify-center bg-gradient-to-br from-[#2EC1D9] to-[#179FB5] hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out">
				<p className="font-InterBold text-[3.256vw] text-neutral-a">
					Learn More
				</p>
			</button>
		);
	};
	const mobile_button = Variant ? "" : <ButtonMobile />;
	return (
		<>
			<div
				className={`flex flex-col lg:w-[27.865vw] w-[79.07vw] ${VarianStyle} lg:gap-y-[0.521vw] gap-y-[3.256vw]`}
			>
				<h2 className="font-SourceSansProBold lg:text-[1.823vw] text-[5.581vw] text-neutral-g">
					{Title}
				</h2>
				<p className="font-SourceSansProSemibold lg:text-[1.042vw] text-[3.256vw] text-neutral-e">
					{Description}
				</p>
				<Button Text="Learn More" href={href} />
				{mobile_button}
			</div>
		</>
	);
};

export default Description;
