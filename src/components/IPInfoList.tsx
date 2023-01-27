import { ReactNode } from 'react';

interface IPInfoListProps {
  children: ReactNode;
}

export function IPInfoList({ children }: IPInfoListProps) {
  return (
    <ul className="flex flex-col gap-y-5 bg-white rounded-2xl p-6 absolute z-[1000] w-[calc(100%-3rem)] shadow-md max-w-6xl left-1/2 -translate-x-1/2 md:flex-row md:text-left md:bottom-0 md:translate-y-1/2 lg:p-10">
      {children}
    </ul>
  );
}
