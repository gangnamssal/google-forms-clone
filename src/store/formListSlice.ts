import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Question {
  value: string;
}

interface Type {
  name: string;
  number: number;
}

export interface IFormListSliceList {
  id: number;
  type: Type;
  isModify: boolean;
  title: string;
  question: Question[];
  isRequired: boolean;
}

const initialType = { name: '단답형', number: 0 };

const initialState: IFormListSliceList[] = [
  {
    id: Date.now(),
    type: initialType,
    isModify: false,
    title: '질문',
    question: [{ value: '옵션1' }],
    isRequired: false,
  },
];

const formListSlice = createSlice({
  name: 'formList',
  initialState,
  reducers: {
    addFormList(state) {
      return [
        ...state,
        {
          id: Date.now(),
          type: initialType,
          isModify: false,
          title: '질문',
          question: [{ value: '옵션1' }],
          isRequired: false,
        },
      ];
    },
    modifyFormList(_, action: PayloadAction<IFormListSliceList[]>) {
      return action.payload;
    },
    deleteFormList() {
      return [
        {
          id: Date.now(),
          type: initialType,
          isModify: false,
          title: '질문',
          question: [{ value: '옵션1' }],
          isRequired: false,
        },
      ];
    },
  },
});

export const { addFormList, modifyFormList, deleteFormList } = formListSlice.actions;
export default formListSlice.reducer;
