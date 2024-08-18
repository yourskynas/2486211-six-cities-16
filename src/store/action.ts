import { createAction } from '@reduxjs/toolkit';
import { CityName, PlaceOfferType, PlacesOptionKey } from '../types';

export const changeCity = createAction<CityName>('city/changeCity');

export const getOffers = createAction('offers/getOffers');

export const getSortingStatus = createAction<PlacesOptionKey>('sorting/getSortingStatus');

export const loadOffers = createAction<PlaceOfferType[]>('data/loadOffers');
