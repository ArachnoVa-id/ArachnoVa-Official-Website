const ContentHeaderLeft = ({ Title, Icon }) => {
  return (
    <div className="w-[16.042vw] flex flex-row justify-between items-center mt-[0.781vw]">
      {Icon}
      <p className="font-SourceSansProBold text-neutral-g text-[1.25vw]">
        {Title}
      </p>
      <div className="flex flex-row w-[3.125vw] justify-between">
        <div
          className="w-[0.729vw] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
            boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
          }}
        />
        <div
          className="w-[0.729vw] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
            boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
          }}
        />
        <div
          className="w-[0.729vw] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
            boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
          }}
        />
      </div>
    </div>
  );
};

export default ContentHeaderLeft;
