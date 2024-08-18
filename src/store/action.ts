import { createAction } from '@reduxjs/toolkit';
import { CityName, PlaceOfferType, PlacesOptionKey } from '../types';
import { AuthorizationStatus } from '../constants';

export const changeCity = createAction<CityName>('city/changeCity');

export const getOffers = createAction('offers/getOffers');

export const getSortingStatus = createAction<PlacesOptionKey>('sorting/getSortingStatus');

export const loadOffers = createAction<PlaceOfferType[]>('data/loadOffers');

export const loadFavoritesOffers = createAction<PlaceOfferType[]>('data/loadFavoritesOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<keyof typeof AuthorizationStatus>('user/requireAuthorization');
