'use client';
import React, { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Button, CircularProgress, Container, IconButton, Input } from '@mui/material';
import Image from 'next/image';
import { Log, Message } from './types.d';
import { useLocalStorage } from '@/utils/hooks';
import RefreshIcon from '@mui/icons-material/Refresh';
import ask from './ask';
import 'highlight.js/styles/vs2015.css';
import styles from './index.module.css';

const ariaLabel = { 'aria-label': 'description' };

const enum Role {
  Assistant = 'assistant',
  User = 'user',
}

const ChatBot = () => {
  const [loading, setLoading] = useState(false);

  const { setStorageItem, getStorageItem, removeStorageItem } = useLocalStorage();
  const cacheLogs = getStorageItem('chatLogs');
  const [logs, setLogs] = useState<Log[]>(() => []);
  const [question, setQuestion] = useState('');
  const [answeringContent, setAnsweringContent] = useState('');
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (cacheLogs) {
      setLogs(cacheLogs);
    }
  }, []);

  useEffect(() => {
    if (!firstRenderRef.current) {
      setStorageItem('chatLogs', logs);
    } else {
      firstRenderRef.current = false;
    }
  }, [logs]);

  const askQuestion = useCallback((messages: Message[]) => {
    setLoading(true);
    let contents = '';
    ask(str => {
      if (!str) return;
      if (str === '[DONE]') {
        setLoading(false);
        setAnsweringContent('');
        setLogs(prev =>
          prev.map(i => {
            const { answering, ...rest } = i;
            if (answering) {
              return {
                ...rest,
                content: contents,
              };
            }
            return i;
          }),
        );

        return;
      }

      let content = str;
      try {
        const data = JSON.parse(str);
        content = data.choices?.reduce((acc: string, cur: unknown) => {
          // @ts-expect-error
          acc += cur?.delta?.content ?? '';
          return acc;
        }, '');
      } catch (error) {
        // Ignore
        console.error('error happen', error);
      }

      contents += content;
      setAnsweringContent(contents);
    }, messages);
  }, []);

  const isAnswering = Boolean(answeringContent);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAnswering || !question) return;
    const messages = logs.concat({
      id: crypto.randomUUID(),
      role: Role.User,
      content: question,
    });

    askQuestion(messages.map(i => ({ role: i.role, content: i.content })));
    setQuestion('');
    setLogs([
      ...messages,
      {
        content: '',
        answering: true,
        role: Role.Assistant,
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleLogClean = () => {
    setLogs([]);
  };

  return (
    <Container maxWidth="lg">
      <div className={styles.main}>
        <div className={styles.chatWrapper}>
          <div className={styles.chatTitle}>
            <Image
              width={40}
              height={40}
              style={{ marginLeft: 30 }}
              className={styles.image}
              src="/images/site/apps/chat-icon.svg"
              alt="landing-logo"
            />
            <span>OpenSand Chat</span>
          </div>
          <div className={styles.chat}>
            {loading && (
              <div className={styles.loading}>
                <CircularProgress color="secondary" variant="indeterminate" />
              </div>
            )}

            <div className={styles.logs}>
              {logs.map(l => (
                <div key={l.id} className={styles.log}>
                  <div className={styles.avatar}>{l.role === 'user' ? 'User:' : 'OpenSand:'}</div>
                  <div className={l.answering ? '' : styles.streaming}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                      {l.answering ? answeringContent : l.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.inputWrapper}>
              <form onSubmit={onSubmit}>
                <IconButton onClick={handleLogClean} color="secondary" aria-label="refresh">
                  <RefreshIcon />
                </IconButton>
                <Input
                  autoFocus
                  fullWidth
                  placeholder="Please enter your question"
                  value={question}
                  onChange={e => {
                    setQuestion(e.target.value);
                  }}
                  inputProps={ariaLabel}
                />
                <Button type="submit" disabled={loading} variant="contained">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChatBot;
