import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityName, PlacesOptionKey } from '../../types';
import { DEFAULT_CITY, NameSpace, PlacesOption } from '../../constants';

type MainState = {
  city: CityName;
  sorting: PlacesOptionKey;
  error: string | null;
  userName: string | null;
}

const initialState: MainState = {
  city: DEFAULT_CITY,
  sorting: PlacesOption.Popular,
  error: null,
  userName: null,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    getSortingStatus: (state, action: PayloadAction<PlacesOptionKey>) => {
      state.sorting = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    saveUserName: (state, action: PayloadAction<string | null>) => {
      state.userName = action.payload;
    }
  }
});
export const { changeCity, getSortingStatus, setError, saveUserName } = mainProcess.actions;
