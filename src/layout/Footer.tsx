import React from 'react';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className={'bg-gray-200 p-3 md:p-8 flex text-white font-display drop-shadow-xl'}>
        <Link href={'/solliciteren'}>
          <a
            className={
              'bg-green rounded text-white text-2xl p-2 w-full flex flex-row items-center justify-center'
            }
          >
            <AiOutlineCheck className={'mr-4 -ml-5'} />
            <span>Solliciteer direct!</span>
          </a>
        </Link>
      </footer>
    </>
  );
};

export { Footer };
