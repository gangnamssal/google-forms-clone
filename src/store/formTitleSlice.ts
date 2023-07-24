import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFormTitleSlice {
  title: string;
  description: string;
}

const initialState: IFormTitleSlice = { title: '설문지 제목', description: '설문지 설명' };

const formTitleSlice = createSlice({
  name: 'formTitle',
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      return { ...state, title: action.payload };
    },
    setDescription(state, action: PayloadAction<string>) {
      return { ...state, description: action.payload };
    },
    deleteTitle() {
      return { title: '설문지 제목', description: '설문지 설명' };
    },
  },
});

export const { setTitle, setDescription, deleteTitle } = formTitleSlice.actions;
export default formTitleSlice.reducer;
