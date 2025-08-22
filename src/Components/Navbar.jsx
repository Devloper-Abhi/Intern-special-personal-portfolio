import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className={"p-8 flex justify-between items-center w-screen fixed duration-300 "+ (props.darkMode ? 'bg-[#181818] text-white' : 'bg-white' + " z-50")}>
      <div className="left w-fit">
        <h1 className="text-xl md:text-2xl font-bold p-2">ANISH KUMAR SINHA</h1>
      </div>
      <div className="menu w-[60%] hidden lg:flex">
        <ul className="flex space-x-4 justify-end items-center w-[100%]">
          <li className="w-16 text-center">
            <NavLink
              to="/"
              className="text-lg duration-250 hover:text-xl flex items-center justify-center text-center"
            >
              Home
            </NavLink>
          </li>
          <li className="w-[9%] text-center p-1">
            <NavLink
              to="/about"
              className="text-lg duration-250 hover:text-xl flex items-center justify-center text-center"
            >
              About
            </NavLink>
          </li>
          <li className="w-[9%] text-center p-1">
            <NavLink
              to="/resume"
              className="text-lg duration-250 hover:text-xl flex items-center justify-center text-center"
            >
              Resume
            </NavLink>
          </li>
          <li className="w-[9%] text-center p-1">
            <NavLink
              to="/skills"
              className="text-lg duration-250 hover:text-xl flex items-center justify-center text-center"
            >
              Skills
            </NavLink>
          </li>
          <li className="w-[9%] text-center p-1">
            <NavLink
              to="/projects"
              className="text-lg duration-250 hover:text-xl flex items-center justify-center text-center"
            >
              Projects
            </NavLink>
          </li>
          <li className="w-[9%] text-center p-1">
            <NavLink
              to="/contact"
              className="text-lg duration-250 hover:text-xl flex items-center justify-center text-center"
            >
              Contact
            </NavLink>
          </li>
          <li className="w-[9%] text-center p-1">
            <img src={props.darkMode ? "./Images/sun.png" : "./Images/Moon.png"} alt="darkMode" className="duration-300 cursor-pointer h-[50%]" onClick={() => {props.setDarkMode(!props.darkMode)}}/>
          </li>
        </ul>
      </div>
      {/* Hamburger Icon */}
      <div className="menu-mobile lg:hidden">
        <FaBars
          onClick={() => setSidebar(true)}
          className="text-2xl cursor-pointer"
        />
      </div>
      {/* Sidebar */}
      <div
        className={` fixed top-0 right-0 w-full h-full  z-100 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 ${
          sidebar ? "translate-x-0" : "translate-x-full"
        } `+ (props.darkMode ? 'bg-[#181818]' : 'bg-white') }
      >
        <FaTimes
          className="mx-auto text-2xl cursor-pointer mb-8"
          onClick={() => setSidebar(false)}
        />
        <ul className="flex flex-col space-y-4 gap-3">
          <li>
            <NavLink
              to="/"
              className="text-lg duration-150 hover:text-xl transition-transform flex items-center justify-center text-center"
              onClick={() => setSidebar(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-lg duration-150 hover:text-xl transition-transform flex items-center justify-center text-center"
              onClick={() => setSidebar(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className="text-lg duration-150 hover:text-xl transition-transform flex items-center justify-center text-center"
              onClick={() => setSidebar(false)}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className="text-lg duration-150 hover:text-xl transition-transform flex items-center justify-center text-center"
              onClick={() => setSidebar(false)}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="text-lg duration-150 hover:text-xl transition-transform flex items-center justify-center text-center"
              onClick={() => setSidebar(false)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-lg duration-150 hover:text-xl transition-transform flex items-center justify-center text-center"
              onClick={() => setSidebar(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Overlay */}
      {sidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={() => setSidebar(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
