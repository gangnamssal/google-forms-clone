/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import { Theme, css, useTheme } from '@emotion/react';

import { RootState } from '@store/store';

export default function CompleteFormTitle() {
  const theme: Theme = useTheme();
  const { title, description } = useSelector((state: RootState) => state.formTitle);

  return (
    <div css={completeFormTitleCss.container(theme)}>
      <div css={completeFormTitleCss.topLine(theme)}></div>

      <div css={completeFormTitleCss.contentsBox}>
        <div css={completeFormTitleCss.contents(theme)}>
          <p css={completeFormTitleCss.title}>{title}</p>
          <p css={completeFormTitleCss.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

const completeFormTitleCss = {
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
      justifyContent: 'space-evenly',
      width: '100%',
      minHeight: '127px',
      backgroundColor: 'white',
      borderBottomRightRadius: `${theme.border.radius}`,
      borderBottomLeftRadius: `${theme.border.radius}`,
      paddingLeft: '3.5%',
    }),

  title: () =>
    css({
      fontSize: '1.7rem',
      fontWeight: '900',
      margin: '0',
    }),

  description: () =>
    css({
      fontSize: '0.9rem',
      fontWeight: '600',
    }),
};
