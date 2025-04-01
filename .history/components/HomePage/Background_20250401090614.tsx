"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/footerr5.jpg";
import IMAGE2 from "../../public/images/footerr5medium.jpg";
import IMAGE3 from "../../public/images/footerr5mobile.jpg";
import styles from "../../styles/HomePage/background.module.scss";

const Background = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  //IMAGE MAMAGEMENT
  const [imageSet, setImage] = useState(IMAGE);
  const [transform, setTransform] = useState(-300)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 550) {
        setImage(IMAGE3);
        setTransform(0);
      } else if (typeof window !== "undefined" && window.innerWidth < 950) {
        setImage(IMAGE2);
        setTransform(-150)
      } else {
        setImage(IMAGE);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.back__section}>
      <div className={styles.background} ref={container}>
        <motion.div className={styles.background__image} style={{ y }}>
          <Image src={imageSet} quality={100} fill alt="Landscape View" sizes="(max-width:600px) 100%, 100%" />
        </motion.div>
      </div>
    </section>
  );
};

export default Background;
