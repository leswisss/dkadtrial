"use client";

import React, { useRef, useEffect, useState } from "react";
import { DetailsMoreData } from "@/utils";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/landscape.jpg";
import styles from "../../styles/DetailsPage/more.module.scss";

const DetailsMore = () => {
  const [transform, setTransform] = useState(-150)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 550) {
        setTransform(-75)
      } else {
        setTransform(-120)
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <section className={`section ${styles.more__section}`}>
      <div className={`container ${styles.more__container}`}>
        {DetailsMoreData.map((data, i) => {
          const container = useRef(null);
          const { scrollYProgress } = useScroll({
            target: container,

            offset: ["start end", "end start"],
          });

          const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

          return (
            <div className={styles.more__wrapper} ref={container} key={i}>
              <motion.div className={styles.more__image} style={{ y }}>
                <Image
                  src={data.image}
                  quality={100}
                  alt="Project Image"
                  fill
                />
              </motion.div>
              <div className={styles.more__overlay}>
                <div className={styles.overlay__content}>
                  <p>{data.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DetailsMore;
