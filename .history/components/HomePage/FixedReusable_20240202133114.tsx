import React from "react";
import Image from "next/image";
import { Magnetic } from "..";
import IMAGE from "../../public/images/landscape.jpg";
import styles from "../../styles/HomePage/fixed.module.scss";

const FixedReusable = () => {
  return (
    <div className={styles.fixed}>
      <div className={styles.background__image}>
        <Image src={IMAGE} fill alt="LandScape Image" quality={100} />
      </div>
      <div className={`container ${styles.fixed__container}`}>
        <div className={styles.text__overflow}>
          <p>Amenagement Paysager</p>
        </div>
        <div className={styles.text__content}>
          <span className={styles.round}></span>
          <span>Fusionner la conception et la nature pour un developpement durable</span>
        </div>
        <div>
          <Magnetic>
            
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default FixedReusable;
