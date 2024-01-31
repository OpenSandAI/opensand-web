import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

type PostRouteType = 'whitepaper' | 'milestone' | 'about';

interface PostHeaderProps {
  type: PostRouteType;
}

const PostHeader: FC<PostHeaderProps> = props => {
  const { type } = props;
  return (
    <header className={styles.header}>
      {type === 'about' && (
        <h1>
          Introducing <br />
          <span style={{ color: '#2e5a51', marginLeft: '6rem' }}>OpenSand</span>
        </h1>
      )}
      {type === 'milestone' && (
        <h1>
          OpenSand <br />
          <span style={{ color: '#2e5a51', marginLeft: '6rem' }}>Milestone</span>
        </h1>
      )}
      {type === 'whitepaper' && (
        <h1>
          Whitepaper <br />
          <span style={{ color: '#2e5a51', marginLeft: '6rem' }}> of OpenSand</span>
        </h1>
      )}

      <div className={styles.arthur} >
        <Image width={40} height={40} className={styles.arthurImage} src="/images/site/landing/tech-block.png" alt="arthur" />
        Arthur: OpenSand
      </div>
    </header>
  );
};

export default PostHeader;
