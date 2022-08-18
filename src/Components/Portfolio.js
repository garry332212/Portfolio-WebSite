import React from "react";
import DiceGame from "../assets/portfolio/Dice Game.JPG";
import FoodOrdering from "../assets/portfolio/FoodOrdering.JPG";
import LinkedinClone from "../assets/portfolio/LinkedinClone.JPG";
import TodoApp from "../assets/portfolio/TodoApp.JPG";
import Expense from "../assets/portfolio/Expense.JPG";
import Weather from "../assets/portfolio/Weather.JPG";
import YumYum from "../assets/portfolio/YumYum.JPG";

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
      src: Weather,
      link: "https://gurvinders-weatherapp-api.netlify.app/",
      code: "https://github.com/garry332212/Weather-API-React",
      title: "React Weather Web App (API)",
    },

    {
      id: 3,
      src: FoodOrdering,
      link: "https://gurvinders-restaurant.netlify.app/",
      code: "https://github.com/garry332212/Restaurant-Food-Ordering-Web",
      title: "Order Food Online (React+Firebase)",
    },

    {
      id: 4,
      src: DiceGame,
      link: "https://guri-dicegame.netlify.app/",
      code: "https://github.com/garry332212/Dice-GAME-Js",
      title: "1 v 1 Dice Roll (Random Dice  Game)",
    },
    {
      id: 5,
      src: Expense,
      link: "https://guris-expensetracker.netlify.app/",
      code: "https://github.com/garry332212/Expense_Tracker_React-js",
      title: " Keep Track of Your Expenses (React js)",
    },
    {
      id: 6,
      src: YumYum,
      link: "https://garry332212.github.io/Food-Website-Yum-Yum-/",
      code: "https://github.com/garry332212/Food-Website-Yum-Yum-",
      title: "Delicious Food App (HTML,CSS & Js)",
    },

    {
      id: 7,
      src: LinkedinClone,
      link: "https://gurvinder-linkedin-clone.netlify.app/ ",
      code: "https://github.com/garry332212/LinkedIn-Clone-React-js",
      title: "Linked Home Page Replica In React Js",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-t from-black to-gray-800 w-full text-white pt-16 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>
          <span className="text-xl">
            <p className="py-6">These Are My Most Recent Projects</p>
            <p className="py-1 ">
              I have developed a Todo web app that is using Firebase
              Authentication to authenticate users. In this app, users are able
              to signup with email and create a new account where they can add
              their TO-DOS. That account later can be used to log in to the todo
              app so the users can add and delete to-dos.{" "}
              <span className="font-bold text-red-500">(React Js)</span>
            </p>
            <p className="py-1">
              I developed this restaurant app which lets the users order food
              available on the restaurant's menu. Once users have selected the
              food it will get added to the cart, then the user can open the
              cart and add or delete items via cart. Users then can enter their
              details for the order and click confirm. These order details will
              be sent to the Firebase database including food items and user
              details..{" "}
              <span className="font-bold text-red-500">(React Js)</span>{" "}
            </p>
            <p className="py-1">
              This project is a LinkedIn home page clone. Developed using
              Material Ui{" "}
              <span className="font-bold text-red-500">(React Js)</span>
            </p>
            <p className="py-1 mb-4">
              This project is a 1v1 dice game in which you roll a die and if you
              get any number above 1 it will be added as a score and you can
              roll the dice again until you get 1. if the dice rolls 1 then it
              switches to the next player and another player can roll the dice
              and earn points. users can also click hold to hold their scores.
              (when the dice rolls 1, the score sets to 0 and switches the
              player). The player who reaches 50 points first wins the game{" "}
              <span className="font-bold text-red-500">(JavaScript)</span>
            </p>
            <p className="py-1 mb-10">
              I created this React project as I started learning React js. This
              project was created using states and props only (very basics of
              React features) Expense Tracker lets users add their expenses with
              the date they have spent the amount and then displays it to the
              user with bars. These bars indicate in which month of the year
              user has spent more money.
              <span className="font-bold text-red-500">(React js)</span>
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
                  <a href={link} target="_blank" rel="noopener noreferrer">Link</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
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
