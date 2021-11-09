import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
// import CustomForm from "../Form/Form";

const Solliciteren = () => (
  <Main meta={<Meta title="Contact" description="" />}>
    <Content>
      <h1>Contact</h1>
      <p>
        Heb je vragen? Loop even in de winkel binnen, en vraag bij de service balie naar een
        leidinggevende.
      </p>
      <p>
        Of je kunt even bellen naar <a href={'tel:+31181661624'}>0181 661 624</a>.
      </p>
      <p>
        <address>Boodschappencentrum Heenvliet, Toldam 5, 3218AM Heenvliet</address>
      </p>
    </Content>
  </Main>
);

export default Solliciteren;
