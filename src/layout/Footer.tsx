import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className={'bg-gray-200 p-4 md:p-8 flex text-white font-display'}>
        <Link href={'/solliciteren'}>
          <a className={'bg-yellow text-black p-3 w-100'}>Direct Solliciteren</a>
        </Link>
      </footer>
    </>
  );
};

export { Footer };
