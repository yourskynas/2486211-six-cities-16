import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getSortingStatus, loadComments, loadFavoritesOffers, loadNearbyOffers, loadOffer, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { AuthorizationStatus, DEFAULT_CITY, PlacesOption } from '../constants';
import { CityName, OfferType, PlaceOfferType, PlacesOptionKey, ReviewType } from '../types';

type InitialState = {
  city: CityName;
  offers: PlaceOfferType[];
  sorting: PlacesOptionKey;
  isOffersDataLoading: boolean;
  authorizationStatus: keyof typeof AuthorizationStatus;
  error: string | null;
  favoritesOffers: PlaceOfferType[];
  currentOffer: OfferType | null;
  comments: ReviewType[] | null;
  nearbyOffers: PlaceOfferType[] | null;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: PlacesOption.POPULAR,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  error: null,
  favoritesOffers: [],
  currentOffer: null,
  comments: null,
  nearbyOffers: null,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadFavoritesOffers, (state, action) => {
      state.favoritesOffers = action.payload;
    });
});

export { reducer };

