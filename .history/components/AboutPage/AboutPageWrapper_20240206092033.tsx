"use client";

import React from 'react'
import Lenis from "@studio-freight/lenis";
import { useTranslation } from "react-i18next";
import { AboutHero } from '..'

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
  return (
    <>
      <AboutHero/>
    </>
  )
}

export default AboutPageWrapper