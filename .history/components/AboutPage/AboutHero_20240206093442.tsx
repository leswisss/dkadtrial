"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { WhoWeAre } from "..";
import styles from "../../styles/AboutPage/abouthero.module.scss";

const AboutHero = () => {
  const { t } = useTranslation();

  const text1 = t("AboutPage:pointofview")
  const text2 = t("AboutPage:pointofview2")

  const content = [text1, text2];


  const splitwords = (phrase: string, condition: boolean) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(
        <p key={`word-${i}`}>
          <span style={{ top: condition ? "0%" : "-100%" }}>{word}</span>
        </p>
      );
    });

    return body;
  };

  return (
    <div className={`section__special ${styles.hero__section}`}>
      <div className={`container ${styles.hero__container}`}>
        <div className={`header__text`}>
          <p className="header__text-main">
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
              {content.map((data, i) => {
                const { ref, inView } = useInView({
                  threshold: 0.2,
                  triggerOnce: true,
                });

                return (
                  <div className={styles.content__one} key={i} ref={ref}>
                    {splitwords(data, inView)}
                  </div>
                );
              })}
            </div>
          </div>
          <WhoWeAre />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
