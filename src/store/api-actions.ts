import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants';
import { OfferType, PlaceOfferType, ReviewType } from '../types';
import { loadComments, loadFavoritesOffers, loadNearbyOffers, loadOffer, loadOffers, saveUserName, setError, setOffersDataLoadingStatus } from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from './types/auth-data';
import { UserData } from './types/user-data';
import { store } from '.';
import { ReviewData } from './types/review-data';

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

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferType>(`${APIRoute.OFFERS}/${id}`);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffer(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComment',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.COMMENTS}/${id}`);
    dispatch(loadComments(data));
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<PlaceOfferType[]>(`${APIRoute.OFFERS}/${id}/nearby`);
    dispatch(loadNearbyOffers(data));
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
export const sendComment = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    await api.post<ReviewData>(`${APIRoute.COMMENTS}/${id}`, {comment, rating});
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(fetchCommentsAction(id));
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
