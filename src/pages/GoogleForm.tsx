/** @jsxImportSource @emotion/react */
import { useDispatch } from 'react-redux';
import { css, useTheme, Theme } from '@emotion/react';

import { useNavigate } from 'react-router-dom';
import SideMenubar from '@components/SideMenubar';
import FormTitle from '@/components/FormTitle/FormTitle';
import FormContentList from '@components/FormContentList/FormContentList';
import { deleteFormList } from '@/store/formListSlice';
import { deleteTitle } from '@/store/formTitleSlice';

export default function GoogleForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteForm = () => {
    if (confirm('모든 질문에서 답변이 삭제되며 되돌릴 수 없습니다.')) {
      dispatch(deleteFormList());
      dispatch(deleteTitle());
    }
  };

  return (
    <main>
      <div css={googleFormCss.outer}>
        <section css={googleFormCss.section}>
          <article css={googleFormCss.titleArticle}>
            <FormTitle />
          </article>

          <article>
            <FormContentList />
          </article>
        </section>

        <aside css={googleFormCss.aside}>
          <SideMenubar />
        </aside>
      </div>

      <footer css={googleFormCss.footer}>
        <button onClick={() => navigate('/complete')} css={googleFormCss.submitBtn(theme)}>
          제출
        </button>
        <button onClick={deleteForm} css={googleFormCss.deleteBtn(theme)}>
          양식 지우기
        </button>
      </footer>
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

  aside: () =>
    css({
      width: '6%',
      marginLeft: '2%',
    }),

  footer: () =>
    css({
      width: '90%',
      display: 'flex',
      justifyContent: 'space-between',
    }),

  submitBtn: (theme: Theme) =>
    css({
      border: '0',
      backgroundColor: `${theme.colors.purple}`,
      color: 'white',
      width: '10%',
      height: '4vh',
      borderRadius: '6px',
      cursor: 'pointer',
    }),

  deleteBtn: (theme: Theme) =>
    css({
      border: '0',
      backgroundColor: `${theme.colors.mauve}`,
      color: `${theme.colors.purple}`,
      cursor: 'pointer',
    }),
};
