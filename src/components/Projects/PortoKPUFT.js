import Image from "next/image";

export default function KPUFT() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-a">
      {/* Desktop */}
      <div className="flex max-lg:hidden">
        <div className="relative w-[40vw] aspect-[824.28/426.9]">
          <Image
            alt="Content Prototype"
            src="/image/Porto/LustrumDTETI/LustrumDTETIDesktop.png"
            className="absolute w-[34.6vw] aspect-[669/376] rounded-xl border-white border-[0.2vw] right-[0] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Porto/LustrumDTETI/LustrumDTETIMobile.svg"
            className="absolute w-[8vw] aspect-[245/495] rounded-[1vw] -bottom-[2vw] left-[0vw] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
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
            <button className="w-[4.688vw] mt-[1vw] bg-gradient-to-r rounded-[0.5vw] text-[0.833vw] aspect-[90/48] from-[#2DC0D8] to-[#179FB5] font-InterBold text-white flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out ">
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
        <div className="relative w-[90.698vw] justify-end items-start flex aspect-[824.28/426.9]">
          <Image
            alt="Content Prototype"
            src="/image/Porto/LustrumDTETI/LustrumDTETIDesktop.png"
            className=" w-[75.6vw] aspect-[669/376] rounded-xl border-white border-[0.2vw] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Porto/LustrumDTETI/LustrumDTETIMobile.svg"
            className="absolute w-[20vw] aspect-[245/495] rounded-[3vw] -bottom-[2vw] left-[0vw] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
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
