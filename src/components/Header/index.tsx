import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAVIGATION_LIST } from './utils';

import styles from './index.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image width={100} height={100} className={styles.image} src="/OpenSand.png" alt="OpenSand" />
        </Link>
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
