"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/footerr1.jpg"
import { HomeAbout, HomeHero, HomeSolutions, HomeProjects, HomeContact, Background, FooterReusable } from "..";
import Lenis from "@studio-freight/lenis";

const HomePageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const homeAboutRef = useRef(null);
  const { t, i18n } = useTranslation();
  const currentlocale = i

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
    title: "Dévoiler la vision:",
    title2: "La création de récits architecturaux",
    text: "Plongez dans l'essence de notre identité. Découvrez la passion, le dévouement et la vision qui alimentent nos innovations architecturales. Découvrez-nous ici.",
    image: IMAGE,
    link: "/about"
  }

  return (
    <>
      <HomeHero lenis={lenis} reference={homeAboutRef} />
      <HomeAbout reference={homeAboutRef}/>
      <HomeSolutions lenis={lenis}/>
      <HomeProjects />
      <HomeContact />
      <Background />
      <FooterReusable data={data} />
    </>
  )
}

export default HomePageWrapper