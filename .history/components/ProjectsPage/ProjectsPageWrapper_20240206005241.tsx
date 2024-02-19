'use client';

import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import Lenis from "@studio-freight/lenis";
import IMAGE from "../../public/images/exterior.jpg"
import { ProjectsHero, ProjectContent, FooterReusable } from '..'

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
    title: t("ProjectsPage:footerrtitle"),
    title2: t("ProjectsPage:footerrtitle2"),
    text: t("ProjectsPage:footerrtext"),
    image: IMAGE,
    link: `/${currentlocale}/services`
  }

  return (
    <>
      <ProjectsHero />
      <ProjectContent cta={t("ProjectsPage:ctabutton
      ")}/>
      <FooterReusable data={footerData}/>
    </>
  )
}

export default ProjectsPageWrapper