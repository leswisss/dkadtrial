"use client";

import React, {useRef, useEffect} from "react";
import { Icon } from "@iconify/react";
import gs
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
    //Move cursor

    let xMoveCursor = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      xMoveCursor(pageX);

      yMoveCursor(pageY);
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
