
import React from 'react';
import styles from './index.module.css';
import ChatBot from '@/components/ChatBot';
import { Button } from '@mui/material';

const page = () => {
    return <div className={styles.chatWrapper}>
        <ChatBot />
    </div>;
};

export default page;
