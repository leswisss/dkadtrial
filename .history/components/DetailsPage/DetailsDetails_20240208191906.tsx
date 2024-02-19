"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/DetailsPage/details.module.scss";


const DetailsDetails = () => {
  const { t, i18n } = useTranslation();

  const firstPhrase = "Sunset Sanctuary Retreat est un témoignage de l'innovation architecturale et de la conception durable. Nichée au cœur de la nature, cette structure à deux niveaux est dotée de grandes baies vitrées qui offrent aux résidents une vue imprenable sur la verdure environnante. Le niveau supérieur, caractérisé par des lattes de bois, ajoute un élément d'intimité tout en rehaussant l'attrait esthétique."
    
  const secondPhrase = "Le garage ouvert au rez-de-chaussée offre une commodité sans compromis sur le design. L'utilisation de matériaux durables et l'intégration transparente dans l'environnement soulignent notre engagement en faveur d'un mode de vie respectueux de l'environnement."

  const splitwords = (phrase: string, condition: boolean) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(<p key={`word-${i}`}><span style={{top: condition ? "0%" : "-100%"}} >{word}</span></p>);
    });

    return body;
  };

  const phrases = [firstPhrase, secondPhrase]

  return (
    <section className={`section ${styles.details__section}`}>
      <div className={`container ${styles.details__container}`}>
        <div className={styles.d__top}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>{t("DetailsPage:about")}</span>
          </div>
          <div className={styles.about__content}>
            <p className={styles.a__text}>
              
            </p>
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
                <p className={styles.ac__header}>{t("DetailsPage:architecture")}</p>
                <p className={styles.ac__content}>Moderne, Écologique</p>
              </div>
              <div className={styles.ac__container}>
                <p className={styles.ac__header}>{t("DetailsPage:environment")}</p>
                <p className={styles.ac__content}>
                  Verdure luxuriante, Paysages sereins
                </p>
              </div>
            </div>
            <div className={styles.ac__bottom}>
              <div className={styles.ac__container}>
                <p className={styles.ac__header}>
                  {t("DetailsPage:characteristics")}
                </p>
                <p className={styles.ac__content}>
                  Grandes baies vitrées, Lamelles en bois à l'étage, Garage
                  ouvert
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
