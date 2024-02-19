"use client";

import React, {useRef} from "react";
import IMAGE from "../../public/images/ceo2.jpg";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/AboutPage/accordion.module.scss";

interface AccordionProps {
  index: number;
  activeAccordion: number;
  setActiveAccordion: React.Dispatch<React.SetStateAction<number>>
}

const Accordion = ({index, activeAccordion, setActiveAccordion}: AccordionProps) => {
  const text3 = "Donfack Kengni, fondateur et directeur de DKAD, est un architecte de renom inscrit à l'Ordre National des Architectes du Cameroun. Son amour profond pour les espaces beaux et paisibles se reflète dans ses conceptions architecturales novatrices. Sa vision et son leadership ont contribué à façonner la réputation d'excellence de DKAD dans le paysage architectural."
  const text4 = "Son travail incarne un mélange unique d'esthétique et de fonctionnalité, créant des espaces qui sont non seulement visuellement attrayants, mais aussi sereins et tranquilles. Les contributions de Donfack Kengni à l'architecture continuent d'inspirer et d'influencer le domaine. Son travail reflète véritablement l'essence de la création d'espaces qui inspirent."
  const ptags = [text3, text4]

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  
  return (
    <div className={styles.accordion} style={{borderTop: index===0 ? "0.04rem solid var(--text-color-light)" : ""}}>
      <div className={styles.accordion__header} onClick={() => setActiveAccordion(index)}>
        <div className={styles.h__left}>
          <span>Donfack Kengni Frankie</span>
        </div>
        <div className={styles.h__right}>
          <span>Fondateur et directeur général</span>
          <span className={activeAccordion===index ? styles.active : ""}><Icon icon="la:angle-up" /></span>
        </div>
      </div>
      <div className={`${styles.accordion__data} ${activeAccordion===index ? styles.active : ""}`}>
        <div className={styles.ad__wrapper}>

        <div className={styles.empty}></div>
        <div className={styles.a__data}>
          <div className={styles.image__wrapper}>
            <div className={styles.image}>
              <Image src={IMAGE} fill alt="Donfack CEO" quality={100} />
            </div>
          </div>
          <div className={styles.p__tags}>
            {
              ptags.map((tag, i) => (
                <p key={i}>{tag}</p>
              ))
            }
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
