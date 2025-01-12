import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
interface IDarkModeToggleProps {
  className?: string;
}

function DarkModeToggle({ className }: IDarkModeToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the saved mode in localStorage to persist the theme preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true"); // Save mode to localStorage
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false"); // Save mode to localStorage
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`bg-blue-20 hover:bg-gray-500 hover:scale-125 text-white p-2 rounded ${className}`}
    >
      {isDarkMode ? <CiLight /> : <MdDarkMode />}
    </button>
  );
}

export default DarkModeToggle;
