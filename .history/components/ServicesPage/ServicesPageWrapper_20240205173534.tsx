"use client";

import React, {useEffect, useState} from 'react'
import { ServicesHeader, SolutionsBottom, FooterReusable } from '..'
import Lenis from "@studio-freight/lenis";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/footerr2.jpg"

const ServicesPageWrapper = () => {
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
  const data = {
    title: t("ServicesPage:footerrtitle"),
    title2: t("ServicesPage:footerrtitle2"),
    text: t("ServicesPage:footerrtext"),
    image: IMAGE,
    link: `/${currentlocale}/about`
  }


  return (
    <>
      <ServicesHeader />
      <SolutionsBottom lenis={lenis}/>
      <FooterReusable data={data} />
    </>
  )
}

export default ServicesPageWrapper