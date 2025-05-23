"use client";
import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Skill from "@/components/Skill/Skill";
import { Features } from "@/components/Features/Features";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skill />
      <Features />
    </>
  );
}
