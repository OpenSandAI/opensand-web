import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import { Box, Container, Grid, Typography } from '@mui/material';

interface ProductIntroProps {}

const ProductIntro: FC<ProductIntroProps> = props => {
  return (
    <Container maxWidth="lg">
      <div className={styles.productContent}>
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 50, md: 90 },
            fontWeight: 600,
            marginBottom: '3rem',
            lineHeight: 1.6,
            color: '#dcf8bd',
          }}
        >
          <span>Build It</span>
          <br />
          <span style={{ marginLeft: '3rem', color: '#fff' }}>Your way</span>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Image
              width={500}
              height={250}
              layout="responsive"
              className={styles.image}
              src="/images/site/landing/pexels-google.jpg"
              alt="landing-logo"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: { xs: 5, md: 0 } }}>
              <Typography
                component="div"
                sx={{
                  color: '#dcf8bd',
                  fontWeight: 500,
                  fontSize: '2rem',
                  marginBottom: '3rem',
                }}
              >
                Avalanche has the advanced tooling you need to accelerate from idea to launch.
              </Typography>
              <Typography
                component="div"
                sx={{
                  color: '#fff',
                  lineHeight: 1.5,
                  fontSize: '1.5rem',
                }}
              >
                Don’t miss out because it took too long to deploy on Mainnet. Take advantage of the low-code tooling and
                configurability that makes it easy to launch your Web3 innovation in less than 60 seconds.
              </Typography>
              <div className={styles.operation}>
                <a className={styles.button} href="/developer">
                  Get Started
                </a>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductIntro;
