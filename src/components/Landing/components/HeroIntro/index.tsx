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
      <Box sx={{ marginTop: '14rem' }}>
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
                {`Building a `}
                <span style={{ color: 'rgba(0, 230, 137, 1)' }}>{`decentralized AI`}</span>
              </div>
              <div>
                {`Computing Power Network and `}
                <span style={{ color: 'rgba(0, 230, 137, 1)' }}>{`AI Governance Protocol`}</span>
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
              {`OpenSand provides an AI infrastructure for global AGI developers to engage in decentralized training and deploy AI Smart Contracts and AI Dapps by building the AI DePIN distributed computing network.`}
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
