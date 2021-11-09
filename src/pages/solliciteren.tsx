import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import CustomForm from '../Form/Form';

const Solliciteren = () => (
  <Main meta={<Meta title="Werken bij het Boodschappencentrum Heenvliet" description="" />}>
    <Content>
      <p>Wil jij werken in een van de winkels van het Boodschappencentrum Heenvliet?</p>
      <p>Vul onderstaand formulier in, en wij nemen contact met je op!</p>
      <CustomForm className={'pt-6'} />
    </Content>
  </Main>
);

export default Solliciteren;
