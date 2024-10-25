'use client';

import { usePathname } from 'next/navigation';

const Main = () => {
  const path = usePathname().replace('/', '').replaceAll('-', ' ');
  return (
    <div className='max-w-[764px] h-[146px] mx-auto mt-[148px] text-center text-[#252432] font-bold text-[73.34px]'>
      Awesome UI Dark Template {path} Page
    </div>
  );
};

export default Main;
