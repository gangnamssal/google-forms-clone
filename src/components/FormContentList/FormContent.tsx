/** @jsxImportSource @emotion/react */
import { Theme, css, useTheme } from '@emotion/react';

import BaseModifyForm from '@components/Answer/Modify/BaseModifyForm';
import ShortAndLongAnswer from '@/components/Answer/Complete/CompleteShortAndLongAnswer';

export default function FormContent() {
  const theme = useTheme();

  return (
    <div css={formContentCss.container(theme)}>
      {/* <ShortAndLongAnswer category={'장문형'} /> */}
      <BaseModifyForm />
    </div>
  );
}

const formContentCss = {
  container: (theme: Theme) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      width: '100%',
      minHeight: `${theme.size.minHeight}px`,
      border: `1px solid ${theme.colors.borderColor}`,
      borderRadius: `${theme.border.radius}`,
      backgroundColor: 'white',
      marginTop: '12px',
    }),
};
