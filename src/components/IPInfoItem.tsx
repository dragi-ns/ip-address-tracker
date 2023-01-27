interface IPInfoItemProps {
  label: string;
  value?: string;
}

export function IPInfoItem({ label, value }: IPInfoItemProps) {
  return (
    <li className="flex flex-col gap-1 flex-1 md:[&:not(:last-child)]:border-r-2 md:[&:not(:last-child)]:border-gray-100 md:[&:not(:last-child)]:border-opacity-25 md:[&:first-child]:pr-8 md:[&:last-child]:pl-8 md:[&:not(:first-child,:last-child)]:px-8 lg:gap-3">
      <span className="text-gray-100 text-xs font-bold uppercase tracking-widest">
        {label}
      </span>
      <span className="text-gray-200 text-xl font-medium lg:text-2xl xl:text-3xl">
        {value ? value : '-'}
      </span>
    </li>
  );
}
