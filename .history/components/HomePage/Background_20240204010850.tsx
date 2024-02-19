'use client'

import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/background.jpg"
import styles from "../../styles/HomePage/background.module.scss"

const Background = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  return (
    <section className={styles.back__section}>
      <div className={styles.background}>
        <div className={styles.background__image}>
          <Image src={IMAGE} quality={100} fill alt='Landscape View'/>
        </div>
      </div>
    </section>
  )
}

export default Background