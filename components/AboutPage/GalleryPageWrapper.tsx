"use client";

import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useTranslation } from "react-i18next";
import { Navbar, Preloader2 } from "..";
import GalleryHero from "./GalleryHero";

const GalleryPageWrapper = () => {
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
  }, []);

  //Preloader Animation
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  const [localstate, setLocalState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("myState") || "Initial State";
    } else {
      return "Initial State";
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("myState", localstate);
    }
  }, [localstate]);

  useEffect(() => {
    if (animationFinished) {
      setLocalState("Initial State");
    }
  }, [animationFinished]);

  return (
    <>
      <Preloader2
        imageLoaded={imageLoaded}
        setAnimationFinished={setAnimationFinished}
        localState={localstate}
      />
      <Navbar
        lang={currentlocale}
        animationFinished={animationFinished}
        setLocalState={setLocalState}
      />
      <GalleryHero
        setImageLoaded={setImageLoaded}
        animationFinished={animationFinished}
        currentLocale={currentlocale}
      />
    </>
  );
};

export default GalleryPageWrapper;
