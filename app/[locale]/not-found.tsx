"use client";

import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Image from "next/image";
import { Rounded, Preloader2 } from "@/components";
import Lenis from "@studio-freight/lenis";
import IMAGE from "../../public/images/broken.jpg";

import styles from "../../styles/notfound.module.scss";

const NotFoundPage = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const imageRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(imageRef.current, {
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 10,
      ease: "linear",
    }).to(imageRef.current, {
      scaleX: 1,
      scaleY: 1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  //Preloader Animation
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  const [localstate, setLocalState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("myState") || "Initial State";
    } else {
      return "Initial State";
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("myState", localstate);
    }
  }, [localstate]);

  useEffect(() => {
    if (animationFinished) {
      setLocalState("Initial State");
    }
  }, [animationFinished]);

  const number1Ref = useRef(null);
  const number2Ref = useRef(null);
  const number3Ref = useRef(null);
  const refs = useRef<HTMLSpanElement[]>([]);
  const refs2 = useRef<HTMLSpanElement[]>([]);
  const refs3 = useRef<HTMLSpanElement[]>([]);
  const buttonRef = useRef(null);
  const button2Ref = useRef(null);

  const splitwords = (phrase: string, reference: any) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word, reference);
      body.push(
        <p key={`word-${i}`} className={styles.word}>
          {letters}
        </p>
      );
    });

    return body;
  };

  const splitLetters = (word: string, reference: any) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span
          className={styles.letter}
          ref={(el) => el && reference.current.push(el)}
          key={`letter-${index}`}
        >
          {letter}
        </span>
      );
    });

    return letters;
  };

  useEffect(() => {
    const tl = gsap.timeline({});

    tl.to(number1Ref.current, {
      transform: "rotateX(0)",
      ease: "power4.Out",
      duration: 0.7,
    });

    tl.to(
      number2Ref.current,
      {
        transform: "rotateX(0)",
        ease: "power4.Out",
        duration: 0.7,
        delay: 0.07,
      },
      "<"
    );

    tl.to(
      number3Ref.current,
      {
        transform: "rotateX(0)",
        ease: "power4.Out",
        duration: 0.7,
        delay: 0.14,
      },
      "<"
    );

    tl.to(
      refs.current,
      {
        opacity: 1,
        ease: "none",
        stagger: 0.05,
      },
      ">"
    );

    tl.to(
      refs2.current,
      {
        opacity: 1,
        ease: "none",
        stagger: 0.05,
      },
      ">-0.8"
    );

    tl.to(
      refs3.current,
      {
        opacity: 1,
        ease: "none",
        stagger: 0.04,
      },
      ">-1.4"
    );

    tl.to(
      buttonRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.inOut",
      },
      "<+1"
    );

    tl.to(
      button2Ref.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.inOut",
      },
      ">-0.3"
    );

    tl.to(
      buttonRef.current,
      {
        clipPath: "none",
        duration: 0,
      },
      ">"
    );

    tl.to(
      button2Ref.current,
      {
        clipPath: "none",
        duration: 0,
      },
      ">"
    );

    tl.pause();

    if (animationFinished) {
      tl.resume();
    }

    return () => {
      tl.kill();
    };
  }, [animationFinished]);

  //SmoothScroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="main">
      <Preloader2
        imageLoaded={imageLoaded}
        setAnimationFinished={setAnimationFinished}
        localState={localstate}
      />
      <section className={styles.notfound}>
        <div className={styles.background__image} ref={imageRef}>
          <Image
            src={IMAGE}
            fill
            quality={100}
            alt="Background Image"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className={`container ${styles.not__container}`}>
          <div className={styles.content}>
            <div className={styles.fourofour}>
              <span className={styles.numbers} ref={number1Ref}>
                4
              </span>
              <span className={styles.numbers} ref={number2Ref}>
                0{" "}
                <span className={styles.error}>
                  {splitwords(t("Navigation:error"), refs)}
                </span>
              </span>
              <span className={styles.numbers} ref={number3Ref}>
                4
              </span>
            </div>
            <div className={styles.text__content}>
              <div className={styles.top}>
                <span className={styles.span}>
                  {splitwords(t("Navigation:sorry"), refs2)}
                </span>
                <span className={styles.span}>
                  {splitwords(t("Navigation:notfound"), refs3)}
                </span>
              </div>
              <div className={styles.bottom}>
                <div
                  style={{
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                    padding: "0.5rem 0.1rem",
                  }}
                  ref={buttonRef}
                >
                  <Rounded
                    backgroundColor="#ffffff"
                    classNames={styles.cta_button}
                    linker={false}
                    onClick={() => router.back()}
                  >
                    <p>{t("Navigation:back")}</p>
                  </Rounded>
                </div>
                <div
                  style={{
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                    padding: "0.5rem 0.1rem",
                  }}
                  ref={button2Ref}
                >
                  <Rounded
                    backgroundColor="#ffffff"
                    classNames={styles.cta_button}
                    link={`/${currentLocale}/`}
                    linker
                  >
                    <p>{t("Navigation:pager")}</p>
                  </Rounded>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
