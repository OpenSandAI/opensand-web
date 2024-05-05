import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import WalletIcon from '@mui/icons-material/Wallet';
import MobileNav from './MobileNav';
import { useSDK } from '@metamask/sdk-react';
import { handleAccountSlice } from './utils';
import styles from './index.module.css';

const Header = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const { sdk, connected, connecting, account } = useSDK();

  const metamaskSignin = async () => {
    console.log('metamaskSignin');
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

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
              <Link href="/roadmap">Roadmap</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/whitepaper">Whitepaper</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/apps">OS App</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/whitepaper">OS Chain</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="https://medium.com/@opensand_ai" target="_blank">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'inline-flex' },
        }}
      >
        {connected ? (
          <Button startIcon={<WalletIcon />} className={styles.button}>
            {handleAccountSlice(account)}
          </Button>
        ) : (
          <Button startIcon={<WalletIcon />} disabled={connecting} onClick={metamaskSignin} className={styles.button}>
            Sign MetaMask
          </Button>
        )}
      </Box>

      {mobileNavVisible && <MobileNav mobileNavVisible={mobileNavVisible} setMobileNavVisible={setMobileNavVisible} />}
    </header>
  );
};

export default Header;
