"use client";

import React, { useEffect, useState, useRef } from "react";
import HomeHero from "./HomeHero";
import Lenis from "@studio-freight/lenis";

const HomePageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const homeInfoRef = useRef(null);

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
      <HomeAbout/>
    </>
  )
}

export default HomePageWrapper