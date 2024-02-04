import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import MobileNav from './MobileNav';
import styles from './index.module.css';

const Header = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  return (
    <header className={styles.header}>
      <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none', position: 'absolute', top: 0, right: 0 } }}>
        <IconButton onClick={() => setMobileNavVisible(!mobileNavVisible)}>
          <Menu style={{ fontSize: '2.5rem' }} />
        </IconButton>
      </Box>
      <div className={styles.logo}>
        <Link href="/">
          <Typography
            component="div"
            sx={{
              width: 60,
              height: 60,
              borderRadius: '100%',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0.8rem',
            }}
          >
            <Image width={50} height={50} src="/images/site/landing/landing-logo.png" alt="opensand" />
          </Typography>
          <div className={styles.logoTitle}>OpenSand</div>
        </Link>
      </div>

      <Box sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
        <div className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.linkItem}>
              <Link href="/apps">APPLICATION</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/whitepaper">WHITEPAPER</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/roadmap">MILESTONE/ROADMAP</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/contact">CONTACT US</Link>
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
