"use client";

import React, { useState } from "react";
import LanguageSelector from "@/utils/LanguageSelector";
import Image from "next/image";
import Link from "next/link";
import { Rounded, Magnetic } from "..";
import { SideMenu, Socials } from "@/utils";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Navigation/sidebar.module.scss";
import { motion } from "framer-motion";
import { sideBarAnim, sideBarImageAnim, sideBarLinkAnim } from "@/animations";
import { sideBarProps } from "@/types";

const SideBar = ({ activeSide, setActiveSide }: sideBarProps) => {
  const [activeLink, setActiveLink] = useState(0);

  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const home_trans = t("accueil")
  const pro_trans = t("projets") 
  const about_trans = t("apropos")
  const serv_trans = "Services"

  const navigation__menu = [home_trans, pro_trans, about_trans, serv_trans]

  return (
    <motion.div
      variants={sideBarAnim}
      animate={activeSide ? "entry" : "initial"}
      exit="exit"
      className={styles.sidebar}
    >
      <div className={styles.sidebar__wrapper}>
        <div className={`container ${styles.sidebar__container}`}>
          <div className={styles.sidebar__top}>
            <span
              className={styles.close__text}
              onClick={() => setActiveSide(false)}
            >
              {t("fermer")}
            </span>
            <LanguageSelector />
          </div>
          <div className={styles.sidebar__content}>
            <div className={styles.sc__left}>
              <motion.div
                variants={sideBarImageAnim}
                animate={activeSide ? "entry" : "initial"}
                exit="exit"
                className={styles.images}
              >
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
              </motion.div>
              <div className={styles.text__container}>
                <div
                  className={styles.text__slider}
                  style={{ transform: `translateY(${-activeLink * 100}%)` }}
                >
                  {SideMenu.map((data, i) => (
                    <div key={i} className={styles.slider__text}>
                      {navigation__menu[i]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.sc__right}>
              <div className={styles.scr__links}>
                {SideMenu.map((link, i) => (
                  <motion.div
                    custom={i}
                    variants={sideBarLinkAnim}
                    initial="initial"
                    animate={activeSide ? "entry" : "initial"}
                    exit="exit"
                    key={`sc-${i}`}
                    className={styles.scr__link}
                    onMouseEnter={() => setActiveLink(i)}
                    onMouseLeave={() => setActiveLink(0)}
                  >
                    <Link href={`/${currentLocale}${link.link}`}>{navigation__menu[i]}</Link>
                  </motion.div>
                ))}
              </div>
              <Rounded
                backgroundColor="#013cac"
                classNames={styles.cta_button}
                link={`/contact`}
              >
                <p>{t("contact")}</p>
              </Rounded>
            </div>
          </div>
          <div className={styles.sidebar__bottom}>
            <div className={styles.slogan}>
              Creating Spaces That Inspire{&trade;
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
    </motion.div>
  );
};

export default SideBar;
