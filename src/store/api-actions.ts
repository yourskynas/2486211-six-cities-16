import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants';
import { OfferType, PlaceOfferType, ReviewType } from '../types';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from './types/auth-data';
import { UserData } from './types/user-data';
import { store } from '.';
import { saveUserName, setError } from './main-process/main-process';

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

export const fetchOffersAction = createAsyncThunk<PlaceOfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PlaceOfferType[]>(APIRoute.OFFERS);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<OfferType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {extra: api}) => {
    const {data} = await api.get<OfferType>(`${APIRoute.OFFERS}/${id}`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComment',
  async (id, {extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.COMMENTS}/${id}`);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<PlaceOfferType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, {extra: api}) => {
    const {data} = await api.get<PlaceOfferType[]>(`${APIRoute.OFFERS}/${id}/nearby`);
    return data;
  },
);

export const fetchFavoritesOffersAction = createAsyncThunk<PlaceOfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PlaceOfferType[]>(APIRoute.FAVORITE);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.LOGIN);
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
    dispatch(saveUserName(email));
  },
);
export const postComment = createAsyncThunk<ReviewType, ReviewType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({id, comment, rating}, {extra: api}) => {
    const { data } = await api.post<ReviewType>(`${APIRoute.COMMENTS}/${id}`, {comment, rating});
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.LOGOUT);
    dropToken();
  },
);
