import PointText from "./PointText";

const RightContent = ({
  Title,
  Description,
  Function,
  Duration,
  Pages,
  Variant,
}) => {
  const Position =
    Variant === "left" ? "items-end ml-[1.667vw]" : "items-start mr-[1.667vw]";
  const Text = Variant === "left" ? "text-right" : "text-left";
  return (
    <div
      className={`w-[26.615vw] h-[21.979vw] flex flex-col justify-between ${Position}`}
    >
      <h1 className="font-SourceSansProBold text-neutral-g text-[2.083vw]">
        {Title}
      </h1>
      <p
        className={`font-SourceSansProSemibold text-neutral-e text-[1.042vw] ${Text}`}
      >
        {Description}
      </p>
      <PointText
        Title="Function"
        Description={Function}
        Icon="/image/OurServices/icon-function.png"
        Variant={Variant}
      />
      <PointText
        Title="Duration"
        Description={Duration}
        Icon="/image/OurServices/icon-duration.png"
        Variant={Variant}
      />
      <PointText
        Title="Pages"
        Description={Pages}
        Icon="/image/OurServices/icon-pages.png"
        Variant={Variant}
      />
    </div>
  );
};

export default RightContent;
