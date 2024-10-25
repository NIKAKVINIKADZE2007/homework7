import Main from '@/components/main';
import React from 'react';

const Services = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Main />
      {children}
    </>
  );
};

export default Services;
