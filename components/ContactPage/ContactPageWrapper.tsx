"use client";

import React, { useEffect, useState } from "react";
import {
  FooterReusable,
  ContactHero,
  FixedReusable,
  ContactSpecialist,
  Navbar,
  Preloader2
} from "..";
import Lenis from "@studio-freight/lenis";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/footerr6.jpg";
import IMAGE2 from "../../public/images/reusable.jpg";

const ContactPageWrapper = () => {
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


  //Preloader Animation
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  const [localstate, setLocalState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('myState') || 'Initial State';
    } else {
      return 'Initial State';
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myState', localstate);
    }
  }, [localstate]);


  useEffect(() => {
    if (animationFinished) {
      setLocalState("Initial State")
    }
  }, [animationFinished])

  return (
    <>
      <Preloader2 imageLoaded={imageLoaded} setAnimationFinished={setAnimationFinished} localState={localstate}/>
      <Navbar lang={currentlocale} animationFinished={animationFinished} setLocalState={setLocalState}/>
      <ContactHero setImageLoaded={setImageLoaded}
        animationFinished={animationFinished}/>
      <ContactSpecialist />
      <FixedReusable linker data={fixedData} />
      <FooterReusable data={footerData}/>
    </>
  );
};

export default ContactPageWrapper;
