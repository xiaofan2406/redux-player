import React from 'react';
import classNames from 'classnames';
import './IconButton.css';


// TODO use classnames npm
function IconButton({ children, size, active, ...rest }) {
  const className = classNames({
    IconButton: true,
    iconbutton_active: active,
    iconbutton_disabled: rest.disabled
  });
  return (
    <button
      className={className}
      style={{
        fontSize: `${size * 6}px`
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  children: React.PropTypes.node,
  size: React.PropTypes.number,
  active: React.PropTypes.bool
};

IconButton.defaultProps = {
  size: 4,
  active: false
};


export default IconButton;
