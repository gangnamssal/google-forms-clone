/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import { Theme, css, useTheme } from '@emotion/react';

import { RootState } from '@store/store';
import FormTitle from '@components/FormTitle/FormTitle';

export default function GoogleFormComplete() {
  const theme: Theme = useTheme();
  const { title } = useSelector((state: RootState) => state.formTitle);

  return (
    <main>
      <div css={googleFormCss.outer}>
        <section css={googleFormCss.section}>
          <article css={googleFormCss.titleArticle}>
            <div css={googleFormCss.container(theme)}>
              <div css={googleFormCss.topLine(theme)}></div>

              <div css={googleFormCss.contentsBox}>
                <div css={googleFormCss.contents(theme)}>
                  <p css={googleFormCss.title}>{title}</p>
                  <p css={googleFormCss.description}>응답이 기록되었습니다.</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

const googleFormCss = {
  outer: () =>
    css({
      display: 'flex',
      width: '100%',
      height: 'auto',
      paddingTop: '12px',
      paddingBottom: '12px',
    }),

  section: () =>
    css({
      width: '90%',
    }),

  titleArticle: () =>
    css({
      width: '100%',
    }),

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
      margin: '0',
    }),

  description: () =>
    css({
      fontSize: '0.9rem',
    }),
};
