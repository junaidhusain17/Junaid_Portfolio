import React, { useRef, useState } from "react";
import DarkModeToggle from "./DarkModeTogel";

function Appbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Ref for the sidebar

  // Close the sidebar when clicked outside of it
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="pl-9 pr-9 p-5">
      <div className="bg-stone-900 p-2 sticky transition duration-300 border rounded-full text-white">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <a href="#junaid" className="text-lg font-bold">
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
          <nav className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="hover:text-background hover:font-bold duration-200 hover:scale-105 text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-background hover:font-bold duration-200 hover:scale-105 text-sm"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-background hover:font-bold duration-200 hover:scale-105 text-sm"
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
        <div className="bg-stone-900 fixed w-3/4  p-6 shadow-lg md:hidden rounded">
          <button
            onClick={toggleSidebar}
            className=" hover:text-gray-300 text-2xl mb-8"
          >
            ✖ {/* Close button */}
          </button>
          <DarkModeToggle />
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
    </div>
  );
}

export default Appbar;
