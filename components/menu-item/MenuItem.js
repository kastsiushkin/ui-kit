import React from 'react';
import { Link } from 'react-router';
import ClassNames from 'classnames';
import {utils} from '../utils';
import style from './style';

const Header = (props) => {
  const { button } = props;
  const classNames = ClassNames(utils.pickClassName(style, 'MenuItem'), {
    [utils.pickClassName(style, 'MenuItem--button')]: button
  }, props.className);

  return (
    <div className={classNames}>
      <Link to={props.to}>{props.title}</Link>
      <div className={utils.pickClassName(style, 'MenuItem__dropdown')}>
        {props.children}
      </div>
    </div>
  );
};

Header.propTypes = {
  button: React.PropTypes.bool,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired
};

Header.defaultProps = {
  button: false,
  className: ''
};

export default Header;
