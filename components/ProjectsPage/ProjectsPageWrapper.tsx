'use client';

import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import Lenis from "@studio-freight/lenis";
import IMAGE from "../../public/images/footerr1.jpg"
import { ProjectsHero, ProjectContent, FooterReusable, Navbar, Preloader2 } from '..'


const ProjectsPageWrapper = () => {
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



  //Footer Reusable data
  const footerData = {
    title: t("ProjectsPage:footerrtitle"),
    title2: t("ProjectsPage:footerrtitle2"),
    text: t("ProjectsPage:footerrtext"),
    image: IMAGE,
    link: `/${currentlocale}/services`
  }

  return (
    <>
      <Preloader2 imageLoaded={imageLoaded} setAnimationFinished={setAnimationFinished} localState={localstate}/>
      <Navbar lang={currentlocale} animationFinished={animationFinished} setLocalState={setLocalState}/>
      <ProjectsHero setImageLoaded={setImageLoaded}
        animationFinished={animationFinished} />
      <ProjectContent cta={t("ProjectsPage:ctabutton")} animationFinished={animationFinished} currentLocale={currentlocale}/>
      <FooterReusable data={footerData}/>
    </>
  )
}

export default ProjectsPageWrapper