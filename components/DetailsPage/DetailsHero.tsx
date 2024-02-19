"use client";

import React, {useRef, useEffect} from 'react'
import gsap from 'gsap';
import styles from "../../styles/DetailsPage/dhero.module.scss"

const DetailsHero = ({animationFinished}: {animationFinished: boolean}) => {
  //Preloader Animations


  const heroText = "Mélange harmonieux d'architecture moderne et de beauté naturelle, le Sunset Sanctuary Retreat offre une expérience de vie tranquille et luxueuse au milieu d'une végétation luxuriante et de paysages sereins.";
  const projectName = "Sunset Sanctuary Retreat"
  
  const refs = useRef<HTMLSpanElement[]>([]);
  const refs2 = useRef<HTMLSpanElement[]>([]);
  
  const splitwords = () => {
    let body: JSX.Element[] = [];
    heroText.split(" ").forEach((word, i) => {
      body.push(
        <div key={`word-${i}`} className={styles.word__wrapper}>
          <p ref={(el) => el && refs.current.push(el)} className={styles.word}>
            {word}
          </p>
        </div>
      );
    });

    return body;
  };

  const splitwords2 = () => {
    let body: JSX.Element[] = [];
    projectName.split(" ").forEach((word, i) => {
      body.push(
        <div key={`word-${i}`} className={styles.word__wrapper}>
          <p ref={(el) => el && refs2.current.push(el)} className={styles.word}>
            {word}
          </p>
        </div>
      );
    });

    return body;
  };

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({});

      tl.to(refs2.current, {
        y: "0%",
        ease: "none",
        stagger: 0.03,
      });

      tl.to(refs.current, {
        y: "0%",
        ease: "none",
        stagger: 0.008,
      });

      tl.pause();

      if (animationFinished) {
        tl.resume();
      }
    });

    return () => context.revert();
  }, [animationFinished]);


  return (
    <section className={`section__special ${styles.details__section}`}>
      <div className={`container ${styles.details__container}`}>
        <div className={styles.details__header}>
          <div className={`large__font ${styles.larger__font}`}>{splitwords2()}</div>
        </div>
        <div className={styles.details__intro}>
          {splitwords()}
        </div>
      </div>
    </section>
  )
}

export default DetailsHero