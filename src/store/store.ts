import { configureStore } from '@reduxjs/toolkit';

import formListSlice from '@store/formListSlice';
import formTitleSlice from '@store/formTitleSlice';

export const store = configureStore({
  reducer: {
    formList: formListSlice,
    formTitle: formTitleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
