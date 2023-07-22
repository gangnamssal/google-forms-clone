/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import FormTitle from '@components/FormTitle';
import FormContentList from '@components/FormContentList/FormContentList';

export default function GoogleForm() {
  return (
    <section>
      <article css={googleFormCss.titleSection}>
        <FormTitle />
      </article>

      <article>
        <FormContentList />
      </article>
    </section>
  );
}

const googleFormCss = {
  titleSection: css({
    paddingTop: '12px',
    width: '100%',
  }),
};
