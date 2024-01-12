import Button from "@/components/AllPage/Button/Button";

const Description = ({ Title, Description, Variant }) => {
  const VarianStyle =
    Variant === "Right"
      ? "items-end justify-end"
      : Variant === "Left"
      ? "items-start justify-start"
      : "";
  return (
    <>
      <div
        className={`flex flex-col w-[27.865vw] ${VarianStyle} gap-y-[0.521vw]`}
      >
        <h2 className="font-SourceSansProBold text-[1.823vw] text-neutral-g">
          {Title}
        </h2>
        <p className="font-SourceSansProSemibold text-[1.042vw] text-neutral-e">
          {Description}
        </p>
        <Button Text="Learn More" />
      </div>
    </>
  );
};

export default Description;
