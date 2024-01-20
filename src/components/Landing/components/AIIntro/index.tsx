import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

interface AIIntroProps {}

const AIIntro: FC<AIIntroProps> = props => {
  return (
    <div className={styles.aiContent}>
      <div className={styles.title}>
        <span className={styles.subTitleOne}>THE</span>
        <br />
        <span className={styles.subTitleTwo}>BLOCKCHAIN</span>
        <br />
        <span className={styles.subTitleThree}>BUILT TO</span>
        <br />
        <span className={styles.subTitleFour}>SCALE</span>
      </div>
      <div className={styles.description}>
        <div className={styles.descTitle}>
          Avalanche has the advanced tooling you need to accelerate from idea to launch.
        </div>
        <div className={styles.descContent}>
          Don’t miss out because it took too long to deploy on Mainnet. Take advantage of the low-code tooling and
          configurability that makes it easy to launch your Web3 innovation in less than 60 seconds.
        </div>
      </div>

        <Image
          width={1422}
          height={508}
          className={styles.image}
          src="/images/site/landing/blockchain-ai.jpg"
          alt="blockchain-ai"
        />
    </div>
  );
};

export default AIIntro;
