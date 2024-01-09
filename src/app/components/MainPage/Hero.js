export default function Hero() {
  return (
    <section className="w-full min-h-screen relative bg-transparent flex flex-row justify-center items-center">
      <img
        alt=""
        src="/image/Hero/HeroBG.png"
        className="absolute w-full h-full -z-[1] max-lg:hidden "
        draggable="false"
      />
      <div className="text-black flex gap-x-[8vw]">
        <div className="flex flex-col justify-center">
          <div className="text-[1.6vw]">Arachnova </div>
          <div className="text-[2vw]">Your Web Design Partner</div>
          <div className="text-[2.8vw]">Always Dependable</div>
          <div className="text-[1vw] text-[#4E5F66]">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[1vw]">
            <div className="w-[8vw] h-[4vh] bg-[#2EC1D9] text-white rounded-md text-[0.8vw] flex justify-center items-center ">
              Start Your Project
            </div>
            <div className="w-[10vw] h-[4vh] bg-transparent text-[#1CA7BD] rounded-md text-[0.8vw] flex justify-center items-center">
              Discover Our Services
            </div>
          </div>
        </div>

        <div className="bg-transparent backdrop-blur-lg w-[28vw] h-[20vw] rounded-lg border-2 border-[#F1F5F9] relative ">
          <div className="absolute w-[20vw] h-[4vw] bg-white rounded-md -bottom-[2vw] -right-[2vw] text-[1vw] flex justify-center items-center border-2 border-[#E2E8F0] gap-x-[0.4vw]">
            <span className="text-[#8131B2]">@arachnova</span>
            <span className="text-[#0151EC]">official-site</span>
            <span className="text-[#1CA7BD]">@</span>
            npm run dev
          </div>
          <div className="px-[1vw] py-[2vw] text-[1vw]/[1.3vw]">
            <p className="text-[#0151EC]">
              import <span className="text-[#8131B2] "> "./globals.css";</span>
            </p>
            <p className="text-[#1E293B]">
              <span className="text-[#0151EC]">import</span> &#123;{" "}
              <span className="text-[#1CA7BD]"> ArachnoVa</span> &#125; from{" "}
              <span className="text-[#8131B2]">"./api/provider</span>;
            </p>
            <p> &nbsp; </p>
            <p className="text-[#0151EC]">export default</p>
            <p className="text-[#1E293B]">
              &lt;div <span className="text-[#0151EC]">className</span>="
              <span className="text-[#8131B2]">Welcome to ArachnoVa</span>
              "&gt;
            </p>
            <p>
              &nbsp; &lt;div <span className="text-[#0151EC]">className</span>
              ="<span className="text-[#8131B2]">content</span>"&gt;
            </p>
            <p>&nbsp; &#123;</p>
            <p>
              &nbsp; &nbsp;{" "}
              <span className="text-[#8131B2]">"Your web design partner"</span>
            </p>
            <p>&nbsp; &#125;</p>
            <p>&nbsp; &lt;/div&gt;</p>
            <p>
              &nbsp; &lt;<span className="text-[#0151EC]">img</span> src="
              <span className="text-[#8131B2]">img/herofix.png</span>"/&gt;
            </p>
            <p>&lt;/div&gt;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
