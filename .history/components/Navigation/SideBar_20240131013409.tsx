"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import LanguageSelector from "@/utils/LanguageSelector";
import Image from "next/image";
import Link from "next/link";
import { Rounded, Magnetic } from "..";
import { SideMenu, Socials } from "@/utils";
import styles from "../../styles/Navigation/sidebar.module.scss";
import { motion } from "framer-motion";
import { sideBarProps } from "@/types";
import gsap from "gsap";

const SideBar = ({ activeSide, setActiveSide }: sideBarProps) => {
  const [activeLink, setActiveLink] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let tl = gsap.timeline();

    tl.to(sidebarRef.current, {
      duration: 0.7,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "cubic-bezier(.7, 0, .3, 1)",
    });

    tl.to(imageRef.current, {
      duration: 0.7,
      height: "320px",
      ease: "cubic-bezier(.7, 0, .3, 1)",
    }, "<");

  }, []);

  return (
    <div ref={sidebarRef} className={styles.sidebar}>
      <div className={}></div>
      <div className={`container ${styles.sidebar__container}`}>
        <div className={styles.sidebar__top}>
          <span
            className={styles.close__text}
            onClick={() => setActiveSide(false)}
          >
            Close
          </span>
          <LanguageSelector />
        </div>
        <div className={styles.sidebar__content}>
          <div className={styles.sc__left}>
            <div className={styles.images} ref={imageRef}>
              <div className={styles.image__wrapper}>
                {SideMenu.map((data, i) => (
                  <Image
                    key={i}
                    src={data.image}
                    fill
                    alt={data.name}
                    quality={100}
                    loading="eager"
                    style={{ opacity: activeLink === i ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>
            <div className={styles.text__container}>
              <div
                className={styles.text__slider}
                style={{ transform: `translateY(${-activeLink * 100}%)` }}
              >
                {SideMenu.map((data, i) => (
                  <div key={i} className={styles.slider__text}>
                    {data.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.sc__right}>
            <div className={styles.scr__links}>
              {SideMenu.map((link, i) => (
                <Link
                  href={link.link}
                  key={`sc-${i}`}
                  onMouseEnter={() => setActiveLink(i)}
                  onMouseLeave={() => setActiveLink(0)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Rounded
              backgroundColor="#013cac"
              classNames={styles.cta_button}
              link={`/contact`}
            >
              <p>Get In Touch</p>
            </Rounded>
          </div>
        </div>
        <div className={styles.sidebar__bottom}>
          <div className={styles.slogan}>
            Creating Spaces That Inspire&trade;
          </div>
          <div className={styles.socials}>
            {Socials.map((data, i) => (
              <Magnetic key={i}>
                <Link href={data.link}>{data.name}</Link>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
