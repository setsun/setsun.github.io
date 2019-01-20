import React from 'react';
import styled, { keyframes } from 'styled-components';

const animateUnderline = keyframes`
  from {
    width: 0
  }

  to {
    width: 35%;
  }
`;

const Heading = styled.h1`
  display: table;
  position: relative;
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 4em;
  overflow: hidden;

  :before {
    content: '';
    position: absolute;
    bottom: 2%;
    height: 2px;
    background: red;
    animation: 2s ${animateUnderline} ease-in-out;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
`;

export default Heading;