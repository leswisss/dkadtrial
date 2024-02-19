"use client";

import React, { useRef, useState } from "react";
import styles from "../../styles/DetailsPage/dimages.module.scss";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { DetailsCursor } from "..";
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

  //CursorAnim
  const [cursor, setCursor] = useState({ active: false, index: 0 });
  const mainRef = useRef<HTMLDivElement>(null);

  const animateSlide = (slideNumber: number, reveal: boolean) => {
    const background = backgroundRefs.current[slideNumber];

    const clipPathValue = reveal
      ? "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)"
      : "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)";

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
    <>
      <section className={styles.images__section} ref={mainRef}>
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
          <div
            className={styles.selector}
            onClick={handleLeftClick}
            onMouseEnter={() => {
              setCursor({ active: true, index: 0 });
            }}
            onMouseLeave={() => {
              setCursor({ active: false, index: 0 });
            }}
          ></div>
          <div
            className={styles.selector}
            onClick={handleRightClick}
            onMouseEnter={() => {
              setCursor({ active: true, index: 1 });
            }}
            onMouseLeave={() => {
              setCursor({ active: false, index: 1 });
            }}
          ></div>
        </div>
      </section>
      <DetailsCursor
        active={activeSlide}
        length={sliderImages.length}
        cursor={cursor}
        boundary={mainRef}
      />
    </>
  );
};

export default DetailsImages;
