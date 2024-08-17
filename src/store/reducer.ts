import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers, getSortingStatus } from './action';
import { placeOffers } from '../mocks/places-mocks';
import { DEFAULT_CITY, PlacesOption } from '../constants';
import { CityName, PlaceOfferType, PlacesOptionKey } from '../types';

type InitialState = {
  city: CityName;
  offers: PlaceOfferType[];
  sorting: PlacesOptionKey;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: PlacesOption.POPULAR,
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
    });
});

export { reducer };

