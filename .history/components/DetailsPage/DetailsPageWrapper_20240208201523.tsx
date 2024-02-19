"use client";

import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import Lenis from "@studio-freight/lenis";
import { DetailsHero, DetailsImages, DetailsDetails, DetailsMore  } from '..'

const DetailsPageWrapper = () => {
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
      <DetailsHero />
      <DetailsImages />
      <DetailsDetails />
      <DetailsMore />
      
    </>
  )
}

export default DetailsPageWrapper