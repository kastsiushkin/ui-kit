import React, { PropTypes } from 'react';
import ClassNames from 'classnames';
import style from './style';

const Check = ({checked, children, onMouseDown}) => {
  const className = ClassNames(style.Check, {
    [style['Check--checked']]: checked
  });

  return <div onMouseDown={onMouseDown} className={className}>{children}</div>;
};

Check.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.any,
  onMouseDown: PropTypes.func
};

export default Check;
