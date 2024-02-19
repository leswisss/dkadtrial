"use client";

import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Magnetic, SolutionModal, Rounded } from "..";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/HomePage/fixed.module.scss";

interface dataInterface {
  id: number;
  title: string;
  text: string;
  text2?: string;
  image: StaticImageData
}

const FixedReusable = ({ linker, data }: { linker: boolean, data: dataInterface }) => {
  const [activeModal, setActiveModal] = useState(false)
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  //Text Animation
  const { ref: ref, inView: inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const splitwords = (phrase: string, condition: boolean) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(<p key={`word-${i}`}><span style={{top: condition ? "0%" : "-100%"}} >{word}</span></p>);
    });

    return body;
  };

  return (
    <>
    <div className={styles.fixed} ref={container}>
      <motion.div className={styles.background__image} style={{ y }}>
        <Image src={data.image} fill alt="LandScape Image" quality={100} />
      </motion.div>
      <div className={`container ${styles.fixed__container}`}>
        <div className={styles.text__overflow} ref={ref}>
          {splitwords(data.title, inView)}
        </div>
        <div className={styles.text__content}>
          <span className={styles.round}></span>
          <span>
            {data.text}
          </span>
        </div>
        <div className={styles.button}>
          {linker ? (
            <Magnetic>
              <Link href="/">{data.title}</Link>
            </Magnetic>
          ) : (
            <Magnetic>
              <span onClick={() => setActiveModal(true)}>{data.title}</span>
            </Magnetic>
          )}
        </div>
      </div>
    </div>
    {
      !linker && <SolutionModal activeModal={activeModal} setActiveModal={setActiveModal} text={data.text} title={data.title} text2={data.text2} image={data.image}  />
    }
    </>
  );
};

export default FixedReusable;
