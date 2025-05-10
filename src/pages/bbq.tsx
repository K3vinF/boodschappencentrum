import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import BbqForm from '../Form/BbqForm';

const Page = () => (
  <Main meta={<Meta title="Aanmelden BBQ" description="" />}>
    <Content>
      <h1>Aanmelden BBQ Boodschappencentrum</h1>
      <p>Ben jij erbij? Meld ja aan via onderstaand formulier</p>
      <BbqForm className={'pt-6'} />
    </Content>
  </Main>
);

export default Page;
