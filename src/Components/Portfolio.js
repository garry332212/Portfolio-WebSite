import React from "react";
import DiceGame from "../assets/portfolio/Dice Game.JPG";
import FoodOrdering from "../assets/portfolio/FoodOrdering.JPG";
import LinkedinClone from "../assets/portfolio/LinkedinClone.JPG";
import TodoApp from "../assets/portfolio/TodoApp.JPG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TodoApp,
      link: "https://react-http-4dcfb.web.app/",
      code: "https://github.com/garry332212/React-Todo-Firebase",
      title: "Todo App With Firebase Authentication",
    },

    {
      id: 2,
      src: FoodOrdering,
      link: "https://gurvinders-restaurant.netlify.app/",
      code: "https://github.com/garry332212/Restaurant-Food-Ordering-Web",
      title: "Order Food Online Form A Restaurant",
    },
    {
      id: 3,
      src: LinkedinClone,
      link: "https://gurvinder-linkedin-clone.netlify.app/ ",
      code: "https://github.com/garry332212/LinkedIn-Clone-React-js",
      title: "Linked Home Page Replica In React Js",
    },

    {
      id: 4,
      src: DiceGame,
      link: "https://guri-dicegame.netlify.app/",
      code: "https://github.com/garry332212/Dice-GAME-Js",
      title: "1 v 1 Dice Roll (Randome Dice  Game)",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-t from-black to-gray-800 w-full text-white pt-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>
          <span className="text-xl">
            <p className="py-6">These Are My Most Recent Projects</p>
            <p className="py-1 ">
              I have created a Todo web app which is using Firebase
              Authentication to authenticae users. In this app users are able to
              signup with email and create a new account where they can add
              their TODOS. That account later can be used to log in to the todo
              app so the users can see and delete thier todos.{" "}
              <span className="font-bold text-red-500">(React Js)</span>
            </p>
            <p className="py-1">
              Second one is an online Restaurant app which lets the users order
              food available in the restaurant's menu. Once users has selected
              the food it will get added to a cart, then user can open the cart
              and add or delete items via cart. Users then can enter their
              detais for the order and clcik confirm. This order details will be
              sent to the Firebase databse including food items and user's
              details.{" "}
              <span className="font-bold text-red-500">(React Js)</span>{" "}
            </p>
            <p className="py-1">
              Next Project is a simple LinkedIn Home Page Clone. Since this
              project required so many icons i used React 'library Material Ui{" "}
              <span className="font-bold text-red-500">(React Js)</span>
            </p>
            <p className="py-1 mb-10">
              Next Project is a 1v1 dice game in which you roll a dice and if
              you get any number above 1 it will be added as a score and you can
              roll the dice again untill you get 1. if the dice rolls 1 then
              then it switches to the next player and he starts rolling the dice
              and earning points. users can also click hold to hold their
              scores. (when the dice rolls 1 , all the score sets to 0 and
              switch the player) Whover Reaches 50 points first wins the game.{" "}
              <span className="font-bold text-red-500">(JavaScript)</span>
            </p>
          </span>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-10">
          {portfolios.map(({ id, src, link, code, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="px-0  m-4 text-gray-400">{title}</div>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center -mb-4">
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
