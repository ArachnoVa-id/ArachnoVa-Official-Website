export default function CTAProjects() {
  return (
    <section className="w-full h-[60vh] relative flex flex-row justify-center items-center bg-neutral-a">
      <div className="w-[65vw] h-[17.5vw] relative bg-transparent rounded-xl flex flex-col justify-center items-center">
        <img
          alt=""
          src="/image/CTA/BGCTAProjects.png"
          className=" w-full h-full z-[1] absolute  "
          draggable="false"
        />
        <h1 className="text-neutral-a font-SourceSansProBold text-[2.5vw] z-[2]">
          Get Inspired? Create Yours Now!
        </h1>
        <button className="bg-black w-[20vw] h-[2.5vw] z-[2] rounded-lg font-SourceSansProSemibold mt-[1vw] text-[1.5vw] hover:bg-neutral-e duration-500">
          Start Your Project
        </button>
      </div>
    </section>
  );
}
