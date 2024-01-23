import React, { FC } from 'react';
import Image from 'next/image';
import { Container, Grid, Typography } from '@mui/material';

interface AIIntroProps {}

const AIIntro: FC<AIIntroProps> = props => {
  return (
    <Container maxWidth="lg">
      <div style={{position:'relative', marginTop: '12rem'}}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: 60, md: 90 },
                fontWeight: 600,
                marginBottom: '3rem',
                lineHeight: 1.3,
              }}
            >
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: 60, md: 90 },
                  marginLeft: '1.5rem',
                  color: '#dcf8bd',
                }}
              >
                THE
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: 60, md: 90 },
                  color: '#fff',
                }}
              >
                BLOCKCHAIN
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: 60, md: 90 },
                  marginLeft: '3rem',
                  color: '#dcf8bd',
                }}
              >
                BUILT TO
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: 60, md: 90 },
                  color: '#fff',
                }}
              >
                SCALE
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              component="div"
              sx={{
                position: { xs: 'static', md: 'absolute' },
                left: { xs: 0, md: 450 },
                top: { xs: 0, md: 280 },
                maxWidth: 800,
              }}
            >
              <Typography
                component="div"
                sx={{
                  color: '#dcf8bd',
                  fontSize: '2rem',
                  marginBottom: '1.5rem',
                }}
              >
                Avalanche has the advanced tooling you need to accelerate from idea to launch.
              </Typography>
              <Typography
                component="div"
                sx={{
                  color: '#fff',
                  fontSize: '1.5rem',
                }}
              >
                Don’t miss out because it took too long to deploy on Mainnet. Take advantage of the low-code tooling and
                configurability that makes it easy to launch your Web3 innovation in less than 60 seconds.
              </Typography>
            </Typography>
          </Grid>
        </Grid>

        <Image
          width={1422}
          height={508}
          layout="responsive"
          src="/images/site/landing/blockchain-ai.jpg"
          alt="blockchain-ai"
        />
      </div>
    </Container>
  );
};

export default AIIntro;
