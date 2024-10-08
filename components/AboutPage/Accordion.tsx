"use client";

import React, { useRef } from "react";
import IMAGE from "../../public/images/ceo2.jpg";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Lenis from "@studio-freight/lenis/types";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/AboutPage/accordion.module.scss";

interface AccordionProps {
  index: number;
  activeAccordion: number;
  setActiveAccordion: React.Dispatch<React.SetStateAction<number>>;
  lenis: Lenis | null;
  currentLocale: string;
}

const Accordion = ({
  index,
  activeAccordion,
  setActiveAccordion,
  lenis,
  currentLocale,
}: AccordionProps) => {
  const text3 =
    "Donfack Kengni, Fondateur et Directeur de DKAD, est un architecte de renom inscrit à l'Ordre National des Architectes du Cameroun. Son amour profond pour les espaces beaux et paisibles se reflète dans ses conceptions architecturales novatrices. Sa vision et son leadership ont contribué à façonner la réputation d'excellence de DKAD dans le paysage architectural.";
  const text4 =
    "Son travail incarne un mélange unique d'esthétique et de fonctionnalité, créant des espaces qui sont non seulement visuellement attrayants, mais aussi sereins et tranquilles. Les contributions de Donfack Kengni à l'architecture continuent d'inspirer et d'influencer le domaine. Son travail reflète véritablement l'essence de la création d'espaces qui inspirent.";

  const text5 =
    "Donfack Kengni, Founder and Director of DKAD, is a renowned architect registered with the Ordre National des Architectes du Cameroun. His deep love of beautiful and peaceful spaces is reflected in his innovative architectural designs. His vision and leadership have helped shape DKAD's reputation for excellence in the architectural landscape.";

  const text6 =
    "His work embodies a unique blend of aesthetics and functionality, creating spaces that are not only visually appealing, but also serene and tranquil. Donfack Kengni's contributions to architecture continue to inspire and influence the field. His work truly reflects the essence of creating spaces that inspire.";

  const ptags = [text3, text4];
  const ptags2 = [text5, text6];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-60, 0]);

  //Accordion Scroll
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleLenisScroll = () => {
    setActiveAccordion(index);

    if (lenis && accordionRef.current) {
      setTimeout(() => {
        const referenceTop = accordionRef.current
          ? window.scrollY +
            accordionRef.current.getBoundingClientRect().top -
            96
          : 0;
        lenis.scrollTo(referenceTop);
      }, 550); // Delay of 1 second
    }
  };

  return (
    <div
      ref={accordionRef}
      className={styles.accordion}
      style={{
        borderTop: index === 0 ? "0.04rem solid var(--text-color-light)" : "",
      }}
    >
      <div
        className={styles.accordion__header}
        onClick={() => handleLenisScroll()}
      >
        <div className={styles.h__left}>
          <span>Donfack Kengni Frankie</span>
        </div>
        <div className={styles.h__right}>
          <span>{currentLocale==="fr" ? "Fondateur et Directeur Général" : "Founder and Director"}</span>
          <span className={activeAccordion === index ? styles.active : ""}>
            <Icon icon="la:angle-up" />
          </span>
        </div>
      </div>
      <div
        className={`${styles.accordion__data} ${
          activeAccordion === index ? styles.active : ""
        }`}
      >
        <div className={styles.ad__wrapper}>
          <div className={styles.empty}></div>
          <div className={styles.a__data}>
            <div className={styles.image__wrapper} ref={container}>
              <motion.div className={styles.image} style={{ y }}>
                <Image src={IMAGE} fill alt="Donfack CEO" quality={100} />
              </motion.div>
            </div>
            {currentLocale === "fr" ? (
              <div className={styles.p__tags}>
                {ptags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
            ) : (
              <div className={styles.p__tags}>
                {ptags2.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
