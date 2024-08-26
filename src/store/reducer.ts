import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getSortingStatus, loadComments, loadFavoritesOffers, loadNearbyOffers, loadOffer, loadOffers, saveUserName, setError, setOffersDataLoadingStatus } from './action';
import { DEFAULT_CITY, PlacesOption } from '../constants';
import { CityName, OfferType, PlaceOfferType, PlacesOptionKey, ReviewType } from '../types';

type InitialState = {
  city: CityName;
  offers: PlaceOfferType[];
  sorting: PlacesOptionKey;
  isOffersDataLoading: boolean;
  error: string | null;
  favoritesOffers: PlaceOfferType[];
  currentOffer: OfferType | null;
  comments: ReviewType[] | null;
  nearbyOffers: PlaceOfferType[] | null;
  userName: string | null;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: PlacesOption.POPULAR,
  isOffersDataLoading: false,
  error: null,
  favoritesOffers: [],
  currentOffer: null,
  comments: null,
  nearbyOffers: null,
  userName: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getSortingStatus, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(saveUserName, (state, action) => {
      state.userName = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadFavoritesOffers, (state, action) => {
      state.favoritesOffers = action.payload;
    });
});

export { reducer };

