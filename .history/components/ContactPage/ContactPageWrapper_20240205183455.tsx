"use client";

import React, { useEffect } from "react";
import {
  FooterReusable,
  ContactHero,
  FixedReusable,
  ContactSpecialist,
} from "..";
import Lenis from "@studio-freight/lenis";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/project3.jpg";
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
    link: "tel:690756994",
    linktext: t("ContactPage:fixedtitle"),
    image: IMAGE2,
  };

  return (
    <>
      <ContactHero />
      <ContactSpecialist />
      <FixedReusable linker data={fixedData} />
      <FooterReusable data={footerData}/>
    </>
  );
};

export default ContactPageWrapper;
