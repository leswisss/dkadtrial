"use client";

import React, {useState} from "react";
import LanguageSelector from "@/utils/LanguageSelector";
import Image from "next/image";
import Link from "next/link";
import { Rounded, Magnetic } from "..";
import { SideMenu, Socials } from "@/utils";
import styles from "../../styles/Navigation/sidebar.module.scss";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState(0)

  return (
    <div className={styles.sidebar}>
      <div className={`container ${styles.sidebar__container}`}>
        <div className={styles.sidebar__top}>
          <span className={styles.close__text}>Close</span>
          <LanguageSelector />
        </div>
        <div className={styles.sidebar__content}>
          <div className={styles.sc__left}>
            <div className={styles.images}>
              <div className={styles.image__wrapper}>
                {SideMenu.map((data, i) => (
                  <Image
                    key={i}
                    src={data.image}
                    fill
                    alt={data.name}
                    quality={100}
                    loading="eager"
                    style={{opacity: activeLink === i ? 1 : 0}}
                  />
                ))}
              </div>
            </div>
            <div className={styles.text__container}>
              <div className={styles.text__slider} style={{transform: `translateY(${})%`}}>
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
                <Link href={link.link} key={`sc-${i}`} onMouseEnter={() => setActiveLink(i)} onMouseLeave={() => setActiveLink(0)}>
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
