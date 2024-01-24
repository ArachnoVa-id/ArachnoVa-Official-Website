"use client";

import Image from "next/image";
import NavItem from "./NavItem";
import Button from "../Button/Button";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import NavItemMobile from "./NavItemMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="relative lg:fixed z-[100] lg:py-[0.938vw] lg:px-[15vw] px-[5.581vw] py-[2.88vw] w-screen flex items-center justify-between lg:bg-transparent bg-[#FAFDFF] lg:backdrop-blur-[0.208vw] backdrop-blur-[1.163vw] lg:border-b-[0.104vw] border-b-[0.465vw] border-[#E6ECF0]">
        <div className="flex items-center flex-row">
          <ul className="lg:flex items-center gap-x-[3.125vw] hidden">
            <a href="/">
              <img
                className="w-[3.281vw] aspect-[69/53] hover:scale-110 transition-all duration-300 ease-in-out"
                src="/image/Logo.png"
                draggable="false"
                alt="logo"
              />
            </a>

            <NavItem Menu="Projects" href="/projects" />
            <NavItem Menu="Services" href="/services" />
            <NavItem Menu="About" href="/aboutus" />
          </ul>
          <a href="/">
            <img
              className="lg:hidden w-[10.465vw] aspect-[45/33] hover:scale-110 transition-all duration-300 ease-in-out"
              src="/image/Logo.png"
              draggable="false"
              alt="logo"
            />
          </a>
        </div>
        <div className="w-fit h-fit block lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color="#1AB0C8"
            size={22}
          />
        </div>
        {isOpen ? (
          <>
            <NavItemMobile />
          </>
        ) : (
          <></>
        )}
        <Button Text="Contact Us" />
      </nav>
    </>
  );
};

export default Navbar;
