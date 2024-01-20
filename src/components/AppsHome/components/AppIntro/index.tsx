'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import { useRouter } from 'next/navigation';

interface AppIntroProps {}

const AppIntro: FC<AppIntroProps> = props => {
  const router = useRouter();

  const handleChatOpen = () => {
    router.push('chat');
  };

  return (
    <div className={styles.appContent}>
      <div className={styles.title}>
        <span>OpenSand</span>
        <br />
        <span className={styles.subTitle}>Chat</span>
      </div>
      <div className={styles.description}>
        <Image width={500} height={250} className={styles.image} src="/images/site/apps/apps-description.png" alt="landing-logo" />
        <div className={styles.right}>
          <div className={styles.rightTitle}>A Conversational AI Platform</div>
          <div className={styles.rightContent}>
            OpenSand ChatGPT is a platform that lets you create and interact with chatbots powered by GPT technology.
            You can customize your chatbots with different personalities, topics, and languages. You can also chat with
            other users and join communities of chatbot enthusiasts.OpenSand ChatGPT is the ultimate destination for
            conversational AI lovers.
          </div>
        </div>
      </div>

      <div className={styles.operation}>
        <a onClick={handleChatOpen} className={styles.button} href="/chat">
          Open Now
        </a>
      </div>
    </div>
  );
};

export default AppIntro;
