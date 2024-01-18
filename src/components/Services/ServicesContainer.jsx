import RightContent from "./RightContent";

const ServicesContainer = ({
  SlideContent,
  Title,
  Description,
  Function,
  Duration,
  Pages,
  Variant,
}) => {
  const Position = Variant === "left" ? "left-0" : "right-0";
  const Left =
    Variant === "left" ? (
      <RightContent
        Title={Title}
        Description={Description}
        Function={Function}
        Duration={Duration}
        Pages={Pages}
        Variant="left"
      />
    ) : (
      SlideContent
    );
  const Right =
    Variant === "left" ? (
      SlideContent
    ) : (
      <RightContent
        Title={Title}
        Description={Description}
        Function={Function}
        Duration={Duration}
        Pages={Pages}
      />
    );
  return (
    <div className="relative w-[73.021vw] h-[31.458vw] flex flex-row justify-between items-center z-10 mt-[2.083vw]">
      <div
        className={`w-[52.5vw] h-[31.458vw] absolute ${Position} bg-[#F1F4F4] rounded-[1.563vw] -z-10`}
      />
      {Left}
      {Right}
    </div>
  );
};

export default ServicesContainer;
