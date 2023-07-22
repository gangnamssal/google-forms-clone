/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css, Theme, useTheme } from '@emotion/react';

import Exit from '@components/UI/Exit';

export default function DropdownAnswer() {
  const theme = useTheme();
  const [dropdownAnswerList, setDropdownAnswerList] = useState<IDropdownAnswerList[]>([{ value: '옵션1' }]);

  const addDropdownItem = () => {
    setDropdownAnswerList((prev) => [...prev, { value: `옵션${prev.length + 1}` }]);
  };

  return (
    <>
      {dropdownAnswerList.map((answer, index) => {
        return (
          <div css={dropdownCss.inputContainer}>
            <div css={{ display: 'flex', width: '100%' }}>
              <p css={dropdownCss.index}>{index + 1}</p>
              <input type='text' placeholder={`${answer.value}`} css={dropdownCss.input(theme)} />
            </div>

            <div>
              <Exit />
            </div>
          </div>
        );
      })}

      <div css={dropdownCss.addInputContainer}>
        <p css={dropdownCss.index}>{dropdownAnswerList.length + 1}</p>
        <input
          type='text'
          placeholder='옵션 추가 또는 "기타"추가'
          readOnly
          css={dropdownCss.addInput}
          onClick={addDropdownItem}
        />
      </div>
    </>
  );
}

interface IDropdownAnswerList {
  value: string;
}

const dropdownCss = {
  inputContainer: () =>
    css({
      display: 'flex',
      alignContent: 'center',
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
