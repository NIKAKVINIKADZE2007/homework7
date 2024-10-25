'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../assets/index';
import { log } from 'console';
const Header = () => {
  const pathname = usePathname();

  const Links = [
    { title: 'home', href: '/' },
    { title: 'About', href: '/About' },
    { title: 'How it Works', href: '/How-It-Works' },
    { title: 'Services', href: '/Services' },
  ];

  return (
    <header className='w-full'>
      <div className='max-w-[1216px] mx-auto w-full flex items-center justify-between'>
        <Link href={'/'}>
          <Image alt='logo' src={logo} />
        </Link>

        <ul className='max-w-[499px] h-[68px] bg-white pl-[56px] flex items-center w-full justify-between pr-[42px]'>
          {Links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.title}
                className={
                  isActive
                    ? 'text-[#252432] font-bold text-[16px]'
                    : 'text-[#8987A1] font-normal'
                }
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center w-[201px]'>
          <Link href='/sign-in' className='text-[#8987A1] opacity-80'>
            Sign in
          </Link>
          <Link
            href='/log-in'
            className='ml-[19px] block max-w-[132px] w-full h-[48px] bg-[#4E47FF] text-center pt-[12px] rounded-[10px]  text-white font-bold '
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
