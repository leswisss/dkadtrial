"use client";

import React from 'react'
import useTr
import styles from "../../styles/HomePage/footerr.module.scss"
import { StaticImageData } from 'next/image';
import Image  from 'next/image';
import Link from 'next/link';

interface DataProps {
  title: string;
  title2: string;
  text: string;
  image: StaticImageData,
  link: string
}

const FooterReusable = ({ data }: {data: DataProps}) => {
  return (
    <section className={`section ${styles.footerr__section}`}>
      <div className={`container ${styles.footerr__container}`}>
        <div className={styles.left}>
          <div className={styles.left__top}>
            <div className={styles.header__one}>
              {data.title}
            </div>
            <div className={styles.header__two}>
              {data.title2}
            </div>
          </div>
          <div className={styles.left__bottom}>
            <p>
              {data.text}
            </p>
            <div>
              <Link href={}></Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.image__wrapper}>
            <div className={styles.image__fill}>
              <Image src={data.image} alt={data.title} quality={100} fill/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterReusable