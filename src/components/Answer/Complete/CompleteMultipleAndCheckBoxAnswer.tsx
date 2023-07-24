/** @jsxImportSource @emotion/react */
import { Theme, css, useTheme } from '@emotion/react';

import { Question } from '@store/formListSlice';

export default function CompleteMultipleAndCheckBoxAnswer({
  title,
  category,
  isRequired,
  question,
}: IMultipleAndCheckBoxAnswer) {
  const theme = useTheme();

  return (
    <div css={completeMultipleAndCheckBoxAnswerCss.container}>
      <div css={completeMultipleAndCheckBoxAnswerCss.questionContainer}>
        <div css={completeMultipleAndCheckBoxAnswerCss.question}>{title}</div>
        <span css={completeMultipleAndCheckBoxAnswerCss.required(theme, isRequired)}>*</span>
      </div>

      {question.map((QUESTION, index) => {
        return (
          <div key={`${QUESTION.value} / ${index}`} css={completeMultipleAndCheckBoxAnswerCss.answer}>
            <input type={category} name='group' />
            <p css={completeMultipleAndCheckBoxAnswerCss.answerValue}>{QUESTION.value}</p>
          </div>
        );
      })}
    </div>
  );
}

interface IMultipleAndCheckBoxAnswer {
  title: string;
  category: string;
  isRequired: boolean;
  question: Question[];
}

const completeMultipleAndCheckBoxAnswerCss = {
  container: () =>
    css({
      display: 'flex',
      flexDirection: 'column',
      width: `100%`,
    }),

  questionContainer: () =>
    css({
      display: 'flex',
      margin: '20px 0',
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

  answer: () =>
    css({
      display: 'flex',
      marginBottom: '20px',
    }),

  answerValue: () =>
    css({
      margin: '0',
    }),
};
