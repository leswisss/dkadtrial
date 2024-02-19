"use client";

import React, { useEffect, useState, useRef } from "react";
import IMAGE from "../../public/images/footerr1.jpg"
import { HomeAbout, HomeHero, HomeSolutions, HomeProjects, HomeContact, Background, FooterReusable } from "..";
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

  //Footer Reusable data
  const data = {
    
  }

  return (
    <>
      <HomeHero lenis={lenis} reference={homeAboutRef} />
      <HomeAbout reference={homeAboutRef}/>
      <HomeSolutions lenis={lenis}/>
      <HomeProjects />
      <HomeContact />
      <Background />
      <FooterReusable />
    </>
  )
}

export default HomePageWrapper