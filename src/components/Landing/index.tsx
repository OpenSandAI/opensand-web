import React, { FC } from 'react';
import styles from './index.module.css';
import HeroIntro from './components/HeroIntro';
import ProductIntro from './components/ProductIntro';
import FeatureIntro from './components/FeatureIntro';

interface LandingProps {}

const Landing: FC<LandingProps> = props => {
  return (
    <div className={styles.landing}>
      <HeroIntro />
      <ProductIntro />
      <FeatureIntro />
    </div>
  );
};

export default Landing;
