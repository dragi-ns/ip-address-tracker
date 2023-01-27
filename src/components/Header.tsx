import { ReactNode } from 'react';

import PatternBg from '../assets/pattern-bg.png';

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <div
      className="min-h-[20rem] bg-no-repeat bg-cover text-center px-6 py-7 shadow-md relative "
      style={{ backgroundImage: `url(${PatternBg})` }}>
      <div className="text-white mb-5 md:mb-8">
        <h1 className="text-2xl font-medium mb-3 md:text-3xl">
          IP Address Tracker
        </h1>
        <p className="text-xs">
          Challenge by{' '}
          <a
            className="underline"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank">
            Frontend Mentor
          </a>{' '}
          . Coded by{' '}
          <a className="underline" href="https://github.com/dragi-ns">
            dragi-ns
          </a>
          .
        </p>
      </div>
      {children}
    </div>
  );
}
