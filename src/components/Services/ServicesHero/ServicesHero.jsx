import ServiceCard from "./ServiceCard";

const ServicesHero = () => {
  return (
    <section className="relative w-full min-h-[53.021vw] flex flex-col justify-center items-center bg-white-MainPage gap-y-[3.125vw]">
      <img
        className="absolute top-[4.271vw] w-full aspect-[1920/458] z-0"
        src="/image/OurServices/ServicesHero/bg.png"
        alt="bg"
        draggable="false"
      />
      <div className="w-[43.981vw] flex flex-col justify-center items-center">
        <p className="font-SourceSansProBold text-[1.563vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
          Strategic Services Suite
        </p>
        <h1 className="font-SourceSansProBold text-[2.396vw] text-neutral-g leading-[2.448vw] text-center">
          Elevate Your Potential with Our Expertise
        </h1>
      </div>
      <div className="flex flex-row w-[72.917vw] h-[26.042vw] justify-around items-center">
        <ServiceCard
          Title="Landing Page"
          Description="Lorem ipsum dolor sit amet consectetur. Suspendisse quis ut vitae bibendum mattis. Dapibus."
          src="/image/OurServices/ServicesHero/icon-landingpage.png"
          href="#ServicesLandingPage"
        />
        <ServiceCard
          Title="Profiling Page"
          Description="Lorem ipsum dolor sit amet consectetur. Suspendisse quis ut vitae bibendum mattis. Dapibus."
          src="/image/OurServices/ServicesHero/icon-profilingpage.png"
          href="#ServicesProfilingPage"
        />
        <ServiceCard
          Title="Custom Web"
          Description="Lorem ipsum dolor sit amet consectetur. Suspendisse quis ut vitae bibendum mattis. Dapibus."
          src="/image/OurServices/ServicesHero/icon-customweb.png"
          href="#ServicesCustomWeb"
        />
      </div>
    </section>
  );
};

export default ServicesHero;
