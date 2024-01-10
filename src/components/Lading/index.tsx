import React, { FC } from 'react';
import styles from './index.module.css';

interface LandingProps {}

const Landing: FC<LandingProps> = props => {
  return (
    <div className={styles.landing}>
      <div className={styles.landingTitle}>Welcome to the official website of OpenSand.</div>
    </div>
  );
};

export default Landing;
