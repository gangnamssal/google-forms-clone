/** @jsxImportSource @emotion/react */
import { Theme, css, useTheme } from '@emotion/react';

import DivLine from '@components/UI/DivLine';

export default function CompleteShortAndLongAnswer({ title, category, isRequired }: IShortAndLongAnswer) {
  const theme = useTheme();

  return (
    <div css={completeShortAndLongAnswerCss.container}>
      <div css={completeShortAndLongAnswerCss.questionContainer}>
        <div css={completeShortAndLongAnswerCss.question}>{title}</div>
        <span css={completeShortAndLongAnswerCss.required(theme, isRequired)}>*</span>
      </div>

      <input css={completeShortAndLongAnswerCss.answer} placeholder='내 답변' />
      <DivLine isActive={false} widthLength={category === '단답형' ? 50 : 100} />
    </div>
  );
}

interface IShortAndLongAnswer {
  title: string;
  category: string;
  isRequired: boolean;
}

const completeShortAndLongAnswerCss = {
  container: () =>
    css({
      display: 'flex',
      flexDirection: 'column',
      width: `100%`,
    }),

  questionContainer: () =>
    css({
      display: 'flex',
      fontWeight: '900',
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

  required: (theme: Theme, isRequired: boolean) =>
    css({
      color: `${isRequired ? theme.colors.red : 'white'}`,
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
