import React from 'react';
import ClassNames from 'classnames';
import style from './style';

const Header = (props) => {
  const classNames = ClassNames(style.Header, {
  }, props.className);

  return (
    <header className={classNames}>
      <div className={style.Header__container}>
        <div className={style.Header__logoContainer}>
          <div className={style.Header__logo}>
            <img src="./images/logo.png" />
          </div>
          <span className={style.Header__title}>{props.title}</span>
        </div>
        <div className={style.Header__nav}>
          {props.children}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  title: React.PropTypes.string
};

Header.defaultProps = {
  className: '',
  title: ''
};

export default Header;
