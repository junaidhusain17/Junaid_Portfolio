import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Skills from "./Skills";
import { Skeleton } from "@mui/material";

function Home() {
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black dark:bg-black dark:text-white p-3 pt-10 pb-10">
        <h1 className="text-5xl font-bold text-center">
          Welcome to My Portfolio!
        </h1>
        <div className="flex items-center justify-center my-8">
          {loading ? (
            <Skeleton
              variant="circular"
              height={300}
              width={300}
              className="bg-gray-300 dark:bg-gray-700"
            />
          ) : (
            <Image
              src="/no-bg.png"
              alt="Junaid Picture"
              width={300}
              height={300}
              className="rounded-full shadow-inner"
            />
          )}
        </div>
        <h1 className="font-bold text-4xl text-center">I'am Junaid Husain</h1>
        <h2 className="text-2xl opacity-90 flex mt-2">MERN Stack Developer</h2>
        <h2 className="text-2xl opacity-70 flex justify-center text-center mt-4">
          Current Favorite Tech Stack/Tools
        </h2>
        <Skills />
        <p className="text-center max-w-2xl p-4 mt-6 break-words leading-relaxed">
          I'm Junaid Husain, a software engineer and freelance full-stack web
          developer with a passion for technology and innovation. I specialize
          in developing user-friendly and efficient applications.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
