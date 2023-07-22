import { configureStore } from '@reduxjs/toolkit';
import multipleSlice from '@store/multipleSlice';

export const store = configureStore({
  reducer: {
    multiple: multipleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
