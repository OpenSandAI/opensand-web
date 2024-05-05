import React, { FC } from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';
import { TEXT_ALIGN_MAP, featureList } from './utils';

interface FeatureIntroProps {}

const FeatureIntro: FC<FeatureIntroProps> = props => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ position: 'relative', marginTop: '12rem', height: '700px' }}>
        <Typography
          component="div"
          sx={{
            marginLeft: 0,
            fontSize: { xs: 60, md: 90 },
            color: '#FFF',
            margin: '2rem 0',
          }}
        >
          Core Design
        </Typography>
        <Image
          width={0}
          height={0}
          sizes="100%"
          style={{ width: 'auto', height: '600px', margin: '0 auto' }}
          src="/images/site/landing/overview.png"
          alt="landing"
        />
      </Box>

      {featureList.map(item => (
        <Box key={item.type} sx={{ position: 'relative', marginTop: '10rem' }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              {item.summary}
            </Grid>
          </Grid>
          <Grid
            container
            direction={item.type === 'feature2' ? 'row' : 'row-reverse'}
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: { xs: 'center', md: '' } }}>
                <Image
                  width={300}
                  height={300}
                  style={{ borderRadius: '25%' }}
                  src={item.pictureUrl}
                  alt="landing-tech"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography component="div">
                <Typography
                  component="div"
                  sx={{
                    color: '#FFF',
                    fontSize: '2rem',
                    marginBottom: '1.5rem',
                    textAlign: TEXT_ALIGN_MAP[item.type as keyof typeof TEXT_ALIGN_MAP],
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    color: '#fff',
                    fontSize: '1.2rem',
                  }}
                >
                  {item.content}
                  {(item.contents || []).map(c => (
                    <p key={c}>{c}</p>
                  ))}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}

      <Box sx={{ position: 'relative', marginTop: '20rem', height: '200px' }}>
        <Grid container spacing={10} style={{ textAlign: 'center' }}>
          <Grid item xs={12} md={3}>
            <Image
              width={0}
              height={0}
              sizes="100%"
              style={{ width: 'auto', height: '100px', margin: '10px auto' }}
              src="/images/site/landing/corperates/c1.png"
              alt="landing"
            />
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '1rem',
              }}
            >
              The Hong Kong University of Science and Technology
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Image
              width={0}
              height={0}
              sizes="100%"
              style={{ width: 'auto', height: '100px', margin: '10px auto' }}
              src="/images/site/landing/corperates/c2.png"
              alt="landing"
            />
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '1rem',
              }}
            >
              NVIDIA
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Image
              width={0}
              height={0}
              sizes="100%"
              style={{ width: 'auto', height: '100px', margin: '10px auto' }}
              src="/images/site/landing/corperates/c3.png"
              alt="landing"
            />
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '1rem',
              }}
            >
              University of Oxford
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Image
              width={0}
              height={0}
              sizes="100%"
              style={{ width: 'auto', height: '100px', margin: '10px auto' }}
              src="/images/site/landing/corperates/c4.png"
              alt="landing"
            />
            <Typography
              sx={{
                margin: 'auto',
                color: '#FFF',
                fontSize: '1rem',
              }}
            >
              Hong Kong Generative AI Research and Development Center
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FeatureIntro;
