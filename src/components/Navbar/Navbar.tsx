import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import MenuIcon from "./Assets/MenuIcon";
import logo from "./Assets/Logo.svg";
import Image from "next/image";
import support from "./Assets/Support.svg";
import loginIcon from "./Assets/Login.svg";

interface NavbarProps {
  isFloating: boolean;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode; // Specify the type of children prop

}

const Navbar: React.FC<NavbarProps> = ({ isFloating }) => {

  const router = useRouter();
  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const isActive = href === router.pathname;
    return (
      <Link href={href} className={` ${isActive ? 'font-UberMoveBold' : 'font-UberMoveRegular'}`}>
        {children}
      </Link>
    );
  };

  return (
    <nav
      className={`flex  z-50 items-center w-full justify-between  px-4 bg-white ${isFloating ? "floating" : ""
        }`}
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <button
            aria-label="Open menu"
            className="p-2 rounded-md focus:outline-none focus:ring"
          >
            <MenuIcon className="h-14 w-14" />
          </button>
          <Image src={logo} alt="TranXIT logo" width={64} height={34} />
        </div>

        <div className="hidden md:flex gap-5 ml-16">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#">Explore Features</NavLink>
          <NavLink href="#">Understand TranXIT</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">Contact</NavLink>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <NavLink href="#">FAQs</NavLink>
        <NavLink href="#">Help Center</NavLink>

        <div className="flex items-center gap-2">
          <div className="border p-3 rounded-lg">
            <Image src={support} alt="Support" width={24} height={24} />
          </div>
          <button className="flex px-4 py-3 justify-center items-center gap-2 font-UberMoveBold text-base text-black bg-[#EFF0F1] rounded-md border-[#E7E8E4D9]">
            <Image src={loginIcon} alt="Login" width={24} height={24} />
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;