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
        <p className="text-2xl mt-10">
          I graduated from Auckland University of Technology, earning my
          bachelor’s in{" "}
          <span className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            {" "}
            Computer and Information Sciences
          </span>
          . I am a motivated software developer with 6 months of experience in
          web development and native app development. I specialize in React
          JavaScript and have university experience working with PHP,
          TypeScript, C#, JAVA, and C. I also have experience working with React
          Native.
          <br />
          <br />
        </p>

        <div className="font-bold">
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
            JavaScript(ReactJs), PHP, Java, C#, and C.
          </em>
        </div>
        <br />

        <p className="text-2xl mt-8 mb-10 ">
          {" "}
          I am very enthusiastic about Web Development. React is my favorite
          Javascript library This Portfolio Website itself was created using
          React.js and Tailwind CSS. I found React so much better to create Web
          Applications due to its reusability. I{" "}
          <span className="text-red-500">♥</span> creating React.js projects, i
          have also worked on React Native applications and currently learning
          Typescript + React and React Native.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
