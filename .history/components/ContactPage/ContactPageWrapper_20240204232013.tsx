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

  // //Footer Reusable data
  // const footerData = {
  //   title: t("HomePage:footerrtitle"),
  //   title2: t("HomePage:footerrtitle2"),
  //   text: t("HomePage:footerrtext"),
  //   image: IMAGE,
  //   link: `/${currentlocale}/about`
  // }

  //Footer Reusable data
  const footerData = {
    title: "Éclat Architectural:",
    title2: "Explorez Nos Projets",
    text: "Après avoir exploré la gamme diversifiée de services que DKAD offre, nous vous invitons à découvrir comment ces services ont été mis en œuvre dans nos projets",
    image: IMAGE,
    link: `/${currentlocale}/projects`,
  };

  const fixedData = {
    id: 1,
    title: "Vous ne trouvez pas ce que vous cherchez ?",
    text: "Nous sommes là pour vous aider",
    link: "tel:690756994",
    linktext: "Contactez nous",
    image: IMAGE2,
  };

  return (
    <>
      <ContactHero />
      <ContactSpecialist />
      <FixedReusable linker data={fixedData} />
      <
    </>
  );
};

export default ContactPageWrapper;
