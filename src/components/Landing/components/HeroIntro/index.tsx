import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

interface HeroIntroProps {}

/**
 * You can describle the component here
 */
const HeroIntro: FC<HeroIntroProps> = props => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <Image
          width={800}
          height={800}
          className={styles.landingLogo}
          src="/landing/tech-block.png"
          alt="landing-logo"
        />
        <div className={styles.header}>
          The Best
          <br />
          <span className={styles.subHeader}>
            AI System of <br />
            <span style={{ color: '#fff', marginLeft: '3rem', whiteSpace: 'nowrap' }}>Generative Content</span>
          </span>
        </div>
        <div className={styles.content}>
          Build anything you want, any way you want on the lightning fast, scalable blockchain that won’t let you down.
          Choosing the wrong blockchain can kill your dApp before it ever has a chance to succeed, but it doesn’t have
          to be this way. Launch with confidence on Avalanche.
        </div>
        <div className={styles.buttonGroup}>
          <a className={styles.button} href="/developer">
            Get Started
          </a>
          <a className={styles.button} href="/get-started">
            New to Web3?
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
