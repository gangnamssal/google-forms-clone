/** @jsxImportSource @emotion/react */
import { useDispatch } from 'react-redux';
import { Theme, css, useTheme } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';

import DivLine from '@components/UI/DivLine';
import { setDescription, setTitle } from '@store/formTitleSlice';

const isFormTitleInput = (classList: DOMTokenList) => {
  if (classList.contains('form-title-input1')) return 1;
  else if (classList.contains('form-title-input2')) return 2;
  return 0;
};

export default function FormTitle() {
  const dispatch = useDispatch();
  const theme: Theme = useTheme();
  const [inputFocus, setInputFocus] = useState<number>(0);

  const formTitleClickDetect = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    setInputFocus(isFormTitleInput(target.classList));
  }, []);

  const formTitleSaveTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    dispatch(setTitle(inputValue));
  };

  const formTitleSaveDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    dispatch(setDescription(inputValue));
  };

  useEffect(() => {
    window.addEventListener('click', formTitleClickDetect);
    return () => window.removeEventListener('click', formTitleClickDetect);
  }, [formTitleClickDetect]);

  return (
    <div css={formTitleCss.container(theme)}>
      <div css={formTitleCss.topLine(theme)}></div>

      <div css={formTitleCss.contentsBox}>
        <div css={formTitleCss.contents(theme)}>
          <textarea
            className='form-title-input1'
            placeholder='설문지 제목'
            autoComplete='false'
            rows={1}
            onChange={formTitleSaveTitle}
            css={formTitleCss.titleInput(theme)}
          />
          {inputFocus === 1 ? <DivLine isActive={true} /> : <DivLine isActive={false} />}

          <textarea
            className='form-title-input2'
            placeholder='설문지 설명'
            autoComplete='false'
            rows={1}
            onChange={formTitleSaveDescription}
            css={formTitleCss.descriptionInput(theme)}
          />
          {inputFocus === 2 ? <DivLine isActive={true} /> : <DivLine isActive={false} />}
        </div>
      </div>
    </div>
  );
}

const formTitleCss = {
  container: (theme: Theme) =>
    css({
      width: '100%',
      minHeight: `${theme.size.minHeight}px`,
      border: `1px solid ${theme.colors.borderColor}`,
      borderRadius: `${theme.border.radius}`,
      backgroundColor: `${theme.colors.blue}`,
      boxShadow: '0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.141), 0 1px 3px 0 rgba(0,0,0,0.122)',
    }),

  topLine: (theme: Theme) =>
    css({
      width: '100%',
      height: '10px',
      borderTopLeftRadius: `${theme.border.radius}`,
      borderTopRightRadius: `${theme.border.radius}`,
      backgroundColor: `${theme.colors.purple}`,
    }),

  contentsBox: () =>
    css({
      display: 'flex',
      flexDirection: 'row-reverse',
    }),

  contents: (theme: Theme) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '127px',
      backgroundColor: 'white',
      borderBottomRightRadius: `${theme.border.radius}`,
      borderBottomLeftRadius: `${theme.border.radius}`,
    }),

  titleInput: (theme: Theme) =>
    css({
      width: `${theme.size.contentsWidth}%`,
      border: 'none',
      fontSize: '24pt',
      lineHeight: '135%',
      minHeight: '1.3em',
      '&:focus': {
        outline: 'none',
      },
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }),

  descriptionInput: (theme: Theme) =>
    css({
      width: `${theme.size.contentsWidth}%`,
      border: 'none',
      fontSize: '11pt',
      lineHeight: '15pt',
      '&:focus': {
        outline: 'none',
      },
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }),
};
