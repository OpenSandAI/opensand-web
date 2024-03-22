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
                <span style={{ color: 'rgba(0, 230, 137, 1)' }}>{`Protocol`}</span>
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
              {`OpenSand is the first on-chain trustworthy AGI governance protocol.
              Through decentralized governance,
              it enables AGI to reach a trustworthy consensus while empowering communities under the premise of protecting community consensus.
              We hope that every community has the right to possess a trustworthy AGI that upholds the community's consensus,
              thereby preserving the diversity of "consciousness" in the digital world of AGI.`}
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
