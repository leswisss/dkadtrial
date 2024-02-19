"use client";

import React, {useRef} from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/HomePage/footerr.module.scss";
import { useInView } from "react-intersection-observer";
import { StaticImageData } from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

interface DataProps {
  title: string;
  title2: string;
  text: string;
  image: StaticImageData;
  link: string;
}

const FooterReusable = ({ data }: { data: DataProps }) => {
  const { i18n } = useTranslation();
  const currentlocale = i18n.language;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

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
    <section className={`section ${styles.footerr__section}`}>
      <div className={`container ${styles.footerr__container}`}>
        <div className={styles.left}>
          <div className={styles.left__content}>
            <div className={styles.left__top}>
              <div className={styles.header__one} ref={ref}>{splitwords(data.title, inView)}</div>
              <div className={styles.header__two}>{splitwords(data.title2, inView)}</div>
            </div>
            <div className={styles.left__bottom}>
              <p className="p__font">{data.text}</p>
              <div>
                <Link href={`/${currentlocale}${data.link}`}>
                <Icon icon="mdi-light:arrow-up" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.image__wrapper} ref={container}>
            <motion.div className={styles.image__fill} style={{y}}>
              <Image src={data.image} alt={data.title} quality={100} fill />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterReusable;
