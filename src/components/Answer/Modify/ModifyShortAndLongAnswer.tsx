/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import DivLine from '@components/UI/DivLine';

export default function ModifyShortAndLongAnswer({ text, width }: IModifyShortAndLongAnswerProps) {
  return (
    <>
      <input type='text' placeholder={`${text} 텍스트`} disabled css={modifyShortAndLongAnswerCss.input} />
      <DivLine isActive={false} widthLength={width} />
    </>
  );
}

interface IModifyShortAndLongAnswerProps {
  text: string;
  width: number;
}

const modifyShortAndLongAnswerCss = {
  input: () =>
    css({
      border: '0',
      backgroundColor: 'white',
      marginBottom: '8px',
      '&:focus': {
        outline: 'none',
      },
    }),
};
