import React, { FC } from 'react';
import styles from './index.module.css';
import AppIntro from './components/AppIntro';

interface AppsHomeProps {}

/**
 * OpenSand -> Apps
 */
const AppsHome: FC<AppsHomeProps> = props => {
  return (
    <div className={styles.appsWrapper}>
      <AppIntro />
    </div>
  );
};

export default AppsHome;
