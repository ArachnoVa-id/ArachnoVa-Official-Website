import ContentSlider from "./ContentSlider";

const Content = ({ data }) => {
  return (
    <>
      <div className="flex justify-center items-center w-[35.729vw] h-[20.833vw] bg-[#FBFCFD] rounded-[0.781vw] border-solid border-[#E2E8F0] border-[0.156vw]">
        <div className="flex justify-center items-center w-[34.167vw] h-[19.271vw] rounded-[0.521vw] overflow-hidden">
          <ContentSlider data={data} />
        </div>
      </div>
    </>
  );
};

export default Content;
