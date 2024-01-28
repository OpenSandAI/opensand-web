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
          <span style={{ color: '#FFF',marginLeft:'1rem' }}>Chat</span>
        </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Image
                width={400}
                height={600}
                layout="responsive"
                className={styles.image}
                src="/images/site/apps/apps-description.png"
                alt="landing-logo"
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <div className={styles.rightTitle}>App Name:&nbsp; ChatGPT</div>
              <div className={styles.rightContent}>
                Description:
                <br />
                ChatGPT is a natural language processing tool driven by AI technology that allows you to have human-like
                conversations and much more with the chatbot. The language model can answer questions and assist you
                with tasks, such as composing emails, essays, and code.
              </div>
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
