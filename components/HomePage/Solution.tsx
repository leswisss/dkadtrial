"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis/types";
import { useScroll, motion, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import { SolutionModal } from "..";
import styles from "../../styles/HomePage/solution.module.scss";
import Image, { StaticImageData } from "next/image";


interface SolutionProps {
  index: number;
  title: string;
  text: string;
  text2: string;
  image: StaticImageData;
  setModal: any;
  lenis: Lenis | null;
}

const Solution = ({
  index,
  title,
  text,
  text2,
  image,
  setModal,
}: SolutionProps) => {
  const [activeModal, setActiveModal] = useState(false);

  const [isAbove1023, setIsAbove1023] = useState(false);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-80, 0]);

  useEffect(() => {
    // Function to update the state based on screen width
    const handleResize = () => {
      setIsAbove1023(window.innerWidth > 1024);
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div
        className={styles.solution__container}
        style={{ borderBottom: index === 2 && isAbove1023 ? "1px solid #5b5b5b" : "none" }}
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        onClick={() => {
          setActiveModal(true);
        }}
      >
        <div className={styles.solution__wrapper}>
          <div className={styles.solution__left}>
            <div className={styles.solution__index}>
              <span className={index === 0 ? styles.span__adjust : ""}>
                0{index + 1}
              </span>
            </div>
            <div className={styles.solution__title}>{title}</div>
          </div>
          <div className={styles.solution__right}>
            <div className={styles.right__text}>
              <p className="p__font">{text}</p>
            </div>
            <span>
              <Icon icon="la:angle-right" />
            </span>
          </div>
        </div>
        <div className={styles.solution__mobile}>
          <div className={styles.mobile__image} ref={container}>
            <span className={styles.mi__icon}><Icon icon="bitcoin-icons:arrow-up-filled" /></span>
            <motion.div className={styles.mi__image} style={{y}}>
              <Image fill src={image} quality={100} alt={title} sizes="(max-width: 600px) 100%, 100%"/>
            </motion.div>
          </div>
          <div className={styles.mobile__content}>
            <div className={styles.top}>
              <span className={styles.c__button}></span>
              <span className={styles.title}>{title}</span>
            </div>
            <p className={styles.bottom}>
              {text}
            </p>
          </div>
        </div>
      </div>
      <SolutionModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        title={title}
        text={text}
        text2={text2}
        image={image}
      />
    </div>
  );
};

export default Solution;
