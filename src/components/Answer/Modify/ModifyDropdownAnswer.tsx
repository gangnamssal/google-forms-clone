/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';

import Exit from '@components/UI/Exit';
import type { RootState } from '@store/store';
import handleAddQuestion from '@/helper/handleAddQuestion';
import handleDeleteQuestion from '@/helper/handleDeleteQuestion';
import handleReplaceQuestion from '@/helper/handleReplaceQuestion';

export default function ModifyDropdownAnswer({ formListIndex }: IModifyDropdownAnswerProps) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const formList = useSelector((state: RootState) => state.formList);
  const { id, question } = formList[formListIndex];

  return (
    <>
      {question.map((QUESTION, index) => {
        return (
          <div key={`${index} / ${id}`} css={modifyDropdownCss.inputContainer}>
            <div css={modifyDropdownCss.inputBox}>
              <p css={modifyDropdownCss.index}>{index + 1}</p>
              <input
                type='text'
                placeholder={`${QUESTION.value}`}
                value={QUESTION.value}
                onChange={(e) => dispatch(handleReplaceQuestion(e, question, formList, formListIndex, index))}
                css={modifyDropdownCss.input(theme)}
              />
            </div>

            <div onClick={() => dispatch(handleDeleteQuestion(question, formList, formListIndex, index))}>
              <Exit />
            </div>
          </div>
        );
      })}

      <div
        css={modifyDropdownCss.addInputContainer}
        onClick={() => dispatch(handleAddQuestion(question, formList, formListIndex))}>
        <p css={modifyDropdownCss.index}>{question.length + 1}</p>
        <input type='text' placeholder='옵션 추가 또는 "기타"추가' readOnly css={modifyDropdownCss.addInput} />
      </div>
    </>
  );
}

interface IModifyDropdownAnswerProps {
  formListIndex: number;
}

const modifyDropdownCss = {
  inputContainer: () =>
    css({
      display: 'flex',
      alignContent: 'center',
    }),

  inputBox: () =>
    css({
      display: 'flex',
      width: '100%',
    }),

  index: () =>
    css({
      margin: '0',
      fontSize: '1rem',
    }),

  input: (theme: Theme) =>
    css({
      width: '80%',
      border: '0',
      paddingTop: '6px',
      paddingBottom: '5px',
      marginBottom: '20px',
      marginLeft: '15px',
      '&:hover': {
        borderBottom: '1px solid #BDBDBD',
      },
      '&:focus': {
        outline: 'none',
        borderBottom: `2px solid ${theme.colors.purple}`,
      },
    }),

  addInputContainer: () =>
    css({
      display: 'flex',
      alignItems: 'center',
    }),

  addInput: () =>
    css({
      width: '80%',
      border: '0',
      paddingTop: '6px',
      marginLeft: '15px',
      '&:focus': {
        outline: 'none',
      },
    }),
};
