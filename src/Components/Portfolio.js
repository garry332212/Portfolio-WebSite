import { DiceGame, FoodOrdering, LinkedinClone, TodoApp, Expense, Weather, YumYum, LiveRadio,Sylo } from ".";

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
    {
      id: 8,
      src: LiveRadio,
      link: "https://kiwigabroos-music.netlify.app/",
      code: "https://github.com/garry332212/live-music-player",
      title: "24x7 Live Indian Radio Music",
    },
    {
      id: 9,
      src: Sylo,
      link: "https://www.sylo.io/",
      code: "",
      title: "Web 03Front-End Internship @ Sylo",
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
