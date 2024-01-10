export default function PortoSection() {
  return (
    <section className="w-full min-h-screen relative  flex flex-row justify-center items-center bg-white-MainPage">
      <div className="flex flex-col">
        <div className="text-neutral-g text-[2.3vw] font-SourceSansProBold flex justify-center ">
          Our Work in Action
        </div>
        <div className="text-neutral-e w-[58vw] text-center text-[1vw] font-SourceSansProSemibold ">
          Lorem ipsum dolor sit amet consectetur. Nunc luctus libero enim dui
          pellentesque dolor mattis lacus. Malesuada accumsan tempor ultrices
          id. Sed et id ut etiam. Et egestas varius at pellentesque nisl cursus
          donec arcu. Nisi elementum lectus imperdiet elit risus. Mi at orci
          nunc leo eget natoque vitae. Urna ut vestibulum id nisl vel nunc.
          Massa scelerisque egestas egestas dictum ut velit feugiat.
        </div>
        <div className="relative py-[2vw]">
          <div className="w-[50vw] h-[50vh] bg-transparent border-[1.2vw] border-[#E2E8F0] rounded-md flex flex-col overflow-y-scroll no-scrollbar  ">
            <img
              alt=""
              src="/image/Porto/HeroEnfo.png"
              className="w-full h-screen"
              draggable="false"
            />
            <img
              alt=""
              src="/image/Porto/AboutUsEnfo.png"
              className="w-full h-screen"
              draggable="false"
            />
          </div>
          <div className="absolute w-[14vw] h-[44vh] bg-black border-[1.2vw] border-[#E2E8F0] rounded-md -bottom-[4vh] right-[0] flex flex-col overflow-y-scroll no-scrollbar  ">
            <img
              alt=""
              src="/image/Porto/HeroEnforianMobile.png"
              className="w-full h-screen"
              draggable="false"
            />
            <img
              alt=""
              src="/image/Porto/HeroEnforianMobile.png"
              className="w-full h-screen"
              draggable="false"
            />
            <img
              alt=""
              src="/image/Porto/AboutUsEnfoMobile.png"
              className="w-full h-screen"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
