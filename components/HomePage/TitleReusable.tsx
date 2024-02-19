"use client";

import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/HomePage/textreusable.module.scss"


const TitleReusable = ({title, text, classNames}: {title: string, text: string, classNames?: string}) => {
  //Text Animation
  const { ref: ref, inView: inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const firstDivRef = useRef<HTMLDivElement>(null); 


  const [width, setWidth] = useState(0); 


  useEffect(() => {
    const handleResize = () => {
      if (firstDivRef.current) {
        const divWidth = firstDivRef.current.offsetWidth;
        setWidth(divWidth);
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  console.log(width)

  const splitwords = (phrase: string, condition: boolean) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(<p key={`word-${i}`} className={styles.para}><span style={{top: condition ? "0%" : "-100%"}} >{word}</span></p>);
    });

    return body;
  };

  return (
    <div className={`${styles.section__header } ${classNames}`} style={{width: `${width + 70}px`}}>
      <div className="header__overflow" ref={ref}>
        <div className={`large__font ${styles.larger__font}`} ref={firstDivRef}>{splitwords(title, inView)}</div>
      </div>
      <p className="p__font">
        {text}
      </p>
    </div>
  );
};

export default TitleReusable;
