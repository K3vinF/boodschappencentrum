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
      <Image src={props.img} width={200} height={200} />
      <div className={'font-display label bg-yellow text-black'}>{props.text}</div>
    </section>
  );
};

const animation1 = {
  visible: {
    scale: 1.1,
    rotateZ: -7,
    x: '-10%',
  },
  hidden: {
    scale: 0,
  },
};

const animation2 = {
  visible: {
    scale: 1.1,
    rotateZ: 3,
    x: '50%',
    y: '-2vh',
  },
  hidden: {
    scale: 0,
  },
};

const animation3 = {
  visible: {
    scale: 1.1,
    rotateZ: -3,
    x: '30%',
    y: '25vh',
  },
  hidden: {
    scale: 0,
  },
};

const Features = () => {
  return (
    <div className={styles.features}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation3}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Feature img={'/assets/images/foto3.jpg'} text={'Vakantiegeld'} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation1}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Feature img={'/assets/images/foto1.jpg'} text={'Goed salaris!'} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation2}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Feature img={'/assets/images/foto2.jpg'} text={'Toeslagen'} />
      </motion.div>
    </div>
  );
};

export { Features };
