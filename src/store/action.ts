import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types';

export const getOffers = createAction('offers/getOffers');
export const changeCity = createAction<CityName>('city/changeCity');
