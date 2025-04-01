"use client";

import React, { useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { SolutionModal, Rounded } from "..";
import { useInView } from "react-intersection-observer";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/HomePage/fixed.module.scss";


interface dataInterface {
  id: number;
  title: string;
  text: string;
  text2?: string;
  link?: string;
  linktext?: string;
  image: StaticImageData[]
}

const FixedReusable = ({ linker, data }: { linker: boolean, data: dataInterface }) => {
  const [activeModal, setActiveModal] = useState(false)
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const [transform, setTransform] = useState(-300);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 550) {
        setTransform(0);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-150);
      } else {
        setTransform(-300);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  //IMAGE MAMAGEMENT
  const [imageSet, setImage] = useState(data.image[0]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 550) {
        setImage(data.image[2]);
        setTransform(0);
      } else if (typeof window !== "undefined" && window.innerWidth < 950) {
        setImage(data.image[1]);
        setTransform()
      } else {
        setImage(data.image[0]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <Image src={imageSet} fill alt="LandScape Image" quality={100}  sizes="(max-width:600px) 100%, 100%"/>
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
            <Rounded backgroundColor="#ffffff" classNames={styles.buttoner} linker link={data.link}>
            <p>{data.linktext}</p>
          </Rounded>
          ) : (
            <Rounded backgroundColor="#ffffff" classNames={styles.buttoner} linker={false} onClick={() => setActiveModal(true)}>
              <p>{data.title}</p>
            </Rounded>
          )}
        </div>
      </div>
    </div>
    {
      !linker && <SolutionModal activeModal={activeModal} setActiveModal={setActiveModal} text={data.text} title={data.title} text2={data.text2} image={data.image[0]}  />
    }
    </>
  );
};

export default FixedReusable;
