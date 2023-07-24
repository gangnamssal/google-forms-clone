/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Exit() {
  return (
    <div css={exitCss.container}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

const exitCss = {
  container: () =>
    css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '20px',
      height: '15px',
      cursor: 'pointer',

      span: {
        width: '100%',
        height: '2px',
        backgroundColor: '#777A7E',
        borderRadius: '10px',

        '&:first-of-type': {
          transform: 'rotateZ(46deg)',
          transformOrigin: '0% 0%',
        },

        '&:nth-of-type(2)': {
          transform: 'scaleY(0)',
        },

        '&:last-of-type': {
          transform: 'rotate(-46deg)',
          transformOrigin: '0% 100%',
        },
      },
    }),
};
