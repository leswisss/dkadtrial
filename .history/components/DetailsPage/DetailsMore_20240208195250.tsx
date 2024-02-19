"use client";

import React, { useRef } from 'react'
import { DetailsMoreData } from '@/utils';
import Image from 'next/image'
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/landscape.jpg"
import styles from "../../styles/DetailsPage/more.module.scss"

const DetailsMore = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-120, 0]);

  return (
    <section className={`section ${styles.more__section}`}>
      <div className={`container ${styles.more__container}`}>
        <div className={styles.more__wrapper} ref={container}>
          <motion.div className={styles.more__image} style={{y}}>
            <Image src={IMAGE} quality={100} alt='Project Image' fill/>
          </motion.div>
          <div className={styles.more__overlay}>
            <div className={styles.overlay__content}>
              <p>Poser les bases : La première étape de la réalisation du rêve du Sunset Sanctuary Retreat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsMore