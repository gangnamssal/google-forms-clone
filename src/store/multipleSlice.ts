import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IMultipleAnswerList {
  value: string;
}

interface IMultipleState {
  multipleAnswerList: IMultipleAnswerList[];
}

const initialState: IMultipleState = { multipleAnswerList: [{ value: '옵션1' }] };

const multipleSlice = createSlice({
  name: 'multiple',
  initialState,
  reducers: {
    addMultiple(state) {
      return {
        multipleAnswerList: [...state.multipleAnswerList, { value: `옵션${state.multipleAnswerList.length + 1}` }],
      };
    },
    modifyMultiple(_, actions: PayloadAction<IMultipleAnswerList[]>) {
      return {
        multipleAnswerList: actions.payload,
      };
    },
    deleteMultiple(_, actions: PayloadAction<IMultipleAnswerList[]>) {
      return {
        multipleAnswerList: actions.payload,
      };
    },
  },
});

export const { addMultiple, modifyMultiple, deleteMultiple } = multipleSlice.actions;
export default multipleSlice.reducer;
