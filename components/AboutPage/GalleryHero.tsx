"use client";

import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Gallery from "./Gallery";
import gsap from "gsap";
import styles from "../../styles/AboutPage/abouthero.module.scss";

interface AboutInterface {
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  animationFinished: boolean;
  currentLocale: string
}

const GalleryHero = ({ setImageLoaded, animationFinished, currentLocale }: AboutInterface) => {
  const { t } = useTranslation();

  //Simulate Image Loading
  useEffect(() => {
    setImageLoaded(true);
  }, []);

  const heroText = t("AboutPage:gherotext");
  const refs = useRef<HTMLSpanElement[]>([]);
  const aboutRef = useRef(null);

  const splitwords2 = () => {
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

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({});

      tl.to(refs.current, {
        y: "0%",
        ease: "none",
        stagger: 0.02,
      });

      tl.to(aboutRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power4.inOut",
      });

      tl.pause();

      if (animationFinished) {
        tl.resume();
      }
    });

    return () => context.revert();
  }, [animationFinished]);

  return (
    <div className={`section__special ${styles.hero__section}`}>
      <div className={`container ${styles.hero__container}`}>
        <div className={`header__text`}>
          <div className={`header__text-main ${styles.htext__main}`}>
            {splitwords2()}
          </div>
        </div>
        <div ref={aboutRef} style={{width: "100%", opacity: 0}}>
          <Gallery currentLocale={currentLocale}/>
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;
