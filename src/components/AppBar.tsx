import React, { useState } from "react";
import DarkModeToggle from "./DarkModeTogel";

function Appbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close the sidebar when clicked outside of it
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="fixed left-9 right-9 rounded-full z-50 bg-stone-900 p-2 border text-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a
            href="#junaid"
            className="text-lg font-bold hover:scale-110 duration-300"
          >
            Juniad_Husain
          </a>
          {/* Mobile toggle button */}
          <button
            onClick={toggleSidebar}
            className="block md:hidden text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? "✖" : "☰"}{" "}
            {/* Toggle between 'X' and hamburger menu */}
          </button>
          {/* Navigation for larger screens */}
          <nav className="hidden md:flex space-x-4 ">
            <a
              href="#home"
              className="hover:scale-125 transition-transform duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:scale-125 transition-transform duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:scale-125 transition-transform duration-300"
            >
              Contact
            </a>
          </nav>
          <div className="hidden lg:block md:block">
            <DarkModeToggle />
          </div>
        </div>
      </div>
      {/* Sidebar for mobile screens */}
      {sidebarOpen && (
        <div className="bg-stone-900 fixed w-3/4 p-6 md:hidden rounded top-16 left-1/2 -translate-x-1/2">
          <button
            onClick={toggleSidebar}
            className=" hover:text-gray-300 text-2xl mb-8"
          >
            ✖
          </button>
          <DarkModeToggle className="ml-9 xl:'1.25rem'" />

          <nav className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-white text-lg hover:font-bold hover:scale-105"
              onClick={toggleSidebar} // Close the sidebar when a link is clicked
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white text-lg hover:font-bold hover:scale-105"
              onClick={toggleSidebar}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white text-lg hover:font-bold hover:scale-105"
              onClick={toggleSidebar}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Appbar;
