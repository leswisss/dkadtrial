"use client";

import React, { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/aboutimage.jpg"
import { AboutHero, AboutMission } from '..'

const AboutPageWrapper = () => {
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

  // //Footer Reusable data
  // const footerData = {
  //   title: t("ContactPage:footerrtitle"),
  //   title2: t("ContactPage:footerrtitle2"),
  //   text: t("ContactPage:footerrtext"),
  //   image: IMAGE,
  //   link: `/${currentlocale}`
  // }

  //Footer Reusable data
  const footerData = {
    title: "L'innovation au service: ",
    title2: t("ContactPage:footerrtitle2"),
    text: t("ContactPage:footerrtext"),
    image: IMAGE,
    link: `/${currentlocale}`
  }


  return (
    <>
      <AboutHero/>
      <AboutMission />
    </>
  )
}

export default AboutPageWrapper