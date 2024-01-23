import React, { FC } from 'react';
import Image from 'next/image';
import { Box, Container, Grid } from '@mui/material';
import styles from './index.module.css';

interface AppIntroProps {}

const AppIntro: FC<AppIntroProps> = props => {
  return (
    <Container maxWidth="lg">
      <div className={styles.appContent}>
        <Box sx={{ fontSize: { xs: 60, md: 90 } }}>
          <div className={styles.title}>
            <span>OpenSand</span>
            <Box sx={{ color: '#FFF', marginLeft: { xs: 20, md: 40 } }}>
              <span className={styles.subTitle}>Chat</span>
            </Box>
          </div>
        </Box>
        <div className={styles.description}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Image
                width={600}
                height={400}
                layout="responsive"
                className={styles.image}
                src="/images/site/apps/apps-description.png"
                alt="landing-logo"
              />
            </Grid>
            <Grid item xs={12} md={7}>
                <div className={styles.rightTitle}>A Conversational AI Platform</div>
                <div className={styles.rightContent}>
                  OpenSand ChatGPT is a platform that lets you create and interact with chatbots powered by GPT
                  technology. You can customize your chatbots with different personalities, topics, and languages. You
                  can also chat with other users and join communities of chatbot enthusiasts.OpenSand ChatGPT is the
                  ultimate destination for conversational AI lovers.
                </div>
            </Grid>
          </Grid>
        </div>

        <div className={styles.operation}>
          <a className={styles.button} href="/chat">
            Open Now
          </a>
        </div>
      </div>
    </Container>
  );
};

export default AppIntro;
