/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import FormTitle from '@components/FormTitle';
import SideMenubar from '@components/SideMenubar';
import FormContentList from '@components/FormContentList/FormContentList';

export default function GoogleForm() {
  return (
    <main css={googleFormCss.main}>
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
    </main>
  );
}

const googleFormCss = {
  main: () =>
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
};
