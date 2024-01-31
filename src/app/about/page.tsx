import React from 'react';
import { getPostData } from '@/utils';
import styles from './index.module.css';
import PostContent from '@/components/PostContent';

const About = () => {
  const postData = getPostData('about');

  return (
    <div className={styles.postWrapper}>
      <PostContent type="about" post={postData} />
    </div>
  );
};

export default About;
