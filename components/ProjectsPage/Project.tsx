"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ProjectProps } from "@/types";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/ProjectsPage/project.module.scss";

const Project = ({ data, currentLocale }: { data: ProjectProps, currentLocale: string }) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  return (
    <Link
      href={
        currentLocale === "en"
          ? `/en/projects/${data.slug}`
          : `/fr/projets/${data.slug}`
      }
      className={styles.project__wrapper}
    >
      <div className={styles.image__content} ref={container}>
        <motion.div className={styles.image__overflow} style={{ y }}>
          <Image
            src={data.images[0].image}
            fill
            quality={100}
            alt={data.name}
          />
        </motion.div>
        <div className={styles.image__overlay}>
          <div className={styles.p__services}>
            {currentLocale === "en"
              ? data.services.en.map((service, i) => (
                  <span key={i}>{service}</span>
                ))
              : data.services.fr.map((service, i) => (
                  <span key={i}>{service}</span>
                ))}
          </div>
        </div>
      </div>
      <div className={styles.text__content}>
        <div className={styles.left}>
          <span></span>
          <p className={styles.text}>{data.name}</p>
        </div>
        <div className={styles.right}>
          <span>{data.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default Project;
