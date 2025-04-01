"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { AnimatedPhrase } from "..";
import styles from "../../styles/Navigation/preloader.module.scss";

interface PreloaderProps {
  imageLoaded?: boolean;
  setAnimationFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

const Preloader = ({ imageLoaded, setAnimationFinished }: PreloaderProps) => {
  const [currentValue, setCurrentValue] = useState(0);

  const currentValueRef = useRef(currentValue);

  const {t} = useTranslation()

  useEffect(() => {
    currentValueRef.current = currentValue;
  }, [currentValue]);

  useEffect(() => {
    const updateCounter = () => {
      if (currentValueRef.current < 100) {
        const increment = Math.floor(Math.random() * 10) + 1;
        const newValue = Math.min(currentValueRef.current + increment, 100);
        setCurrentValue(newValue);

        const delay = Math.floor(Math.random() * 50) + 70;
        setTimeout(updateCounter, delay);
      }
    };

    if (imageLoaded) {
      updateCounter();
    }
  }, [imageLoaded]);

  const percentageRef = useRef(null);
  const textRef = useRef(null);
  const loaderRef = useRef(null);
  const preloaderRef = useRef(null);
  const blueRef = useRef(null);
  const whiteRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setAnimationFinished(true)
      });

      tl.to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
      });
      tl.to(
        loaderRef.current,
        { opacity: 0, duration: 1, ease: "power4.inOut" },
        ">"
      );
      tl.to(
        percentageRef.current,
        { y: "-100%", duration: 1, ease: "power4.inOut" },
        "<"
      );
      tl.to(
        preloaderRef.current,
        { scale: 0.5, duration: 1, ease: "power4.inOut" },
        ">"
      );
      tl.to(
        blueRef.current,
        { height: 0, duration: 0.5, ease: "power4.inOut" },
        ">-0.5"
      );
      tl.to(
        whiteRef.current,
        { height: 0, duration: 0.5, ease: "power4.inOut", delay: 0.2 },
        "<"
      );
      tl.to(preloaderRef.current, { display: "none" }, ">");

      tl.pause();

      if (currentValue === 100) {
        tl.resume();
      }
    });

    return () => context.revert();
  }, [currentValue]);

  const phrase = t("Navigation:preloader");

  return (
    <section className={styles.preloader} ref={preloaderRef}>
      <div className={styles.blue__back} ref={blueRef}>
        <div className={styles.text__content} ref={textRef}>
          <AnimatedPhrase phrase={phrase} />
        </div>
        <div className={styles.loading}>
          <div className={styles.max__width}>
            <div className={styles.current__percentage}>
              <span className={styles.percentage} ref={percentageRef}>
                <span className={styles.number}>{currentValue}</span>%
              </span>
            </div>
            <div className={styles.loader} ref={loaderRef}>
              <div
                className={styles.loading__bar}
                style={{ width: `${currentValue}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.white__back} ref={whiteRef}></div>
    </section>
  );
};

export default Preloader;
