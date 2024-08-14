import { createAction } from '@reduxjs/toolkit';
import { CityName, OptionsType } from '../types';

export const changeCity = createAction<CityName>('city/changeCity');
export const getOffers = createAction('offers/getOffers');
export const getSortingStatus = createAction<OptionsType>('sorting/getSortingStatus');
