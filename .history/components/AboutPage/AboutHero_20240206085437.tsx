"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { WhoWeAre } from "..";
import styles from "../../styles/AboutPage/abouthero.module.scss";

const AboutHero = () => {
  return (
    <div className={`section__special ${styles.hero__section}`}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__text}>
          <p>
            DKAD façonne l'architecture de manière innovante, en créant des
            espaces de résonance pour tous.
          </p>
        </div>
        <div className={styles.about__content_container}>
          <div className={styles.about__main}>
            <div className={styles.about__title}>
              <span className={styles.title__button}></span>
              <span className={styles.title__text}>
                Le point de vue de DKAD
              </span>
            </div>
            <div className={styles.about__content}>
              <div className={styles.content__one}>
                <p>
                  Chez DKAD, notre premier point de compréhension tourne autour
                  de notre esprit d'innovation. Qu'il s'agisse de design, de
                  conscience écologique ou d'une multitude d'activités, nous
                  prenons toujours en compte la stratégie globale.
                </p>
              </div>
              <div className={styles.content__two}>
                <p>
                  Il s'agit de réfléchir sérieusement à l'impact durable d'un
                  projet, non seulement pour nous, mais aussi pour les parties
                  concernées, les utilisateurs finaux et, bien sûr,
                  l'environnement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
