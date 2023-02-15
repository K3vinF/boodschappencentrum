import React from 'react';
import styles from './features.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMedia } from 'react-use';

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

const Features = () => {
  const interval = 0.25;

  let animation1, animation2, animation3, animation4, animation5;

  animation1 = {
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

  animation2 = {
    visible: {
      scale: 1.1,
      rotateZ: 3,
      x: '50em',
      y: '43em',
    },
    hidden: {
      scale: 0,
    },
  };

  animation3 = {
    visible: {
      scale: 1,
      rotateZ: -3,
      x: '-4em',
      y: '0',
    },
    hidden: {
      scale: 0,
    },
  };

  animation4 = {
    visible: {
      scale: 0.85,
      rotateZ: -3,
      x: '26em',
      y: '32em',
    },
  };

  animation5 = {
    visible: {
      scale: 1.1,
      rotateZ: -3,
      x: '50em',
      y: '-3vw',
    },
    hidden: {
      scale: 0,
    },
  };

  const isWide = useMedia('(min-width: 800px)');

  if (isWide) {
    animation1.visible.x = '0';
    animation2.visible.x = '22%';
    animation3.visible.x = '44%';
    animation4.visible.x = '68%';
    animation5.visible.x = '93%';

    animation1.visible.y = '0';
    animation2.visible.y = '0';
    animation3.visible.y = '0';
    animation4.visible.y = '0';
    animation5.visible.y = '0';

    animation1.visible.scale = 0.6;
    animation2.visible.scale = 0.55;
    animation3.visible.scale = 0.6;
    animation4.visible.scale = 0.55;
    animation5.visible.scale = 0.6;
  }

  const baseStyle = {
    originX: 0,
    orderY: 0,
  };

  return (
    <div className={styles.features}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation1}
        style={baseStyle}
        transition={{ duration: 0.5, delay: interval }}
      >
        <Feature img={'/assets/images/foto3.jpg'} text={'Vakantiegeld'} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation2}
        style={baseStyle}
        transition={{ duration: 0.5, delay: 2 * interval }}
      >
        <Feature img={'/assets/images/foto1.jpg'} text={"Leuke collega's"} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation3}
        style={baseStyle}
        transition={{ duration: 0.5, delay: 3 * interval }}
      >
        <Feature img={'/assets/images/foto2.jpg'} text={'Goed salaris!'} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation4}
        style={baseStyle}
        transition={{ duration: 0.5, delay: 4 * interval }}
      >
        <Feature img={'/assets/images/foto4.jpg'} text={'Leuk werk'} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation5}
        style={baseStyle}
        transition={{ duration: 0.5, delay: 5 * interval }}
      >
        <Feature img={'/assets/images/foto5.jpg'} text={'Toeslagen'} />
      </motion.div>
    </div>
  );
};

export { Features };
