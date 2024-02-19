"use client";

import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Magnetic, SolutionModal } from "..";
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

  return (
    <>
    <div className={styles.fixed} ref={container}>
      <motion.div className={styles.background__image} style={{ y }}>
        <Image src={data.image} fill alt="LandScape Image" quality={100} />
      </motion.div>
      <div className={`container ${styles.fixed__container}`}>
        <div className={styles.text__overflow}>
          <p>{data.title}</p>
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
      !linker && <SolutionModal activeModal={activeModal} setActiveModal={setActiveModal} text={text} title="={"  />
    }
    </>
  );
};

export default FixedReusable;
