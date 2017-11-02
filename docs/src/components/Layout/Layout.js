import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { theme, variables } from 'styles';
import 'styles/reset.css';
import 'styles/animation.css';

import Brand from './Brand';
import Navigation from './Navigation';

const cssClass = css`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize}px;

  & .header {
    height: ${variables.headerHeight}px;
    background-color: ${theme.bgColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${variables.headerHeight}px);
  }
`;

function Layout({ children }) {
  return (
    <div className={cssClass}>
      <div className="header">
        <Brand />
        <Navigation />
      </div>
      <div className="main">{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export { Layout as Component };

export default Layout;
