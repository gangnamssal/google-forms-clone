/** @jsxImportSource @emotion/react */
import { Theme, css, useTheme } from '@emotion/react';

import DivLine from '@components/UI/DivLine';

export default function ShortAndLongAnswer({ category }: IShortAndLongAnswer) {
  const theme = useTheme();

  return (
    <div css={completeShortAnswerCss.container(theme)}>
      <div css={completeShortAnswerCss.questionContainer}>
        <div css={completeShortAnswerCss.question}>질문</div>
        <span css={completeShortAnswerCss.required(theme)}>*</span>
      </div>

      <input css={completeShortAnswerCss.answer} disabled placeholder={`${category} 텍스트`} />
      <DivLine isActive={false} widthLength={category === '단답형' ? 50 : 80} />
    </div>
  );
}

interface IShortAndLongAnswer {
  category: string;
}

const completeShortAnswerCss = {
  container: (theme: Theme) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      width: `${theme.size.contentsWidth}%`,
    }),

  questionContainer: () =>
    css({
      display: 'flex',
    }),

  question: () =>
    css({
      width: 'auto',
      maxWidth: '92%',
      border: '0',
      backgroundColor: 'white',
      color: 'black',
      margin: '0 7px 30px 0',
      fontSize: '12pt',
      letterSpacing: '0',
      wordBreak: 'break-all',
      lineHeight: '24px',
    }),

  required: (theme: Theme) =>
    css({
      color: `${theme.colors.red}`,
    }),

  answer: () =>
    css({
      border: '0',
      backgroundColor: 'white',
      marginBottom: '10px',
      '&:focus': {
        outline: 'none',
      },
    }),
};
