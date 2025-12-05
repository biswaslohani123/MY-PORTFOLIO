"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Aboutme/>
      <Services/>
     <Work/>
    </div>
  );
}
