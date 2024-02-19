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

interface ChildComponentProps {
  cursor: CursorState;
  setCursor: React.Dispatch<React.SetStateAction<CursorState>>;
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
    <div className={styles.cursor} ref>
      <div className={styles.directives}>
        <Icon icon="la:angle-left" /> <span>1 / 3</span>{" "}
        <Icon icon="la:angle-right" />
      </div>
    </div>
  );
};

export default DetailsCursor;
