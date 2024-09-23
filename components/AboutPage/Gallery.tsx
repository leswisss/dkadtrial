"use client";

import React, { useState } from "react";
import { GalleryDetails } from "@/utils";
import { Icon } from "@iconify/react";
import Rounded from "../Common/RoundedButton/Rounded";
import Image from "next/image";
import styles from "../../styles/AboutPage/gallery.module.scss";

const Gallery = ({ currentLocale }: { currentLocale: string }) => {
  const [activeModal, setActiveModal] = useState({ value: false, index: 0 });

  //Managing Pagination
  const [itemsToShow, setItemsToShow] = useState(6);

  const handleLoadMore = () => {
    if (itemsToShow < GalleryDetails.length) {
      setItemsToShow(itemsToShow + 6);
    }
  };

  const isReachingEnd = itemsToShow >= GalleryDetails.length;

  return (
    <>
      <div className={styles.gallery__wrapper}>
        {GalleryDetails.slice(0, itemsToShow).map((data, i) => (
          <div
            key={i}
            className={styles.gallery__card}
            onClick={() => setActiveModal({ value: true, index: i })}
          >
            <div className={styles.gallery__image}>
              <Image
                src={data.image}
                fill
                quality={100}
                alt={currentLocale === "fr" ? data.desc.fr : data.desc.en}
              />
            </div>
            {/* <div className={styles.gallery__content}>
              <p>{currentLocale === "fr" ? data.desc.fr : data.desc.en}</p>
            </div> */}
          </div>
        ))}
      </div>
      <div
        className={`${styles.gallery__modal} ${
          activeModal.value ? styles.active__modal : ""
        }`}
      >
        <div className={styles.g__image}>
          <Image
            src={GalleryDetails[activeModal.index].image}
            fill
            quality={100}
            alt="Swiss"
          />
          <span
            onClick={() =>
              setActiveModal({ value: false, index: activeModal.index })
            }
          >
            <Icon icon="material-symbols-light:cancel-outline" />
          </span>
        </div>
      </div>
      {!isReachingEnd && (
        <Rounded
          backgroundColor="#013cac"
          classNames={styles.rounded}
          linker={false}
          onClick={handleLoadMore}
        >
          <p>{currentLocale === "fr" ? "Voir plus" : "See more"}</p>
        </Rounded>
      )}
    </>
  );
};

export default Gallery;
