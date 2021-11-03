import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import CustomForm from '../Form/Form';

const Solliciteren = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>Wil jij komen werken bij een van de winkels in het Boodschappencentrum Heenvliet?</p>
      <p>Vul onderstaand formulier in, en wij nemen contact met je op!</p>
      <CustomForm className={'pt-6'} />
    </Content>
  </Main>
);

export default Solliciteren;
