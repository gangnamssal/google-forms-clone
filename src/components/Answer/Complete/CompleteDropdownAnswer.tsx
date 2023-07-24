/** @jsxImportSource @emotion/react */
import { Theme, css, useTheme } from '@emotion/react';

import { Question } from '@store/formListSlice';

export default function CompleteDropdownAnswer({ title, isRequired, question }: ICompleteDropdownAnswer) {
  const theme = useTheme();

  return (
    <div css={completeDropdownAnswerCss.container}>
      <div css={completeDropdownAnswerCss.questionContainer}>
        <div css={completeDropdownAnswerCss.question}>{title}</div>
        <span css={completeDropdownAnswerCss.required(theme, isRequired)}>*</span>
      </div>

      <select css={completeDropdownAnswerCss.select(theme)}>
        {question.map((QUESTION, index) => {
          return (
            <option key={`${QUESTION.value} / ${index}`} value={QUESTION.value}>
              {QUESTION.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}

interface ICompleteDropdownAnswer {
  title: string;
  isRequired: boolean;
  question: Question[];
}

const completeDropdownAnswerCss = {
  container: () =>
    css({
      display: 'flex',
      flexDirection: 'column',
      width: `100%`,
    }),

  questionContainer: () =>
    css({
      display: 'flex',
      margin: '10px 0',
      fontWeight: '900',
    }),

  question: () =>
    css({
      width: 'auto',
      maxWidth: '92%',
      border: '0',
      backgroundColor: 'white',
      color: 'black',
      margin: '0 7px 10px 0',
      fontSize: '12pt',
      letterSpacing: '0',
      wordBreak: 'break-all',
      lineHeight: '24px',
    }),

  required: (theme: Theme, isRequired: boolean) =>
    css({
      color: `${isRequired ? theme.colors.red : 'white'}`,
    }),

  select: (theme: Theme) =>
    css({
      width: '30%',
      height: '7vh',
      borderRadius: '5px',
      border: `2px solid ${theme.colors.borderColor}`,
    }),
};
