import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../constants';
import { PlaceOfferType } from '../types';
import { loadFavoritesOffers, loadOffers, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from './types/auth-data';
import { UserData } from './types/user-data';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<PlaceOfferType[]>(APIRoute.OFFERS);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchFavoritesOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<PlaceOfferType[]>(APIRoute.FAVORITE);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadFavoritesOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.LOGIN);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.LOGIN, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.LOGOUT);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  },
);
