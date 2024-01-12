export default function CTA() {
  return (
    <section className="w-full h-[60vh] relative bg-transparent flex flex-row justify-center items-center">
      <img
        alt=""
        src="/image/CTA/BGCTA.png"
        className="absolute w-full h-full -z-[1]  "
        draggable="false"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="text-neutral-g font-SourceSansProBold text-[3vw]/[3vw] flex flex-col justify-center items-center">
          <p>Ready to Transform Your Digital Presence ? </p>
          <p>Let's Start Crafting Your Website Today</p>
        </div>
        <button className="bg-black w-[20vw] h-[2.5vw] rounded-lg font-SourceSansProSemibold mt-[3vw] text-[1.5vw] hover:bg-neutral-e duration-500">
          Start Your Project
        </button>
      </div>
    </section>
  );
}
