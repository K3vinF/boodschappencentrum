import React from 'react';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { Features } from '../decor/Features';
import Sticky from 'react-sticky-el';
import { Footer } from '../layout/Footer';

const Index = () => (
  <>
    <Main
      meta={
        <Meta
          title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
          description={Config.description}
        />
      }
    >
      <Features />
      <h2>Lekker bijverdienen?</h2>
      <p>
        Je verdient goed bij. Werk je op een contract van maximaal 12 uur per week, dan krijg je een
        all-in uurloon. Zo hoef je nooit te wachten op vakantiegeld en winstuitkering. Je krijgt dit
        namelijk direct met je salaris uitbetaald. Ook je vrije dagen worden meteen omgerekend in
        extra geld. Zo heb je één keer een lekker hoog uurloon.
      </p>
      <p>Voor onze winkels zijn we op zoek naar medewerkers die ...</p>
      <p>Lijkt het je wat of heb je vragen? Vul het sollicitatie formulier in!</p>
    </Main>
    <Sticky mode={'bottom'}>
      <Footer />
    </Sticky>
  </>
);

export default Index;
