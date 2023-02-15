import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import './header.module.scss';

import styles from './header.module.scss';

type INavbarProps = {
  children?: ReactNode;
  menuOpen: boolean;
  openMenu: Dispatch<SetStateAction<boolean>>;
  closeMenu: Dispatch<SetStateAction<boolean>>;
};

const Header = (props: INavbarProps) => {
  return (
    <>
      <header
        className={'bg-gray-200 p-4 md:p-8 grid justify-items-stretch drop-shadow-xl text-white'}
      >
        {props.children}

        <div className={'flex items-start'}>
          <Link href={'/'}>
            <a className={'flex flex-col md:flex-row items-center mr-8'}>
              <span className={'text-center ' + styles.label}>Werken bij</span>
              <img
                className={styles.logo}
                src={'/assets/boodschappencentrumheenvliet.svg'}
                alt={'Boodsschappencentrum Heenvliet'}
                width={460}
                height={98}
              />
            </a>
          </Link>
          <div className={'p4 ml-auto'}>
            <Hamburger toggled={props.menuOpen} toggle={props.openMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
