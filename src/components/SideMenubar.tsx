/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye } from '@react-icons/all-files/ai/AiOutlineEye';
import { IoIosAddCircleOutline } from '@react-icons/all-files/io/IoIosAddCircleOutline';

import { addFormList } from '@store/formListSlice';

const SIZE = 25;

export default function SideMenubar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div css={sideMenubarCss.container}>
      <IoIosAddCircleOutline onClick={() => dispatch(addFormList())} size={SIZE} css={sideMenubarCss.icon} />
      <AiOutlineEye onClick={() => navigate('/preview')} size={SIZE} css={sideMenubarCss.icon} />
    </div>
  );
}

const sideMenubarCss = {
  container: () =>
    css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      height: '13vh',
      borderRadius: '8px',
      backgroundColor: 'white',
      position: 'sticky',
      top: '12px',
    }),

  icon: () =>
    css({
      color: '#5F6368',
      cursor: 'pointer',
    }),
};
