/**
 * @see https://github.com/yuanyan/halogen/blob/master/src/RingLoader.js
 */
import React from 'react';
import { css } from 'emotion';

const cssClass = css`
  display: inline-block;
  & > div {
    width: 60px;
    height: 60px;
    position: relative;
    & div {
      width: 60px;
      height: 60px;
      border-style: solid;
      border-width: 6px;
      border-color: #00bcd4;
      opacity: 0.4;
      border-radius: 100%;
      position: absolute;
      top: 0;
      left: 0;
      perspective: 800px;
      animation-fill-mode: forwards;
    }
    & div:first-child {
      animation: loaderRigthRotate 2s 0s infinite linear;
    }
    & div:nth-child(2) {
      animation: loaderLeftRotate 2s 0s infinite linear;
    }
  }
`;

function Loader() {
  return (
    <div className={cssClass}>
      <div>
        <div />
        <div />
      </div>
    </div>
  );
}

export { Loader as Component };

export default Loader;
