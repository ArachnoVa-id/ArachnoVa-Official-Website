const ContentCard = ({ img }) => {
  return (
    <>
      <div className="flex justify-center items-center w-[34.167vw] h-[19.271vw] rounded-[0.521vw] border-solid border-[0.104vw] border-[E2E8F0] overflow-hidden">
        <img src={img} className="w-full h-full object-cover" />
      </div>
    </>
  );
};

export default ContentCard;
