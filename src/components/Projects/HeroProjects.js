const HeroProjects = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-a">
      <div className="text-black flex flex-col justify-center items-center mt-[4vw] text-[2.3vw]/[2.2vw]">
        <div className="text-[1.6vw] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] to-[#159E8D]">
          Unleashing Digital Excellence
        </div>
        <div className="text-[2.3vw] font-SourceSansProBold">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] rounded-xl w-[70vw] h-[30vw] flex flex-col justify-end items-center mt-[10vw]">
        <div className="font-SourceSansProBold text-[1.7vw]">
          Lustrum XII DTETI FT UGM
        </div>
        <div className="w-[60vw] text-center font-SourceSansProSemibold mb-[3vw] ">
          Lorem ipsum dolor sit amet consectetur. Tincidunt lectus leo diam id
          turpis urna pellentesque. Lorem turpis lectus magna purus laoreet
          accumsan velit nibh. Malesuada lacus sed auctor neque lacus sed
          ullamcorper. Augue amet egestas ornare at suspendisse. Nibh orci
          pellentesque in massa imperdiet ipsum tristique purus. Gravida eget
          nulla.
        </div>
        <div className="absolute -top-[8vw] w-[50vw] h-[50vh] ">
          <img
            alt=""
            src="/image/Porto/HeroEnfo.png"
            className="absolute w-full h-full rounded-xl  "
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
