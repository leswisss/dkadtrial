"use client";

import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import styles from "../../styles/ProjectsPage/phero.module.scss"

const ProjectsHero = () => {
  const { t, i18n } = useTranslation();
  const text = t("ProjectsPage:herotext");
  const currentLocale = i18n.language;
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service")
  const services = [
    t("ProjectsPage:all"),
    t("HomePage:interior"),
    t("HomePage:exterior"),
    t("HomePage:")


  ]

  const filters = [
    {
      name: "Tous",
      param: "",
      link:  currentLocale==="en" ? `/${currentLocale}/projects`: `/${currentLocale}/projets`
    },
    {
      name: "Intérieur",
      param: "interior",
      link:  currentLocale==="en" ? `/${currentLocale}/projects?service=interior`: `/${currentLocale}/projets?service=intérieur`
    },
    {
      name: "Extérieur",
      param: "exterior",
      link:  currentLocale==="en" ? `/${currentLocale}/projects?service=exterior`: `/${currentLocale}/projects?service=extérieur` 
    },
    {
      name: "Aménagement Paysager",
      param: "landscaping",
      link:  currentLocale==="en" ? `/${currentLocale}/projects?service=landscaping`: `/${currentLocale}/projects?service=aménagement-paysager`
    }
  ]

  return (
    <section className={`section__special ${styles.projects__section}`}>
      <div className={`container ${styles.projects__container}`}>
        <div className="header__text">
          <div className="header__text-main">{text}</div>
        </div>
        <div className={styles.filters}>
          {
            filters.map((data, i) => (
              <Link href={data.link} className={`${styles.filter__container} ${!serviceParam && data.param==="" || serviceParam===data.param ? styles.active: ""}`} key={i}>
                {data.name}
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProjectsHero