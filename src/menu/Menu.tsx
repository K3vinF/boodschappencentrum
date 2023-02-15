import React from 'react';
import Link from 'next/link';

import classnames from 'classnames';
import styles from '../layout/header.module.scss';
import menuStyles from './menu.module.scss';
import { FiHome } from 'react-icons/fi';
import { RiContactsFill } from 'react-icons/ri';
import { FaWpforms } from 'react-icons/fa';

interface MenuProps {
  menuOpen: boolean;
}

const Menu = (props: MenuProps) => {
  return (
    <div
      className={classnames(styles.menu, { [`${styles.menuclosed}`]: !props.menuOpen })}
      key={'menu'}
    >
      <ul>
        <li>
          <Link href={'/'}>
            <a className={'flex items-center ' + menuStyles.item}>
              <FiHome /> Home
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/solliciteren'}>
            <a className={'flex items-center ' + menuStyles.item}>
              <FaWpforms /> Solliciteren
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/contact'}>
            <a className={'flex items-center ' + menuStyles.item}>
              <RiContactsFill /> Contact
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
