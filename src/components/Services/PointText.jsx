const PointText = ({ Title, Description, Icon, Variant }) => {
  const Left =
    Variant === "left" ? (
      <div className="flex flex-col">
        <h1 className="font-SourceSansProSemibold text-[1.042vw] text-neutral-g">
          {Title}
        </h1>
        <p className="font-SourceSansProSemibold text-[0.938vw] text-neutral-e">
          {Description}
        </p>
      </div>
    ) : (
      <img
        src={Icon}
        alt="icon"
        className="lg:w-[3.646vw] w-[12.558vw] aspect-[1/1]"
      />
    );
  const Right =
    Variant === "left" ? (
      <img src={Icon} alt="icon" className="w-[3.646vw] aspect-[1/1]" />
    ) : (
      <div className="flex flex-col">
        <h1 className="font-SourceSansProSemibold lg:text-[1.042vw] text-[4.186vw] text-neutral-g">
          {Title}
        </h1>
        <p className="font-SourceSansProSemibold lg:text-[0.938vw] text-[3.488vw] text-neutral-e">
          {Description}
        </p>
      </div>
    );
  const Position = Variant === "left" ? "justify-end text-right" : "";
  return (
    <div
      className={`w-full lg:h-[3.646vw] h-[20.023vw] flex flex-row items-start lg:gap-x-[0.938vw] gap-x-[2.558vw] ${Position}`}
    >
      {Left}
      {Right}
    </div>
  );
};

export default PointText;
