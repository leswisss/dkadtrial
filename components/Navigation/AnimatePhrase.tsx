"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../../styles/Navigation/preloader.module.scss"


const AnimatedPhrase = ({phrase}: {phrase: string}) => {
  const refs = useRef<HTMLSpanElement[]>([]);
  const refsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createAnimations();
  }, []);

  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.05,
    });
  };

  const splitwords = () => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={`word-${i}`} className={styles.word}>{letters}</p>);
    });

    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span className={styles.letter} ref={(el) => el && refs.current.push(el)} key={`letter-${index}`}>
          {letter}
        </span>
      );
    });

    return letters;
  };

  return (
    <div ref={refsContainer} className={styles.animated__phrase}>
      {splitwords()}
    </div>
  );
};

export default AnimatedPhrase;