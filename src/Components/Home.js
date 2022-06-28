import React from 'react'
import MyDp from "../assets/me.jpg"
import {TbArrowNarrowRight} from "react-icons/tb"
import { Link } from 'react-scroll'
const Home = () => {

 
  return (
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-l from-black to-gray-800 "
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-half mt-28">
        <h2 className="text-5xl sm:text-5xl md:text-7xl font-bold text-white mt-16 ">
          I'm a low Level Developer
        </h2>
        <p className="text-white py-8 max-w-md md:text-xl  ">
         My Name is Gurvinder Singh, I have a Bachlor Degree In Computer & Information Science. I have a good knowledge of Java, Javascript , C, C# programming languages. However i dedicated most of my time to learn React so at this point i have  created some React projects which can be found under the portfolio section 
        </p>

        <div>
            <Link 
              to="portfolio"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 cursor-pointer mb-10"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <TbArrowNarrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

      <div className=' pb-20 '>
        <img
          src={MyDp}
          alt="my profile"
          className="rounded-2xl mx-auto w-2/4 md:w-half"
        />
      </div>
    </div>
  </div>
  )
}

export default Home