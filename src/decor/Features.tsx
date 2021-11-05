import React from 'react';
import styles from './features.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeatureProps {
  img: string;
  text: string;
}

const Feature = (props: FeatureProps) => {
  return (
    <section className={styles.feature}>
      <Image src={props.img} width={200} height={200} alt={''} />
      <div className={'font-display label bg-blue-normal text-white'}>{props.text}</div>
    </section>
  );
};

const animation1 = {
  visible: {
    scale: 1.1,
    rotateZ: 1,
    x: '-2%',
    y: '40vw',
  },
  hidden: {
    scale: 0,
  },
};

const animation2 = {
  visible: {
    scale: 1.1,
    rotateZ: 3,
    x: '53%',
    y: '40vw',
  },
  hidden: {
    scale: 0,
  },
};

const animation3 = {
  visible: {
    scale: 1,
    rotateZ: -3,
    x: '-4%',
    y: '0',
  },
  hidden: {
    scale: 0,
  },
};

const animation4 = {
  visible: {
    scale: 0.8,
    rotateZ: -3,
    x: '20%',
    y: '32vw',
  },
  hidden: {
    scale: 0,
  },
};

const animation5 = {
  visible: {
    scale: 1.1,
    rotateZ: -3,
    x: '55%',
    y: '-3vw',
  },
  hidden: {
    scale: 0,
  },
};

const Features = () => {
  const interval = 0.25;

  return (
    <div className={styles.features}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation1}
        transition={{ duration: 0.5, delay: interval }}
      >
        <Feature img={'/assets/images/foto3.jpg'} text={'Vakantiegeld'} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation2}
        transition={{ duration: 0.5, delay: 2 * interval }}
      >
        <Feature img={'/assets/images/foto1.jpg'} text={"Leuke collega's"} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation3}
        transition={{ duration: 0.5, delay: 3 * interval }}
      >
        <Feature img={'/assets/images/foto2.jpg'} text={'Goed salaris!'} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation4}
        transition={{ duration: 0.5, delay: 4 * interval }}
      >
        <Feature img={'/assets/images/foto4.jpg'} text={'Leuk werk'} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation5}
        transition={{ duration: 0.5, delay: 5 * interval }}
      >
        <Feature img={'/assets/images/foto5.jpg'} text={'Toeslagen'} />
      </motion.div>
    </div>
  );
};

export { Features };
