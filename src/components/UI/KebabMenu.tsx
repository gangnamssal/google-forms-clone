/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function KebabMenu() {
  return (
    <div css={kebabMenuCss.menuButton}>
      <span> </span>
      <span> </span>
      <span> </span>
    </div>
  );
}

const kebabMenuCss = {
  menuButton: () =>
    css({
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      cursor: 'pointer',

      span: {
        width: '4px',
        height: '4px',
        backgroundColor: '#5F6368',
        borderRadius: '30px',
      },
    }),
};
