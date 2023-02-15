import React from 'react';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { Features } from '../decor/Features';
import Sticky from 'react-sticky-el';
import { Footer } from '../layout/Footer';
import Image from 'next/image';
import styles from '../layout/logos.module.scss';

const Werkenbij = () => (
  <>
    <Main
      meta={
        <Meta title="Werken bij Boodschappencentrum Heenvliet" description={Config.description} />
      }
    >
      <Features />
      <h2>Lekker bijverdienen?</h2>
      <p>
        Dat wil je toch?
        <br />
        Voor onze winkels zijn we op zoek naar vulploeg medewerkers en parttimers.
      </p>

      <p>
        Werk je op een contract van maximaal 12 uur per week, dan krijg je een all-in uurloon. Bij
        je salaris krijg je een opslag waarin vakantiegeld en ATV gelijk worden uitbetaald.
        <br />
        Zo heb je één keer een lekker hoog uurloon.
      </p>
      <p>Lijkt het je wat of heb je vragen? Vul het sollicitatie formulier in!</p>

      <section className={styles.logos}>
        <div className={styles.ah}>
          <Image src={'/assets/images/ah.svg'} width={150} height={150} alt={''} />
        </div>
        <div className={styles.etos}>
          <Image src={'/assets/images/etos.svg'} width={150} height={150} alt={''} />
        </div>
        <div className={styles.gall}>
          <Image src={'/assets/images/gall.svg'} width={200} height={50} alt={''} />
        </div>
        <div className={styles.primera}>
          <Image src={'/assets/images/primera.svg'} width={200} height={50} alt={''} />
        </div>
      </section>
    </Main>
    <Sticky mode={'bottom'}>
      <Footer />
    </Sticky>
  </>
);

export default Werkenbij;
