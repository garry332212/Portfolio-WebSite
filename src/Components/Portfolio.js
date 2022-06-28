import React from "react";
import DiceGame from "../assets/portfolio/Dice Game.JPG"
import FoodOrdering from "../assets/portfolio/FoodOrdering.JPG"
import LinkedinClone from "../assets/portfolio/LinkedinClone.JPG"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: DiceGame,
      link: 'https://guri-dicegame.netlify.app/',
      code: 'https://github.com/garry332211/PigGame',
    },
    {
      id: 2,
      src: FoodOrdering,
      link: 'https://gurvinders-food-mania.netlify.app/ ',
      code: 'https://github.com/garry332211/React_Learning/tree/main/ReactWithMax/Practice%20Project/foord-ordering-system',
    },
    {
      id: 3,
      src: LinkedinClone,
      link: 'https://gurvinder-linkedin-clone.netlify.app/ ',
      code: 'https://github.com/garry332211/React_Sunny_Sangha/tree/main/linkedin_clone ',
    },
  
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-t from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>
          <p className="py-6">These Are My Most Recent Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , link,code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link}>Link</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;