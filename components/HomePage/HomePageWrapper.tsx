"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/footerr4.jpg";
import {
  HomeAbout,
  HomeHero,
  HomeSolutions,
  HomeProjects,
  HomeContact,
  Background,
  FooterReusable,
  Preloader,
  Navbar,
  Preloader2,
} from "..";
import Lenis from "@studio-freight/lenis";

const HomePageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const homeAboutRef = useRef(null);
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

  //PRELOADER DATA
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
      setLocalState("Initial State");
    }
  }, [animationFinished]);

  //INITIAL VISIT MANAGMENT
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initially = localStorage.getItem("isFirstVisit");
  
      if (initially === null) {
        setTimeout(() => {
          localStorage.setItem("isFirstVisit", "true");
          setIsFirstVisit(true);
        }, 0);
      } else {
        setIsFirstVisit(false);
      }
  
      const handleBeforeUnload = () => {
        localStorage.removeItem("isFirstVisit");
      };
  
      window.addEventListener("beforeunload", handleBeforeUnload);
  
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);
  

  //Footer Reusable data
  const data = {
    title: t("HomePage:footerrtitle"),
    title2: t("HomePage:footerrtitle2"),
    text: t("HomePage:footerrtext"),
    image: IMAGE,
    link: currentlocale==="en" ? `/${currentlocale}/about` : `/${currentlocale}/a-propos`,
  };

  return (
    <>
      {isFirstVisit && (
        <Preloader
          imageLoaded={imageLoaded}
          setAnimationFinished={setAnimationFinished}
        />
      )}
      {
        !isFirstVisit && <Preloader2 imageLoaded={imageLoaded} setAnimationFinished={setAnimationFinished} localState={localstate}/>
      }
      <Navbar
        lang={currentlocale}
        animationFinished={animationFinished}
        setLocalState={setLocalState}
      />
      <HomeHero
        lenis={lenis}
        reference={homeAboutRef}
        setImageLoaded={setImageLoaded}
        animationFinished={animationFinished}
      />
      <HomeAbout reference={homeAboutRef} />
      <HomeSolutions lenis={lenis} />
      <HomeProjects />
      <HomeContact />
      <Background />
      <FooterReusable data={data} />
    </>
  );
};

export default HomePageWrapper;
