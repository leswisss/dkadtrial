import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IMAGE from "../../public/images/aboutimage2.jpg"
import styles from "../../styles/ContactPage/chero.module.scss"

const ContactHero = () => {
  const contactData = [
    {
      name: "Telephone",
      data: "+237 690-786-994",
      link: "tel:+237690786994"
    },
    {
      name: "Email",
      data: "onac464@yahoo.com",
      link: "mailto:onac464@yahoo.com"
    },
    {
      name: "Adresse",
      data: "Rue 1.894, Yaoundé I (Bastos)"
    }
  ]
  return (
    <section className={`section__special ${styles.contact__section}`}>
      <div className={`container ${styles.contact__container}`}>
        <div className="header__text">
          <p className='header__text-main'>Rue 1.894, Yaoundé I (Bastos)</p>
        </div>
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__content}>
            <Link href="/" className={styles.image__wrapper}>
              <Image src={IMAGE} fill quality={100} alt="Location"/>
            </Link>
            <div className={styles.contact__info}>
              {
                contactData.map((data, i) => (
                  <div className={}>

                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero