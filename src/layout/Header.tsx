import React, { ReactNode, useCallback, useState } from 'react';
import Drawer from 'rc-drawer';
import { Twirl as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import './header.module.scss';
import { useRouter } from 'next/router';
import styles from './header.module.scss';

type INavbarProps = {
  children?: ReactNode;
};

const Header = (props: INavbarProps) => {
  const [menuOpen, openMenu] = useState(false);

  const closeMenu = useCallback(() => {
    openMenu(false);
  }, [menuOpen, openMenu]);

  const router = useRouter();
  router.events?.on('routeChangeStart', closeMenu);

  return (
    <>
      <header className={'bg-gray-200 p-4 md:p-8 grid justify-items-stretch text-white'}>
        {props.children}
        <span className={'text-center ' + styles.label}>Werken bij</span>
        <div className={'flex pt-4'}>
          <Link href={'/'}>
            <a>
              <img
                src={'/assets/boodschappencentrumheenvliet.svg'}
                alt={'Boodsschappencentrum Heenvliet'}
                width={460}
                height={98}
              />
            </a>
          </Link>
          <Hamburger toggled={menuOpen} toggle={openMenu} />
        </div>
      </header>
      <Drawer open={menuOpen}>
        <Hamburger toggled={menuOpen} toggle={closeMenu} />
        <ul>
          <li>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={'/solliciteren'}>
              <a>Soliciteren</a>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export { Header };
