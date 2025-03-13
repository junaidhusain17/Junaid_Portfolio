import React, { useState } from "react";
import AppBar from "@/components/AppBar";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import About from "./about";
import Loader from "@/components/loader";
export default function HomePage() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
          <div className="pl-9 pr-9 p-7">
            <AppBar />
          </div>
          <Home />
          {/* <About /> */}
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
}
