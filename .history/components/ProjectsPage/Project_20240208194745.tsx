"use client";

import React, {useRef} from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/architecture.jpg";
import styles from "../../styles/ProjectsPage/project.module.scss";


interface ProjectInterface{
  name: string,
  year: number,
  image: StaticImageData,
  services: string[],
  link: string,
}

const Project = ({data}: {data: ProjectInterface}) => {
  const services = [
    "Interior",
    "Exterior",
    "Landscaping Amanagement",
    "Supervision",
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-10, 0]);
  return (
    <Link href={data.link} className={styles.project__wrapper}>
      <div className={styles.image__content} ref={container}>
        <motion.div className={styles.image__overflow} style={{y}}>
          <Image src={data.image} fill quality={100} alt={data.name} />
        </motion.div>
        <div className={styles.image__overlay}>
          <div className={styles.p__services}>
            {data.services.map((data, i) => (
              <span key={i}>{data}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.text__content}>
        <div className={styles.left}>
          <span></span>
          <p className={styles.text}>
            {data.name}
          </p>
        </div>
        <div className={styles.right}>
          <span>{data.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default Project;
