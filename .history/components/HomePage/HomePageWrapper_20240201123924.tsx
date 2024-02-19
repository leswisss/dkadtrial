"use client";

import React, { useEffect, useState, useRef } from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import Lenis from "@studio-freight/lenis";

const HomePageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const homeAboutRef = useRef(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);

  return (
    <>
      <HomeHero lenis={lenis} />
      <HomeAbout ref={homeAboutRef}/>
    </>
  )
}

export default HomePageWrapper