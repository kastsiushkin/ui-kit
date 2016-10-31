import React from 'react';
import Header from '../components/header';
import MenuItem from '../components/menu-item';
import { Link } from 'react-router';

import Buttons from './components/button';
import Checkboxes from './components/checkbox';

import style from './style';

class Root extends React.Component {

  render () {
    return (
      <div className={style.app || 'app'}>
        <Header title="Virool UI-Kit">
          <MenuItem to="/tosasha" title="Menu 1" />
          <MenuItem to="/tosasha" title="Dropdown">
            <MenuItem to="/tosasha" title="Inner Menu 1" />
            <MenuItem to="/tosasha" title="Inner Menu 2" />
          </MenuItem>
          <MenuItem to="/tosasha" title="Menu 2" />
          <MenuItem to="/tosasha" title="Button" button />
        </Header>

        <Buttons />
        <Checkboxes />
      </div>
    );
  }
}

export default Root;
