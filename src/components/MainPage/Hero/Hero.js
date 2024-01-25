export default function Hero() {
  return (
    <section className="w-full min-h-screen relative bg-transparent lg:bg-neutral-a flex flex-row justify-center items-center">
      <img
        alt=""
        src="/image/Hero/HeroBG.png"
        className="absolute w-full h-full -z-[1] max-lg:hidden"
        draggable="false"
      />
      <img
        alt=""
        src="/image/Hero/HeroBGMobile.png"
        className="absolute w-full h-full -z-[1] lg:hidden"
        draggable="false"
      />

      {/* Dekstop */}
      <div className="text-black flex gap-x-[8vw] max-lg:hidden">
        <div className="flex flex-col justify-center scale-[1.2]">
          <div className="text-[1.6vw] text-neutral-g font-CoolveticaCondReg ">
            ArachnoVa{" "}
          </div>
          <div className="text-neutral-g font-SourceSansProBold text-[2vw]/[2.5vw]">
            <div className="text-[2vw] ">Your Web Design Partner</div>
            <div className="overflow-clip  flex items-center justify-center h-[2.8vw] gap-[0.5vw]">
              <div className="text-[2.8vw]">Always</div>
              <div className="flex-col animate-swap_words gap-[4vw] ">
                <div className="text-[2.8vw] mb-[2vw] ">Dependable</div>
                <div className="text-[2.8vw] ">Delivered</div>
                <div className="text-[2.8vw] mt-[2vw]">Distinctive</div>
              </div>
            </div>
          </div>
          <div className="text-[1vw] text-[#4E5F66] pt-[1.1vw] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[1vw]">
            <button className="w-[8vw] h-[4vh] bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] font-InterBold text-white rounded-md text-[0.8vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out ">
              Start Your Project
            </button>
            <button className="w-[10vw] h-[4vh] bg-transparent  rounded-md text-[0.8vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] to-[#159E8D] font-InterBold">
                Discover Our Services
              </div>
            </button>
          </div>
        </div>

        <div className="bg-transparent backdrop-blur-lg w-[28vw] h-[18vw] rounded-lg border-2 border-[#F1F5F9]  relative font-ConsolasRegular ">
          <div className="absolute w-[23vw] h-[5vw] bg-white opacity-50 rounded-md -bottom-[3vw] -right-[4vw] text-[1vw] flex justify-center items-center border-2 border-[#E2E8F0] font-ConsolasBold ">
            <img
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[3vw] h-[1vw] top-[0.4vw] left-[0.7vw] absolute"
              draggable="false"
            />
            <div className="flex gap-x-[0.4vw] pt-[1vw]">
              <span className="text-[#8131B2]">@arachnova</span>
              <span className="text-[#0151EC]">official-site</span>
              <span className="text-[#1CA7BD]">@</span>
              npm run dev
            </div>
          </div>
          <div className="px-[1vw] py-[2vw] text-[1.05vw]/[1.15vw] relative">
            <img
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[3vw] h-[1vw] top-[0.5vw] left-[0.7vw] absolute"
              draggable="false"
            />
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

      {/* Mobile */}
      <div className="flex flex-col lg:hidden w-full items-center">
        <div className="text-[8.6vw] text-neutral-g font-CoolveticaCondReg ">
          ArachnoVa{" "}
        </div>

        <div className="text-neutral-g items-center justify-center font-SourceSansProBold text-[2vw]/[6vw]">
          <div className="text-[7vw] mx-[5vw]   ">Your Web Design Partner</div>
          <div className="overflow-clip  flex items-center justify-center h-[10.2vw] gap-[2vw]">
            <div className="text-[9.8vw]">Always</div>
            <div className="flex-col animate-swap_words gap-[4vw] text-[9.8vw] ">
              <div className=" mb-[8vw] ">Dependable</div>
              <div className=" ">Delivered</div>
              <div className=" mt-[8vw]">Distinctive</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[5vw]/[5vw] pt-[4vw] text-[#4E5F66] font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <button className="w-[80vw] h-[8vw] mt-[4vw] my-[2.5vw] bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] font-InterBold text-white rounded-md text-[3vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out ">
          Start Your Project
        </button>
        <button className="w-[80vw] h-[8vw] bg-transparent mb-[2.5vw] rounded-md text-[3vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] to-[#159E8D] font-InterBold">
            Discover Our Services
          </div>
        </button>

        <div className="bg-transparent backdrop-blur-lg w-[80vw] h-[50vw] rounded-lg border-2 border-[#F1F5F9]  relative font-ConsolasRegular ">
          <div className="absolute w-[60vw] h-[10vw]  bg-white opacity-50 rounded-md -bottom-[3vw] -right-[4vw] text-[3vw] flex justify-center items-center border-2 border-[#E2E8F0] font-ConsolasBold  ">
            <img
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[3vw] h-[1vw] top-[0.4vw] left-[0.7vw] absolute"
              draggable="false"
            />
            <div className="flex gap-x-[0.4vw] pt-[1vw]">
              <span className="text-[#8131B2]">@arachnova</span>
              <span className="text-[#0151EC]">official-site</span>
              <span className="text-[#1CA7BD]">@</span>
              npm run dev
            </div>
          </div>
          <div className="px-[1vw] py-[4vw] text-[3vw]/[3vw] relative">
            <img
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[8vw] h-[3vw] top-[0.5vw] left-[0.7vw] absolute"
              draggable="false"
            />
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
            <p className="text-neutral-g">
              &nbsp; &lt;div <span className="text-[#0151EC]">className</span>
              ="<span className="text-[#8131B2]">content</span>"&gt;
            </p>
            <p className="text-neutral-g">&nbsp; &#123;</p>
            <p>
              &nbsp; &nbsp;{" "}
              <span className="text-[#8131B2]">"Your web design partner"</span>
            </p>
            <p className="text-neutral-g"> &nbsp; &#125;</p>
            <p className="text-neutral-g">&nbsp; &lt;/div&gt;</p>
            <p className="text-neutral-g">
              &nbsp; &lt;<span className="text-[#0151EC]">img</span> src="
              <span className="text-[#8131B2]">img/herofix.png</span>"/&gt;
            </p>
            <p className="text-neutral-g">&lt;/div&gt;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
