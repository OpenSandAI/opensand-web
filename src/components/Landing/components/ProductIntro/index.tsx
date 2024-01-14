import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

interface ProductIntroProps {}

const ProductIntro: FC<ProductIntroProps> = props => {
  return (
    <div className={styles.productContent}>
      <div className={styles.title}>
        <span>Build It</span>
        <br />
        <span className={styles.subTitle}>Your way</span>
      </div>
      <div className={styles.description}>
        <Image width={600} height={300} className={styles.image} src="/landing/pexels-google.jpg" alt="landing-logo" />
        <div className={styles.right}>
          <div className={styles.rightTitle}>
            Avalanche has the advanced tooling you need to accelerate from idea to launch.
          </div>
          <div className={styles.rightContent}>
            Don’t miss out because it took too long to deploy on Mainnet. Take advantage of the low-code tooling and
            configurability that makes it easy to launch your Web3 innovation in less than 60 seconds.
          </div>
        </div>
      </div>

      <div className={styles.operation}>
        <a className={styles.button} href="/developer">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default ProductIntro;
