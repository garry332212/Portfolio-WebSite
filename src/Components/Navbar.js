import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  //useState for the menu icon to do change its state

  const [navIcon, setNavIcon] = useState(false);

  //Array Object For Links!!!
  const headerMenu = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 5, link: "skills" },
    { id: 4, link: "contact" },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-black to-gray-800 fixed navbar z-10">
      <div>
        <h1 className="text-5xl font-signature ml-1">I'm Gurvinder </h1>
      </div>

      <ul className="hidden md:flex">
        {headerMenu.map(({ id, link }) => (
          <li
            key={id}
            className="px-6 cursor-pointer font-medium text-gray-200 hover:scale-105 duration-200 capitalize"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNavIcon(!navIcon)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {navIcon ? <FaTimes size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      {navIcon && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-opacity-90 bg-black">
          {headerMenu.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNavIcon(!navIcon)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
