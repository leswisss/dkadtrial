"use client";

import React, {useRef, useEffect} from 'react'
import { ProjectProps } from '@/types';
import gsap from 'gsap';
import styles from "../../styles/DetailsPage/dhero.module.scss"

const DetailsHero = ({animationFinished, currentProject, currentLocale}: {animationFinished: boolean; currentProject: ProjectProps | null | undefined; currentLocale: string}) => {
  //Preloader Animations  
  const refs = useRef<HTMLSpanElement[]>([]);
  const refs2 = useRef<HTMLSpanElement[]>([]);

  //Get projectName and project
  const projectName = currentProject ? currentProject.name : "";
  const projectIntro = currentProject && currentLocale === "en" ? currentProject.introDescription.en : currentProject && currentLocale === "fr" ? currentProject.introDescription.fr : "";
  
  const splitwords = (word: string) => {
    let body: JSX.Element[] = [];
    word.split(" ").forEach((word, i) => {
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

  const splitwords2 = (word: string) => {
    let body: JSX.Element[] = [];
    word.split(" ").forEach((word, i) => {
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
          <div className={`large__font ${styles.larger__font}`}>{splitwords2(projectName)}</div>
        </div>
        <div className={styles.details__intro}>
          {splitwords(projectIntro)}
        </div>
      </div>
    </section>
  )
}

export default DetailsHero