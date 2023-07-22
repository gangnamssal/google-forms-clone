/** @jsxImportSource @emotion/react */
import { useCallback, useState } from 'react';
import { css, Theme, useTheme } from '@emotion/react';

import Exit from '@components/UI/Exit';

let time = 0;
const delay = 500;

export default function MultipleAndCheckBoxAnswer({ type }: IMultipleAndCheckBoxAnswerProps) {
  const theme = useTheme();
  const [AnswerList, setAnswerList] = useState<IMultipleAnswerList[]>([{ value: '옵션1' }]);

  const addMultiple = () => setAnswerList((prev) => [...prev, { value: `옵션${prev.length + 1}` }]);

  const arrayValueModify = useCallback((arr: IMultipleAnswerList[], index: number, inputValue: string) => {
    return arr.map((multiple, order) => {
      const newValue = { value: inputValue };
      return index === order ? newValue : multiple;
    });
  }, []);

  const replaceValue = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    if (time) clearTimeout(time);

    time = setTimeout(() => {
      setAnswerList((prev) => arrayValueModify(prev, index, inputValue));
    }, delay);
  };

  const arrayValueDelete = useCallback((arr: IMultipleAnswerList[], index: number) => {
    return arr.filter((_, order) => {
      return order !== index;
    });
  }, []);

  const deleteArrayItem = (index: number) => setAnswerList((prev) => arrayValueDelete(prev, index));

  return (
    <>
      {AnswerList.map((multiple, index) => {
        return (
          <div key={`${index} / ${multiple.value}`} css={multipleAndCheckBoxAnswerCss.inputContainer}>
            <div css={{ display: 'flex', width: '100%' }}>
              <input
                type={`${type}`}
                css={multipleAndCheckBoxAnswerCss.radioORcheckBox}
                onClick={(e) => e.preventDefault()}
              />
              <input
                type='text'
                placeholder={multiple.value}
                css={multipleAndCheckBoxAnswerCss.input(theme)}
                onChange={(e) => replaceValue(e, index)}
              />
            </div>

            {AnswerList.length === 1 ? null : (
              <div onClick={() => deleteArrayItem(index)}>
                <Exit />
              </div>
            )}
          </div>
        );
      })}

      <div css={multipleAndCheckBoxAnswerCss.addInputContainer} onClick={addMultiple}>
        <input
          type={`${type}`}
          css={multipleAndCheckBoxAnswerCss.radioORcheckBox}
          onClick={(e) => e.preventDefault()}
        />
        <input
          type='text'
          placeholder='옵션 추가 또는 "기타"추가'
          readOnly
          css={multipleAndCheckBoxAnswerCss.addInput}
        />
      </div>
    </>
  );
}

interface IMultipleAndCheckBoxAnswerProps {
  type: string;
}

interface IMultipleAnswerList {
  value: string;
}

const multipleAndCheckBoxAnswerCss = {
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
