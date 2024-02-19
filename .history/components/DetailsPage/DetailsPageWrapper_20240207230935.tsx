"use client";

import React, {useEffect} from 'react'
import useTranslat
import { DetailsHero } from '..'

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
    </>
  )
}

export default DetailsPageWrapper