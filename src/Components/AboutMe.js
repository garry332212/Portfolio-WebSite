import React from "react";

const AboutMe = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-t from-black to-gray-800 text-white pt-6"
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 md: mt-10 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            About
          </p>
        </div>
        <p className="text-2xl mt-10 leading-10 tracking-wide">
          {textInfo.openingText}
          <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 leading-10 mx-2 animate-pulse">
            {textInfo.major}
          </span>
          {textInfo.middleText}
          <span className="inline-block mx-3">
            {words.map((word, index) => (
              <span
                key={index}
                className="inline-block animate-bounce mx-1.5  text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {word}
              </span>
            ))}
          </span>
          {textInfo.middleText2}
          <br />
          <br />
        </p>

        <div className="font-bold leading-loose tracking-widest">
          <p className="mb-2 text-xl text-rose-500">CORE SKILLS:</p>
          <p className="text-xl">Front-End Technologies:</p>
          <em className=" text-xl text-transparent  bg-clip-text bg-gradient-to-r from-red-400 to-white">
            HTML, CSS, JSX, Bootstrap, Tailwind, Material UI, Styled Components
          </em>
          <p className="text-xl pt-4">Back-End Technologies</p>
          <div className=" text-xl text-transparent  bg-clip-text bg-gradient-to-r from-red-400 to-white">
            <p>
              <span className="text-cyan-600">Server:</span> NodeJS (Express),
              and PHP.
            </p>
            <p>
              {" "}
              <span className="text-cyan-600">Database:</span> MS SQL
              Server,MySQL, MongoDB, FireStore, and Firebase real-time database.{" "}
            </p>
            <p>
              {" "}
              <span className="text-cyan-600">Authentication:</span> Firebase
              Authentication.
            </p>
            <p>
              {" "}
              <span className="text-cyan-600">API:</span> Rest API Development
              using Express or PHP
            </p>
          </div>

          <p className="pt-4 text-xl">Programming Languages</p>
          <em className=" text-xl text-transparent  bg-clip-text bg-gradient-to-r from-red-400 to-white">
            {" "}
            {words.map((languages) => ` ${languages}`)}
          </em>
        </div>
        <br />
        <p className="text-2xl mt-8 mb-10 ">{textInfo.bottomText}</p>
      </div>
    </div>
  );
};

export default AboutMe;
const textInfo = {
  openingText:
    "I am a recent graduate from Auckland University of Technology, where I earned my Bachelor's degree in",
  major: "Computer and Information Sciences",
  middleText:
    ". As a passionate software developer, I have experience working with various programming languages including",
  middleText2:
    " . In addition to my academic experience, I have also worked on a variety of web development and native app development projects that have helped me to develop my skills and knowledge in the field. My primary expertise lies in developing web applications using React JavaScript, but I also have experience working with React Native to develop mobile applications. I am a fast learner and a dedicated team player, always eager to expand my skill set and take on new challenges.",

  bottomText: (
    <span className=" leading-10 tracking-wide">
      I am extremely passionate about web development, and I find React to be
      the most exciting JavaScript library. This portfolio website is a
      testament to my proficiency in React.js and Tailwind CSS. I believe that
      React's reusable components make it the ideal choice for building dynamic
      web applications.
      I'm passionate about developing projects using React.js, and I have experience working on React Native applications. Currently, I'm expanding my skills by learning Typescript with React and React Native.{" "}
    </span>
  ),
};

//keywords to hav bouncy effect
const words = [
  "React",
  "JavaScript",
  "PHP",
  "TypeScript",
  "C#",
  "JAVA",
  "and",
  "C",
];
