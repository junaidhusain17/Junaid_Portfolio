import React from "react";
import Appbar from "@/components/AppBar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function contactPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <div className="pl-9 pr-9 p-7">
          <Appbar />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default contactPage;
