"use client";

import React, { useEffect, useState } from "react";
import HomeHero from "./HomeHero";
import Lenis from "@studio-freight/lenis";

const HomePageWrapper = () => {

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 2,
  //   });

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  const [lenis, setLenis] = useState<Lenis | null>(null);

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
      <HomeHero />
    </>
  )
}

export default HomePageWrapper