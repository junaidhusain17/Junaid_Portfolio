import React from "react";
import Appbar from "@/components/AppBar";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Appbar />
      <Home />
      <Footer />
    </div>
  );
}
