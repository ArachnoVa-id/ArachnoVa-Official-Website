const ContentBox = ({ Title, Description, Background, Border }) => {
  return (
    <div
      className={`w-[31.667vw] aspect-[608/316] flex flex-col justify-center items-center rounded-[0.833vw] border-[0.156vw] ${Border}`}
      style={{
        background: Background,
      }}
    >
      <h1 className="font-SourceSansProBold text-[2.083vw] text-neutral-g">
        Our <span className="text-[#0893D4]">{Title}</span>
      </h1>
      <p className="w-[25.938vw] font-SourceSansProSemibold text-[1.042vw] text-neutral-e">
        {Description}
      </p>
    </div>
  );
};

export default ContentBox;
