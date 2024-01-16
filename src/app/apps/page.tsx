import React, { FC } from 'react';
import AppsHome from '@/components/AppsHome';

interface AppsProps {
}

const Apps: FC<AppsProps> = props => {

  return (
    <main>
      <AppsHome />
    </main>
  );
};

export default Apps;
