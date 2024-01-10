import React from 'react';
import Link from 'next/link';
import { NAVIGATION_LIST } from './utils';
import styles from './index.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">OpenSand</Link>
      </div>
      <nav className={styles.navigation}>
        {NAVIGATION_LIST.map((item, index) => (
          <ul key={index}>
            <li>
              <Link href={`/${item.path}`}>{item.name}</Link>
            </li>
          </ul>
        ))}
      </nav>
    </header>
  );
};

export default Header;
