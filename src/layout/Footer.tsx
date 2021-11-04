import React from 'react';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className={'bg-gray-200 p-4 md:p-8 flex text-white font-display drop-shadow-xl'}>
        <Link href={'/solliciteren'}>
          <a className={'bg-green rounded text-white text-2xl p-3 w-full flex items-center'}>
            <AiOutlineCheck className={'mx-4'} />
            Direct Solliciteren
          </a>
        </Link>
      </footer>
    </>
  );
};

export { Footer };
