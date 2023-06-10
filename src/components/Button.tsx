import React from 'react';

type ButtonProps = {
  onClick: () => void;
};

export const Button = (props: ButtonProps) => {
  const { onClick } = props;  

  return (
    <button id='button-search' type='button' onClick={onClick} className='p-2 text-white-0 outline-none bg-blue-2 w-full rounded'>Search</button>
  );
};
