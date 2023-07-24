/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import FormContentList from '@components/FormContentList/FormContentList';
import CompleteFormTitle from '@components/FormTitle/CompleteFormTitle';

export default function GoogleFormPreview() {
  return (
    <main css={googleFormPreviewCss.main}>
      <section css={googleFormPreviewCss.section}>
        <article css={googleFormPreviewCss.titleArticle}>
          <CompleteFormTitle />
        </article>

        <article>
          <FormContentList />
        </article>
      </section>
    </main>
  );
}

const googleFormPreviewCss = {
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
      width: '100%',
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
