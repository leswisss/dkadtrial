"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { ProjectProps, ImageProps } from "@/types";
import styles from "../../styles/DetailsPage/more.module.scss";

//Images code
const getLastFourElements = (list: ImageProps[] | undefined) => {
  if (!list) {
    return [];
  }

  if (list.length >= 4) {
    return [...list.slice(-4)].reverse();
  }

  // Return a reversed copy of the list if it has less than 4 elements
  return [...list].reverse();
};

const MoreImage = ({
  data,
  transform,
}: {
  data: ImageProps;
  transform: number;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  return (
    <div className={styles.more__wrapper} ref={container}>
      <motion.div className={styles.more__image} style={{ y }}>
        <Image
          src={data.image}
          quality={100}
          alt="Project Image"
          fill
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
};

const DetailsMore = ({
  currentProject,
  currentLocale,
}: {
  currentProject: ProjectProps | null | undefined;
  currentLocale: string;
}) => {
  const [transform, setTransform] = useState(-150);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 550) {
        setTransform(-75);
      } else {
        setTransform(-120);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imagesList = getLastFourElements(currentProject?.images);

  return (
    <section className={`section ${styles.more__section}`}>
      <div className={`container ${styles.more__container}`}>
        {imagesList.map((data, i) => (
          <MoreImage key={i} data={data} transform={transform} />
        ))}
      </div>
    </section>
  );
};

export default DetailsMore;