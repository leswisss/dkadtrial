"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/footerr5.jpg";
import styles from "../../styles/HomePage/background.module.scss";

const Background = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  return (
    <section className={styles.back__section}>
      <div className={styles.background} ref={container}>
        <motion.div className={styles.background__image} style={{ y }}>
          <Image src={IMAGE} quality={100} fill alt="Landscape View" sizes="(max-width:600px) 100%, 100%" />
        </motion.div>
      </div>
    </section>
  );
};

export default Background;
