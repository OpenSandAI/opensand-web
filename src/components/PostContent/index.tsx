import React, { FC } from 'react';
import styles from './index.module.css';
import ReactMarkdown from 'react-markdown';
import { Container } from '@mui/material';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import PostHeader from '../PostHeader';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

type PostRouteType = 'whitepaper' | 'milestone' | 'about';

const PostContent: FC<{ type: PostRouteType; post: any }> = ({ type, post }) => {
  const customRenderers = {
    code(props: any) {
      const { children, className, node, ...rest } = props;
      const match = /language-(\w+)/.exec(className || '');
      return match ? (
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          language={match[1]}
          style={atomDark}
        />
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      );
    },
    p(props: any) {
      return <p style={{ color: '#FFF',fontSize: '1.5rem', lineHeight: '1.5' }}>{props.children}</p>;
    },
    h2(props: any) {
      return <h2 style={{ color: '#FFF' }}>{props.children}</h2>;
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader type={type} />
      <Container maxWidth="lg">
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
      </Container>
    </article>
  );
};

export default PostContent;
