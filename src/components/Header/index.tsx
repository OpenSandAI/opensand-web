import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import MobileNav from './MobileNav';
import styles from './index.module.css';

const Header = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  return (
    <header className={styles.header}>
      <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none', position:'absolute', top: 0, right: 0 } }}>
        <IconButton onClick={() => setMobileNavVisible(!mobileNavVisible)}>
          <Menu style={{ fontSize: '2.5rem' }} />
        </IconButton>
      </Box>
      <div className={styles.logo}>
        <Link href="/">
          <Image width={80} height={80} src="/images/site/opensand.png" alt="OpenSand" />
          <div className={styles.logoTitle}>OpenSand</div>
        </Link>
      </div>
      <Box sx={{ display: { xs: 'none', md: 'inline-flex'  } }}>
        <div className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.linkItem}>
              <a href="#">Apps</a>
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/apps">ChatGPT</Link>
                </li>
              </ul>
            </li>
            <li className={styles.linkItem}>
              <Link href="/whitepaper">Whitepaper</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/roadmap">Roadmap</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </Box>
      <Link className={styles.button} href="/login">
        Sign MetaMask
      </Link>
      {mobileNavVisible && <MobileNav mobileNavVisible={mobileNavVisible} setMobileNavVisible={setMobileNavVisible} />}
    </header>
  );
};

export default Header;
