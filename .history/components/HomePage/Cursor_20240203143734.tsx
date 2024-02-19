"use client";

import React, {useRef, useEffect} from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/HomePage/cursor.module.scss";

interface CursorState {
  active: boolean;
  index: number;
}

interface ChildComponentProps {
  cursor: CursorState;
  setCursor: React.Dispatch<React.SetStateAction<CursorState>>;
}

const Cursor = ({active, length, cursor}: {active: number, length: number, cursor: CursorState}) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    //Move Container

    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    //Move cursor label

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);

      yMoveContainer(pageY);

      xMoveCursor(pageX);

      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);

      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <div className={styles.cursor} ref={cursorRef}>
      <div className={styles.cursor__content}>
        <div className={styles.cursor__swiper}>
          <div className={styles.directives}>
            <Icon icon="la:angle-left" /> <span>{active+1}/{length}</span>{" "}
            <Icon icon="la:angle-right" />
          </div>
          <span>View</span>
        </div>
      </div>
    </div>
  );
};

export default Cursor;
