"use client";

import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from "../../styles/ProjectsPage/phero.module.scss"

const ProjectsHero = () => {
  const text = "DKAD a conçu et réalisé un portfolio acclamé qui comprend certains des points de repère architecturaux les plus éminents du monde."
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const filters = [
    {
      name: "Tous",
      link:  `/${currentLocale}/projects`
    },
    {
      name: "Tous",
      link:  `/${currentLocale}/projects?service=interi`
    },


  ]
  return (
    <section className={`section__special ${styles.projects__section}`}>
      <div className={`container ${styles.projects__container}`}>
        <div className="header__text">
          <div className="header__text-main">{text}</div>
        </div>
        <div className={styles.filters}>

        </div>
      </div>
    </section>
  )
}

export default ProjectsHero