import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import BbqForm from '../Form/BbqForm';

const Solliciteren = () => (
  <Main meta={<Meta title="Aanmelden medewerkers BBQ" description="" />}>
    <Content>
      <h1>Aanmelden medewerkers BBQ 24 September</h1>
      <p>Ben jij erbij? Meld ja aan via onderstaand formulier</p>
      <BbqForm className={'pt-6'} />
    </Content>
  </Main>
);

export default Solliciteren;
