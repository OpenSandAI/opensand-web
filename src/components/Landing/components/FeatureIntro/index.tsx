import React, { FC } from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';
import { TEXT_ALIGN_MAP, featureList } from './utils';

interface FeatureIntroProps {}

const FeatureIntro: FC<FeatureIntroProps> = props => {
  return (
    <Container maxWidth="lg">
      {featureList.map(item => (
        <Box key={item.type} sx={{ position: 'relative', marginTop: '12rem' }}>
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
                    <p>{c}</p>
                  ))}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default FeatureIntro;
