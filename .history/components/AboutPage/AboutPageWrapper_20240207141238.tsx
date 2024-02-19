"use client";

import React, { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/project4.jpg"
import { AboutHero, AboutMission, AboutTeam, FooterReusable } from '..'

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

  //Footer Reusable data
  const footerData = {
    title: t("ContactPage:footerrtitle"),
    title2: t("ContactPage:footerrtitle2"),
    text: t("ContactPage:footerrtext"),
    image: IMAGE,
    link: currentlocale==="en" ? `/${currentlocale}/projects` : `/${currentlocale}/projets`
  }




  return (
    <>
      <AboutHero/>
      <AboutMission />
      <AboutTeam />
      <FooterReusable data={footerData}/>
    </>
  )
}

export default AboutPageWrapper