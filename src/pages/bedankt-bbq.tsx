import React from 'react';
import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { GiThumbUp } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { RWebShare } from 'react-web-share';

const Bedankt = () => {
  const shareUrl = `https://boodschappencentrum.nl/werkenbij`;

  return (
    <Main meta={<Meta title="Contact" description="" />}>
      <Content>
        <div className={'flex justify-center items-center p-28'}>
          <motion.div
            animate={{
              scale: 10,
              rotateZ: 360,
            }}
          >
            <GiThumbUp />
          </motion.div>
        </div>
        <div className={'text-center'}>
          <h1>Gelukt!</h1>
          <p>Tot 26 september!</p>
        </div>
      </Content>
    </Main>
  );
};

export default Bedankt;
