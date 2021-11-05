import React, { ReactNode, useCallback, useState } from 'react';
import { Header } from '../layout/Header';
import Sticky from 'react-sticky-el';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { Menu } from '../menu/Menu';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [menuOpen, openMenu] = useState(false);
  const closeMenu = useCallback(() => {
    openMenu(false);
  }, [openMenu]);

  const router = useRouter();
  router.events?.on('routeChangeStart', closeMenu);

  return (
    <AnimateSharedLayout>
      <AnimatePresence key={router.asPath}>
        <Menu menuOpen={menuOpen} />
        <Sticky mode={'top'}>
          <Header menuOpen={menuOpen} closeMenu={closeMenu} openMenu={openMenu} />
        </Sticky>

        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {
              rotateX: 90,
              transformOrigin: 'top',
            },
            animate: {
              rotateX: 0,
            },
            exit: {
              rotateX: 90,
            },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <main className="antialiased w-full px-5 md:px-0">
            {props.meta}
            <div className="max-w-screen-md mx-auto">
              <div className="text-xl py-5">{props.children}</div>
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export { Main };
