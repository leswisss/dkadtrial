"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const HomePageWrapper = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <HomeHero />
    </>
  )
}

export default HomePageWrapper