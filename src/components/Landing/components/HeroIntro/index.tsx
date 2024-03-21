import React, { FC } from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

interface HeroIntroProps {}

/**
 * landing页-首屏
 */
const HeroIntro: FC<HeroIntroProps> = props => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: '20rem' }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12}>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: 50, md: 75 },
                letterSpacing: 1.5,
                lineHeight: 1.3,
                color: '#fff',
                fontWeight: 600,
              }}
            >
              <div>
                {`The Trustworthy `}
                <span style={{ color: 'rgba(0, 230, 137, 1)' }}>{`AGI`}</span>
              </div>
              <div>
                {`Governance `}
                <span style={{ color: 'rgba(0, 230, 137, 1)' }}>{`Protocol˚`}</span>
              </div>
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              component="div"
              sx={{
                width: '100%',
                fontSize: '1.5rem',
                lineHeight: 1.5,
                marginTop: '2rem',
                color: '#fff',
              }}
            >
              {`AGI is approaching, but there's no surefire guarantee that it will benefit humanity. That could change
              with OpenSand, a project where we strengthen AGI using an open source blockchain under a united global
              effort. In the OpenSand community, we're dedicated to creating a path towards trustworthy, transparent,
              and ethical AGI. OpenSand's mission is to make sure we do more than living; we aim to thrive in an
              entirely new ecosystem of excitement.`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ zIndex: -1, textAlign: { xs: 'center', md: '' } }}>
              <Image width={300} height={300} src="/images/site/landing/landing-main.png" alt="landing-logo" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroIntro;
