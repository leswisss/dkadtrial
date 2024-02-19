"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis/types";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/homehero.jpg";
import styles from "../../styles/HomePage/hero.module.scss";

const HomeHero = ({
  lenis,
  reference,
}: {
  lenis: Lenis | null;
  reference: React.RefObject<HTMLDivElement>;
}) => {
  const { t } = useTranslation();
  const phrase = t("HomePage:herotext");

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
        <span
          ref={(el) => el && refs.current.push(el)}
          key={`letter-${index}`}
          className={styles.span__overflow}
        >
          <span className={styles.span__span}>{letter}</span>
        </span>
      );
    });

    return letters;
  };

  const handleLenisScroll = () => {
    if (lenis && reference.current) {
      const referenceTop = window.scroll reference.current.getBoundingClientRect().top;
      lenis.scrollTo(referenceTop);
    }
  };

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  return (
    <section className={styles.hero__section}>
      <div className={styles.image__wrapper} ref={container}>
        <motion.div className={styles.himage__fill} style={{ y }}>
          <Image src={IMAGE} alt="Home Page" fill quality={100} />
        </motion.div>
      </div>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__text} ref={refsContainer}>
          {splitwords()}
        </div>
        <div className={styles.hero__footer}>
          <span onClick={handleLenisScroll}>{t("HomePage:discoverdkad")}</span>
          <span>{t("slogan")}</span>
          <span>{t("HomePage:basedin")}</span>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
