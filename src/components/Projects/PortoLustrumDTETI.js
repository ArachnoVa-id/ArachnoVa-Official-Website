export default function PortoLustrumDTETI() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#F1F4F4]">
      <div className="flex">
        <div className="w-[20vw] text-black pt-[2vw] mr-[5vw]">
          <h1 className="text-[2vw] font-SourceSansProBold">Title Web</h1>
          <p className="text-[1vw]/[1.5vw] font-SourceSansProSemibold text-neutral-e">
            Lorem ipsum dolor sit amet consectetur. Praesent phasellus sagittis
            dignissim id egestas aenean dictum et. Gravida enim rutrum
            adipiscing adipiscing sed vitae.
          </p>
          <button className="w-[6vw] h-[4vh] mt-[1vw] bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] font-InterBold text-white rounded-md text-[0.8vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out ">
            Source
          </button>
        </div>

        <div className="w-[40vw] h-[40vh]">
          <img
            alt=""
            src="/image/Porto/HeroEnfo.png"
            className=" w-full h-full rounded-xl  "
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
