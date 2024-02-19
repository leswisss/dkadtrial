"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import IMAGE from "../../public/images/aboutimage.jpg";
import IMAGE2 from "../../public/images/aboutimage2.jpg";
import IMAGE3 from "../../public/images/aboutimage3.jpg";

import styles from "../../styles/HomePage/about.module.scss";

const HomeAbout = ({
  reference,
}: {
  reference: React.RefObject<HTMLDivElement>;
}) => {
  const IMAGES = [IMAGE2, IMAGE3];

  const { ref: ref, inView: inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });


  //Translations
  const { t } = useTranslation();

  const [activeImage, setActiveImage] = useState(0);
  const firstPhrase = t("HomePage:inspirationtext")
    
  const secondPhrase = t("HomePage:wwatext")

  const splitwords = (phrase: string, condition: boolean) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(<p key={`word-${i}`}><span style={{top: condition ? "0%" : "-100%"}} >{word}</span></p>);
    });

    return body;
  };

  return (
    <section ref={reference} className={styles.about__section}>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__main}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>
              {t("HomePage:inspiration")}
            </span>
          </div>
          <div className={styles.about__content}>
            <div className={styles.content__one} ref={ref}>{splitwords(firstPhrase, inView)}</div>
            <div className={styles.content__two}>
              <div className={styles.content__two_main}>
                <span className={styles.subheader}>{t("HomePage:ourbrand")}</span>
                <p>
                  {t("HomePage:obtext")}
                </p>
              </div>
              <div className={styles.content__two_main}>
                <span className={styles.subheader}>{t("HomePage:ourpersona")}</span>
                <p>
                  {t("HomePage:optext")}
                </p>
              </div>
            </div>
            <div className={styles.content__three}>
              <div className={styles.main__image_wrapper} ref={ref3}>
                <div
                  className={styles.main__image_swiper}
                  style={{ transform: `translateX(${-activeImage * 33.33}%)`, height: inView3 ?  }}
                >
                  <Image src={IMAGE} alt="Interior Design" fill quality={100} />
                </div>
              </div>
              {IMAGES.map((image, i) => (
                <div
                  className={styles.secondary__image_wrapper}
                  key={i}
                  onMouseEnter={() => setActiveImage(i + 1)}
                  onMouseLeave={() => setActiveImage(0)}
                >
                  <div className={styles.secondary__image_swiper}>
                    <Image
                      src={image}
                      alt="Interior Design"
                      fill
                      quality={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.about__main}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>{t("HomePage:whoweare")}</span>
          </div>
          <div className={styles.about__content}>
            <div className={styles.content__one} ref={ref2}>
              {splitwords(secondPhrase, inView2)}
            </div>
            <div className={styles.content__two}>
              <div className={styles.content__two_main}>
                <p>
                  {t("HomePage:wwaone")}
                </p>
              </div>
              <div className={styles.content__two_main}>
                <p>
                {t("HomePage:wwatwo")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
