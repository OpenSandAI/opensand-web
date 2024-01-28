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
          <Image width={300} height={90} style={{marginTop: -10}}  src="/images/site/opensand.png" alt="OpenSand" />
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
      <Link className={styles.button} href="/login">
        Login
      </Link>
    </header>
  );
};

export default Header;
