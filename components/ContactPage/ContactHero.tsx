"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import gsap from "gsap";
import IMAGE from "../../public/images/SVG/Group 13.svg";
import styles from "../../styles/ContactPage/chero.module.scss";

const ContactHero = ({
  setImageLoaded,
  animationFinished,
}: {
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  animationFinished: boolean;
}) => {
  const { t } = useTranslation();

  const location = "Rue 1.894, Yaoundé I (Bastos)"
  const refs = useRef<HTMLSpanElement[]>([]);
  const imageRef = useRef(null);

  const splitwords = () => {
    let body: JSX.Element[] = [];
    location.split(" ").forEach((word, i) => {
      body.push(<div key={`word-${i}`} className={styles.word__wrapper}><p ref={(el) => el && refs.current.push(el)} className={styles.word}>{word}</p></div>);
    });

    return body;
  };

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
      });

      tl.to(refs.current, {
        y: "0%",
        ease: "none",
        stagger: 0.01,
      })

      tl.to(imageRef.current, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        duration: 1,
        ease: 'power4.inOut'
      })

      tl.pause()

      if(animationFinished) {
        tl.resume();
      }
    })

    return () => context.revert();
  }, [animationFinished]);

  const contactData = [
    {
      name: t("ContactPage:phone"),
      data: "+237 690-786-994",
      link: "tel:+237690786994",
    },
    {
      name: t("ContactPage:mail"),
      data: "onac464@yahoo.com",
      link: "mailto:onac464@yahoo.com",
    },
    {
      name: t("ContactPage:address"),
      data: "Rue 1.894, Yaoundé I (Bastos)",
    },
  ];

  return (
    <section className={`section__special ${styles.contact__section}`}>
      <div className={`container ${styles.contact__container}`}>
        <div className="header__text">
          <div className={`header__text-main ${styles.htext__main}`}>{splitwords()}</div>
        </div>
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__content}>
            <Link href="/" className={styles.image__wrapper} ref={imageRef}>
              <Image
                src={IMAGE}
                fill
                quality={100}
                alt="Location"
                priority
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
            </Link>
            <div className={styles.contact__info}>
              {contactData.map((data, i) =>
                data.link ? (
                  <Link
                    key={i}
                    href={data.link}
                    className={`${styles.data__block} ${styles.link}`}
                  >
                    <span>{data.name}</span>
                    <span>{data.data}</span>
                  </Link>
                ) : (
                  <div
                    key={i}
                    className={`${styles.data__block} ${styles.special}`}
                  >
                    <span>{data.name}</span>
                    <span>{data.data}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
