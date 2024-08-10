import Image from "next/image";

const OptionButton = ({ _key, icon, text, selected }) => {
  const bordercolor = (key, selected) => {
    if (_key === selected) {
      return "border-[#1AB0C8]";
    } else {
      return "border-[#E2E8F0]";
    }
  };
  return (
    <div
      className={`flex justify-start items-center bg-[#FAFDFF] 
                  ${bordercolor(_key, selected)}
                  lg:min-w-[15.625vw] lg:h-[4.688vw] lg:p-[1.042vw] lg:gap-[1.042vw] lg:rounded-[0.781vw] lg:border-[0.156vw] lg:shadow-[0px_0.469vw_1.042vw_0.156vw_rgba(0,0,0,0.15)]`}
    >
      <div className="lg:w-[2.604vw]">
        <Image
          src={icon}
          draggable="false"
          alt="icon"
          style={{ width: "100%", height: "auto" }}
          width="86"
          height="86"
        />
      </div>
      <div
        className="font-SourceSansProBold text-[#001118] text-nowrap
                   lg:text-[1.458vw]"
      >
        {text}
      </div>
    </div>
  );
};

export default OptionButton;
