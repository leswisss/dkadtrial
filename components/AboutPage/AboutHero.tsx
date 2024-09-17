"use client";

import React, {useEffect, useRef} from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { WhoWeAre } from "..";
import gsap from "gsap";
import styles from "../../styles/AboutPage/abouthero.module.scss";


interface AboutInterface {
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  animationFinished: boolean
}

const AboutHero = ({setImageLoaded, animationFinished}: AboutInterface) => {
  const { t } = useTranslation();

  const text1 = t("AboutPage:pointofview")
  const text2 = t("AboutPage:pointofview2")

  const content = [text1, text2];

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


  //Preloader Animations

  //Simulate Image Loading
  useEffect(() => {
    setImageLoaded(true)
  }, [])

  const heroText = t("AboutPage:herotext")
  const refs = useRef<HTMLSpanElement[]>([]);
  const aboutRef = useRef(null);

  const splitwords2 = () => {
    let body: JSX.Element[] = [];
    heroText.split(" ").forEach((word, i) => {
      body.push(<div key={`word-${i}`} className={styles.word__wrapper}><p ref={(el) => el && refs.current.push(el)} className={styles.word}>{word}</p></div>);
    });

    return body;
  };

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
      });

      tl.to(refs.current, {
        y: "0%",
        ease: "none",
        stagger: 0.02,
      })

      tl.to(aboutRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power4.inOut"
      })

      tl.pause()

      if(animationFinished) {
        tl.resume();
      }
    })

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
        <div className={styles.about__content_container}>
          <div className={styles.about__main} ref={aboutRef} style={{opacity: 0}}>
            <div className={styles.about__title}>
              <span className={styles.title__button}></span>
              <span className={styles.title__text}>
                {t("AboutPage:povtext")}
              </span>
            </div>
            <div className={styles.about__content}>
              {content.map((data, i) => {
                const { ref, inView } = useInView({
                  threshold: 0.2,
                  triggerOnce: true,
                });

                return (
                  <div className={styles.content__one} key={i} ref={ref}>
                    {splitwords(data, inView)}
                  </div>
                );
              })}
            </div>
          </div>
          <WhoWeAre />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
