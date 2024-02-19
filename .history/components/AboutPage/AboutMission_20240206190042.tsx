import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/background.jpg";
import styles from "../../styles/AboutPage/mission.module.scss";

const AboutMission = () => {
  return (
    <section className={`${styles.mission__section}`}>
      <div className={styles.image__overflow}>
        <div className={styles.mission__image}>
          <Image src={IMAGE} alt="Landscape Image" fill quality={100} />
        </div>
      </div>
      <div className={`container ${styles.mission__container}`}>
        <div className={styles.mission}>
          <div className={styles.mission__content}>
            <span>Notre Mission</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
