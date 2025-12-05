"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Aboutme/>
    </div>
  );
}
