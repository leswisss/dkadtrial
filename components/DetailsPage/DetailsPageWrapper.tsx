"use client";

import React, {useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import IMAGE from "../../public/images/footerr3.jpg"
import { ProjectsContent } from '@/utils';
import Lenis from "@studio-freight/lenis";
import { DetailsHero, DetailsImages, DetailsDetails, DetailsMore, DetailsOther, FooterReusable, Navbar, Preloader2  } from '..'

const DetailsPageWrapper = () => {
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //use useParams to extract the project params from our pathname
  const projectParams = useParams();
  const projectSlug = projectParams.project; 

  //Filter out current Project using its slug
  const currentProject = projectSlug ? ProjectsContent.find(project => project.slug === projectSlug) : null;

  if (!currentProject) {
    notFound()
  }

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


  useEffect(() => {
    if (animationFinished) {
      setLocalState("Initial State")
    }
  }, [animationFinished])



  //Footer Reusable data
  const footerData = {
    title: t("DetailsPage:footerrtitle"),
    title2: t("DetailsPage:footerrtitle2"),
    text: t("DetailsPage:footerrtext"),
    image: IMAGE,
    link: `/${currentlocale}/contact`
  }

  return (
    <>
      <Preloader2 imageLoaded={imageLoaded} setAnimationFinished={setAnimationFinished} localState={localstate}/>
      <Navbar lang={currentlocale} animationFinished={animationFinished} setLocalState={setLocalState}/>
      <DetailsHero
        animationFinished={animationFinished} currentProject={currentProject} currentLocale={currentlocale} />
      <DetailsImages setImageLoaded={setImageLoaded}
        animationFinished={animationFinished} currentProject={currentProject}/>
      <DetailsDetails currentProject={currentProject} currentLocale={currentlocale}/>
      <DetailsMore currentProject={currentProject} currentLocale={currentlocale}/>
      <DetailsOther currentProject={currentProject} currentLocale={currentlocale}/>
      <FooterReusable data={footerData}/>
    </>
  )
}

export default DetailsPageWrapper