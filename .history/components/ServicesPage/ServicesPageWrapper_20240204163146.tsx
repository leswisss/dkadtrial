"use client";

import React, {useEffect, useState} from 'react'
import { ServicesHeader, SolutionsBottom, FooterReusable } from '..'
import Lenis from "@studio-freight/lenis";

const ServicesPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

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

  // //Footer Reusable data
  // const data = {
  //   title: t("HomePage:footerrtitle"),
  //   title2: t("HomePage:footerrtitle2"),
  //   text: t("HomePage:footerrtext"),
  //   image: IMAGE,
  //   link: `/${currentlocale}/about`
  // }

  return (
    <>
      <ServicesHeader />
      <SolutionsBottom lenis={lenis}/>
      <FooterReusable />
    </>
  )
}

export default ServicesPageWrapper