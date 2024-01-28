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
    Variant === "left"
      ? "items-end ml-[1.667vw]"
      : "items-start lg:mr-[1.667vw]";
  const Text = Variant === "left" ? "text-right" : "text-left";
  return (
    <div
      className={`lg:w-[26.615vw] w-[75.581vw] lg:h-[21.979vw] h-[77.907vw] flex flex-col lg:justify-between justify-end ${Position} lg:mt-0 mt-[7.209vw]`}
    >
      <h1 className="font-SourceSansProBold text-neutral-g text-[2.083vw] hidden lg:flex">
        {Title}
      </h1>
      <p
        className={`font-SourceSansProSemibold text-neutral-e lg:text-[1.042vw] text-[4.186vw] lg:mb-0 mb-[4.186vw] ${Text}`}
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
