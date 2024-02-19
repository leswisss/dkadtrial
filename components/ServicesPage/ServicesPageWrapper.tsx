"use client";

import React, { useEffect, useState } from "react";
import {
  ServicesHeader,
  SolutionsBottom,
  FooterReusable,
  Navbar,
  Preloader2,
} from "..";
import Lenis from "@studio-freight/lenis";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/footerr7.jpg";

const ServicesPageWrapper = () => {
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
      setLocalState("Initial State");
    }
  }, [animationFinished]);

  //Footer Reusable data
  const data = {
    title: t("ServicesPage:footerrtitle"),
    title2: t("ServicesPage:footerrtitle2"),
    text: t("ServicesPage:footerrtext"),
    image: IMAGE,
    link: currentlocale==="fr" ? `/${currentlocale}/projets` : `/${currentlocale}/projects` ,
  };

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
      <ServicesHeader setImageLoaded={setImageLoaded}
        animationFinished={animationFinished}/>
      <SolutionsBottom lenis={lenis} />
      <FooterReusable data={data} />
    </>
  );
};

export default ServicesPageWrapper;
