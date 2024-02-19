"use client";

import React from "react";
import { useTranslation } from "react-i18next";
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
              {t("HomePage:inspiration")}
            </span>
          </div>
          <div className={styles.about__content}>
            <div className={styles.content__one} ref={ref}>{splitwords(firstPhrase, inView)}</div>
            <div className={styles.content__two}>
              <div className={styles.content__two_main}>
                <span className={styles.subheader}>{t("HomePage:ourbrand")}</span>
                <p className="p__font">
                  {t("HomePage:obtext")}
                </p>
              </div>
              <div className={styles.content__two_main}>
                <span className={styles.subheader}>{t("HomePage:ourpersona")}</span>
                <p className="p__font">
                  {t("HomePage:optext")}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
