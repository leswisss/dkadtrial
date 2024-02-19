"use client";

import React, { useState } from "react";
import Image from "next/image";
import IMAGE from "../../public/images/aboutimage.jpg";
import IMAGE2 from "../../public/images/aboutimage2.jpg";
import IMAGE3 from "../../public/images/aboutimage3.jpg";

import styles from "../../styles/HomePage/about.module.scss";

const HomeAbout = ({
  reference,
}: {
  reference: React.RefObject<HTMLDivElement>;
}) => {
  const IMAGES = [IMAGE2, IMAGE3];

  const [activeImage, setActiveImage] = useState(0)
  const firstPhrase = "Issue d'un amour profond pour les espaces beaux et paisibles, DKAD représente une ambition durable de créer et d'améliorer des conceptions architecturales qui durent."
  const secondPhrase = "Issue d'un amour profond pour les espaces beaux et paisibles, DKAD représente une ambition durable de créer et d'améliorer des conceptions architecturales qui durent."

  const splitwords = (phrase: string) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(<p key={`word-${i}`}>{word}</p>);
    });

    return body;
  };

  return (
    <section ref={reference} className={styles.about__section}>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__main}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>
              Linspiration derriere dkad
            </span>
          </div>
          <div className={styles.about__content}>
            <div className={styles.content__one}>
              <p>
                Issue d'un amour profond pour les espaces beaux et paisibles,
                DKAD représente une ambition durable de créer et d'améliorer des
                conceptions architecturales qui durent.
              </p>
            </div>
            <div className={styles.content__two}>
              <div className={styles.content__two_main}>
                <span className={styles.subheader}>Notre Marque</span>
                <p>
                  DKAD, acronyme de Donfack Kengni Architecture & Design,
                  témoigne de la vision et de la passion du fondateur. Ce nom
                  résume notre engagement en faveur de l'excellence
                  architecturale et notre conviction que le design a le pouvoir
                  d'inspirer.
                </p>
              </div>
              <div className={styles.content__two_main}>
                <span className={styles.subheader}>Notre Persona</span>
                <p>
                  Notre marque est en résonance avec l'intensité et la vivacité
                  de la couleur Infinite Azure, une nuance de bleu profonde et
                  vibrante. Elle symbolise notre engagement à repousser les
                  limites de la conception architecturale, en créant des espaces
                  qui inspirent et transforment.
                </p>
              </div>
            </div>
            <div className={styles.content__three}>
              <div className={styles.main__image_wrapper}>
                <div className={styles.main__image_swiper} style={{transform: `translateX(${-activeImage*33.33}%)`}}>
                  <Image src={IMAGE} alt="Interior Design" fill quality={100} />
                </div>
              </div>
              {IMAGES.map((image, i) => (
                <div className={styles.secondary__image_wrapper} key={i} onMouseEnter={() => setActiveImage(i+1)} onMouseLeave={() => setActiveImage(0)}>
                  <div className={styles.secondary__image_swiper}>
                    <Image
                      src={image}
                      alt="Interior Design"
                      fill
                      quality={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.about__main}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>Qui nous sommes</span>
          </div>
          <div className={styles.about__content}>
            <div className={styles.content__one}>
              <p>
                Fondée par Donfack Kengni en 2024, DKAD est une entreprise
                d'architecture de premier plan avec une concentration
                stratégique sur la création d'espaces inspirants à long terme.
              </p>
            </div>
            <div className={styles.content__two}>
              <div className={styles.content__two_main}>
                <p>
                  Notre vaste champ d'action et nos intérêts variés nous
                  permettent de trouver des opportunités dans des projets
                  architecturaux conventionnels et innovants, avec un accent
                  particulier sur la conception durable.
                </p>
              </div>
              <div className={styles.content__two_main}>
                <p>
                  Nous accordons de l'importance à un savoir-faire exceptionnel,
                  à des expériences uniques et à des opportunités durables et
                  personnalisées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
