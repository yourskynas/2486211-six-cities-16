import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants';
import { PlaceOfferType } from '../types';
import { loadOffers } from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<PlaceOfferType[]>(APIRoute.OFFERS);
    dispatch(loadOffers(data));
  },
);
