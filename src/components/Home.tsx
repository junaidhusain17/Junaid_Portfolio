import React from "react";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-white text-black dark:bg-black dark:text-white pt-8">
        <h1 className="text-5xl font-bold text-center">
          Welcome to My Portfolio!
        </h1>
        <div className="flex items-center justify-center h-screen ">
          <Image
            src="/no-bg.png"
            alt="Junaid Picture"
            width={300}
            height={300}
            className="rounded-full shadow-inner "
          />
        </div>
        <p className="text-center">
          I'm Junaid, a software engineer and freelance graphic designer with a
          passion for technology and innovation. I specialize in developing
          user-friendly and efficient applications.
        </p>
      </div>
    </>
  );
}

export default Home;
