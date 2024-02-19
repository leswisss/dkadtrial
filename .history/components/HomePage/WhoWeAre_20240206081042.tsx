import React from "react";
import styles from "../../styles/HomePage/whoweare.module.scss"

const WhoWeAre = () => {
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
            <p className="p__font">{t("HomePage:wwaone")}</p>
          </div>
          <div className={styles.content__two_main}>
            <p className="p__font">{t("HomePage:wwatwo")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
