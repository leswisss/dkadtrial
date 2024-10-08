"use client";

import React, { useEffect, useState } from 'react'
import Lenis from "@studio-freight/lenis";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/services.jpg"
import { AboutHero, AboutMission, AboutTeam, FooterReusable, Navbar, Preloader2 } from '..'

const AboutPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

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


  //Preloader Animation
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  const [localstate, setLocalState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('myState') || 'Initial State';
    } else {
      return 'Initial State';
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myState', localstate);
    }
  }, [localstate]);


  useEffect(() => {
    if (animationFinished) {
      setLocalState("Initial State")
    }
  }, [animationFinished])



  //Footer Reusable data
  const footerData = {
    title: t("AboutPage:footerrtitle"),
    title2: t("AboutPage:footerrtitle2"),
    text: t("AboutPage:footerrtext"),
    image: IMAGE,
    link: currentlocale==="en" ? `/${currentlocale}/projects` : `/${currentlocale}/projets`
  }


  return (
    <>
      <Preloader2 imageLoaded={imageLoaded} setAnimationFinished={setAnimationFinished} localState={localstate}/>
      <Navbar lang={currentlocale} animationFinished={animationFinished} setLocalState={setLocalState}/>
      <AboutHero setImageLoaded={setImageLoaded}
        animationFinished={animationFinished}/>
      <AboutMission />
      <AboutTeam lenis={lenis} currentLocale={currentlocale}/>
      <FooterReusable data={footerData}/>
    </>
  )
}

export default AboutPageWrapper