"use client";

import React, {useEffect, useRef} from 'react'
import gsap from 'gsap';
import { useTranslation } from 'react-i18next'
import styles from "../../styles/ServicesPage/header.module.scss"


interface ServiceInterface {
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  animationFinished: boolean
}

const ServicesHeader = ({setImageLoaded, animationFinished}: ServiceInterface) => {
  const { t } =  useTranslation();

  //Preloader Animations

  //Simulate Image Loading
  useEffect(() => {
    setImageLoaded(true)
  }, [])

  const heroText = t("ServicesPage:headertext")
  const refs = useRef<HTMLSpanElement[]>([]);
  const serviceRef = useRef(null);

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

      tl.to(serviceRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power4.inOut"
      }, ">")

      tl.pause()

      if(animationFinished) {
        tl.resume();
      }
    })

    return () => context.revert();
  }, [animationFinished]);

  return (
    <section className={`section__special ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <div className="header__text">
          <div className={`header__text-main ${styles.htext__main}`}>{splitwords2()}</div>
        </div>
        <div className={styles.floating__text} ref={serviceRef} style={{opacity: 0}}>
          <div className={styles.text__left}>
            <p>{t("ServicesPage:experience")}</p>
          </div>
          <div className={styles.text__right}>
            <p>{t("ServicesPage:experience2")} <span className={styles.text__blue}>{t("ServicesPage:experience3")}</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeader