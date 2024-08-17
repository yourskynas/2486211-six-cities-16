import { createAction } from '@reduxjs/toolkit';
import { CityName, PlacesOptionKey } from '../types';

export const changeCity = createAction<CityName>('city/changeCity');
export const getOffers = createAction('offers/getOffers');
export const getSortingStatus = createAction<PlacesOptionKey>('sorting/getSortingStatus');
