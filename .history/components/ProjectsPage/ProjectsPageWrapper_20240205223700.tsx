'use client';

import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
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


  const fixedData = {
    id: 1,
    title: t("ContactPage:fixedtitle"),
    text: t("ContactPage:fixedtext"),
    link: "mailto:onac464@yahoo.com",
    linktext: t("ContactPage:fixedcta"),
    image: IMAGE2,
  };
  return (
    <>
      <ProjectsHero />
      <ProjectContent />
    </>
  )
}

export default ProjectsPageWrapper