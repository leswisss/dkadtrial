"use client";

import React, { useRef, useState } from "react";
import styles from "../../styles/DetailsPage/dimages.module.scss";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import gsap from "gsap";
import IMAGE from "../../public/images/project1.jpg";
import IMAGE2 from "../../public/images/project2.jpg";
import IMAGE3 from "../../public/images/project3.jpg";

const DetailsImages = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-180, 0]);

  //Images Slider
  const sliderImages = [IMAGE, IMAGE2, IMAGE3];
  const [activeSlide, setActiveSlide] = useState(0);

  const totalProjects = sliderImages.length;
  const backgroundRefs = useRef<(HTMLDivElement | null)[]>([]);

  const animateSlide = (slideNumber: number, reveal: boolean) => {
    const background = backgroundRefs.current[slideNumber];

    const clipPathValue = reveal
      ? "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"
      : "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)";

    gsap.to(background, {
      clipPath: clipPathValue,
      duration: 0.7,
      ease: "power4.out",
    });
  };

  const handleRightClick = () => {
    if (activeSlide < totalProjects - 1) {
      animateSlide(activeSlide + 1, true);
      setActiveSlide((prev) => prev + 1);
    }
  };

  const handleLeftClick = () => {
    if (activeSlide > 0) {
      animateSlide(activeSlide, false);
      setActiveSlide((prev) => prev - 1);
    }
  };

  return (
    <section className={styles.images__section}>
      <div className={styles.images__wrapper} ref={container}>
        {sliderImages.map((image, i) => (
          <motion.div
            className={`${styles.image__wrapper} ${
              i === 0 ? styles.first__background : ""
            }`}
            style={{ y }}
            key={i}
            ref={(el) => (backgroundRefs.current[i] = el)}
          >
            <Image src={image} fill quality={100} alt="Project Image" />
          </motion.div>
        ))}
      </div>
      <div className={styles.image__selector}>
        <div className={styles.selector} onClick={handleLeftClick}></div>
        <div className={styles.selector} onClick={handleRightClick}></div>
      </div>
    </section>
  );
};

export default DetailsImages;
