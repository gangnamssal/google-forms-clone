/** @jsxImportSource @emotion/react */
import { Theme, css, useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';

import type { RootState } from '@store/store';
import BaseModifyForm from '@components/Answer/Modify/BaseModifyForm';
import { useLocation } from 'react-router-dom';
import BaseCompleteForm from '../Answer/Complete/BaseCompleteForm';

export default function FormContent({ formListIndex }: IFormContentProps) {
  const theme = useTheme();
  const pathName = useLocation().pathname;
  const formList = useSelector((state: RootState) => state.formList);
  const { isModify } = formList[formListIndex];

  return (
    <div className='form-content' css={formContentCss.outerBox(theme)}>
      <div css={formContentCss.container(theme, isModify)}>
        {pathName === '/preview' ? (
          <BaseCompleteForm formListIndex={formListIndex} />
        ) : (
          <BaseModifyForm formListIndex={formListIndex} />
        )}
      </div>
    </div>
  );
}

interface IFormContentProps {
  formListIndex: number;
}

const formContentCss = {
  outerBox: (theme: Theme) =>
    css({
      width: '100%',
      minHeight: `${theme.size.minHeight}px`,
      backgroundColor: `${theme.colors.blue}`,
      borderRadius: `${theme.border.radius}`,
    }),

  container: (theme: Theme, isModify: boolean) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      width: `${isModify ? 'calc(100% - 6px)' : '100%'}`,
      marginLeft: `${isModify ? '6px' : '0'}`,
      minHeight: `${theme.size.minHeight}px`,
      border: `1px solid ${theme.colors.borderColor}`,
      borderRadius: `${theme.border.radius}`,
      borderTopLeftRadius: `${isModify ? '0' : theme.border.radius}`,
      borderBottomLeftRadius: `${isModify ? '0' : theme.border.radius}`,

      backgroundColor: 'white',
      marginTop: '12px',
    }),
};
