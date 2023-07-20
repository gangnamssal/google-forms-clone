/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react';
import { Theme, css, useTheme } from '@emotion/react';

import DivLine from '@components/UI/DivLine';

const isFormTitleInput = (clasList: DOMTokenList) => {
  if (clasList.contains('form-title-input1')) return 1;
  else if (clasList.contains('form-title-input2')) return 2;
  return 0;
};

export default function FormTitle() {
  const theme: Theme = useTheme();
  const [inputFocus, setInputFocus] = useState<number>(0);

  const formTitleClickDetect = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    setInputFocus(isFormTitleInput(target.classList));
  }, []);

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
            css={formTitleCss.titleInput(theme)}
            autoComplete='false'
            placeholder='설문지 제목'
            rows={1}
          />
          {inputFocus === 1 ? <DivLine isActive={true} /> : <DivLine isActive={false} />}

          <textarea
            className='form-title-input2'
            css={formTitleCss.descriptionInput(theme)}
            autoComplete='false'
            placeholder='설문지 설명'
            rows={1}
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
      width: 'calc(100% - 6px)',
      minHeight: '127px',
      backgroundColor: 'white',
      borderBottomRightRadius: `${theme.border.radius}`,
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
