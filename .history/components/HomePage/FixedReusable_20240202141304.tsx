"use client";

import React, {useRef} from "react";
import Image from "next/image";
import { Magnetic } from "..";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/landscape.jpg";
import styles from "../../styles/HomePage/fixed.module.scss";

const FixedReusable = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <div className={styles.fixed}>
      <div className={styles.background__image}>
        <Image src={IMAGE} fill alt="LandScape Image" quality={100} />
      </div>
      <div className={`container ${styles.fixed__container}`}>
        <div className={styles.text__overflow}>
          <p>Amenagement Paysager</p>
        </div>
        <div className={styles.text__content}>
          <span className={styles.round}></span>
          <span>Fusionner la conception et la nature pour un developpement durable</span>
        </div>
        <div>
          <Magnetic>
            <span>Amenagement Paysager</span>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default FixedReusable;
