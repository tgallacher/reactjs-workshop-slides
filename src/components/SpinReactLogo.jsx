/** @jsx jsx */
import { jsx } from 'theme-ui';
import { keyframes } from '@emotion/core';

const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(359deg);
}
`;

const SpinReactLogo = props => (
  <img
    {...props}
    alt="ReactJS logo"
    sx={{
      display: 'block',
      animation: `${spin} 4s infinite linear`,
      my: 0,
      mx: 'auto',
      p: 0,
      width: props.width ? props.width : '128px',
      height: props.height ? props.height : '128px',
    }}
  />
);

export default SpinReactLogo;
