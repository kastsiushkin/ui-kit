import React, { PropTypes } from 'react';
import ClassNames from 'classnames';
import {utils} from '../utils';
import style from './style';

const Check = ({checked, children, onMouseDown}) => {
  const className = ClassNames(utils.pickClassName(style, 'Check'), {
    [utils.pickClassName(style, 'Check--checked')]: checked
  });

  return <div onMouseDown={onMouseDown} className={className}>{children}</div>;
};

Check.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.any,
  onMouseDown: PropTypes.func
};

export default Check;
