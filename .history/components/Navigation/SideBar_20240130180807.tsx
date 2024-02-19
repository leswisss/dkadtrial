import React from "react";
import styles from "../../styles/Navigation/sidebar.module.scss";
import LanguageSelector from "@/utils/LanguageSelector";
import Image from "next/image";
import Link from "next/link";
import { SideMenu } from "@/utils";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={`container ${styles.sidebar__container}`}>
        <div className={styles.sidebar__top}>
          <div className={styles.left__button}>
            <div className={styles.line__wrapper}>
              <span></span>
              <span></span>
            </div>
            <span className={styles.menu__text}>Close</span>
          </div>
          <LanguageSelector />
        </div>
        <div className={styles.sidebar__content}>
          <div className={styles.sc__left}>
            <div className={styles.images}>
              <div className={styles.image__wrapper}>
                {
                  SideMenu.map((data, i) => (
                    <Image key={i} src={data.}/>
                  ))
                }
              </div>
            </div>
            <div className={styles.text__container}>
              <div className={styles.text__slider}>
                {

                }
              </div>
            </div>
          </div>
          <div className={styles.sc__right}>
            <div className={styles.scr__links}>
              {
                SideMenu.map((link, i) => (
                  <Link href={link.link} key={`sc-${i}`} >{link.name}</Link>
                ))
              }
            </div>
          </div>
        </div>
        <div className={styles.sidebar__bottom}></div>
      </div>
    </div>
  );
};

export default SideBar;
