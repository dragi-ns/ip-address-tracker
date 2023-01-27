import { useState, ChangeEvent, KeyboardEvent } from 'react';
import IconArrow from '../assets/icon-arrow.svg';
import IconSpin from '../assets/icon-spin.svg';

interface SearchInputProps {
  isLoading: boolean;
  error: string;
  onHandleSearch: (value: string) => void;
}

export function SearchInput({
  isLoading,
  error,
  onHandleSearch,
}: SearchInputProps) {
  const [value, setValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.trim());
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onHandleSearch(value);
    }
  };

  const handleButtonClick = () => {
    onHandleSearch(value);
  };

  return (
    <div className="flex mb-5 max-w-xl relative mx-auto md:mb-16">
      <input
        className="w-full text-gray-200 text-lg rounded-tl-2xl rounded-bl-2xl px-7 py-4 outline-none shadow-md"
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Search for any IP address or domain"
      />
      <button
        disabled={isLoading}
        onClick={handleButtonClick}
        className="bg-black w-20 rounded-tr-2xl rounded-br-2xl shadow-md hover:bg-gray-200 disabled:bg-gray-200"
        aria-label="search">
        <img
          className="inline-block"
          src={isLoading ? IconSpin : IconArrow}
          alt=""
        />
      </button>
      {error && (
        <p className="bg-red-900 text-white text-sm p-2 rounded-lg absolute z-[1001] -bottom-9 left-0 right-0">
          {error}
        </p>
      )}
    </div>
  );
}
