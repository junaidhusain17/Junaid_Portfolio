import React, { useState } from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";
import AppBar from "@/components/AppBar";

function aboutPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <div className="pl-9 pr-9 p-7">
          <AppBar />
        </div>
        <About />
        <Footer />
      </div>
    </>
  );
}

export default aboutPage;
