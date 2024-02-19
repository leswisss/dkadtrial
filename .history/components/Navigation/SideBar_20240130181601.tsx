import React from "react";
import styles from "../../styles/Navigation/sidebar.module.scss";
import LanguageSelector from "@/utils/LanguageSelector";
import Image from "next/image";
import Link from "next/link";
import { Rounded } from "..";
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
                {SideMenu.map((data, i) => (
                  <Image
                    key={i}
                    src={data.image}
                    width={400}
                    height={350}
                    alt={data.name}
                    quality={100}
                    loading="eager"
                  />
                ))}
              </div>
            </div>
            <div className={styles.text__container}>
              <div className={styles.text__slider}>
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
                <Link href={link.link} key={`sc-${i}`}>
                  {link.name}
                </Link>
              ))}
            </div>
            <Rounded
              backgroundColor="#013cac"
              classNames={styles.cta_button}
              link={/contact`}
            >
              <p>{t("contact")}</p>
            </Rounded>
          </div>
        </div>
        <div className={styles.sidebar__bottom}></div>
      </div>
    </div>
  );
};

export default SideBar;
