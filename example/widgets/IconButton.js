import React from 'react';

import './IconButton.css';


// TODO use classnames npm
function IconButton({ children, size, active, disabled, ...rest }) {
  return (
    <span
      className={`IconButton${active ? ' button_active' : ''}`}
      style={{
        fontSize: `${size * 6}px`
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

IconButton.propTypes = {
  children: React.PropTypes.node,
  size: React.PropTypes.number,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool
};

IconButton.defaultProps = {
  size: 2,
  active: false,
  disabled: false
};


export default IconButton;
