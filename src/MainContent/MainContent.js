import React from "react";
import ecommerce from "../assets/ecommerce.png";
import Features from "../Features/Features";
import Button from "../Button/Button";
import styles from "../MainContent/MainContent.module.css";

const Main = () => {
    return (
      <main className={`wrapper ${styles.container}`}>
        <div className={styles.desc}>
          <h2 className={styles.h2}>
            Generate new revenue, profits, and establish an effective
            omni-channelbusiness.
          </h2>
          <h2>Over 53,720 furniture SKUs published.</h2>
        </div>
        <img src={ecommerce} alt="omni-channel marketing strategy" />
        <h2 className={styles.h2}>
          Designed to drive sales and automate operations.
        </h2>
        <Features />
        <hr className={styles.horizontalRule} />
        <div className={styles.learnMore}>
          <h2 className={styles.h2}>
            From start to scale, say hello to your next chapter of growth.
          </h2>
          <Button text="Talk to us to learn more" padding="2rem 3rem" path={"https://calendly.com/sam-bear/30min?back=1&month=2020-08"}/>
        </div>
      </main>
    );
};

export default Main;
