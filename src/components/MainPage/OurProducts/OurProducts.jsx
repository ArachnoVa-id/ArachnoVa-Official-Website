import BorderSeparator from "../BorderSeparator/BorderSeparator";
import Content from "./Content";
import Description from "./Description";

const OurProducts = () => {
  return (
    <>
      <section className="relative flex flex-col w-full lg:min-h-[103.021vw] min-h-[397.442vw] justify-around items-center bg-white-MainPage">
        <div className="lg:flex hidden flex-col w-fit h-[88.958vw] justify-between items-center bg-transparent">
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
              Variant="Left"
            />
            <Content
              data={[
                "/image/OurProducts/LandingPage-1.png",
                "/image/OurProducts/LandingPage-2.png",
                "/image/OurProducts/LandingPage-3.png",
              ]}
              totalSlide={2}
            />
          </div>
          <div className="flex flex-row w-[72.917vw] justify-between items-center">
            <Content
              data={["/image/OurProducts/Profiling-1.png"]}
              totalSlide={1}
            />
            <Description
              Title="Profiling"
              Description="Lorem ipsum dolor sit amet consectetur. Morbi nullam praesent maecenas aliquam magna arcu ipsum. Tincidunt facilisis viverra amet felis commodo sit adipiscing imperdiet."
              Variant="Right"
            />
          </div>
          <div className="flex flex-row w-[72.917vw] justify-between items-center">
            <Description
              Title="Custom Web"
              Description="Lorem ipsum dolor sit amet consectetur. Ac dui risus facilisis pulvinar dolor. Netus adipiscing ipsum enim gravida enim tincidunt blandit quisque. Pellentesque morbi id ac posuere."
              Variant="Left"
            />
            <Content
              data={["/image/OurProducts/CustomWeb-1.png"]}
              totalSlide={1}
            />
          </div>
        </div>
        {/* Mobile Version */}
        <div className="flex flex-col w-[90.698vw] h-[340.465vw] justify-between items-center lg:hidden">
          <div className="flex flex-col w-[62.558vw] items-center justify-center">
            <p className="font-SourceSansProBold text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
              Unlocking Possibilities
            </p>
            <h1 className="font-SourceSansProBold text-[6.977vw] leading-[5.814vw] text-neutral-g text-center">
              Explore the Range of Websites We Craft
            </h1>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <Content
              data={[
                "/image/OurProducts/LandingPage-1.png",
                "/image/OurProducts/LandingPage-2.png",
                "/image/OurProducts/LandingPage-3.png",
              ]}
              totalSlide={2}
              variant="Mobile"
            />
            <Description
              Title="Landing Page"
              Description="Lorem ipsum dolor sit amet consectetur. Rhoncus nec dolor viverra lectus faucibus sit. Egestas rhoncus volutpat vitae euismod tortor. Neque nunc duis enim quam pellentesque."
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <Content
              data={["/image/OurProducts/Profiling-1.png"]}
              totalSlide={1}
              variant="Mobile"
            />
            <Description
              Title="Profiling"
              Description="Lorem ipsum dolor sit amet consectetur. Morbi nullam praesent maecenas aliquam magna arcu ipsum. Tincidunt facilisis viverra amet felis commodo sit adipiscing imperdiet."
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <Content
              data={["/image/OurProducts/CustomWeb-1.png"]}
              totalSlide={1}
              variant="Mobile"
            />
            <Description
              Title="Custom Web"
              Description="Lorem ipsum dolor sit amet consectetur. Ac dui risus facilisis pulvinar dolor. Netus adipiscing ipsum enim gravida enim tincidunt blandit quisque. Pellentesque morbi id ac posuere."
            />
          </div>
        </div>
        <BorderSeparator />
      </section>
    </>
  );
};

export default OurProducts;
