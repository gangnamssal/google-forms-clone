/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import FormTitle from '@components/FormTitle';
import FormContentList from '@components/FormContentList';

export default function GoogleForm() {
  return (
    <>
      <section css={googleFormCss.titleSection}>
        <FormTitle />
      </section>

      <section>
        <FormContentList />
      </section>
    </>
  );
}

const googleFormCss = {
  titleSection: css({
    paddingTop: '12px',
    width: '100%',
  }),
};
