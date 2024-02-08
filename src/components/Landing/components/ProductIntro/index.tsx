import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import { Box, Container, Grid, Typography } from '@mui/material';

interface ProductIntroProps {}

const ProductIntro: FC<ProductIntroProps> = props => {
  return (
    <Container maxWidth="lg">
      <div className={styles.productContent}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={8}>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: 50, md: 90 },
                fontWeight: 600,
                marginBottom: '1rem',
                lineHeight: 1.6,
                color: '#FFF',
              }}
            >
              <span>BUILD IT</span>
              <br />
              <span style={{ marginLeft: '10rem', color: 'rgba(0, 230, 137, 1)' }}>YOUR</span> WAY
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{textAlign: { xs: 'center', md: '' },}}>
            <Image
              width={300}
              height={300}
              className={styles.image}
              src="/images/site/landing/landing-secondary.png"
              alt="landing-logo"
            />
            </Box>
           
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ mt: { xs: 5, md: 0 } }}>
              <Typography
                component="div"
                sx={{
                  color: '#FFF',
                  fontWeight: 500,
                  fontSize: '2rem',
                }}
              >
                Cosmo Intellect
              </Typography>
              <Typography
                component="div"
                sx={{
                  color: '#fff',
                  lineHeight: 1.5,
                  fontSize: '1.2rem',
                }}
              >
                {`n this phase of the product, we will focus on building an open-source community where decision-making
                authority and knowledge resources are shared with a broader group. It's a place where professionals from
                various disciplines, including technology, academia, industry, and everyday enthusiasts, come together
                to pool their wisdom to collectively explore and address complex AGI governance issues, ensuring a more
                balanced and comprehensive understanding and management of AGI.`}
              </Typography>
              <div className={styles.operation}>
                <a className={styles.button} href="/apps">
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
