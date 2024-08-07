"use client";

import React from "react";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import Magnetic from "../Magnetic/Magnetic";
import Link from "next/link";

export default function Rounded({
  children,
  backgroundColor = "#455CE9",
  link,
  linker,
  classNames,
  onClick,
  ...attributes
}: {
  children: React.ReactNode;
  linker: boolean;
  backgroundColor: string;
  link?: string;
  classNames: string;
  onClick?: () => void;
}) {
  const circle = useRef(null);
  let timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      {linker && link ? (
        <Link
          href={link}
          className={`${styles.roundedButton} ${classNames}`}
          style={{ overflow: "hidden" }}
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          {...attributes}
        >
          {children}
          <div
            ref={circle}
            style={{ backgroundColor }}
            className={styles.circle}
          ></div>
        </Link>
      ) : (
        <div 
          className={`${styles.roundedButton} ${classNames}`}
          style={{ overflow: "hidden" }}
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          onClick={onClick}
          {...attributes}
        >
          {children}
          <div
            ref={circle}
            style={{ backgroundColor }}
            className={styles.circle}
          ></div>
        </div>
      )}
    </Magnetic>
  );
}
