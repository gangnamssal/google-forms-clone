/** @jsxImportSource @emotion/react */
import { Theme, css, useTheme } from '@emotion/react';

export default function Dropdown() {
  const theme = useTheme();

  return (
    <select css={dropdownCss.dropdown(theme)}>
      <option value={0}>단답형</option>
      <option value={1}>장문형</option>
      <option value={2}>객관식 질문</option>
      <option value={3}>체크박스</option>
      <option value={4}>드롭다운</option>
    </select>
  );
}

const dropdownCss = {
  dropdown: (theme: Theme) =>
    css({
      width: '27%',
      height: '40px',
      border: `1px solid ${theme.colors.borderColor}`,
      borderRadius: '5px',
      padding: '10px',

      option: {
        fontSize: '14px',
        padding: '10px',
      },
    }),
};
