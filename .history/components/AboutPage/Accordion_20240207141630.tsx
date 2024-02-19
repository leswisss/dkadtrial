"use client";

import React, {useRef} from "react";
import IMAGE from "../../public/images/ceo2.jpg";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { accordionAnim } from "@/animations";
import Lenis from "@studio-freight/lenis/types";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/AboutPage/accordion.module.scss";

interface AccordionProps {
  index: number;
  activeAccordion: number;
  setActiveAccordion: React.Dispatch<React.SetStateAction<number>>
  lenis: Lenis
}

const Accordion = ({index, activeAccordion, setActiveAccordion, lenis}: AccordionProps) => {
  const text3 = "Donfack Kengni, fondateur et directeur de DKAD, est un architecte de renom inscrit à l'Ordre National des Architectes du Cameroun. Son amour profond pour les espaces beaux et paisibles se reflète dans ses conceptions architecturales novatrices. Sa vision et son leadership ont contribué à façonner la réputation d'excellence de DKAD dans le paysage architectural."
  const text4 = "Son travail incarne un mélange unique d'esthétique et de fonctionnalité, créant des espaces qui sont non seulement visuellement attrayants, mais aussi sereins et tranquilles. Les contributions de Donfack Kengni à l'architecture continuent d'inspirer et d'influencer le domaine. Son travail reflète véritablement l'essence de la création d'espaces qui inspirent."
  const ptags = [text3, text4]

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-60, 0]);

  //Accordion Scroll
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleLenisScroll = () => {
    setActiveAccordion(index)
    if (lenis && accordionRef.current) {
      const referenceTop = accordionRef.current.getBoundingClientRect().top;
      lenis.scrollTo(referenceTop);
    }
  };
  
  return (
    <div ref={accordionRef} className={styles.accordion} style={{borderTop: index===0 ? "0.04rem solid var(--text-color-light)" : ""}}>
      <div className={styles.accordion__header} onClick={() => s}>
        <div className={styles.h__left}>
          <span>Donfack Kengni Frankie</span>
        </div>
        <div className={styles.h__right}>
          <span>Fondateur et directeur général</span>
          <span className={activeAccordion===index ? styles.active : ""}><Icon icon="la:angle-up" /></span>
        </div>
      </div>
      <motion.div variants={accordionAnim} className={`${styles.accordion__data} ${activeAccordion===index ? styles.active : ""}`}>
        <div className={styles.ad__wrapper}>

        <div className={styles.empty}></div>
        <div className={styles.a__data}>
          <div className={styles.image__wrapper} ref={container}>
            <motion.div className={styles.image} style={{y}}>
              <Image src={IMAGE} fill alt="Donfack CEO" quality={100} />
            </motion.div>
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
      </motion.div>
    </div>
  );
};

export default Accordion;


//${activeAccordion===index ? styles.active : ""}