import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-t from-black to-gray-800 p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full  ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300 mt">
            Contact
          </p>
          <p className="py-6">To get in touch with me, kindly fill out the form below and I will get back to you as soon as possible.</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/a607f3df-ab32-403c-b6b5-3f01623ed114"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <p className="relative top-12 text-center font-signature">© Gurvinder Singh</p>
      </div>
      
    </div>
  );
};

export default Contact;
