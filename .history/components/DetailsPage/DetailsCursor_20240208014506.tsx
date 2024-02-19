"use client";

import React, { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { scaleAnimation } from "@/animations";
import styles from "../../styles/DetailsPage/cursor.module.scss"

const DetailsCursor = () => {
  return (
    <div className={styles.cursor}>
      <div></div>
    </div>
  )
}

export default DetailsCursor