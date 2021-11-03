import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
// import CustomForm from "../Form/Form";

const Solliciteren = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <h1>Contact</h1>
      <p>Heb je vragen? Lopen even in de winkel binnen, en vraag naar Tom of Thierry?</p>
      <address>Boodschappencentrum Heenvliet Toldam 1 3218AM Heenvliet</address>
    </Content>
  </Main>
);

export default Solliciteren;
