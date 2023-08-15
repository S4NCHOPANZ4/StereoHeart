import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi"

import  logo  from "../assets/logo.svg";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => {

  return (
    <div className="mt-10">
      {links.map((item) => {
        return(

          <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start
          items-center my-8 text-sm font-medium text-gray-400 hover:text-[#fff]"
          onClick={() => handleClick && handleClick()}
          >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      )
      })}
    </div>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#1e1e1e]">
        <img src={logo} alt="logo" className="w-full h-[4.5rem] object-contain" />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6
       ">
        {mobileMenuOpen ? 
        (<RiCloseLine className="absolute z-20 w-6 h-6 text-white mr-2 left-5"
        onClick={()=> setMobileMenuOpen(false)}/>)
        :
        <HiOutlineMenu 
        onClick={() => setMobileMenuOpen(true)}
        className="absolute z-20 w-6 h-6 text-white mr-2 left-5"/>}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 
      bg-gradient-to-tl from-[#000000] to-[#1515157a]
      backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen?
      'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div>

    </>
  );
};

export default Sidebar;
