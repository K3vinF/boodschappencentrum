import React, { ReactNode } from 'react';
// import { Config } from '../utils/Config';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import Sticky from 'react-sticky-el';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  return (
    <AnimateSharedLayout>
      <AnimatePresence key={router.asPath}>
        <Sticky>
          <Header />
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
          <main className="antialiased w-full px-3 md:px-0">
            {props.meta}
            <div className="max-w-screen-md mx-auto">
              <div className="text-xl py-5">{props.children}</div>
            </div>
          </main>
        </motion.div>
        <Sticky mode={'bottom'}>
          <Footer />
        </Sticky>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export { Main };
