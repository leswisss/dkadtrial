"use client";

import React, {useRef} from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Rounded } from "..";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/background.jpg";
import styles from "../../styles/AboutPage/mission.module.scss";

const AboutMission = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <section className={`${styles.mission__section}`}>
      <div className={styles.image__overflow} ref={container}>
        <motion.div className={styles.mission__image} style={{y}} >
          <Image src={IMAGE} alt="Landscape Image" fill quality={100} />
        </motion.div>
      </div>
      <div className={`container ${styles.mission__container}`}>
        <div className={styles.mission}>
          <div className={styles.mission__wrapper}>
            <div className={styles.mission__content}>
              <span className={styles.m__header}>Notre Mission</span>
              <div className={styles.p__tags}>
                <p>
                  Notre mission est ancrée dans la création d'espaces inspirants
                  pour une meilleure qualité de vie. Nous croyons au pouvoir de
                  transformation des environnements bien conçus et à leur
                  capacité à enrichir la vie.
                </p>
                <p>
                  Chaque projet que nous entreprenons est abordé avec une
                  volonté inébranlable de dépasser les attentes et d'aller
                  au-delà des normes conventionnelles. C'est l'essence même de
                  ce que nous sommes et de ce que nous recherchons. Parce que
                  c'est notre façon de faire.
                </p>
              </div>
              <div className={styles.rounded}>
                <Rounded backgroundColor="#013cac" linker link={ currentLocale==="en" ? "/en/projects": "/fr/projets"} classNames={styles.rounded__button} >
                  <p>Nos Projets</p>
                </Rounded>
              </div>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
