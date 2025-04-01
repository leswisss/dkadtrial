"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis/types";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/homehero.jpg";
import IMAGE2 from "../../public/images/homeheromedium.jpg";
import IMAGE3 from "../../public/images/homeheromobile.jpg";
import styles from "../../styles/HomePage/hero.module.scss";

const HomeHero = ({
  lenis,
  reference,
  setImageLoaded,
  animationFinished,
}: {
  lenis: Lenis | null;
  reference: React.RefObject<HTMLDivElement>;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  animationFinished: boolean;
}) => {
  const { t } = useTranslation();
  const phrase = t("HomePage:herotext");

  const refs = useRef<HTMLSpanElement[]>([]);
  const refsContainer = useRef<HTMLDivElement>(null);
  const tradeRef = useRef(null)

  const splitwords = () => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      if (word === "DKAD") {
        body.push(<p key={`word-${i}`}>{letters}<span className={styles.trademark}><span className={styles.trademark__main} ref={tradeRef}>TM</span></span></p>);
      } else {
        body.push(<p key={`word-${i}`}>{letters}</p>);
      }
    });

    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span key={`letter-${index}`} className={styles.span__overflow}>
          <span
            ref={(el) => el && refs.current.push(el)}
            className={styles.span__span}
          >
            {letter}
          </span>
        </span>
      );
    });

    return letters;
  };

  //IMAGE MAMAGEMENT
  const [imageSet, setImage] = useState(IMAGE);
  const [transform, setTransform] = useState(-150)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 550) {
        setImage(IMAGE3);
        setTransform(0)
      } else if (typeof window !== "undefined" && window.innerWidth < 900) {
        setImage(IMAGE2);
      } else {
        setImage(IMAGE);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Animations Loader Refs
  useEffect(() => {
    if (animationFinished) {
      createAnimations();
    }
  }, [animationFinished]);

  const spanRef = useRef(null);
  const spanRef2 = useRef(null);
  const spanRef3 = useRef(null);

  const createAnimations = () => {
    gsap.to(refs.current, {
      y: 0,
      ease: "none",
      stagger: 0.008,
    });

    gsap.to(spanRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
      delay: 1.5,
    });
    gsap.to(spanRef2.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
      delay: 2,
    });
    gsap.to(spanRef3.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
      delay: 2.5,
    });
    gsap.to(tradeRef.current, {
      y: 0,
      duration: 0.3,
      delay: 0.3
    })
  };

  const handleLenisScroll = () => {
    if (lenis && reference.current) {
      const referenceTop =
        window.scrollY + reference.current.getBoundingClientRect().top;
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
          <Image
            src={imageSet}
            alt="Home Page"
            fill
            quality={100}
            priority
            loading="eager"
            sizes="(max-width: 600px) 100%, 100%"
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </div>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__text} ref={refsContainer}>
          {splitwords()}
        </div>
        <div className={styles.hero__footer}>
          <span onClick={handleLenisScroll} ref={spanRef}>
            {t("HomePage:discoverdkad")}
          </span>
          <span ref={spanRef2}>{t("slogan")}</span>
          <span ref={spanRef3}>{t("HomePage:basedin")}</span>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
