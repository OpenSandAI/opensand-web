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
      <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
        <IconButton onClick={() => setMobileNavVisible(!mobileNavVisible)}>
          <Menu style={{ fontSize: '2.5rem' }} />
        </IconButton>
      </Box>
      <Link href="/">
        <Image width={384} height={90} style={{ marginTop: -10 }} src="/images/site/opensand.png" alt="OpenSand" />
      </Link>
      <Box sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
        <div className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.linkItem}>
              <a href="#">OpenSand</a>
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/apps">ChatGPT</Link>
                </li>
              </ul>
            </li>
            <li className={styles.linkItem}>
              <a href="#">Social</a>
              <ul className={styles.dropdown}>
                <li>
                  <Link target="_blank" href="https://discord.com/">
                    Discard
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://twitter.com/">
                    Twitter
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.linkItem}>
              <Link href="/whitepaper">Whitepaper</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/milestone">Roadmap</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      </Box>
      <Link className={styles.button} href="/login">
        Login
      </Link>
      {mobileNavVisible && <MobileNav mobileNavVisible={mobileNavVisible} setMobileNavVisible={setMobileNavVisible} />}
    </header>
  );
};

export default Header;
