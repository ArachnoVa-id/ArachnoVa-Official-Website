const ContentBox = ({ Title, Description, Background, Border }) => {
  return (
    <div
      className={`lg:w-[31.667vw] lg:aspect-[608/316] w-[90.698vw] aspect-[390/234] flex flex-col justify-center items-center lg:rounded-[0.833vw] rounded-[3.721vw] lg:border-[0.156vw] border-[0.698vw] ${Border}`}
      style={{
        background: Background,
      }}
    >
      <h1 className="font-SourceSansProBold lg:text-[2.083vw] text-[6.047vw] text-neutral-g">
        Our <span className="text-[#0893D4]">{Title}</span>
      </h1>
      <p className="lg:w-[25.938vw] w-[79.535vw] font-SourceSansProSemibold lg:text-[1.042vw] text-[4.186vw] text-neutral-e text-justify">
        {Description}
      </p>
    </div>
  );
};

export default ContentBox;
