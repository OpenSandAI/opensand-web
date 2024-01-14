import React, { FC } from 'react';
import styles from './index.module.css';
import HeroIntro from './components/HeroIntro';
import ProductIntro from './components/ProductIntro';
import AIIntro from './components/AIIntro';

interface LandingProps {}

const Landing: FC<LandingProps> = props => {
  return (
    <div className={styles.landing}>
      <HeroIntro />
      <ProductIntro />
      <AIIntro />
    </div>
  );
};

export default Landing;
