"use client";

import React from 'react'
import { useTranslation } from 'react-i18next';
import { Rounded } from '..'
import { useInView } from 'react-intersection-observer'
import styles from "../../styles/ContactPage/specialist.module.scss"

const ContactSpecialist = () => {
  const { t } = useTranslation();

  const { ref: ref, inView: inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const splitwords = (phrase: string, condition: boolean) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(<p key={`word-${i}`}><span style={{top: condition ? "0%" : "-100%"}} >{word}</span></p>);
    });

    return body;
  };

  const text = t("ContactPage:specialist")
  return (
    <section className={styles.specialist__section}>
      <div className={`container ${styles.special__container}`}>
        <div className={styles.left}>
          <span></span>
          <p>{t("ContactPage:specialist1")}</p>
        </div>
        <div className={styles.right}>
          <div className={styles.right__text} ref={ref}>{splitwords(text, inView)}</div>
          <div className={styles.rounded__button}>
            <Rounded linker link="tel:690756994" backgroundColor='#ffffff' classNames={styles.rounded}>
              <p>{t("ContactPage:specialist2")}</p>
            </Rounded>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSpecialist