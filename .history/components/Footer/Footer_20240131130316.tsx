import React from "react";
import { FooterLinks } from "@/utils";
import Link from "next/link";
import styles from "../../styles/Footer/footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.footer__wrapper}>
      <footer className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={styles.ft__left}>
            <div className={styles.menu}>
              <span className={styles.nav_header}>Menu</span>

              <div className={styles.footer__links}>
                {FooterLinks.map((data, i) => (
                  <Link
                    key={i}
                    href={data.link}
                    className={styles.footer__link}
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.menu}>
                <span className={styles.nav_header}>Prendre Contact</span>
                <div className={styles.footer__links}>
                  <Link
                    href="tel:+237690756994"
                    className={styles.footer__link}
                  >
                    +237 690-756-994
                  </Link>
                  <Link
                    href="mailto:onac464@yahoo.com"
                    className={styles.footer__link}
                  >
                    onac464@yahoo.com
                  </Link>
                </div>
              </div>
              <div className={styles.menu}>
                <span className={styles.nav_header}>Adresse</span>
                <div className={styles.footer__links}>
                  <span className={styles.footer__link}>
                    Rue 1.894, Yaounde I(Bastos)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ft__right}>
            <div className={styles.menu}>
              <span className={styles.nav_header}>À Propos de DKAD</span>
              <div className={styles.footer__links}>
                <span className={styles.footer__link}>
                  DKAD révolutionne la conception architecturale en créant des
                  structures distinctives qui contribuent au caractère de nos
                  villes.
                </span>
              </div>
              <div className={styles.socials}>
                <span className={styles.social__link}>Instagram</span>
                <span className={styles.social__link}>Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.menu}>
            <span className={styles.nav_header}>S'Inscrire</span>
            <div className={styles.footer__links}>
              <span className={styles.footer__link}>
                NewsLetter
              </span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
