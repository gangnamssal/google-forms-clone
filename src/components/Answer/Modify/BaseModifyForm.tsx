/** @jsxImportSource @emotion/react */
import { Theme, css, useTheme } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineCopy } from '@react-icons/all-files/ai/AiOutlineCopy';
import { RiDeleteBinLine } from '@react-icons/all-files/ri/RiDeleteBinLine';

import type { RootState } from '@store/store';
import { IFormListSliceList, modifyFormList } from '@store/formListSlice';

import DivLine from '@components/UI/DivLine';
import Dropdown from '@components/UI/Dropdown';
import KebabMenu from '@components/UI/KebabMenu';
import ToggleSwitch from '@components/UI/ToggleSwitch';
import DropdownAnswer from '@components/Answer/Modify/ModifyDropdownAnswer';
import ModifyShortAndLongAnswer from '@components/Answer/Modify/ModifyShortAndLongAnswer';
import ModifyMultipleChoiceAnswer from '@components/Answer/Modify/ModifyMultipleAndCheckBoxAnswer';

const modifyFormContents = (formListIndex: number) => [
  { value: '단답형', component: <ModifyShortAndLongAnswer text={'단답형'} width={50} /> },
  { value: '장문형', component: <ModifyShortAndLongAnswer text={'장문형'} width={80} /> },
  { value: '객관식 질문', component: <ModifyMultipleChoiceAnswer type={'radio'} formListIndex={formListIndex} /> },
  { value: '체크박스', component: <ModifyMultipleChoiceAnswer type={'checkbox'} formListIndex={formListIndex} /> },
  { value: '드롭다운', component: <DropdownAnswer formListIndex={formListIndex} /> },
];

export default function BaseModifyForm({ formListIndex }: IBaseModifyForm) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const formList = useSelector((state: RootState) => state.formList);
  const {
    type: { number: selectNum },
  } = formList[formListIndex];

  const setModifyFormTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newFormList = formList.map((form, index) => {
      return index === formListIndex ? { ...form, title: inputValue } : form;
    });
    dispatch(modifyFormList(newFormList));
  };

  const selectModifyContent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = Number(e.target.value);
    const newFormList = formList.map((form, index) => {
      const name = modifyFormContents(formListIndex)[inputValue].value;
      return index === formListIndex ? { ...form, type: { name, number: inputValue } } : form;
    });
    dispatch(modifyFormList(newFormList));
  };

  const copyFormListItem = (formListIndex: number) => {
    const copyItem = formList[formListIndex];
    const newFormList: IFormListSliceList[] = [];
    formList.forEach((form, order) => {
      newFormList.push(form);
      if (order === formListIndex) newFormList.push({ ...copyItem, isModify: false });
    });
    dispatch(modifyFormList(newFormList));
  };

  const deleteFormListItem = (formListIndex: number) => {
    const newFormList = formList.filter((_, order) => {
      return formListIndex !== order;
    });
    dispatch(modifyFormList(newFormList));
  };

  const setToggleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isClicked = e.target.checked;
    const newFormList = formList.map((form, index) => {
      return index === formListIndex ? { ...form, isRequired: isClicked } : form;
    });
    dispatch(modifyFormList(newFormList));
  };

  return (
    <div css={baseModifyFormCss.container(theme)}>
      <div css={baseModifyFormCss.header}>
        <input
          type='text'
          placeholder={`${formList[formListIndex].title}`}
          onChange={setModifyFormTitle}
          css={baseModifyFormCss.title(theme)}
        />
        <Dropdown onChange={selectModifyContent} selectNum={selectNum} />
      </div>

      <div css={baseModifyFormCss.content}>{modifyFormContents(formListIndex)[selectNum].component}</div>

      <DivLine isActive={false} widthLength={100} />

      <div css={baseModifyFormCss.footer}>
        <AiOutlineCopy
          onClick={() => copyFormListItem(formListIndex)}
          size={22}
          css={{ cursor: 'pointer', color: '#5F6368' }}
        />
        <RiDeleteBinLine
          onClick={() => deleteFormListItem(formListIndex)}
          size={22}
          css={{ cursor: 'pointer', color: '#5F6368' }}
        />

        <div css={baseModifyFormCss.divLine(theme)}></div>

        <div css={baseModifyFormCss.toggleAndMenu}>
          <p css={{ margin: '0', fontSize: '14px' }}>필수</p>
          <ToggleSwitch<IToggleSwitchProps>
            {...toggleSwitchPropsObj}
            formListIndex={formListIndex}
            onChange={setToggleValue}
          />
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

export interface IToggleSwitchProps {
  switchWidth: number;
  switchHeight: number;
  buttonWidth: number;
  buttonHeight: number;
  formListIndex?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IBaseModifyForm {
  formListIndex: number;
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
        borderBottom: `2px solid ${theme.colors.purple}`,
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
