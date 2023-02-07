import React, { useState } from "react";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="z-40 h-24 bg-gradient-to-b from-black w-full fixed top-0 left-0 flex justify-center	items-center">
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="text-white lg:text-2xl md:text-xl text-lg font-serif">
            <a href="#hero">John's Coffee</a>
          </h1>

          <ul className="text-white flex justify-between items-center w-1/2 text-xl	font-serif	md:visible collapse">
            <li className="decoration-orange-700	 hover:underline hover:text-gray-200	underline-offset-4 transition duration-300 ease-in-out">
              <a href="#menu">menu</a>
            </li>
            <li className="decoration-orange-700 hover:underline hover:text-gray-200	underline-offset-4 transition duration-300 ease-in-out">
              <a href="#address/contact">address/contact</a>
            </li>
            <li className="decoration-orange-700 hover:underline hover:text-gray-200 	underline-offset-4 transition duration-300 ease-in-out">
              <a href="#about">about</a>
            </li>
          </ul>
        </div>
        {!showSidebar ? (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            id="burgerMenu"
            className="fill-white visible md:collapse"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="75" height="7"></rect>
            <rect y="20" width="75" height="7"></rect>
            <rect y="40" width="75" height="7"></rect>
          </svg>
        ) : (
          <button
            className="text-white visible md:collapse font-sans text-2xl"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            X
          </button>
        )}
      </div>
      <nav
        id="nav"
        className={`top-0 left-0 right-0 w-full bg-black  p-10 pl-20 text-white fixed h-full z-30 flex flex-col justify-center items-center transition-all ${
          showSidebar ? "translate-y-0 " : "translate-y-[-100%]"
        }`}
      >
        <ul className="text-white flex flex-col  justify-center items-center w-1/2 text-xl	font-serif gap-10">
          <li className="">
            <a onClick={() => setShowSidebar(!showSidebar)} href="#menu">
              menu
            </a>
          </li>
          <li className="">
            <a
              onClick={() => setShowSidebar(!showSidebar)}
              href="#address/contact"
            >
              address/contact
            </a>
          </li>
          <li className="">
            <a onClick={() => setShowSidebar(!showSidebar)} href="#about">
              about
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
