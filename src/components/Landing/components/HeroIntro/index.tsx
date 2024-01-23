import React, { FC } from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './index.module.css';

interface HeroIntroProps {}

/**
 * You can describle the component here
 */
const HeroIntro: FC<HeroIntroProps> = props => {
  return (
    <Container maxWidth="lg">
      <div className={styles.heroContent}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={10}>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: 50, md: 90 },
                letterSpacing: 1.5,
                lineHeight: 1.3,
                color: '#dcf8bd',
                fontWeight: 600,
              }}
            >
              The Best
              <br />
              <span style={{ marginLeft: '3rem' }}>
                AI System of <br />
                <span style={{ color: '#fff', marginLeft: '3rem' }}>Generative Content</span>
              </span>
            </Typography>
            <Typography
              component="div"
              sx={{
                width: '100%',
                fontSize: '1rem',
                lineHeight: 1.5,
                color: '#fff',
              }}
            >
              Build anything you want, any way you want on the lightning fast, scalable blockchain that won’t let you
              down. Choosing the wrong blockchain can kill your dApp before it ever has a chance to succeed, but it
              doesn’t have to be this way. Launch with confidence on Avalanche.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box sx={{ position: {sx:'static', md: 'relative'}, zIndex: -1, left: { xs: -50, md: -200 }, top: { xs: 0, md: -100 } }}>
              <Image width={400} height={400} src="/images/site/landing/tech-block.png" alt="landing-logo" />
            </Box>
          </Grid>
        </Grid>
        <div className={styles.buttonGroup}>
          <a className={styles.button} href="/apps">
            Get Started
          </a>
          <a className={styles.button} href="/whitepaper">
            New to Web3?
          </a>
        </div>
      </div>
    </Container>
  );
};

export default HeroIntro;
