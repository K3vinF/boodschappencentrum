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
          <p>Je sollicitatie is ontvangen, we nemen zo snel mogelijk contact met je op.</p>
        </div>
        <div className={'text-center'}>
          <p>Ook interessant voor iemand anders?</p>
          <div className="mt-3 text-black">
            <RWebShare
              data={{
                text: 'Is een baantje bij Boodschappencentrum Heenvliet wat voor jou?',
                url: shareUrl,
                title: 'Werken bij Boodschappencentrum Heenvliet',
              }}
              closeText={'sluiten'}
              sites={['facebook', 'whatsapp', 'telegram', 'twitter']}
            >
              <button>Deel deze link!</button>
            </RWebShare>
          </div>
        </div>
      </Content>
    </Main>
  );
};

export default Bedankt;
