import Image from "next/image";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-[100] py-[0.938vw] px-[15vw] w-screen flex items-center justify-between bg-transparent backdrop-blur-[0.208vw] border-b-[0.104vw] border-[#E6ECF0]">
        <div className="flex items-center flex-row">
          <ul className="flex items-center gap-x-[3.125vw]">
            <a href="#">
              <img
                className="w-[3.281vw] aspect-[69/53] hover:scale-110 transition-all duration-300 ease-in-out"
                src="/image/Logo.png"
                draggable="false"
                alt="logo"
              />
            </a>

            <NavItem Menu="Projects" href="#" />
            <NavItem Menu="Services" href="#" />
            <NavItem Menu="About" href="#" />
          </ul>
        </div>
        <button className="w-[5.677vw] aspect-[109/40] rounded-[0.417vw] flex items-center justify-center bg-gradient-to-br from-[#2EC1D9] to-[#179FB5] hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out">
          <p className="font-InterBold text-[0.729vw] text-neutral-a">
            Contact Us
          </p>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
