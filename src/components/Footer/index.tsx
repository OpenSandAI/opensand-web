'use client';
import React, { FC } from 'react';
import styles from './index.module.css';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import { routeConfigList } from './utils';
import Link from 'next/link';

interface FooterProps {}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  minHeight: '25rem',
  color: theme.palette.text.secondary,
}));

/**
 * You can describle the component here
 */
const Footer: FC<FooterProps> = props => {
  return (
    <Container maxWidth="lg">
      <div style={{ margin: '15rem 0 15rem 0' }}>
        <Grid container spacing={25}>
          <Grid style={{ display: 'flex' }} item xs={12} md={2}>
            <Typography
              component="div"
              sx={{
                width: 60,
                height: 60,
                borderRadius: '100%',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.8rem',
              }}
            >
              <Image width={50} height={50} src="/images/site/landing/landing-logo.png" alt="landing-logo" />
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: 25,
                paddingLeft: 2,
                paddingTop: 1.5,
                color: '#fff',
              }}
            >
              OpenSand
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <div className={styles.linkWrapper}>
              {routeConfigList.children.map((item, index) => (
                <div className={styles.linkItem}>
                  <Link href={item.link} key={item.key} className={styles.customLink}>
                    <span>{item.title}</span>
                  </Link>
                  {item.title === 'OpenSand' && (
                    <Link href="/chat" key="ChatGPT" className={styles.dropLink}>
                      ChatGPT
                    </Link>
                  )}
                  {item.title === 'Social' && (
                    <>
                      <Link
                        target="_blank"
                        href="https://twitter.com/opensandai"
                        key="twitter"
                        className={styles.dropLink}
                      >
                        Twitter
                      </Link>
                      <Link target="_blank" href="https://discord.com/" key="discord" className={styles.dropLink}>
                        Discord
                      </Link>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
        <div className={styles.copyright}>Copyright © 2024 OpenSand. All rights reserved.</div>
      </div>
    </Container>
  );
};

export default Footer;
