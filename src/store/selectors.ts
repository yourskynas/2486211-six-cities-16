import { Selector } from './types/state';

export const selectSortingStatus = (state: Selector) => state.sorting;

export const selectCity = (state: Selector) => state.city;

export const selectOffers = (state: Selector) => state.offers;

export const selectIsOffersDataLoading = (state: Selector) => state.isOffersDataLoading;
