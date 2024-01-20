import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

interface PostHeaderProps {
  title: string;
  image: string;
}

const PostHeader: FC<PostHeaderProps> = props => {
  const { title, image } = props;
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
