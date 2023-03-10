import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* logo */}
      <div className="text-pink-600 hover:scale-125">Farik</div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li className="hover:scale-125">
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:scale-125">
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:scale-125">
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-125">
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:scale-125">
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center className='py-6' "
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
    </div>
  );
}

export default Navbar;
