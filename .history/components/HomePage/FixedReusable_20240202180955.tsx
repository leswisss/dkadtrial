"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Magnetic, SolutionModal } from "..";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/landscape.jpg";
import styles from "../../styles/HomePage/fixed.module.scss";

const FixedReusable = ({ linker }: { linker: boolean }) => {
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
        <Image src={IMAGE} fill alt="LandScape Image" quality={100} />
      </motion.div>
      <div className={`container ${styles.fixed__container}`}>
        <div className={styles.text__overflow}>
          <p>Amenagement Paysager</p>
        </div>
        <div className={styles.text__content}>
          <span className={styles.round}></span>
          <span>
            Fusionner la conception et la nature pour un developpement durable
          </span>
        </div>
        <div className={styles.button}>
          {linker ? (
            <Magnetic>
              <Link href="/">Amenagement Paysager</Link>
            </Magnetic>
          ) : (
            <Magnetic>
              <span onClick={() => setActiveModal(true)}>Amenagement Paysager</span>
            </Magnetic>
          )}
        </div>
      </div>
    </div>
    {
      !linker && 
    }
    </>
  );
};

export default FixedReusable;
