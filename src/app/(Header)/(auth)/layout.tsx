import GetInTouch from '@/components/getInTouch';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <GetInTouch />
      {children}
    </div>
  );
};

export default layout;
