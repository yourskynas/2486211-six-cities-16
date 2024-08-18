import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers, getSortingStatus, loadFavoritesOffers, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { placeOffers } from '../mocks/places-mocks';
import { AuthorizationStatus, DEFAULT_CITY, PlacesOption } from '../constants';
import { CityName, PlaceOfferType, PlacesOptionKey } from '../types';

type InitialState = {
  city: CityName;
  offers: PlaceOfferType[];
  sorting: PlacesOptionKey;
  isOffersDataLoading: boolean;
  authorizationStatus: keyof typeof AuthorizationStatus;
  error: string | null;
  favoritesOffers: PlaceOfferType[];
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: PlacesOption.POPULAR,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  error: null,
  favoritesOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state) => {
      state.offers = placeOffers;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getSortingStatus, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
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

