import React, { FC } from 'react';
import Image from 'next/image';
import { Box, Container, Grid } from '@mui/material';
import styles from './index.module.css';

interface AppIntroProps {}

const AppIntro: FC<AppIntroProps> = props => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: '15rem' }}>
        <Box
          sx={{
            fontWeight: 600,
            marginBottom: '3rem',
            color: 'rgba(0, 230, 137, 1)',
            fontSize: { xs: 60, md: 90 },
          }}
        >
          OpenSand
          <span style={{ color: '#FFF', marginLeft: '1rem' }}>Chat</span>
        </Box>
        <Grid container spacing={0} alignContent={'center'} justifyContent={'center'}>
          <Grid item xs={12} md={5}>
            <Image
              width={400}
              height={300}
              className={styles.image}
              src="/images/site/apps/apps-description.png"
              alt="landing-logo"
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                fontSize: '2.5rem',
                marginTop: '2rem',
                fontWeight: 500,
                color: '#fff',
              }}
            >
              App Name:&nbsp; ChatGPT
            </Box>
            <Box
              sx={{
                fontWeight: 500,
                color: '#fff',
                fontSize: '1.2rem',
                lineHeight: 1.5,
                marginTop: '3rem',
              }}
            >
              Description:
              <br />
              ChatGPT is a natural language processing tool driven by AI technology that allows you to have human-like
              conversations and much more with the chatbot. The language model can answer questions and assist you with
              tasks, such as composing emails, essays, and code.
            </Box>
          </Grid>
        </Grid>
        <div className={styles.operation}>
          <a className={styles.button} href="/chat">
            Open Now
          </a>
        </div>
      </Box>
    </Container>
  );
};

export default AppIntro;
