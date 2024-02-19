"use client";

import React from 'react'
import { useTranslation } from 'react-i18next';
import { Rounded } from '..'
import styles from "../../styles/HomePage/contact.module.scss"

const HomeContact = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  return (
    <section className={`section ${styles.contact__section}`}>
      <div className={`container ${styles.contact__container}`}>
        <div className={styles.contact__top}>
          <div className={styles.top__one}>
            <p>Nous vous aiderons a mettre en oeuvre</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.top__two}>
            <p>toutes solutions de <span className={styles.text__fade}>conception</span></p>
          </div>
        </div>
        <div className={styles.contact__mid}>
          <p>Notre marque est en résonance avec l'intensité et la vivacité de la couleur Infinite Azure, une nuance de bleu profonde et vibrante. Elle symbolise notre engagement à repousser les limites de la conception architecturale, en créant des espaces qui inspirent et transforment.</p>
        </div>
        <div>
          <Rounded linker={true} link={`/${currentLocale}/contact`} classNames={styles.rounded} backgroundColor='#ffffff'>
            <p>Get in touch</p>
          </Rounded>
        </div>
      </div>
    </section>
  )
}

export default HomeContact