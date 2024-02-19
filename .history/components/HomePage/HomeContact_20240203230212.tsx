"use client";

import React from 'react'
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Rounded } from '..'
import styles from "../../styles/HomePage/contact.module.scss"

const HomeContact = () => {
  const text1 = "Nous vous aiderons a mettre en oeuvre"
  const text2 = "toutes solutions de conception"

  //Text Animation
  const { ref: ref, inView: inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const splitwords = (phrase: string, condition: boolean) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(<p key={`word-${i}`}><span className={word===} style={{top: condition ? "0%" : "-100%"}} >{word}</span></p>);
    });

    return body;
  };

  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  return (
    <section className={`section ${styles.contact__section}`}>
      <div className={`container ${styles.contact__container}`}>
        <div className={styles.contact__top}>
          <div className={styles.top__one}>
            <p className={styles.p__text}>Nous vous aiderons a mettre en oeuvre</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.top__two}>
            <p className={`${styles.p__text} ${styles.align}`}>toutes solutions de <span className={styles.text__fade}>conception</span></p>
          </div>
        </div>
        <div className={styles.contact__mid}>
          <p>Notre marque est en résonance avec l'intensité et la vivacité de la couleur Infinite Azure, une nuance de bleu profonde et vibrante. Elle symbolise notre engagement à repousser les limites de la conception architecturale, en créant des espaces qui inspirent et transforment.</p>
        </div>
        <div className={styles.button}>
          <Rounded linker={true} link={`/${currentLocale}/contact`} classNames={styles.rounded} backgroundColor='#ffffff'>
            <p>Commencer votre voyage</p>
          </Rounded>
        </div>
      </div>
    </section>
  )
}

export default HomeContact