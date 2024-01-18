'use client';
import React, { useCallback, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Button, Input } from '@mui/material';
import { Log, Message } from './types.d';
import 'highlight.js/styles/vs2015.css';
import styles from './index.module.css';
import ask from './ask';

const ariaLabel = { 'aria-label': 'description' };

const enum Role {
  Assistant = 'assistant',
  User = 'user',
}

const ChatBot = () => {
  const [logs, setLogs] = useState<Log[]>(() => []);
  const [question, setQuestion] = useState('');
  const [answeringContent, setAnsweringContent] = useState('');

  const askQuestion = useCallback((messages: Message[]) => {
    setAnsweringContent('&ZeroWidthSpace;');

    let contents = '';
    ask(str => {
      if (!str) return;
      if (str === '[DONE]') {
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
      } catch {
        // Ignore
        // console.error(err);
      }

      contents += content;
      setAnsweringContent(contents);
    }, messages);
  }, []);

  const isAnswering = Boolean(answeringContent);

  const onSubmit = () => {
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

  return (
    <div className={styles.main}>
        <div className={styles.chat}>
          <div className={styles.logs}>
            {logs.map(l => (
              <div key={l.id} className={styles.log}>
                {/* @ts-ignore */}
                <div>{l.role === Role.User ? 'User:' : 'ChatGPT:'}</div>
                <div className={l.answering ? 'streaming' : ''}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                    {l.answering ? answeringContent : l.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.inputWrapper}>
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
            <Button variant="contained" onClick={onSubmit}>
              发送
            </Button>
          </div>
        </div>
    </div>
  );
};

export default ChatBot;
