'use client';
import React, { FC } from 'react';
import styles from './index.module.css';
import { Grid } from '@mui/material';
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
    <div className={styles.footerWrapper}>
      <div className={styles.content}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Item style={{ textAlign: 'center' }}>
              <Image width={200} height={200} src="/images/site/landing/landing-logo.png" alt="landing-logo" />
              <div className={styles.globalTitle}>OpenSand</div>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Item>
              <div className={styles.linkWrapper}>
                <div className={styles.left}>
                  <div className={styles.title}>{appConfigList.title}</div>
                  {appConfigList.children.map((item, index) => (
                    <Link href={item.link} key={item.key} className={styles.customLink}>
                      - <span style={{ marginLeft: 10 }}>{item.title}</span>
                    </Link>
                  ))}
                  <div className={styles.title}>{socialConfigList.title}</div>
                  {socialConfigList.children.map((item, index) => (
                    <Link href={item.link} key={item.key} className={styles.customLink}>
                      - <span style={{ marginLeft: 10 }}>{item.title}</span>
                    </Link>
                  ))}
                </div>
                <div className={styles.right}>
                  {routeConfigList.children.map((item, index) => (
                    <Link href={item.link} key={item.key} className={styles.customLink}>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
