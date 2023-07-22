/** @jsxImportSource @emotion/react */
import { Theme, css, useTheme } from '@emotion/react';
import { AiOutlineCopy } from '@react-icons/all-files/ai/AiOutlineCopy';
import { RiDeleteBinLine } from '@react-icons/all-files/ri/RiDeleteBinLine';

import DivLine from '@components/UI/DivLine';
import Dropdown from '@components/UI/Dropdown';
import KebabMenu from '@components/UI/KebabMenu';
import ToggleSwitch from '@components/UI/ToggleSwitch';
import DropdownAnswer from '@components/Answer/Modify/DropdownAnswer';
import ModifyShortAndLongAnswer from '@/components/Answer/Modify/ModifyShortAndLongAnswer';
import MultipleChoiceAnswer from '@/components/Answer/Modify/MultipleAndCheckBoxAnswer';

export default function BaseModifyForm() {
  const theme = useTheme();

  return (
    <div css={baseModifyFormCss.container(theme)}>
      <div css={baseModifyFormCss.header}>
        <input type='text' placeholder='질문' css={baseModifyFormCss.title(theme)} />
        <Dropdown />
      </div>

      <div css={baseModifyFormCss.content}>
        {/* <ShortAnswer /> */}
        {/* <LongAnswer /> */}
        {/* <MultipleChoiceAnswer type='radio' /> */}
        <DropdownAnswer />
      </div>

      <DivLine isActive={false} widthLength={100} />

      <div css={baseModifyFormCss.footer}>
        <AiOutlineCopy size={22} css={{ cursor: 'pointer', color: '#5F6368' }} />
        <RiDeleteBinLine size={22} css={{ cursor: 'pointer', color: '#5F6368' }} />

        <div css={baseModifyFormCss.divLine(theme)}></div>

        <div css={baseModifyFormCss.toggleAndMenu}>
          <p css={{ margin: '0', fontSize: '14px' }}>필수</p>
          <ToggleSwitch<IToggleSwitchPropsObj> {...toggleSwitchPropsObj} />
          <KebabMenu />
        </div>
      </div>
    </div>
  );
}

const toggleSwitchPropsObj = {
  switchWidth: 40,
  switchHeight: 15,
  buttonWidth: 20,
  buttonHeight: 20,
};

interface IToggleSwitchPropsObj {
  switchWidth: number;
  switchHeight: number;
  buttonWidth: number;
  buttonHeight: number;
}

const baseModifyFormCss = {
  container: (theme: Theme) =>
    css({
      width: `${theme.size.contentsWidth}%`,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }),

  header: () =>
    css({
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '20px',
    }),

  title: (theme: Theme) =>
    css({
      width: '60%',
      height: '50px',
      border: '0',
      paddingLeft: '20px',
      borderBottom: '1px solid black',
      backgroundColor: `${theme.colors.gray}`,
      '&:focus': {
        outline: 'none',
      },
    }),

  content: () =>
    css({
      marginTop: '5px',
      marginBottom: '30px',
    }),

  footer: () =>
    css({
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      paddingBottom: '20px',
      gap: '20px',
    }),

  divLine: (theme: Theme) =>
    css({
      width: '2px',
      height: '30px',
      backgroundColor: `${theme.colors.borderColor}`,
    }),

  toggleAndMenu: () =>
    css({
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    }),
};
