import React from 'react';
import ClassNames from 'classnames';
import {utils} from '../utils';
import style from './style';

class Button extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    fullWidth: React.PropTypes.bool,
    href: React.PropTypes.string,
    label: React.PropTypes.string,
    primary: React.PropTypes.bool,
    secondary: React.PropTypes.bool
  };

  static defaultProps = {
    className: '',
    primary: false,
    secondary: false,
    fullWidth: false
  };

  render () {
    const { children, className, fullWidth, href, label, primary, secondary, ...others} = this.props;
    const element = href ? 'a' : 'button';
    const type = primary ? 'primary' : secondary ? 'secondary' : 'primary';

    const classes = ClassNames(utils.pickClassName(style, 'Button'), {
      [utils.pickClassName(style, `Button--${type}`)]: type,
      [utils.pickClassName(style, 'Button--fullWidth')]: fullWidth
    }, className);

    const props = {
      ...others,
      href,
      ref: 'button',
      className: classes,
      disabled: this.props.disabled
    };

    return React.createElement(element, props,
      label,
      children
    );
  }
}

export default Button;
