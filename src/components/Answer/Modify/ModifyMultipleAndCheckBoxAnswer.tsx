/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';

import Exit from '@components/UI/Exit';
import type { RootState } from '@store/store';
import handleAddQuestion from '@/helper/handleAddQuestion';
import handleDeleteQuestion from '@/helper/handleDeleteQuestion';
import handleReplaceQuestion from '@/helper/handleReplaceQuestion';

export default function ModifyMultipleAndCheckBoxAnswer({
  type,
  formListIndex,
}: IModifyMultipleAndCheckBoxAnswerProps) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const formList = useSelector((state: RootState) => state.formList);
  const { id, question } = formList[formListIndex];

  return (
    <>
      {question?.map((QUESTION, index) => {
        return (
          <div key={`${index} / ${id}`} css={modifyMultipleAndCheckBoxAnswerCss.inputContainer}>
            <div css={{ display: 'flex', width: '100%' }}>
              <input
                type={`${type}`}
                css={modifyMultipleAndCheckBoxAnswerCss.radioORcheckBox}
                onClick={(e) => e.preventDefault()}
              />
              <input
                type='text'
                placeholder={QUESTION.value}
                value={QUESTION.value}
                onChange={(e) => dispatch(handleReplaceQuestion(e, question, formList, formListIndex, index))}
                css={modifyMultipleAndCheckBoxAnswerCss.input(theme)}
              />
            </div>

            {question.length === 1 ? null : (
              <div onClick={() => dispatch(handleDeleteQuestion(question, formList, formListIndex, index))}>
                <Exit />
              </div>
            )}
          </div>
        );
      })}

      <div
        css={modifyMultipleAndCheckBoxAnswerCss.addInputContainer}
        onClick={() => dispatch(handleAddQuestion(question, formList, formListIndex))}>
        <input
          type={`${type}`}
          css={modifyMultipleAndCheckBoxAnswerCss.radioORcheckBox}
          onClick={(e) => e.preventDefault()}
        />
        <input
          type='text'
          placeholder='옵션 추가 또는 "기타"추가'
          readOnly
          css={modifyMultipleAndCheckBoxAnswerCss.addInput}
        />
      </div>
    </>
  );
}

interface IModifyMultipleAndCheckBoxAnswerProps {
  type: string;
  formListIndex: number;
}

const modifyMultipleAndCheckBoxAnswerCss = {
  inputContainer: () =>
    css({
      display: 'flex',
      alignContent: 'center',
    }),

  radioORcheckBox: () =>
    css({
      width: '18px',
      height: '18px',
      border: `2px solid #BDBDBD`,
      borderRadius: '100%',
    }),

  input: (theme: Theme) =>
    css({
      width: '80%',
      border: '0',
      paddingTop: '6px',
      paddingBottom: '5px',
      marginBottom: '20px',
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
      '&:focus': {
        outline: 'none',
      },
    }),
};
