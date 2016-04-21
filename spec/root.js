import React from 'react';
import Header from '../components/header';

import Buttons from './components/button';
import Checkboxes from './components/checkbox';

import style from './style';

const Root = () => (
  <div className={style.app}>
    <Header title="Virool UI-Kit" />

    <Buttons />
    <Checkboxes />
  </div>
);

export default Root;
