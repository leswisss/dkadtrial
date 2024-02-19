"use client";

import React, {useRef} from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/homehero.jpg"
import styles from "../../styles/HomePage/hero.module.scss"

const HomeHero = () => {
  const phrase =
    "DKAD Creation des espaces qui inspirent pour une meilleure qualite de vie";

  const refs = useRef<HTMLSpanElement[]>([]);
  const refsContainer = useRef<HTMLDivElement>(null);

  const splitwords = () => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={`word-${i}`}>{letters}</p>);
    });

    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span ref={(el) => el && refs.current.push(el)} key={`letter-${index}`}>
          {letter}
        </span>
      );
    });

    return letters;
  };

  return (
    <section className={styles.hero__section}>
      <div className={styles.image__wrapper}>
        <Image src={IMAGE} alt="Home Page" fill quality={100}/>
      </div>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__text} >
          {splitwords()}
        </div>
        <div className={styles.hero__footer}>
          <span>Decouvrir DKAD</span>
          <span>Creation des Espaces qui Inspirent</span>
          <span>Base au Cameroon</span>
        </div>
      </div>
    </section>
  )
}

export default HomeHero