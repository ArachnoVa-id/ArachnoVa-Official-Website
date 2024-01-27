export default function KPUFT() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-a">
      {/* Desktop */}
      <div className="flex max-lg:hidden">
        <div className="w-[40vw] h-[40vh]">
          <img
            alt="Content Prototype"
            src="/image/Porto/HeroEnfo.png"
            className=" w-full h-full rounded-xl  "
            draggable="false"
          />
        </div>

        <div className="w-[20vw] text-black pt-[2vw] ml-[5vw]">
          <h1 className="text-[2vw] font-SourceSansProBold text-end">
            Title Web
          </h1>
          <p className="text-[1vw]/[1.5vw] font-SourceSansProSemibold text-neutral-e text-right">
            Lorem ipsum dolor sit amet consectetur. Praesent phasellus sagittis
            dignissim id egestas aenean dictum et. Gravida enim rutrum
            adipiscing adipiscing sed vitae.
          </p>
          <div className="flex justify-end">
            <button className="w-[6vw] h-[4vh] mt-[1vw] bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] font-InterBold text-white rounded-md text-[0.8vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out  ">
              Source
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[6vw]">
        <h1 className="text-[8vw] font-SourceSansProBold text-neutral-g ">
          Title Web
        </h1>
        <div className="w-[90vw] h-[50vw]">
          <img
            alt="Content Prototype"
            src="/image/Porto/HeroEnfo.png"
            className=" w-full h-full rounded-xl  "
            draggable="false"
          />
        </div>
        <div className="justify-center items-center w-[90vw]">
          <p className="text-[4.5vw]/[4.5vw] font-SourceSansProSemibold text-neutral-e ">
            Lorem ipsum dolor sit amet consectetur. Praesent phasellus sagittis
            dignissim id egestas aenean dictum et. Gravida enim rutrum
            adipiscing adipiscing sed vitae.
          </p>
        </div>
        <button className="w-[90vw] h-[10vw] mt-[1vw] text-[3vw] bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out ">
          Source
        </button>
      </div>
    </section>
  );
}
