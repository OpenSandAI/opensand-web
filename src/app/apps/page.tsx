'use client'
import React, { FC } from 'react';
import AppsHome from '@/components/AppsHome';

interface AppsProps {
}

const apps: FC<AppsProps> = props => {

  return (
    <main>
      <AppsHome />
    </main>
  );
};

export default apps;
