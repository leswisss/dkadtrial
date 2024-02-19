import React from "react";
import styles from "../../styles/DetailsPage/details.module.scss";

const DetailsDetails = () => {
  const DetailsContent = () => {

    return (
      <div className={styles.content__container}>
        <div>
          
        </div>
      </div>
    )
  }
  return (
    <section className={`section ${styles.details__section}`}>
      <div className={`container ${styles.details__container}`}>
        <div className={styles.d__top}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>A PROPOS DU PROJET</span>
          </div>
          <div className={styles.about__content}>
            <p className={styles.a__text}>
              Sunset Sanctuary Retreat est un témoignage de l'innovation
              architecturale et de la conception durable. Nichée au cœur de la
              nature, cette structure à deux niveaux est dotée de grandes baies
              vitrées qui offrent aux résidents une vue imprenable sur la
              verdure environnante. Le niveau supérieur, caractérisé par des
              lattes de bois, ajoute un élément d'intimité tout en rehaussant
              l'attrait esthétique.
            </p>
            <p className={styles.a__text}>
              Le garage ouvert au rez-de-chaussée offre une commodité sans
              compromis sur le design. L'utilisation de matériaux durables et
              l'intégration transparente dans l'environnement soulignent notre
              engagement en faveur d'un mode de vie respectueux de
              l'environnement.{" "}
            </p>
          </div>
        </div>
        <div className={styles.d__top}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>
              INFORMATIONS SUR LE PROJET
            </span>
          </div>
          <div className={styles.about__content2}>
            <div className={styles.ac__top}>

            </div>
            <div className={styles.ac__bottom}>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsDetails;
