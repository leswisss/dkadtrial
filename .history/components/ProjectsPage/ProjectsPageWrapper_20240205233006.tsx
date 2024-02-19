'use client';

import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import Lenis from "@studio-freight/lenis";
import IMAGE from "../../public/images/aboutimage3.jpg"
import { ProjectsHero, ProjectContent } from '..'

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


  //Footer Reusable data
  const footerData = {
    title: t("ContactPage:footerrtitle"),
    title2: t("ContactPage:footerrtitle2"),
    text: t("ContactPage:footerrtext"),
    image: IMAGE,
    link: `/${currentlocale}`
  }

  return (
    <>
      <ProjectsHero />
      <ProjectContent />
    </>
  )
}

export default ProjectsPageWrapper