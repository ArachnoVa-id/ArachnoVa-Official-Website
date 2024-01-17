import Image from "next/image";
import NavItem from "./NavItem";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-[100] py-[0.938vw] px-[15vw] w-screen flex items-center justify-between bg-transparent backdrop-blur-[0.208vw] border-b-[0.104vw] border-[#E6ECF0]">
        <div className="flex items-center flex-row">
          <ul className="flex items-center gap-x-[3.125vw]">
            <a href="/">
              <img
                className="w-[3.281vw] aspect-[69/53] hover:scale-110 transition-all duration-300 ease-in-out"
                src="/image/Logo.png"
                draggable="false"
                alt="logo"
              />
            </a>

            <NavItem Menu="Projects" href="#" />
            <NavItem Menu="Services" href="/services" />
            <NavItem Menu="About" href="#" />
          </ul>
        </div>
        <Button Text="Contact Us" />
      </nav>
    </>
  );
};

export default Navbar;
