'use client';
import React, { FC } from 'react';
import styles from './index.module.css';
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import { appConfigList, routeConfigList, socialConfigList } from './utils';
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
      <div style={{ margin: '3rem 0' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <Item
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 0,
              }}
            >
              <Image
                width={200}
                height={200}
                layout="responsive"
                src="/images/site/landing/landing-logo.png"
                alt="landing-logo"
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={10}>
            <Item>
              <div className={styles.linkWrapper}>
                <Grid container spacing={0}>
                  <Grid item xs={12} md={6}>
                    <div className={styles.title}>{appConfigList.title}</div>
                    {appConfigList.children.map((item, index) => (
                      <Link href={item.link} key={item.key} className={styles.customLink}>
                        - <span style={{ marginLeft: 10 }}>{item.title}</span>
                      </Link>
                    ))}
                    <div className={styles.title}>{socialConfigList.title}</div>
                    {socialConfigList.children.map((item, index) => (
                      <div style={{ marginBottom: 20 }}>
                        <Link href={item.link} key={item.key} className={styles.customLink}>
                          - <span style={{ marginLeft: 10 }}>{item.title}</span>
                        </Link>
                      </div>
                    ))}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {routeConfigList.children.map((item, index) => (
                      <div style={{ marginBottom: 20 }}>
                        <Link href={item.link} key={item.key} className={styles.customLink}>
                          - <span>{item.title}</span>
                        </Link>
                      </div>
                    ))}
                  </Grid>
                </Grid>
              </div>
            </Item>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Footer;
