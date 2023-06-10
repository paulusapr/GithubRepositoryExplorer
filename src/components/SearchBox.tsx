import React from 'react';
import { useLayoutContext } from '.';

export const SearchBox = () => {
  const { search, onSearchChange } = useLayoutContext();

  return (
    <input id='search-input' placeholder='Enter Username' className='w-full outline-none border border-grey-0 rounded bg-grey-1 p-2' value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onSearchChange(e.target.value); }} />
  );
};
