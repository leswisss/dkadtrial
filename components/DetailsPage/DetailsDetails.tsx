"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { ProjectProps } from "@/types";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/DetailsPage/details.module.scss";

const DetailsDetails = ({currentProject, currentLocale}: {currentProject: ProjectProps | null | undefined ; currentLocale: string}) => {
  const { t, i18n } = useTranslation();

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

  const phrases = currentProject && currentLocale === "en" ? currentProject.aboutProject.en : currentProject && currentLocale === "fr" ? currentProject.aboutProject.fr : null
  const archiStyle = currentProject && currentLocale === "en" ? currentProject.projectInfo.en.style : currentProject && currentLocale === "fr" ? currentProject.projectInfo.fr.style : null;
  const archiEnvironment = currentProject && currentLocale === "en" ? currentProject.projectInfo.en.environment : currentProject && currentLocale === "fr" ? currentProject.projectInfo.fr.environment : null;
  const archiFeatures = currentProject && currentLocale === "en" ? currentProject.projectInfo.en.features : currentProject && currentLocale === "fr" ? currentProject.projectInfo.fr.features : null;


  return (
    <section className={`section ${styles.details__section}`}>
      <div className={`container ${styles.details__container}`}>
        <div className={styles.d__top}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>{t("DetailsPage:about")}</span>
          </div>
          <div className={styles.about__content}>
            {phrases?.map((data, i) => {
              const { ref, inView } = useInView({
                threshold: 0.2,
                triggerOnce: true,
              });
              return <div key={i} className={styles.a__text} ref={ref}>{splitwords(data, inView)}</div>;
            })}
          </div>
        </div>
        <div className={styles.d__top}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>
              {t("DetailsPage:information")}
            </span>
          </div>
          <div className={styles.about__content2}>
            <div className={styles.ac__top}>
              <div className={styles.ac__container}>
                <p className={styles.ac__header}>
                  {t("DetailsPage:architecture")}
                </p>
                <p className={styles.ac__content}>{archiStyle}</p>
              </div>
              <div className={styles.ac__container}>
                <p className={styles.ac__header}>
                  {t("DetailsPage:environment")}
                </p>
                <p className={styles.ac__content}>
                  {archiEnvironment}
                </p>
              </div>
            </div>
            <div className={styles.ac__bottom}>
              <div className={styles.ac__container}>
                <p className={styles.ac__header}>
                  {t("DetailsPage:characteristics")}
                </p>
                <p className={styles.ac__content}>
                  {archiFeatures}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsDetails;
