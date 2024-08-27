import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../store';
import { setError } from '../store/main-process/main-process';

const TIMEOUT_SHOW_ERROR = 2000;

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
};
