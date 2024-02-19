"use client";

import React, {useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/architecture.jpg";
import styles from "../../styles/ProjectsPage/project.module.scss";


interface ProjectInterface{
  name: string,
  year: number,
  image: StaticImag,
  services: [
    "Interior",
    "Exterior",
    "Landscaping Amanagement",
    "Supervision",
  ],
  link: "/",
}

const Project = ({data}: {data:}) => {
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

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  return (
    <Link href="/" className={styles.project__wrapper}>
      <div className={styles.image__content} ref={container}>
        <motion.div className={styles.image__overflow} style={{y}}>
          <Image src={IMAGE} fill quality={100} alt="ProjectImage" />
        </motion.div>
        <div className={styles.image__overlay}>
          <div className={styles.p__services}>
            {services.map((data, i) => (
              <span key={i}>{data}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.text__content}>
        <div className={styles.left}>
          <span></span>
          <p className={styles.text}>
            Sunset Sanctuary Retreat
          </p>
        </div>
        <div className={styles.right}>
          <span>2023</span>
        </div>
      </div>
    </Link>
  );
};

export default Project;
