import React from 'react';
import { getPostData } from '@/utils';
import styles from './index.module.css';
import PostContent from '@/components/PostContent';

const Contact = () => {
  const postData = getPostData('contact');

  return (
    <div className={styles.postWrapper}>
      <PostContent type="contact" post={postData} />
    </div>
  );
};

export default Contact;
