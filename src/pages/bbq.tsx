import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import BbqForm from '../Form/BbqForm';

const Page = () => (
  <Main meta={<Meta title="Aanmelden BBQ 2024" description="" />}>
    <Content>
      <h1>Aanmelden BBQ 17 Juni</h1>
      <p>Ben jij erbij? Meld ja aan via onderstaand formulier</p>
      <BbqForm className={'pt-6'} />
    </Content>
  </Main>
);

export default Page;
