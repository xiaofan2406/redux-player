import React from 'react';
import { css } from 'emotion';
import { fontSizes, theme } from 'styles';
import { APP_TITLE } from 'utils/constants';
import logo from 'assets/logo.svg';

const cssClass = css`
  display: flex;
  align-items: center;

  & .logo {
    animation: spin infinite 10s linear;
    height: 36px;
  }

  & .title {
    animation: fadeIn 2s ease;
    font-size: ${fontSizes.large}px;
    color: ${theme.inverseColor};
  }
`;

class Brand extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={cssClass}>
        <img src={logo} alt="logo" className="logo" />
        <span className="title">{APP_TITLE}</span>
      </div>
    );
  }
}

export { Brand as Component };

export default Brand;
