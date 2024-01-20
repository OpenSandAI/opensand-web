import React, { Fragment } from 'react';
import { getPostData } from '@/utils';
import styles from './index.module.css';
import PostContent from '@/components/PostContent';

const WhitePaper = () => {
  const postData = getPostData('whitePaper');

  return (
    <Fragment>
      <div className={styles.postWrapper}>
        <PostContent post={postData} />
      </div>
    </Fragment>
  );
};

export default WhitePaper;
