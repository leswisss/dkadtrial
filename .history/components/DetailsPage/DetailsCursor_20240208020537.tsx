"use client";

import React, { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { scaleAnimation } from "@/animations";
import styles from "../../styles/DetailsPage/cursor.module.scss";

interface CursorState {
  active: boolean;
  index: number;
}


const DetailsCursor = ({
  active,
  length,
  cursor,
  boundary,
}: {
  active: number;
  length: number;
  cursor: CursorState;
  boundary: any;
}) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    //Move cursor

    let xMoveCursor = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    boundary.current.addEventListener("mousemove", (e: MouseEvent) => {
      const { pageX, pageY } = e;

      xMoveCursor(pageX);

      yMoveCursor(pageY);
    });
  }, []);

  return (
    <motion.div
      className={styles.cursor}
      ref={cursorRef}
      variants={scaleAnimation}
      initial="initial"
      animate={cursor.active ? "enter" : "closed"}
    >
      <div className={styles.directives}>
        <Icon icon="la:angle-left" style={{opacity: cursor.index===0 ? 1 : 0.5}}/> <span>{active + 1} / {length}</span>{" "}
        <Icon icon="la:angle-right" />
      </div>
    </motion.div>
  );
};

export default DetailsCursor;
