/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import { Theme, css, useTheme } from '@emotion/react';

import { RootState } from '@store/store';
import { Question } from '@store/formListSlice';
import CompleteDropdownAnswer from '@components/Answer/Complete/CompleteDropdownAnswer';
import CompleteShortAndLongAnswer from '@components/Answer/Complete/CompleteShortAndLongAnswer';
import CompleteMultipleAndCheckBoxAnswer from '@components/Answer/Complete/CompleteMultipleAndCheckBoxAnswer';

const completeContents = (title: string, isRequired: boolean, question: Question[]) => [
  { component: <CompleteShortAndLongAnswer title={title} category={'단답형'} isRequired={isRequired} /> },
  { component: <CompleteShortAndLongAnswer title={title} category={'장문형'}  isRequired={isRequired} /> },
  {
    component: (
      <CompleteMultipleAndCheckBoxAnswer title={title} category={'radio'} isRequired={isRequired} question={question} />
    ),
  },
  {
    component: (
      <CompleteMultipleAndCheckBoxAnswer
        title={title}
        category={'checkbox'}
        isRequired={isRequired}
        question={question}
      />
    ),
  },
  { component: <CompleteDropdownAnswer title={title} isRequired={isRequired} question={question} /> },
];

export default function BaseCompleteForm({ formListIndex }: IBaseCompleteForm) {
  const theme = useTheme();
  const formList = useSelector((state: RootState) => state.formList);
  const {
    type: { number },
    title,
    isRequired,
    question,
  } = formList[formListIndex];

  return (
    <div css={baseCompleteFormCss.container(theme)}>
      {completeContents(title, isRequired, question)[number].component}
    </div>
  );
}

interface IBaseCompleteForm {
  formListIndex: number;
}

const baseCompleteFormCss = {
  container: (theme: Theme) =>
    css({
      width: `${theme.size.contentsWidth}%`,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }),
};
