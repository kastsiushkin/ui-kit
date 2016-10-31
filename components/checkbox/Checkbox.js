import React from 'react';
import ClassNames from 'classnames';
import {utils} from '../utils';
import Check from './Check';
import style from './style';

class Checkbox extends React.Component {
  static propTypes = {
    checked: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    label: React.PropTypes.any,
    onChange: React.PropTypes.func
  };

  static defaultProps = {
    checked: false,
    className: '',
    disabled: false
  };

  handleToggle = (event) => {
    if (!this.props.disabled && this.props.onChange) {
      this.props.onChange(!this.props.checked, event);
    }
  };

  render () {
    const { onChange, ...others } = this.props; //eslint-disable-line no-unused-vars
    const className = ClassNames(utils.pickClassName(style, 'Checkbox'), {
      [utils.pickClassName(style, 'Checkbox--disabled')]: this.props.disabled
    }, this.props.className);

    return (
      <label className={className}>
        <input
          {...others}
          className={utils.pickClassName(style, 'Checkbox__input')}
          onClick={this.handleToggle}
          readOnly
          ref='input'
          type='checkbox'
        />
        <Check checked={this.props.checked} disabled={this.props.disabled}/>
        {this.props.label ? <span data-react-toolbox='label' className={utils.pickClassName(style, 'Checkbox__text')}>{this.props.label}</span> : null}
      </label>
    );
  }
}

export default Checkbox;
