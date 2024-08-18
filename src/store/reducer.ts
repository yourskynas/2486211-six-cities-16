import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers, getSortingStatus, loadOffers, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { placeOffers } from '../mocks/places-mocks';
import { AuthorizationStatus, DEFAULT_CITY, PlacesOption } from '../constants';
import { CityName, PlaceOfferType, PlacesOptionKey } from '../types';

type InitialState = {
  city: CityName;
  offers: PlaceOfferType[];
  sorting: PlacesOptionKey;
  isOffersDataLoading: boolean;
  authorizationStatus: keyof typeof AuthorizationStatus;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: PlacesOption.POPULAR,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
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
    });
});

export { reducer };

