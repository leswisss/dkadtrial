"use client";

import React from 'react'
import styles from "../../styles/DetailsPage/dimages.module.scss"
import Image from 'next/image'
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/project1.jpg"
import IMAGE2 from "../../public/images/project2.jpg"
import IMAGE3 from "../../public/images/project3.jpg"

const DetailsImages = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  return (
    <section className={styles.images__section}>
      <div className={styles.images__wrapper}>
        <div className={styles.image__wrapper}> 
          <Image src={IMAGE} fill quality={100} alt='Project Image'/>
        </div>
      </div>
      <div className={styles.image__selector}>
        <div className={styles.selector}></div>
        <div className={styles.selector}></div>
      </div>
    </section>
  )
}

export default DetailsImages