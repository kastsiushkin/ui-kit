import React from 'react';
import Button from '../../components/button';

const ButtonTest = () => (
  <section>
    <h5>Buttons</h5>
    <p>Buttons showcase...</p>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button disabled>Disabled</Button>
    <Button href="#sasha" secondary>Link</Button>
    <Button secondary fullWidth>Full Width</Button>
  </section>
);

export default ButtonTest;
