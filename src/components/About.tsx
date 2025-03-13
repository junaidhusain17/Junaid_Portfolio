import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { FaDownload } from "react-icons/fa6";

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white pt-10">
        <div className="flex flex-col items-center justify-center pb-10">
          <h1 className="text-5xl font-bold text-center">About Me</h1>
          <div className="flex items-center justify-center my-8">
            {loading ? (
              <Skeleton
                variant="circular"
                height={300}
                width={300}
                className="bg-gray-300 dark:bg-gray-700"
              />
            ) : (
              <img
                src="/no-bg.png"
                alt="Junaid Picture"
                width={300}
                height={300}
                className="rounded-full shadow-inner"
              />
            )}
          </div>
          <h1 className="font-bold text-4xl text-center">I'am Junaid Husain</h1>
          <h2 className="text-2xl opacity-90 flex mt-2">
            MERN Stack Developer
          </h2>
          <p className="text-center max-w-2xl p-4 mt-6 break-words leading-relaxed">
            I'm Junaid Husain, a software engineer and freelance full-stack web
            developer with a passion for technology and innovation. I specialize
            in developing user-friendly and efficient applications.
          </p>
          {/* button to dawonload cv */}
          <p className="text-center max-w-2xl p-4 mt-6 break-words leading-relaxed">
            for more information about me, you can download my resume
          </p>
          <a
            href="/assets/Junaid _Resume-319.pdf"
            download
            className="flex item-center bg-blue-500 text-white rounded-full p-2 px-4 hover:bg-blue-700"
          >
            <span className="pr-2">Download Resume</span>

            <FaDownload className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
