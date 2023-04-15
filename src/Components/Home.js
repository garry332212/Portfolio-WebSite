import React from "react";
import Degree from "../assets/degree.jpg";
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-r hover:bg-gradient-to-l from-gray-700 to-black pt-24 relative"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-half mt-28">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white md:relative left-10">
            {" "}
            Hello I'm{" "}
            <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-cyan-600">
              Gurvinder{" "}
            </span>
            I'm a Front-End
            <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
              {" "}
              Web Developer
            </span>
          </h2>

          <br />
          <br />
          <div className="flex items-center justify-center pb-10">
            <Link
              to="portfolio"
              smooth
              duration={300}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center justify-between  rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 cursor-pointer  "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <TbArrowNarrowRight size={25} className="ml-1  " />
              </span>
            </Link>
          </div>
        </div>

        <div className="pb-28 hidden sm:block md:px-5">
          <img
            src={Degree}
            alt="my profile"
            className="rounded-2xl mx-auto w-3/4 md:w-1/2 lg:w-3/4 sm:w-5/12 xs:w-1/2 xs:mb-5 md:relative left-10 transform transition-all sm:hover:scale-75 md:hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
