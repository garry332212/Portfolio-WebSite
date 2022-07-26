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
        <p className="text-xl mt-10">
          I started my Bachelor Degree in 2018, at A.U.T. I have learned Java, C
          programming, Javascript, PHP and MERN during my time at the campus. I
          have also participated in team projects, learnd about project
          managment and how to be a project leader as well. Now that i graduated
          from university i am looking to take my current skills to the next
          level. After Graduation i started working on React.js on my own with
          the help of youtube tutorials and some courses from UDEMY.
        </p>

        <br />

        <p className="text-xl mt-8 mb-10 ">
          {" "}
          I am very enthusiastic about Web Development. React is my favourite
          Javascript library This Portfolio Website itself was created using
          React.js and Tailwind CSS. I found React so much better to create Web
          Application due to reusability. I ♥ creating React.js projects however
          i have also created projects in Java, PHP, Javascript and MERN duiring
          my bachelor degree.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
