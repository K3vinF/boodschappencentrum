import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import BrunchForm from '../Form/BrunchForm';

const Page = () => (
  <Main meta={<Meta title="Aanmelden Brunch" description="" />}>
    <Content>
      <h1>Aanmelden Brunch 24 November</h1>
      <p>Ben jij erbij? Meld ja aan via onderstaand formulier</p>
      <BrunchForm className={'pt-6'} />
    </Content>
  </Main>
);

export default Page;
