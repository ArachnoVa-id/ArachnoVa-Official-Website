import Content from "./Content";
import Description from "./Description";

const OurProducts = () => {
  return (
    <>
      <section className="flex flex-col w-full min-h-[103.021vw] justify-center items-center bg-white-MainPage">
        <div className="flex flex-col w-[19vw] items-center justify-center gap-y-[0.625vw]">
          <p className="font-SourceSansProBold text-[1.302vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
            Unlocking Possibilities
          </p>
          <h1 className="font-SourceSansProBold text-[2.083vw] leading-[2.083vw] text-neutral-g text-center">
            Explore the Range of Websites We Craft
          </h1>
        </div>
        <div className="flex flex-row w-[72.917vw] justify-between items-center">
          <Description
            Title="Landing Page"
            Description="Lorem ipsum dolor sit amet consectetur. Rhoncus nec dolor viverra lectus faucibus sit. Egestas rhoncus volutpat vitae euismod tortor. Neque nunc duis enim quam pellentesque."
          />
          <Content
            data={[
              "/image/OurProducts/LandingPage-1.png",
              "/image/OurProducts/LandingPage-2.png",
              "/image/OurProducts/LandingPage-3.png",
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default OurProducts;
