"use client";

import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/ServicesPage/header.module.scss"

const ServicesHeader = () => {
  const { t } =  useTranslation();

  return (
    <section className={`section__special ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <div className="header__text">
          <p className="header__text-main">{t("ServicesPage:")}</p>
        </div>
        <div className={styles.floating__text}>
          <div className={styles.text__left}>
            <p>5+ ans sur le marché</p>
          </div>
          <div className={styles.text__right}>
            <p>Nous garantissons une <span className={styles.text__blue}>qualité inégalée</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeader