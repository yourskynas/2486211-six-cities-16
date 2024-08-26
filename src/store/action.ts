import { createAction } from '@reduxjs/toolkit';
import { CityName, OfferType, PlaceOfferType, PlacesOptionKey, ReviewType } from '../types';

export const changeCity = createAction<CityName>('city/changeCity');

export const getSortingStatus = createAction<PlacesOptionKey>('sorting/getSortingStatus');

export const loadOffers = createAction<PlaceOfferType[]>('data/loadOffers');

export const loadOffer = createAction<OfferType>('data/loadOffer');

export const loadComments = createAction<ReviewType[]>('data/loadComments');

export const loadNearbyOffers = createAction<PlaceOfferType[]>('data/loadNearbyOffers');

export const loadFavoritesOffers = createAction<PlaceOfferType[]>('data/loadFavoritesOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const saveUserName = createAction<string>('user/saveUserName');

export const setError = createAction<string | null>('data/setError');
